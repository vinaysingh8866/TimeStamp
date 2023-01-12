// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

/**
 * @author Vinay
 * @title TimeStampHash
 *  
 */

 contract TimeStampHash{

    struct Hash{
        bytes32 hash;
        uint256 timestamp;
    }

    struct Timestamp{
         uint totalStamps;
         mapping(bytes32 => Hash) stamps;
    }

    struct ImageMeta{
        uint time;
        string gps;
    }
    
    mapping(address => Timestamp) public data;
    mapping(bytes32 => address) public fileOwners;
    mapping(address => bytes32[]) public fileNameHashes;

    address public owner;

    constructor(){
        owner = msg.sender;
    }

    /**
    * @notice This method is used to insert store hashed file data and hashed filename.
    * @param stampHash byte32 hash of the data
    * @param nameHash byte32 hashed filename
    *  
    */
    function insertTimeStamp(bytes32 stampHash, bytes32 nameHash) public payable {
        require(msg.value == 0.01 ether, "Please send 0.01 ether");
        require(fileOwners[stampHash] == address(0), "file already exists!");
        require(data[msg.sender].stamps[nameHash].hash == bytes32(0), "file already exists!");
        uint256 total = data[msg.sender].totalStamps;
        fileOwners[stampHash] = msg.sender;
        data[msg.sender].totalStamps = total + 1;
        data[msg.sender].stamps[nameHash].hash = stampHash;
        data[msg.sender].stamps[nameHash].timestamp = block.timestamp;
        fileNameHashes[msg.sender].push(nameHash);
    }

    /**
    * @notice Returns the hashed file data of the called for the passed hashed filename.
    * @param nameHash byte32 hashed file name.
    * @return stampHash hash of file data
    */

    function getTimeStampByNameHash(bytes32 nameHash) public view returns(Hash memory stampHash){
        return data[msg.sender].stamps[nameHash]; 
    }


    /**
     * @notice Returns the hashed file data of the called for the user.
     * @param user address of the user
     * @return hashes of file data
     */
    function getNewStamps(address user) public view returns(Hash[] memory){
        Hash[] memory hashes = new Hash[](data[user].totalStamps);
        uint total = data[user].totalStamps;
        if(total>10){
            total = 10;
        }
        for(uint i = 0; i < data[user].totalStamps; i++){
            hashes[i] = data[user].stamps[fileNameHashes[user][i]];
        }
        return hashes;  
    }
    

    /**
    * @notice Returns the owner's address of the hashed data.
    * @param stampHash byte32 hash of data 
    * @return _owner of hashed data
     */
    function getOwner(bytes32 stampHash) public view returns(address _owner){
        return fileOwners[stampHash];
    }

    /**
     * @notice send contract balance to owner
     */
    function withdraw() public {
        require(msg.sender == owner, "only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}

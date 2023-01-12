import React, { useState, useRef } from 'react';
import keccak256 from 'keccak256';
import { sha256 } from 'js-sha256';
import { HStack, Text, VStack } from 'native-base';

type TransactionData = {
  fileNameHash:string,
  dataHash:String
};
const FileUpload = ({modifyData}:any) => {
  const inputFile = useRef(null);
  const [firstFileName, setFirstFileName] = useState("")
  const [firstFileHash, setFirstFileHash] = useState("")
  const handleFileUpload = (e:any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;
      setFirstFileName(filename)
      console.log(filename)
      const file = files[0];
      const parts = filename.split('.');
      const fileType = parts[parts.length - 1];
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = reader.result as string;
        const fileHash = keccak256(filename).toString('hex')
        const dataHash = keccak256(content).toString('hex')
        // const fileHash = sha256(firstFileName)
        // const dataHash = sha256(content)
        console.log("0x" + dataHash, "0x" + fileHash)
        modifyData("0x" + dataHash, "0x" + fileHash)
        setFirstFileHash("0x" + dataHash)
      };
      const text = reader.readAsBinaryString(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    if (inputFile && inputFile.current) {
      (inputFile.current as any).click();
    }
   
  };

  return (
    <VStack w="20">
      <input
        style={{ display: 'none' }}
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <button className="button" onClick={onButtonClick}>
        <HStack>
          <Text>Upload</Text>
        </HStack>
      </button>
    </VStack>
  );
};

export default FileUpload;

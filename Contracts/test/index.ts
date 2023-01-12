/* eslint-disable no-unused-expressions */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { TimeStampHash } from "../typechain";

describe("TimeStamp", function () {
  let timestamp: TimeStampHash;
  let accounts: SignerWithAddress[];
  beforeEach(async function () {
    const TimeStamp = await ethers.getContractFactory("TimeStampHash");
    timestamp = await TimeStamp.deploy();
    await timestamp.deployed();
    accounts = await ethers.getSigners();
  });

  it("Check Insertion", async function () {
    const insertTimeStamp = await timestamp.insertTimeStamp(
      "0x46696c6531446174610000000000000000000000000000000000000000000000",
      "0x46696c6531000000000000000000000000000000000000000000000000000000"
    );

    // wait until the transaction is mined
    await insertTimeStamp.wait();
    expect(
      await timestamp.getTimeStamp(
        "0x46696c6531000000000000000000000000000000000000000000000000000000"
      )
    ).to.equal(
      "0x46696c6531446174610000000000000000000000000000000000000000000000"
    );

    expect(
      timestamp.insertTimeStamp(
        "0x46696c6531446174610000000000000000000000000000000000000000000000",
        "0x46696c6531000000000000000000000000000000000000000000000000000000"
      )
    ).to.be.reverted;
  });

  it("Check Multiple Insertion", async function () {
    const insertTimeStamp = await timestamp.insertMultiple(
      [
        "0x46696c6531406174910000000000000000000000000000000000000000000000",
        "0x46696c6531446174610000000000000000000000000000000000000000000000",
      ],
      [
        "0x46696c6511000000000000000000000000000000000000000000000000000000",
        "0x46696c6530000000000000000000000000000000000000000000000000000000",
      ]
    );

    // wait until the transaction is mined
    await insertTimeStamp.wait();
    expect(
      await timestamp.getTimeStamp(
        "0x46696c6511000000000000000000000000000000000000000000000000000000"
      )
    ).to.equal(
      "0x46696c6531406174910000000000000000000000000000000000000000000000"
    );

    expect(
      await timestamp.getTimeStamp(
        "0x46696c6530000000000000000000000000000000000000000000000000000000"
      )
    ).to.equal(
      "0x46696c6531446174610000000000000000000000000000000000000000000000"
    );

    expect(
      timestamp.insertMultiple(
        [
          "0x46696c6531406174910000000000000000000000000000000000000000000000",
          "0x46696c6531446174610000000000000000000000000000000000000000000000",
        ],
        ["0x46696c6511000000000000000000000000000000000000000000000000000000"]
      )
    ).to.be.reverted;

    expect(
      timestamp.insertMultiple(
        [
          "0x46696c6531406174910000000000000000000000000000000000000000000000",
          "0x46696c6531446174610000000000000000000000000000000000000000000000",
        ],
        [
          "0x46696c6511000000000000000000000000000000000000000000000000000000",
          "0x46696c6530000000000000000000000000000000000000000000000000000000",
        ]
      )
    ).to.be.reverted;
  });

  it("Check Image Meta Insertion", async function () {
    const insertTimeStamp = await timestamp.insertImageMeta(
      "90.0000°N,135.0000°W",
      "0x46696c6531000000000000000000000000000000000000000000000000000000"
    );

    // wait until the transaction is mined
    await insertTimeStamp.wait();

    const blockNumBefore = await ethers.provider.getBlockNumber();
    const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    const timestampBefore = blockBefore.timestamp;
    const val = await timestamp.getImageMeta(
      "0x46696c6531000000000000000000000000000000000000000000000000000000"
    );
    expect(val[0].toNumber()).to.equal(timestampBefore);
    expect(val[1]).to.equal("90.0000°N,135.0000°W");
    // console.log(val[1]);
    expect(
      timestamp.insertImageMeta(
        "90.0000°N,135.0000°W",
        "0x46696c6531000000000000000000000000000000000000000000000000000000"
      )
    ).to.be.reverted;
  });

  it("Check Owner", async function () {
    const insertTimeStamp = await timestamp.insertTimeStamp(
      "0x46696d6531446174610000000000000000000000000000000000000000000000",
      "0x46696d6531000000000000000000000000000000000000000000000000000000"
    );

    // wait until the transaction is mined
    await insertTimeStamp.wait();
    const val = await timestamp.getOwner(
      "0x46696d6531446174610000000000000000000000000000000000000000000000"
    );
    expect(val).to.equal(accounts[0].address);
  });
});

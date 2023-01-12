import React, { useEffect, useState } from "react";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Box,
  Link,
  VStack,
  Button,
  AspectRatio,
} from "native-base";
import FileUpload from "./components/FileUpload";
import PutHash from "./components/PutHash";
import useEagerConnect from "../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";
import Account from "./components/Account";
import CheckHash from "./components/CheckHash";
import { abi } from "./components/CheckHash";
import { ethers } from "ethers";
// Start editing here, save and see your changes.
export default function App() {
  const [prevHashes, setPrevHashes] = useState([]);
  function modifyData(fileNameHash: any, dataHash: any) {
    setdata({
      fileNameHash: fileNameHash,
      dataHash: dataHash,
    });
  }
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();

  var [data, setdata] = useState({
    fileNameHash: "",
    dataHash: "",
  });
  function convertUNIXDateTime(unix: any) {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedDateTime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedDateTime;
  }
  useEffect(() => {
    if (account && library) {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "0xBfE9f09743aE9476Fee480cA9dDd6f9e34b58bB2",
        abi,
        signer
      );
      const tx = contract.getNewStamps(account);
      tx.then((res: any) => {
        console.log(res);
        setPrevHashes(res);
      });
    }
  }, [account, library]);
  return (
    <VStack _dark={{ bg: "blueGray.900" }}>
      <HStack w="100vw" bg="blue.200" h="20">
        <Text color="white" fontSize="xl" fontWeight="bold" ml="4"></Text>
      </HStack>
      <VStack
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.200" }}
        mx="auto"
        h="40vh"
        w="70vw"
      >
        <HStack mx="auto">
          <Text fontSize="xl" fontWeight="bold" ml="4">
            Upload File
          </Text>
          <FileUpload modifyData={modifyData} />
        </HStack>
        <PutHash triedToEagerConnect={triedToEagerConnect as any} data={data} />
        <CheckHash
          triedToEagerConnect={triedToEagerConnect as any}
          data={data}
        />
      </VStack>

      <ColorModeSwitch />
      <VStack
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.200" }}
        mt="2"
        mx="auto"
        h="40vh"
        w="70vw"
      >
        {prevHashes.map((item: any, key) => {
          return (
            <HStack
              _dark={{ bg: "blueGray.900" }}
              _light={{ bg: "blueGray.200" }}
              w="100%"
              h="20"
              p="2"
              key={key}
            >
              <Text fontSize="l"  ml="4">
                {item.hash}
              </Text>
              <Text fontSize="l" ml="4">
                {convertUNIXDateTime(item.timestamp.toString())}
              </Text>
            </HStack>
          );
        })}
        
      </VStack>
    </VStack>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={5}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}

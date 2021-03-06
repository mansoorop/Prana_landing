import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  Flex,
  AspectRatio,
  HStack,
  VStack
} from "@chakra-ui/react";
import {FaPlus , FaPlayCircle} from "react-icons/fa";
import {MdLaunch} from "react-icons/md";
import {MdPersonAddAlt} from "react-icons/md";


import { motion } from "framer-motion";

const Hero = () => {

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("gray.50","gray.900")}
      px={10}
      py={20}
      mx="auto"
    >
      
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
        mb="20px"
      > 
      
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="bold"
          letterSpacing="normal"
          lineHeight="shorter"
          color={useColorModeValue("gray.500", "gray.100")}
          textShadow="2px 0 currentcolor"
          mb={6}
        >
          <chakra.span display="block" color={useColorModeValue("brand.500", "brand.100")} >
          Your ebooks are yours, period.
          </chakra.span>
          {/* <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient={useColorModeValue("linear(to-r, brand.200,brand.500)", "linear(to-r, brand.200,brand.400)")}
            fontWeight="extrabold"
          >
            Tune into what matters
          </Text> */}
        
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.800", "gray.100")}
          fontWeight="light"
        >
         We believe that consumers should have ultimate freedom over the ebook copies they own. An ebook should behave pretty much the same as a paperback, minus the carbon footprint and luggage space.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 3, md: 6 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
        
              <chakra.a
              href="https://app.pranah.co/"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white" , "gray.50")}
              bg={useColorModeValue("brand.400", "brand.300")}
              _hover={{
                bg: useColorModeValue("brand.300", "brand.400"),
              }}
            >
              <MdLaunch/> &nbsp;
               Launch App 
            </chakra.a>
          </Box>
          

          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              href="https://www.youtube.com/watch?v=tOZ6n8xWwm4"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white" , "white")}
              bg={useColorModeValue("gray.700", "gray.500")}
              _hover={{
                bg: useColorModeValue("gray.600", "gray.400"),
              }}
            >
              <FaPlayCircle/> &nbsp;
              Watch Demo Video
            </chakra.a>
       
          </Box>

          {/* <Box display="inline-flex" rounded="md" shadow="md">
        
        <chakra.a
        href="https://app.pranah.co/"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={5}
        py={3}
        
        border="solid transparent"
        fontWeight="bold"
        w="full"
        rounded="md"
        color={useColorModeValue("white" , "gray.50")}
        bg={useColorModeValue("brand.400", "brand.300")}
        _hover={{
          bg: useColorModeValue("brand.300", "brand.400"),
        }}
      >
        <MdPersonAddAlt/> &nbsp;
         Onboarding
      </chakra.a>
    </Box> */}

        
          
        </Stack>

    
      <HStack
      background="gray.900"
      rounded="9px"
      alignItems={useColorModeValue("center", "start" )}
      justifyContent={useColorModeValue("center", "start" )}
      px="8px"
      py="8px"
      >
         <VStack >
         {/* <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.800", "gray.100")}
          fontWeight="light"
        >
        Onboard as
        </chakra.p> */}
        {/* <Image
         width={40}
         my={2}
         src="ethereum.png"
         alt="ethereum"
       /> */}
<Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 3, md: 6 }}
          spacing={2}
        >
          {/* <Box display="inline-flex" rounded="md" shadow="md">
        
              <chakra.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe66XQWZ89M4_WnL41l_xyjPU0BlsqHCS8VeBbS-XaPMetENQ/viewform?usp=pp_url"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white" , "gray.50")}
              bg={useColorModeValue("brand.400", "brand.300")}
              _hover={{
                bg: useColorModeValue("brand.300", "brand.400"),
              }}
            >
              
               Reader
            </chakra.a>
          </Box> */}
          

          {/* <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScCCBHgY2F7kX9p6n2Tk5sxCwrPPD8rTB89ktVZe8gmMKM8Yw/viewform?usp=pp_url"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white" , "white")}
              bg={useColorModeValue("gray.700", "gray.500")}
              _hover={{
                bg: useColorModeValue("gray.600", "gray.400"),
              }}
            >
              
              Author/Publisher
            </chakra.a>
       
          </Box> */}
</Stack>
   
       {/* <Image pl={4}
        width={40}
        height={8}
        src="qs.png"

        alt="quantstamp"
        /> */}
       </VStack>
       
      </HStack>
      
        
        
      </Box>
      <Box w={{ base: "full", md: 11 / 12 }} mx="auto" textAlign="center" >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          border=" none"
          src="marketplace.png"
          alt="Image"
        />
      
      </Box>
    </Flex>
  );
};

export default Hero;

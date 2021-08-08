import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
  Image
} from "@chakra-ui/react";


import SlideLeft from "../animations/slideLeft.js"
import SlideRight from "../animations/slideRight.js"


export default function Feature() {
  return (
    <>
    <Flex
      bg={useColorModeValue("gray.50","gray.700")}
      w="full"
      
      justifyContent="center"
      alignItems="center"
      
    > 
      <Box
        bg={useColorModeValue("white", "gray.800")}
        px={{ base:"10" , lg:"20"}}
        py={20}
        mx="auto"
      >
         <Box textAlign={{ lg: "center" }} mb={20}>
            <chakra.h2
              color={useColorModeValue("brand.600" , "gray.100")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              HOW IT WORKS
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900" , "gray.200")}
            >
            Every single ebook, each copy of every title, is unique!
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              To help achieve this, Each copy of books are represented by an NFT(non-fungible token) on the blockchain to give it a unique identity.
            </chakra.p>
          </Box>

          
        <SlideLeft>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
            mb={4}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color={useColorModeValue("gray.900", "gray.300")}
            lineHeight={{ md: "shorter" }}
            >
              Publishing and secondary interactions
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              Just like how you can resell your paperbacks or give it away to your loved ones, you 
            <span>are entitled to do whatever you want with your copy of the ebook that you bought.
            </span>
            </chakra.p>
            {/* <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              target="_blank"

              href="https://docs.ideamarket.io/user-guide/overview-2-1-minute-read"
            >
              Learn More
            </Button> */}
          </Box>
          <Box>
            <Image  
            w="full"
            rounded="lg"
            shadow="2xl"
            border=" none"
            src="publish.png">
            </Image>
          </Box>
        </SimpleGrid>
        </SlideLeft>

      
        <SlideRight>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.300")}
              lineHeight={{ md: "shorter" }}
            >
             Adding more depth to your copies.
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              Adding an additional layer to your ebooks, now you can know which copy of the title you’d brought: whether it’s the very first copy that’s ever sold, or the 1 millionth copy. And you’re more than welcome to monetize on that aspect!
            </chakra.p>
            {/* <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              target="_blank"

              href="https://docs.ideamarket.io/user-guide/hiw-buy-and-sell"
            >
              Learn More
            </Button> */}
          </Box>
          <Box>
            <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            border=" none"
            src="profile.png">
            </Image>
          </Box>
        </SimpleGrid>
        </SlideRight>

       <SlideLeft>

        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
             mb={4}
             fontSize={{ base: "2xl", md: "4xl" }}
             fontWeight="extrabold"
             letterSpacing="tight"
             textAlign={{ base: "center", md: "left" }}
             color={useColorModeValue("gray.900", "gray.300")}
             lineHeight={{ md: "shorter" }}
            >
             Annotations
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
               the amalgamation of the reader’s mind with that of the book.
               Annotations are the soul of a book - each copy comes alive with the 
               unique annotations that its users add to it over time. These annotations 
               travel with the copies when they change hands. A story within a story. 

            </chakra.p>
            {/* <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              href="https://docs.ideamarket.io/user-guide/hiw-add-new-listings"
              target="_blank"
            >
              Learn More
            </Button> */}
          </Box>
          <Box>
            <Image  src="Annotations.png">
            </Image>
          </Box>
        </SimpleGrid>
        </SlideLeft>      </Box>
      
    </Flex>
    </>
  );
}
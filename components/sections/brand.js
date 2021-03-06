
import React from "react";
import {
  chakra,
  HStack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  Icon,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import Pop from "../animations/pop.js"


export default function Component() {
  
  return (
    <>
    <Flex p={45} justifyContent="center"   bg={useColorModeValue("gray.100","gray.900")}>

    <Image
    
    width="24"
    height="24px"
      
      src="coindesk.png"
      alt="coindesk"
  />

      <Image pl={2}
      width={{sm:"24" , lg:"30"}}
      height="24px"
      src="nasdaq.png"
      alt="nasdaq"
      />

       <Image pl={2}
       width={{sm:"24" , lg:"30"}}
       height="24px"
       
      src="Annotations.png"
      alt="vice"
      />

      

    </Flex>
<Flex justifyContent="center" bg={useColorModeValue("gray.100","gray.900")}>
  <Pop>
    <chakra.h2
          fontSize={{ base: "xl", sm: "4xl" }}
          fontWeight="extrabold"
          letterSpacing="normal"
          lineHeight="shorter"
          color={useColorModeValue("gray.500", "gray.100")}
          textShadow="2px 0 currentcolor"
          
          mb={6}
        >
          {/* <chakra.span display="block" color={useColorModeValue("brand.500", "brand.100")} >
          $1,019,538 in trust signaled
          </chakra.span> */}
          
        </chakra.h2>
        </Pop>   

        </Flex>

    
      
         </>

  );
}




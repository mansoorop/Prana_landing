import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const Newsletter = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  async function  onSubmit (event){
    console.log(event)
    const res = await fetch(
      'https://api.jotform.com/form/212194224835050/submissions?apiKey=643f71ab871251b62d9af4e291f01c11',
      {
        body: JSON.stringify({
          "submission[3]": event.email,
          "submission[4]": event.feedback
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
      alert("Feedback Submitted")
    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }
  const Feature = (props) => (
    <Flex alignItems="center" color={useColorModeValue("gray.900", "gray.300")}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {props.children}
    </Flex>
  );
  return (
    <Box px={4} py={32} mx="auto" bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.300")}
          lineHeight="shorter"
        >
         Let us know if you’re excited about what we’re building!
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.900", "gray.300")}
          lineHeight="base"
        >
          The project is close to launch, and we’d love to know if you’re interested in becoming an early adopter of the platform.
          {/* little as possible, and we always show you upfront. No hidden fees. No
          bad exchange rates. No surprises. */}
        </chakra.p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid
            w={{ base: "full", md: 7 / 12 }}
            columns={1}
            spacing={3}
            pt={1}
            mx="auto"
            mb={8}
          >
            <FormControl isInvalid={errors.name}>
=              <GridItem as="label" colSpan={{ base: "auto", lg: 8 }}>
                <VisuallyHidden>Your Email</VisuallyHidden>

                <Input
                  id="email"
                  mt={0}
                  size="lg"
                  type="email"
                  placeholder="Enter your email..."
                  color={useColorModeValue("gray.900", "gray.100")}
                  {...register("email", {
                    required: "This is required",
                  })}
                />
   <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
              </GridItem>

           
            </FormControl>
            <FormControl isInvalid={errors.name}>
              <GridItem as="label" colSpan={{ base: "auto", lg: 8 }} >
                <VisuallyHidden>Feedback</VisuallyHidden>
                <FormControl>

                  <Textarea
                    id="feedback"
                    mt={0}
                    size="sm"
                    type="text"
                    placeholder="Enter your feddback..."
                    color={useColorModeValue("gray.900", "gray.100")}
                    {...register("feedback", {
                      required: "This is required",
                    })}
                  />
                </FormControl>

                <FormErrorMessage>
                {errors.feedback && errors.feedback.message}
              </FormErrorMessage>
              </GridItem>

            </FormControl>

            <Button
              w="full"
              variant="solid"
              colSpan={{ base: "auto", lg: 2 }}
              size="lg"
              colorScheme="brand"
              isLoading={isSubmitting} 
              type="submit"
              value="Submit" 
            >
              Submit
          </Button>
          </SimpleGrid>
        </form>

        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color={useColorModeValue("gray.900", "gray.100")}

        >
          {/* <Feature>New updates notified</Feature>
          <Feature>Get trending accounts</Feature>
          <Feature>Cancel anytime</Feature> */}
        </Stack>
      </Box>
    </Box>
  );
};

export default Newsletter;
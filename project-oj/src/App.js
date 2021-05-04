import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Heading,
  Container,
  SimpleGrid,
  Text,
  Button,
  useColorModeValue,
  useColorMode,
  IconButton,
  Box,
  extendTheme,
  Image,
  Center,
  createStandaloneToast,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { mode } from '@chakra-ui/theme-tools';

import home from './images/home.svg';
import homelight from './images/homelight.svg';
import rentlight from './images/rentlight.svg';
import rentdark from './images/rentdark.svg';
import meetlight from './images/meetlight.svg';
import meetdark from './images/meetdark.svg';
import thirdlight from './images/thirdlight.svg';
import thirddark from './images/thirddark.svg';
import chillinglight from './images/chillinglight.svg';
import chillingdark from './images/chillingdark.svg';

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        bg: mode('#F7FAFC', '#171923')(props),
        color: mode('#171923', '#F7FAFC')(props),
      },
    }),
  },
});

let counter = 0;

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher position="absolute" right={0} m="2%" />
      <Background />
      <Landing />
      <Segment
        heading="Book slots with your renter"
        description="Sign up for individual one-on-one meetings with potential renters"
        textleft={false}
        darkImage={rentdark}
        lightImage={rentlight}
      />
      <Segment
        heading="Second Thing"
        description="Connect to your codespaces from your browser or Visual Studio Code"
        textleft={true}
        darkImage={meetdark}
        lightImage={meetlight}
      />
      <Segment
        heading="Third Thing"
        description="Sign up for individual one-on-one meetings with potential renters"
        textleft={false}
        darkImage={thirddark}
        lightImage={thirdlight}
      />
      <Segment
        heading="Fourth Thing"
        description="Connect to your codespaces from your browser or Visual Studio Code"
        textleft={true}
        darkImage={chillingdark}
        lightImage={chillinglight}
      />
      <Footer justifyContent="center" textAlign="center" mt="5%" mb="5%" />
    </ChakraProvider>
  );
};

const Footer = props => {
  const bg = useColorModeValue('tomato', 'blue.200');
  const color = useColorModeValue('white', 'gray.900');
  return (
    <Center {...props}>
      <Box
        justifyContent="center"
        textAlign="center"
        display="flex"
        bg={bg}
        p="3%"
        borderRadius="40px"
        maxW="80%"
        color={color}
      >
        <Box maxW="70%" dislpay="flex">
          <Heading mb={5} size="4xl">
            Sign up for early access
          </Heading>
          <Text mt={5} fontWeight="300" fontSize="xl">
            Make renting easy for yourself and find your dream home today
          </Text>
          <Button size="lg" colorScheme="yellow" mt="24px">
            Request Early Access
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

const Background = props => {
  const bg = useColorModeValue('orange.200', 'blue.700');
  const bg2 = useColorModeValue('tomato', 'blue.200');
  return (
    <Box>
      <Box
        height="100vh"
        bg={bg}
        h="100vh"
        w="100vh"
        position="fixed"
        top="-20%"
        right="-20%"
        zIndex="-5"
        borderRadius="100%"
        opacity="0.1"
      ></Box>

      <Box
        height="100vh"
        bg={bg2}
        h="80vh"
        w="80vh"
        position="fixed"
        bottom="-50%"
        left="-30%"
        zIndex="-5"
        borderRadius="100%"
        opacity="0.1"
      ></Box>
    </Box>
  );
};

const Landing = props => {
  const image = useColorModeValue(homelight, home);
  const buttoncolor = useColorModeValue('red', 'blue');
  const logocolor = useColorModeValue('tomato', 'blue.200');
  return (
    <SimpleGrid alignItems="center" columns={2} h="100vh">
      <Container>
        <Text fontSize="xl" fontWeight="700" color={logocolor}>
          RentersHub
        </Text>
        <Heading size="4xl" mb={4}>
          Make renting easy
        </Heading>
        <Button size="lg" colorScheme={buttoncolor} mt="24px">
          Request Early Access
        </Button>
      </Container>
      <Container>
        <Image src={image} />
      </Container>
    </SimpleGrid>
  );
};

const Segment = ({ heading, description, textleft, lightImage, darkImage }) => {
  const color = useColorModeValue('gray.700', 'gray.400');
  const image = useColorModeValue(lightImage, darkImage);
  if (textleft) {
    return (
      <SimpleGrid alignItems="center" columns={2} h="100vh">
        <Container>
          <Heading mb="25px" size="4xl">
            {heading}
          </Heading>
          <Text
            maxW="80%"
            fontWeight="300"
            color={color}
            fontSize="lg"
            mt="25px"
          >
            {description}
          </Text>
        </Container>
        <Container>
          <Image src={image} />
        </Container>
      </SimpleGrid>
    );
  } else {
    return (
      <SimpleGrid alignItems="center" columns={2} h="100vh">
        <Container>
          <Image src={image} />
        </Container>
        <Container>
          <Heading mb="25px" size="4xl">
            {heading}
          </Heading>
          <Text
            maxW="80%"
            fontWeight="300"
            color={color}
            fontSize="lg"
            mt="25px"
          >
            {description}
          </Text>
        </Container>
      </SimpleGrid>
    );
  }
};

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const toast = createStandaloneToast();

  useEffect(() => {
    if (counter < 1) {
      toast({
        title: 'Try switching color modes!',
        status: 'info',
        duration: 4000,
        isClosable: true,
        position: 'bottom-left',
        variant: 'left-accent',
        color: 'gray.900',
      });
      counter++;
    }
  });

  return (
    <IconButton
      size="md"
      fontSize="4xl"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default App;

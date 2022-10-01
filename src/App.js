import React from 'react';
// Chakra UI components
import {
  ChakraProvider,
  Flex,
  Heading,
  Box,
  Text,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// My components
import CardsDisplay from './components/CardsDisplay';
import CardDisplay from './components/CardDisplay';
import ScoreDisplay from './components/ScoreDisplay';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex width="100%" justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1" size="2xl" textTransform="uppercase">
          Marine Memory Game
        </Heading>
        <Text fontSize="xl" fontStyle="italic" textTransform="uppercase">
          - Coral Edition -
        </Text>
      </Flex>
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr)">
        <Box border="1px solid white"></Box>
      </Grid>
    </ChakraProvider>
  );
}

export default App;

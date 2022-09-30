import React from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex width="100%" justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

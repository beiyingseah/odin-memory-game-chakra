import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ScoreDisplay = props => {
  const { currentScore, bestScore } = props;
  return (
    <Flex mb={10} justifyContent="center" columnGap={100} mt={10}>
      <Text fontSize="xl" textTransform="uppercase">
        Current Score: {currentScore}
      </Text>
      <Text fontSize="xl" textTransform="uppercase">
        Best Score: {bestScore}
      </Text>
    </Flex>
  );
};

export default ScoreDisplay;

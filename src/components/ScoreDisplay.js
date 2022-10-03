import React from 'react';
import { Flex, Tag } from '@chakra-ui/react';

const ScoreDisplay = props => {
  const { currentScore, bestScore } = props;
  return (
    <Flex mb={10} justifyContent="center" columnGap={100} mt={10}>
      <Tag fontSize="xl" textTransform="uppercase" colorScheme="yellow">
        Current Score: {currentScore}
      </Tag>
      <Tag fontSize="xl" textTransform="uppercase" colorScheme="teal">
        Best Score: {bestScore}
      </Tag>
    </Flex>
  );
};

export default ScoreDisplay;

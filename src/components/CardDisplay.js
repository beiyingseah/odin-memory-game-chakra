import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CardDisplay = props => {
  const { cardName, cardImage } = props;

  // All that goes on in a click

  return (
    <Box border="1px solid white" w="280px" h="240px">
      <img src={cardImage} alt={cardName}></img>
      <Text textTransform="uppercase" textAlign="center" mt={2}>
        {cardName}
      </Text>
    </Box>
  );
};

export default CardDisplay;

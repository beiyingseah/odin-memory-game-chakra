import React from 'react';
import { Box, Text, useColorModeValue, Image } from '@chakra-ui/react';

const CardDisplay = props => {
  const { cardName, cardImage, processCardClicked } = props;

  // All that goes on in a click of a card
  const handleClick = () => {
    processCardClicked(cardName);
  };

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor={useColorModeValue('gray.800', 'gray.200')}
      w="280px"
      h="240px"
      onClick={handleClick}
    >
      <Image src={cardImage} alt={cardName} />
      <Text textTransform="uppercase" textAlign="center" mt={2}>
        {cardName}
      </Text>
    </Box>
  );
};

export default CardDisplay;

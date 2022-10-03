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
      borderRadius="15"
      borderWidth="2px"
      borderStyle="solid"
      borderColor={useColorModeValue('gray.500', 'gray.100')}
      w="280px"
      h="240px"
      onClick={handleClick}
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.8) 0px 5px 15px',
        borderWidth: '3px',
      }}
      fontWeight="medium"
    >
      <Image
        src={cardImage}
        alt={cardName}
        borderRadius="13"
        borderBottomRadius={0}
      />
      <Text textTransform="uppercase" textAlign="center" mt={2}>
        {cardName}
      </Text>
    </Box>
  );
};

export default CardDisplay;

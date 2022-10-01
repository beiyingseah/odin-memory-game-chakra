import { Grid, Box } from '@chakra-ui/react';
import React from 'react';

const CardsDisplay = props => {
  const { cards } = props;
  return (
    <Grid
      padding="1vw 5vw"
      w="100vw"
      gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={10}
    >
      {cards.map(card => {
        return (
          <Box
            key={card.name}
            border="1px solid white"
            w="280px"
            h="200px"
          ></Box>
        );
      })}
    </Grid>
  );
};

export default CardsDisplay;

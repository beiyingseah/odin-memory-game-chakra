import { Grid } from '@chakra-ui/react';
import React from 'react';
import CardDisplay from './CardDisplay';

const CardsDisplay = props => {
  const { cards, processCardClicked } = props;
  return (
    <Grid
      padding="1vw 5vw"
      w="100vw"
      gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={10}
    >
      {cards.map(card => {
        return (
          <CardDisplay
            key={card.name}
            cardName={card.name}
            cardImage={card.image}
            processCardClicked={processCardClicked}
          />
        );
      })}
    </Grid>
  );
};

export default CardsDisplay;

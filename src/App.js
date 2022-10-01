// My components and React's
import { useState } from 'react';
import CardsDisplay from './components/CardsDisplay';
import CardDisplay from './components/CardDisplay';
import ScoreDisplay from './components/ScoreDisplay';

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

// Images
import bluebottle from './assets/images/bluebottle.png';
import blueglaucus from './assets/images/blueglaucus.png';
import braincoral from './assets/images/braincoral.png';
import flameback from './assets/images/flameback.jpeg';
import friedegg from './assets/images/friedegg.png';
import giantclam from './assets/images/giantclam.png';
import lopheliacoral from './assets/images/lopheliacoral.png';
import moonjelly from './assets/images/moonjelly.png';
import pyrosome from './assets/images/pyrosome.png';
import sanddollar from './assets/images/sanddollar.png';
import seacucumber from './assets/images/seacucumber.png';
import seawasp from './assets/images/seawasp.jpeg';

function App() {
  // State variables: score, all the cards available, cards clicked
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [cards, setCards] = useState([
    { name: 'bluebottle', image: bluebottle },
    { name: 'blueglaucus', image: blueglaucus },
    { name: 'braincoral', image: braincoral },
    { name: 'flameback', image: flameback },
    { name: 'friedegg', image: friedegg },
    { name: 'giantclam', image: giantclam },
    { name: 'lopheliacoral', image: lopheliacoral },
    { name: 'moonjelly', image: moonjelly },
    { name: 'pyrosome', image: pyrosome },
    { name: 'sanddollar', image: sanddollar },
    { name: 'seacucumber', image: seacucumber },
    { name: 'seawasp', image: seawasp },
  ]);

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
      <Flex mb={10} justifyContent="center" columnGap={100} mt={10}>
        <Text fontSize="xl" textTransform="uppercase">
          Current Score: 0
        </Text>
        <Text fontSize="xl" textTransform="uppercase">
          Best Score: 10
        </Text>
      </Flex>

      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        rowGap={10}
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
    </ChakraProvider>
  );
}

export default App;

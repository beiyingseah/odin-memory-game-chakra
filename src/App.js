// My components and React's
import { useState } from 'react';
import CardsDisplay from './components/CardsDisplay';
import ScoreDisplay from './components/ScoreDisplay';

// Chakra UI components
import { ChakraProvider, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme/customFont';

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
    { name: 'blue bottle', image: bluebottle },
    { name: 'blueg laucus', image: blueglaucus },
    { name: 'brain coral', image: braincoral },
    { name: 'flame back', image: flameback },
    { name: 'fried egg jellyfish', image: friedegg },
    { name: 'giant clam', image: giantclam },
    { name: 'lophelia coral', image: lopheliacoral },
    { name: 'moon jelly', image: moonjelly },
    { name: 'pyrosome', image: pyrosome },
    { name: 'sand dollar', image: sanddollar },
    { name: 'sea cucumber', image: seacucumber },
    { name: 'sea wasp', image: seawasp },
  ]);

  const shuffleCards = () => {
    setCards(cards.sort(() => Math.random() - 0.5));
  };

  const processCardClicked = cardName => {
    console.log(cardsClicked);
    if (cardsClicked.includes(cardName)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      shuffleCards();
      setCardsClicked([]);
    } else {
      setCardsClicked(cardsClicked.concat(cardName));
      setCurrentScore(currentScore + 1);
      shuffleCards();
    }
    console.log(cardsClicked);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box width="100%">
        <Flex width="100%" justifyContent="flex-end">
          <ColorModeSwitcher />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Heading mt={10} as="h1" size="2xl" textTransform="uppercase">
            Marine Memory Game
          </Heading>
          <Text fontSize="lg" fontStyle="italic" textTransform="uppercase">
            - Coral Edition -
          </Text>
        </Flex>
        <ScoreDisplay currentScore={currentScore} bestScore={bestScore} />
        <CardsDisplay cards={cards} processCardClicked={processCardClicked} />
      </Box>
    </ChakraProvider>
  );
}

export default App;

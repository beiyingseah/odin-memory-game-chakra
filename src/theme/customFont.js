import { extendTheme } from '@chakra-ui/react';
import '@fontsource/chelsea-market';

const theme = extendTheme({
  fonts: {
    heading: `'Chelsea Market' 'Open Sans', sans-serif`,
    body: `'Chelsea Market', 'Open Sans', sans-serif`,
  },
});

export default theme;

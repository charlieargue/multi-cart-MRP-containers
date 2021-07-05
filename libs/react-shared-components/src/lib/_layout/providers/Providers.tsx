import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import React from 'react';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children?: React.ReactNode;
}

// -------------------
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false
        }}>
        {children}
      </ColorModeProvider>
    </ChakraProvider >
  );
};
export default Providers;

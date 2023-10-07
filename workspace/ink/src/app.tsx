import React, { FC } from 'react';
import { Text } from 'ink';
import { OptionValues } from 'commander';

interface AppProps {
  options: OptionValues;
}

const App: FC<AppProps> = ({ options }) => {
  return (
    <Text>
      Hello, <Text color="green">{options.name}</Text>
    </Text>
  );
};

export default App;

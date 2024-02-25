import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AppLayout = () => {
  console.log();
  // TODO share media play
  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
};

export default AppLayout;

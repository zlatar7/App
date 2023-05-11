import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { SaveScreen, EndScreen, StartScreen } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setScreenNumber] = useState(0);
  const [loaded] = useFonts({
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const headerTitle = userNumber ? 'Save' : 'StockeAR';

  const onStart = (number) => {
    setUserNumber(number);
  };

  const onScreenOver = (screenNumber) => {
    setScreenNumber(screenNumber);
  };

  const onRestart = () => {
    setUserNumber(null);
    setScreenNumber(0);
  };

  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <SaveScreen userNumber={userNumber} onScreenOver={onScreenOver} />;
    }

    if (guessRounds > 0) {
      return <EndScreen rounds={guessRounds} onRestart={onRestart} userNumber={userNumber} />;
    }

    return <StartScreen onStart={onStart} />;
  };
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}

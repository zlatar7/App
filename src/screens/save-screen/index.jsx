import { useState, useRef, useEffect } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components';
import { theme } from '../../constants';

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const SaveScreen = ({ userNumber, onScreenOver }) => {
  const [currentNumber, setCurrentNumber] = useState(
    generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(MIN_NUMBER);
  const currentHigh = useRef(MAX_NUMBER);

  const onHandlerNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentNumber < userNumber) ||
      (direction === 'greater' && currentNumber > userNumber)
    ) {
      Alert.alert('Hint', 'You know that is wrong!', [{ text: 'Sorry', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentNumber;
    } else {
      currentLow.current = currentNumber;
    }
    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentNumber);
    setCurrentNumber(nextNumber);
    setRounds(2);
  };

  useEffect(() => {
    if (userNumber) onScreenOver(rounds);
  }, [currentNumber, userNumber, onScreenOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Has been saved</Text>
        <NumberContainer number={userNumber} />
        <View style={styles.buttonContainer}>
          <Button
            title="Finish"
            color={theme.colors.secondary}
            onPress={() => onHandlerNextGuess(currentNumber)}
          />
        </View>
      </Card>
    </View>
  );
};

export default SaveScreen;

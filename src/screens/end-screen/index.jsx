import { Button, Image, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/index';
import { theme } from '../../constants';

const EndScreen = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/check-64.png',
          }}
          resizeMode="cover"
        />
        <Text style={styles.rounds}>SUCCESFUL OPERATION</Text>
        <Text style={styles.selectedNumber}>Thank you for using our app</Text>
        <View style={styles.buttonContainer}>
          <Button color={theme.colors.primary} title="Restart" onPress={onRestart} />
        </View>
      </Card>
    </View>
  );
};

export default EndScreen;

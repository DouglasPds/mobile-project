import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Cadastro from './src/pages/Cadastro';
import Listagem from './src/pages/Listagem';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar style="light" backgroundColor="#312e38" />
			<View style={{ flex: 1 }}>
				<Routes />
			</View>
		</NavigationContainer>
	);
};

export default App;

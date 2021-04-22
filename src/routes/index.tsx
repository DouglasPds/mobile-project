import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from '../pages/Cadastro';
import Listagem from '../pages/Listagem';

const Curso = createStackNavigator();

const CursoRoutes: React.FC = () => {
	return (
		<Curso.Navigator>
			<Curso.Screen name="Listagem" component={Listagem} />
			<Curso.Screen name="Cadastro" component={Cadastro} />
		</Curso.Navigator>
	);
};

export default CursoRoutes;

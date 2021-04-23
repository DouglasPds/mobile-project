import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from '../pages/Cadastro';
import Listagem from '../pages/Listagem';
import Detalhes from '../pages/Detalhes';

const Curso = createStackNavigator();

const CursoRoutes: React.FC = () => {
	return (
		<Curso.Navigator>
			<Curso.Screen name="Listagem" component={Listagem} />
			<Curso.Screen name="Cadastro" component={Cadastro} />
			<Curso.Screen name="Detalhes" component={Detalhes} />
		</Curso.Navigator>
	);
};

export default CursoRoutes;

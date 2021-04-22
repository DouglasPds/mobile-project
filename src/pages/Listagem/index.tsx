import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container } from './styles';

const Listagem: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<Button
				onPress={() => {
					navigation.navigate('Cadastro');
				}}
			>
				Novo
			</Button>
		</Container>
	);
};

export default Listagem;

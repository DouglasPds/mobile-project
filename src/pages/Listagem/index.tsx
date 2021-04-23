import React, { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Button from '../../components/Button';
import api from '../../services/api';
import { Container, CursosList, CursoContainer, Text, Title } from './styles';

export interface Curso {
	id: string;
	nome: string;
	turno: string;
	codigo: number;
	qtdPeriodo: number;
}

const Listagem: React.FC = () => {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const { navigate } = useNavigation();

	useFocusEffect(
		useCallback(() => {
			async function getValues() {
				const response = await api.get('/cursos');
				setCursos(response.data);
			}
			getValues();
		}, []),
	);

	const navigateToDetalhes = useCallback(
		(cursoId: string, curso: Curso) => {
			navigate('Detalhes', { cursoId, curso });
		},
		[navigate],
	);

	return (
		<Container>
			<CursosList
				data={cursos}
				ListHeaderComponent={<Title>Cursos</Title>}
				keyExtractor={curso => curso.id}
				renderItem={({ item: curso }) => (
					<CursoContainer onPress={() => navigateToDetalhes(curso.id, curso)}>
						<Text>{curso.nome}</Text>
						<Text>{curso.turno}</Text>
						<Text>{curso.qtdPeriodo}</Text>
					</CursoContainer>
				)}
			/>
			<Button
				background="#0B5ED7"
				onPress={() => {
					navigate('Cadastro');
				}}
			>
				Novo
			</Button>
		</Container>
	);
};

export default Listagem;

import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { Container, ContainerDetalhes, Text } from './styles';
import api from '../../services/api';
import { Curso } from '../Listagem/index';

interface RouteParams {
	cursoId: string;
	curso: Curso;
}

const Detalhes: React.FC = () => {
	const { navigate, goBack } = useNavigation();
	const route = useRoute();
	const { curso } = route.params as RouteParams;
	const { id, nome, turno, codigo, qtdPeriodo } = curso;
	const { cursoId } = route.params as RouteParams;

	const handleDelete = useCallback(async () => {
		await api.delete(`/cursos/${cursoId}`);
		goBack();
	}, [cursoId, goBack]);

	const navigateToAlterar = useCallback(() => {
		navigate('Cadastro', { cursoId });
	}, [navigate, cursoId]);

	return (
		<Container>
			<ContainerDetalhes>
				<Text>id: {id}</Text>
				<Text>Nome: {nome}</Text>
				<Text>Turno: {turno}</Text>
				<Text>Código: {codigo}</Text>
				<Text>Quantidade de Período: {qtdPeriodo}</Text>
			</ContainerDetalhes>
			<Button background="#BB2D3B" onPress={handleDelete}>
				Excluir
			</Button>
			<Button
				style={{ marginTop: '10px', backgroundColor: '#0B5ED7' }}
				background=""
				onPress={navigateToAlterar}
			>
				Alterar
			</Button>
		</Container>
	);
};

export default Detalhes;

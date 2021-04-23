import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Label } from './styles';

interface Curso {
	id: string;
	nome: string;
	turno: string;
	codigo: number;
	qtdPeriodo: number;
}

interface RouteParams {
	cursoId: string;
}

const Cadastro: React.FC = () => {
	const route = useRoute();
	const [curso, setCurso] = useState<Curso>();
	const [idCurso, setIdCurso] = useState<string>();
	const { navigate } = useNavigation();
	const formRef = useRef<FormHandles>(null);

	useEffect(() => {
		if (route.params) {
			const { cursoId } = route.params as RouteParams;
			setIdCurso(cursoId);
		}
	}, [route.params]);

	useEffect(() => {
		async function loadCurso(): Promise<void> {
			if (idCurso) {
				const response = await api.get(`/cursos/${idCurso}`);
				setCurso(response.data);
			}
		}
		loadCurso();
	}, [idCurso]);

	useEffect(() => {
		if (idCurso) {
			formRef.current?.setData({
				nome: curso?.nome,
				turno: curso?.turno,
				codigo: curso?.codigo,
				qtdPeriodo: curso?.qtdPeriodo,
			});
		}
	}, [idCurso, curso]);

	const handleSubmit = useCallback(
		async (data: Curso) => {
			const { id, nome, turno, codigo, qtdPeriodo } = data;

			if (idCurso) {
				await api.put(`/cursos/${idCurso}`, {
					nome,
					turno,
					codigo,
					qtdPeriodo,
				});
			} else {
				await api.post('/cursos', {
					id,
					nome,
					turno,
					codigo,
					qtdPeriodo,
				});
			}
			navigate('Listagem');
		},
		[navigate, idCurso],
	);

	return (
		<>
			<Container>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Label>Nome</Label>
					<Input name="nome" placeholder="digite" />
					<Label>Turno</Label>
					<Input name="turno" placeholder="digite" />
					<Label>Código</Label>
					<Input name="codigo" placeholder="digite" />
					<Label>Quantidade de Períodos</Label>
					<Input name="qtdPeriodo" placeholder="digite" />
					<Button
						background="#03a557"
						onPress={() => {
							formRef.current?.submitForm();
						}}
					>
						Salvar
					</Button>
				</Form>
				<Button
					style={{ marginTop: '10px', backgroundColor: '#BB2D3B' }}
					background=""
					onPress={() => {
						navigate('Listagem');
					}}
				>
					Cancelar
				</Button>
			</Container>
		</>
	);
};

export default Cadastro;

import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

const Cadastro: React.FC = () => {
	const navigation = useNavigation();
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(data => {
		console.log(data);
	}, []);

	return (
		<>
			<Container>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input name="nome" placeholder="digite" />
					<Input name="duracao" placeholder="digite" />
					<Button
						onPress={() => {
							formRef.current?.submitForm();
						}}
					>
						Salvar
					</Button>
				</Form>
			</Container>
			<Button
				onPress={() => {
					navigation.navigate('Listagem');
				}}
			>
				Voltar
			</Button>
		</>
	);
};

export default Cadastro;

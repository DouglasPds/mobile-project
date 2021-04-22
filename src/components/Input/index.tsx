import React, { useEffect, useRef } from 'react';
import { TextInputProps, TextInput, StyleSheet } from 'react-native';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends TextInputProps {
	name: string;
}

interface InputValueReference {
	value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
	const inputValueRef = useRef<InputValueReference>({ value: '' });
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			<TextInput
				style={styles.input}
				placeholderTextColor="#666360"
				onChangeText={value => {
					inputValueRef.current.value = value;
				}}
				{...rest}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	input: {
		flex: 1,
		color: '#fff',
		fontSize: 16,
		border: 'none',
	},
});

export default Input;

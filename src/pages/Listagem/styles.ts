import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Curso } from './index';

export const Container = styled.View`
	justify-content: center;
	padding: 0 30px;
`;

export const CursosList = styled(FlatList as new () => FlatList<Curso>)`
	padding: 32px 0 16px;
`;

export const CursoContainer = styled(RectButton)`
	background: #3e3b47;
	border-radius: 10px;
	padding: 20px;
	margin-bottom: 16px;
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 24px;
	margin-bottom: 24px;
	color: #000;
`;

export const Text = styled.Text`
	padding: 0 5px 0;
	color: #fff;
`;

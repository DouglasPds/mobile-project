import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
	width: 100%;
	height: 60px;
	border-radius: 10px;

	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	color: #fff;
`;

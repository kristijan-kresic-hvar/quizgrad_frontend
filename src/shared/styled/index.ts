import styled, { StyledComponent } from 'styled-components';

interface StyledFlexRowProps {
	mt?: number;
}

export const StyledFlexRow = styled.div<StyledFlexRowProps>`
	display: flex;
	flex-direction: row;
	margin-top: ${({ mt }) => (mt ? `${mt}rem` : '0')};
`;

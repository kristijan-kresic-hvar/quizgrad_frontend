import styled, { StyledComponent } from 'styled-components';

export const StyledMain: StyledComponent<'main', any, {}, never> = styled.main`
	width: 95%;
	max-width: var(--max-desktop);
	margin: 0 auto;
`;

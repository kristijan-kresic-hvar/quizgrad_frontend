import styled, { StyledComponent } from 'styled-components';

export const StyledHeader: StyledComponent<'header', any, {}, never> = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap-x: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		gap-y: 1rem;
		gap-x: 0;
	}
`;

export const StyledSectionLeft: StyledComponent<'section', any, {}, never> = styled.section`
	flex: 1;
	width: 100%;
	padding-left: 11.25rem;
	margin-top: 4.125rem;

	@media (max-width: 768px) {
		margin-top: 0;
	}
	@media (max-width: 1200px) {
		padding-left: 0;
	}
`;

export const StyledHeading: StyledComponent<'h1', any, {}, never> = styled.h1`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 2.3125rem;
	line-height: 2.75rem;
	color: #333333;
	margin-bottom: 2.3125rem;
	@media (max-width: 768px) {
		text-align: center;
		font-size: 1.8rem;
		& br {
			display: none;
		}
	}
`;

export const StyledHeroImg: StyledComponent<'img', any, {}, never> = styled.img`
	width: 100%;
	flex: 1;
	object-fit: contain;
	min-width: 350px;
	user-select: none;
	pointer-events: none;
`;

export const StyledBlockQuote: StyledComponent<'blockquote', any, {}, never> = styled.blockquote`
	font-family: var(--font-secondary);
	font-style: normal;
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 1rem;
	color: #828282;
	padding: 0.3rem 0 0.3rem 0.75rem;
	border-left: 0.073rem solid #333333;

	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const StyledCtaButton: StyledComponent<'button', any, {}, never> = styled.button`
	background: linear-gradient(95.34deg, #fcc822 0%, #ffcd2e 100%);
	box-shadow: 0px 10.4502px 23.2228px -6.96683px #fbe18f;
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 1.3125rem;
	color: #ffffff;
	border: none;
	outline: none;
	padding: 0.5rem 1rem;
	cursor: pointer;
	transition: background 0.2s ease-in-out;

	&:hover {
		background: #ffffff;
		color: var(--color-primary);
	}
`;

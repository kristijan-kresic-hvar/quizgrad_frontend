import styled from 'styled-components';
import logoSVG from '../../assets/img/logo.svg';

const Navbar = () => {
	return (
		<StyledNavbarWrapper>
			<StyledNavbarInner>
				<StyledLogo src={logoSVG} alt="logo" />
				<StyledLoginButton>Login</StyledLoginButton>
			</StyledNavbarInner>
			<StyledBorderLine />
		</StyledNavbarWrapper>
	);
};

const StyledNavbarWrapper = styled.div`
	width: 100%;
	padding: 30px 0;
`;

const StyledNavbarInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: var(--max-desktop);
	width: 90%;
	margin: 0 auto;
	min-height: 35px;
	padding-bottom: 15px;
`;

const StyledBorderLine = styled.div`
	width: 95%;
	height: 0.580569px;
	background: #ecece8;
	margin: 0 auto;
	max-width: var(--max-desktop);
`;

const StyledLogo = styled.img`
	user-select: none;
	cursor: pointer;
	width: 180px;
	object-fit: contain;

	@media (max-width: 768px) {
		width: initial;
	}
`;

const StyledLoginButton = styled.button`
	padding: 0.375rem 1.25rem;
	border: 0.06rem solid var(--color-primary);
	background: transparent;
	outline: none;
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 1.31rem;
	color: var(--color-primary);
	cursor: pointer;
	transition: background 0.2s ease-in-out;

	&:hover {
		background: var(--color-primary);
		color: #ffffff;
	}
`;

export default Navbar;

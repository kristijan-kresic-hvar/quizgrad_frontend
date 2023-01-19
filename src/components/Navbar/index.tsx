import { StyledNavbarWrapper, StyledNavbarInner, StyledLogo, StyledLoginButton, StyledBorderLine } from './styled';
import logoSVG from '@/assets/img/logo.svg';

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

export default Navbar;

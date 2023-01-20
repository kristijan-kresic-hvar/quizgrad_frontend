import { Link } from 'react-router-dom';
import { StyledNavbarWrapper, StyledNavbarInner, StyledLogo, StyledLoginButton, StyledBorderLine } from './styled';
import logoSVG from '@/assets/img/logo.svg';

const Navbar = () => {
	return (
		<StyledNavbarWrapper>
			<StyledNavbarInner>
				<StyledLogo src={logoSVG} alt="logo" />
				<Link to="/login">
					<StyledLoginButton>Login</StyledLoginButton>
				</Link>
			</StyledNavbarInner>
			<StyledBorderLine />
		</StyledNavbarWrapper>
	);
};

export default Navbar;

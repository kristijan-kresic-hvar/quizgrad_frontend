import { ReactNode } from 'react';
import { StyledMain } from './styled';

interface Props {
	children: ReactNode;
	navbar?: ReactNode;
}

const Layout = ({ children, navbar }: Props) => {
	return (
		<>
			{navbar && navbar}
			<StyledMain>{children}</StyledMain>
		</>
	);
};

export default Layout;

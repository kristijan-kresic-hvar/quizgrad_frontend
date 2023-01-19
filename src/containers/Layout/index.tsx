interface Props {
	children: React.ReactNode;
	navbar?: React.ReactNode;
}

const Layout = ({ children, navbar }: Props) => {
	return (
		<div>
			{navbar && navbar}
			{children}
		</div>
	);
};

export default Layout;

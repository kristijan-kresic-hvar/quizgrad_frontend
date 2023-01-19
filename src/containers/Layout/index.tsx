interface Props {
	children: React.ReactNode;
	navbar: React.ReactNode | null;
}

const Layout = ({ children, navbar }: Props) => {
	return (
		<div>
			{navbar ? navbar : null}
			{children}
		</div>
	);
};

export default Layout;

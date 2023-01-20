import { Outlet } from 'react-router-dom';

import Layout from './containers/Layout';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Layout navbar={<Navbar />}>
			<Outlet />
		</Layout>
	);
};

export default App;

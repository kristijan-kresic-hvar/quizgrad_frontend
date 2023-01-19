import Layout from './containers/Layout';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Layout navbar={<Navbar />}>
			<div>App</div>
		</Layout>
	);
};

export default App;

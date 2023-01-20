import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Quiz from '../pages/Quiz';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/quiz',
				element: <Quiz />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Register />,
	},
]);

export default router;

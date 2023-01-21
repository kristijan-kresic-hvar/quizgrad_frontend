import Navbar from '../';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import logoSVG from '@/assets/img/logo.svg';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
	it('renders logo and login button correctly', () => {
		const { getByAltText, getByText } = render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		);
		expect(getByAltText('logo')).toHaveAttribute('src', logoSVG);
		expect(getByText('Login')).toBeInTheDocument();
	});
});

import Layout from '../';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

describe('Layout', () => {
	it('renders children and navbar correctly', () => {
		const navbar = <nav>Navbar</nav>;
		const children = <p>Content</p>;
		const { getByText } = render(<Layout navbar={navbar}>{children}</Layout>);
		expect(getByText('Navbar')).toBeInTheDocument();
		expect(getByText('Content')).toBeInTheDocument();
	});

	it('renders children correctly if no navbar is provided', () => {
		const children = <p>Content</p>;
		const { getByText, queryByText } = render(<Layout>{children}</Layout>);
		expect(queryByText('Navbar')).toBeNull();
		expect(getByText('Content')).toBeInTheDocument();
	});
});

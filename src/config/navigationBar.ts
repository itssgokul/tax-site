// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

// Define specific types for Button style and size, matching Button.astro props
type ButtonStyle = 'primary' | 'secondary' | 'neutral';
type ButtonSize = 'lg' | 'base' | 'sm';

export interface NavAction {
	name: string
	link: string
	style: ButtonStyle // Use specific type
	size: ButtonSize   // Use specific type
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The tailwind astro theme',
		text: 'OnePointTax'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: '/services' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'Tools & Calculator', link: '/coming-soon' },
		// {
		// 	name: 'Tools & Calculator',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Tools & Calculator', link: '/coming-soon' },
		// 	]
		// },
		{ name: 'FAQ', link: '/faq' },
	],
	navActions: [
        // { name: 'Register / Sign In', link: '/register', style: 'secondary', size: 'lg' }, // Removed Register link
        { name: 'Contact', link: '/contact', style: 'primary', size: 'lg' }
    ]
}

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

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
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
		text: 'Foxi.'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: '/services' },
		{ name: 'Blog', link: '/blog' },
		{
			name: 'Tolls & Calculater',
			link: '#',
			submenu: [
				{ name: 'Terms', link: '/terms' }
			]
		},
		{ name: 'FAQ', link: '/faq' },
	],
	navActions: [{ name: 'Contact', link: '/contact', style: 'primary', size: 'lg' }]
}

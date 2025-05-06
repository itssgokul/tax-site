// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Address {
	street: string
	city: string
	state: string
	zip: string
	country: string
}

export interface Business {
	name: string
	address: Address
	phone: string
	email: string
	url: string
	openingHours: string
}

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	business: Business
}

export const configData: Config = {
	siteTitle: 'OnePointTax: Your Partner in Finance & Tax Solutions',
	siteDescription:
		'OnePointTax offers comprehensive Finance, Tax, and Business compliance services tailored for individuals and businesses. From expert tax filing to financial advisory and business registrations, we simplify complex processes, ensuring peace of mind and precision every step of the way.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'OnePointTax. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	business: {
		name: 'OnePointTax',
		address: {
			street: '18-21, A1, Raghavan Street, Perambur',
			city: 'Chennai',
			state: 'Tamil Nadu',
			zip: '600011',
			country: 'India'
		},
		phone: '+91 95240 15826',
		email: 'vijee.p@onepointtax.in',
		url: 'https://onepointtax.in/',
		openingHours: 'Mo-Fr 09:00-18:00'
	}
}

// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
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
	canonical: false,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}

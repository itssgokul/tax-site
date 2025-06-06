// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'OnePointTax.',
		aboutText:
			'Your partner in financial clarity. We’re here to simplify your tax, accounting, and business compliance needs, so you can focus on what really matters.',
		logo: {
			src: '/logo.svg',
			alt: 'OnePointTax logo',
			text: 'OnePointTax.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Services',
					subCategoryLink: '/services'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Tools & Calculator',
					subCategoryLink: '/coming-soon'
				},
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/#features'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© 2025 OnePointTax. All Rights Reserved. | <a href="/legal/privacy-policy" class="hover:underline">Privacy Policy</a> | <a href="/legal/terms" class="hover:underline">Terms & Conditions</a> | <a href="/legal/disclaimer" class="hover:underline">Disclaimer</a> | <a href="/legal/cookie-policy" class="hover:underline">Cookie Policy</a>'
	}
}

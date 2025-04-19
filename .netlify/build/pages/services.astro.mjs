/* empty css                                  */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, e as renderSlot, a as renderTemplate } from '../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Layout } from '../chunks/Layout_BnWE_35o.mjs';
import { a as $$Row, b as $$Col } from '../chunks/Col_-kpsvJ5I.mjs';
import { $ as $$StickySidebar } from '../chunks/StickySidebar_BIJFoUcV.mjs';
/* empty css                                    */
import { $ as $$PageHeader } from '../chunks/PageHeader_7saHbGJJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://onepointtax.in/");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Feature;
  const { type = "top-icon", title, icon = "rocket", iconStyle, align, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex", [
    "",
    { [`feature--${type}`]: type },
    { [`feature--${align}`]: align },
    { [`${classes}`]: classes }
  ]], "class:list")} data-astro-cid-d3utdf5e> ${renderComponent($$result, "Icon", $$Icon, { "name": `${icon}`, "class:list": [
    "shrink-0",
    { [`size-6 text-primary-500`]: iconStyle != "square" },
    { [`size-10 rounded bg-primary-500 p-2 text-white`]: iconStyle === "square" }
  ], "data-astro-cid-d3utdf5e": true })} <div class="feature__body" data-astro-cid-d3utdf5e> ${title && renderTemplate`<h3${addAttribute([
    "feature__title",
    { [`mb-2 py-2`]: iconStyle === "square" && type === "side-icon" }
  ], "class:list")} data-astro-cid-d3utdf5e> ${title} </h3>`} ${renderSlot($$result, $$slots["default"])} </div>  </div> <!-- <div
	class:list={[
		'feature',
		{ ['feature--' + \`\${type}\`]: type },
		{ ['feature--' + \`\${align}\`]: align },
		{ [\`\${classes}\`]: classes }
	]}
>
	<Icon
		name=\`\${icon}\`
		class:list={[
			'shrink-0',
			{ [\`size-6 text-primary-500\`]: iconStyle != 'square' },
			{ [\`size-10 rounded bg-primary-500 p-2 text-white\`]: iconStyle === 'square' }
		]}
	/>
	<div class="feature__body">
		{
			title && (
				<h3
					class:list={[
						'feature__title',
						{ [\`mb-2 py-2\`]: iconStyle === 'square' && type === 'side-icon' }
					]}
				>
					{title}
				</h3>
			)
		}
		<slot />
	</div>

	<style>
		.feature {
			@apply flex flex-col gap-4;
		}
		.feature__title {
			@apply mb-4 text-lg font-normal leading-6;
		}
		.feature--center {
			@apply items-center text-center;
		}
		.feature--side-icon {
			@apply flex-row;
		}
	</style>
</div> -->`;
}, "D:/tax-site/src/components/ui/Feature.astro", void 0);

const $$Astro = createAstro("https://onepointtax.in/");
const $$FeatureSticky = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureSticky;
  const { title, text, data, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "StickySidebar", $$StickySidebar, { "id": title, "classes": classes }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Row", $$Row, { "classes": "none" }, { "default": ($$result3) => renderTemplate`${// Map through the filtered features and render them
  data.map((feature) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "4" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Feature", $$Feature, { "title": feature.title, "icon": feature.icon, "align": "left", "classes": "" }, { "default": ($$result5) => renderTemplate`${feature.description}` })} ` })}`)}` })} `, "sidebar": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${title && renderTemplate`<h3 class="text-3xl">${title}</h3>`} ${text && renderTemplate`<p class="text-lg leading-relaxed">${text}</p>`} </header>` })}`;
}, "D:/tax-site/src/components/blocks/features/FeatureSticky.astro", void 0);

const featuresData = [
	{
		title: "Book Keeping",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "MIS Report",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "Financial Forecasts & Projections",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "Cash Flows and Analysis",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "Financial Statements",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "Accounts Receivable Management",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "Account Payable Management",
		icon: "check-circle",
		description: "",
		category: "Accounts"
	},
	{
		title: "Tax Preparation",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "Tax Planning",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "Tax on Non - Resident",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "GST Filing",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "ESI Filing",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "PF Filing",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "TDS Filing",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "GST Audit",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "Internal Audit",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "Stock Audit",
		icon: "check-circle",
		description: "",
		category: "Tax"
	},
	{
		title: "Goods and Service Tax (GST)",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Employee State Insurance (ESI)",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "PF Registration",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Company Registration",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "LLP Registration",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Partnership Registration",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Trust Registration",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "IE Code",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "PAN",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "TAN",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Shop and Establishment",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Professional Tax",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Trade Mark",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "FSSAI",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "MSME Registration",
		icon: "check-circle",
		description: "",
		category: "Registration"
	},
	{
		title: "Asset management",
		icon: "check-circle",
		description: "",
		category: "Finance"
	},
	{
		title: "Mutual fund advisory",
		icon: "check-circle",
		description: "",
		category: "Finance"
	},
	{
		title: "Financial planning",
		icon: "check-circle",
		description: "",
		category: "Finance"
	},
	{
		title: "Term Insurance",
		icon: "check-circle",
		description: "",
		category: "insurance"
	},
	{
		title: "Health Insurance",
		icon: "check-circle",
		description: "",
		category: "insurance"
	},
	{
		title: "Vehicle Insurance",
		icon: "check-circle",
		description: "",
		category: "insurance"
	}
];

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Accounts = featuresData.filter((feature) => feature.category === "Accounts");
  const tax = featuresData.filter((feature) => feature.category === "Tax");
  const Registration = featuresData.filter((feature) => feature.category === "Registration");
  const Finance = featuresData.filter((feature) => feature.category === "Finance");
  const insurance = featuresData.filter((feature) => feature.category === "insurance");
  const SEO = {
    title: "OnePointTax. Services | Expert Finance, Tax, and Compliance Solutions",
    description: "Discover OnePointTax's range of professional services, from finance and tax advisory to business compliance and strategic financial planning. We simplify complex processes to help you achieve financial clarity and business success."
  };
  const header = {
    title: "From tax Filings <strong>to</strong> Financial planning",
    text: " Clear and organized, divided into sections like Finance & Accounting, Tax & Legal, Business Compliance, and Financial Advisory"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "classess": "!max-w-6xl mx-auto", "title": header.title, "text": header.text })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Accounting Services", "text": "Simplify Your Financial Management", "data": Accounts })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Tax Services", "text": "Maximize Your Tax Benefits", "data": tax, "classes": "bg-neutral-50 dark:bg-neutral-900" })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Business Registration & Compliance", "text": "Start and Sustain Your Business with Ease", "data": Registration })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Financial Advisory", "text": "Plan for a Secure Financial Future", "data": Finance, "classes": "bg-neutral-50 dark:bg-neutral-900" })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Insurance", "text": "Protect What Matters Most", "data": insurance })} ` })}`;
}, "D:/tax-site/src/pages/services.astro", void 0);

const $$file = "D:/tax-site/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

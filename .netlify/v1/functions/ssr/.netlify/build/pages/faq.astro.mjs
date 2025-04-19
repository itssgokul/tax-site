/* empty css                                  */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Layout } from '../chunks/Layout_BnWE_35o.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_7saHbGJJ.mjs';
import { $ as $$StickySidebar } from '../chunks/StickySidebar_BIJFoUcV.mjs';
/* empty css                               */
import { $ as $$Card } from '../chunks/Card_BK8nP-3t.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://onepointtax.in/");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    title = "OnePointTax \u2013 Simplifying Your Tax, Finance, and Compliance Needs",
    text = "OnePointTax offers comprehensive finance, tax, and compliance services tailored for individuals and businesses. From expert tax filing to financial advisory and business registrations, we simplify complex processes, ensuring peace of mind and precision every step of the way.",
    open = false,
    classes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details${addAttribute(["accordion group", { [`${classes}`]: classes }], "class:list")}${addAttribute(open ? true : void 0, "open")} data-astro-cid-wx4eh2ni> <summary class="accordion__summary" data-astro-cid-wx4eh2ni> ${title} ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "accordion__icon", "data-astro-cid-wx4eh2ni": true })} </summary> <p class="accordion__text" data-astro-cid-wx4eh2ni> ${text} </p> </details> `;
}, "D:/tax-site/src/components/ui/Accordion.astro", void 0);

const $$Astro = createAstro("https://onepointtax.in/");
const $$FaqSticky = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqSticky;
  const { title, text, data, type = "left", classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "StickySidebar", $$StickySidebar, { "classes": classes, "type": type }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Card", $$Card, { "classes": "divide-y divide-neutral-100 dark:divide-neutral-800" }, { "default": ($$result3) => renderTemplate`${data.map((faq) => renderTemplate`${renderComponent($$result3, "FAQ", $$Accordion, { "title": faq.question, "text": faq.reply, "open": faq.open })}`)}` })} `, "sidebar": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${title && renderTemplate`<h3 class="text-3xl">${title}</h3>`} ${text && renderTemplate`<p class="text-lg leading-relaxed">${text}</p>`} </header>` })}`;
}, "D:/tax-site/src/components/blocks/FAQ/FaqSticky.astro", void 0);

const faqData = [
	{
		question: "What is Gross Total Income ?",
		reply: "Gross Total Income is the sum total of your income from all sources, including salary, property, royalty, capital gains etc. We will calculate this for you once you enter it all in.",
		category: "Finance",
		open: false
	},
	{
		question: "Is my Gross Total Income taxable?",
		reply: "No, it isn’t. Your Gross Total Income includes sources that are exempted from tax, and these won’t be included in your net taxable income.",
		category: "Finance",
		open: false
	},
	{
		question: "Can I claim a tax deduction on my Fixed Deposit Account?",
		reply: "You can, but based on certain considerations like the period, amount and the kind of bank.",
		category: "Finance",
		open: false
	},
	{
		question: "Is financial year the same as Assessment year?",
		reply: "No it isn't. Assessment year is the year following the financial year, which is when the tax authorities evaluate your tax statements.",
		category: "Tax",
		open: false
	},
	{
		question: "What is Gross Total Income ?",
		reply: "Gross Total Income is the sum total of your income from all sources, including salary, property, royalty, capital gains etc. We will calculate this for you once you enter it all in.",
		category: "Tax",
		open: false
	},
	{
		question: "What is TDS?",
		reply: "TDS is Tax Deducted at Source, and is usually deducted from the taxable portion of your salary before it reaches you, every month. This is usually mentioned by the company on tax documents.",
		category: "Tax",
		open: false
	},
	{
		question: "What is Advance tax?",
		reply: "Advance tax is the income tax that is payable once your income is more than Rs.10,000 in the given financial year.",
		category: "Tax",
		open: false
	}
];

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Tax = faqData.filter((faq) => faq.category === "Tax");
  const Finance = faqData.filter((faq) => faq.category === "Finance");
  const SEO = {
    title: "OnePointTax. | Get Your Questions Answered with a Smile",
    description: "Dive into the OnePointTax. FAQ Funhouse to get answers to all your questions about pricing, features, and more."
  };
  const header = {
    title: "<strong>F</strong>requently <strong>a</strong>sked <strong>Q</strong>uestion",
    text: "Find answers to common questions about OnepointTax. "
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "FAQ", $$FaqSticky, { "title": "Tax Services", "text": "", "data": Tax })} ${renderComponent($$result2, "FAQ", $$FaqSticky, { "classes": "bg-neutral-50 dark:bg-neutral-900", "title": "Financial Advisory", "text": "", "data": Finance })} ` })}`;
}, "D:/tax-site/src/pages/faq.astro", void 0);

const $$file = "D:/tax-site/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Faq,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

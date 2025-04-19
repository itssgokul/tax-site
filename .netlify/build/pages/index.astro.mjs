/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$Icon, $ as $$Layout } from '../chunks/Layout_BnWE_35o.mjs';
import { $ as $$Section, a as $$Row, b as $$Col } from '../chunks/Col_-kpsvJ5I.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bl8UiN6Z.mjs';
export { renderers } from '../renderers.mjs';

const heroImage = new Proxy({"src":"/_astro/hero-01.CPzLUIC2.png","width":3223,"height":2724,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/tax-site/src/assets/hero-01.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://onepointtax.in/");
const $$HomeCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeCTA;
  const { type = "top-icon", title, icon = "envelope", iconStyle, align, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "intro", "padding": "none", "classes": "dark:bg-neutral-900" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "classes": "items-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "6", "align": "center" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1><strong>Accounting, Tax, Finance</strong> "Onepoint" helps you with the practicalities </h1> <p class="pb-0 text-lg">"We are passionate about the success of our small business clients."</p> ${renderComponent($$result4, "Button", $$Button, { "size": "lg", "classes": "my-2", "link": "/services" }, { "default": ($$result5) => renderTemplate`Our Services` })} ${renderComponent($$result4, "Button", $$Button, { "size": "lg", "classes": "my-2", "style": "neutral", "link": "https://wa.me/919524015826?text=Hello%20Team" }, { "default": ($$result5) => renderTemplate`Say Hi..!
${renderComponent($$result5, "Icon", $$Icon, { "name": "whatsapp", ",": true, "class:list": [
    "shrink-0",
    { [`size-6 text-primary-500`]: iconStyle != "square" },
    { [`size-10 rounded bg-primary-500 p-2 text-white`]: iconStyle === "square" }
  ] })}` })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "6" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": heroImage, "alt": "Illustration representing OnePointTax accounting, tax, and finance services", "class": "h-full w-full mt-3 dark:shadow-neutral-950", "format": "webp" })} ` })} ` })} ` })}`;
}, "D:/tax-site/src/components/blocks/hero/HomeCTA.astro", void 0);

const aboutus = new Proxy({"src":"/_astro/about-us.DsfgiS4Q.svg","width":147,"height":123,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/tax-site/src/assets/about-us.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://onepointtax.in/");
const $$FeatureCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCards;
  const { type = "top-icon", title, icon = "about-us", iconStyle, align, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "features", "classes": "dark:bg-neutral-900" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "7", "classes": "mb-12" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-pretty mb-0 text-5xl text-center md:text-left"><strong> About</strong> Us</h2> <p class="pb-0 text-base text-justify flex mt-3"> <span> ${renderComponent($$result4, "Icon", $$Icon, { "name": "filled-star", "class:list": ["me-2", [
    "shrink-0",
    { [`size-6 text-primary-400`]: iconStyle != "square" },
    { [`size-10 rounded bg-primary-500 p-2 text-white`]: iconStyle === "square" }
  ]] })} </span>
At OnepointTax, we are committed to simplifying the complexities of Tax Services, Accounting,  Financial Advisory, and Business Registration & Compliance services for individuals and businesses. We understand that navigating financial regulations can be overwhelming, which is why we provide expert solutions designed to save you time, reduce stress, and maximize your financial benefits.
</p> <p class="pb-0 text-base text-justify flex"> <span> ${renderComponent($$result4, "Icon", $$Icon, { "name": "filled-star", "class:list": ["me-2", [
    "shrink-0",
    { [`size-6 text-primary-400`]: iconStyle != "square" },
    { [`size-10 rounded bg-primary-500 p-2 text-white`]: iconStyle === "square" }
  ]] })} </span> <span>
Our range of services includes Income Tax Returns, GST and TDS Filings, Accounting Services, Company Registrations,<a class="text-primary-500" href="/services"> and more.</a> Whether you're an individual looking for assistance with personal taxes or a business needing complete financial management, we’re here to handle the details so you can focus on what matters most.
</span> </p> <p class="pb-0 text-base text-justify flex"> <span> ${renderComponent($$result4, "Icon", $$Icon, { "name": "filled-star", "class:list": ["me-2", [
    "shrink-0",
    { [`size-6 text-primary-400`]: iconStyle != "square" },
    { [`size-10 rounded bg-primary-500 p-2 text-white`]: iconStyle === "square" }
  ]] })} </span>
We work closely with each client to understand their unique financial situation and offer tailored solutions that not only meet legal requirements but also optimize tax savings and financial efficiency.
</p> ${renderComponent($$result4, "Button", $$Button, { "size": "lg", "classes": "my-2 ms-7", "link": "/contact" }, { "default": ($$result5) => renderTemplate`Let Us Simplify Your Finances
${renderComponent($$result5, "Icon", $$Icon, { "name": "long-arrow-right", "class:list": [
    "shrink-0",
    { [`size-6`]: iconStyle != "square" },
    { [`size-10 rounded bg-neutral-500 p-2 text-white`]: iconStyle === "square" }
  ] })}` })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "5", "classes": "" }, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Image", $$Image, { "src": aboutus, "alt": "OnePoint Tax. About Us", "class": "h-full w-full dark:shadow-neutral-950", "format": "webp" })} ` })} ` })} ` })}`;
}, "D:/tax-site/src/components/blocks/features/FeatureCards.astro", void 0);

const services = new Proxy({"src":"/_astro/our-sevices.C91UNyAh.svg","width":142,"height":147,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/tax-site/src/assets/our-sevices.svg";
							}
							
							return target[name];
						}
					});

const $$OurServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "features" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "classes": "items-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "5", "classes": "hidden md:block" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": services, "alt": "Illustration representing OnePointTax's range of services", "class": "h-full w-full md:h-5/6 md:w-5/6 dark:shadow-neutral-950", "format": "webp" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "7" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="mb-0 text-pretty text-center text-5xl md:text-left"> <strong> Our</strong> Services
</h2> <div class="-mx-2 -mb-4 flex flex-1 flex-col flex-wrap sm:flex-row"> <div class="mb-4 w-full px-2 sm:w-1/2"> <div class="h-full rounded-br-xl border border-l-0 border-t-0 border-green-500 px-4 py-4"> <h3 class="text-md mb-6 text-2xl font-bold">Tax Services</h3> <p class="mb-0 text-sm">
Stay compliant with our Income Tax Returns, GST & TDS Filings,
							Professional Tax, and Sales Tax/VAT Consultancy. We also manage Company
							Law Compliance, ESI & EPF Returns, and provide Income Tax Consultancy to
							simplify your tax needs. <a href="/services/#Tax Services" class="highlight animate-pulse text-end text-sm font-bold hover:animate-none hover:text-neutral-500">Read more</a> </p> </div> </div> <div class="mb-4 w-full px-2 sm:w-1/2"> <div class="h-full rounded-br-xl border border-l-0 border-t-0 border-green-500 px-4 py-4"> <h3 class="text-md mb-6 text-2xl font-bold">Accounting Services</h3> <p class="mb-0 text-sm">
Streamline your finances with our Accounting Services and Company
							Accounts Management. We handle Bookkeeping and Financial Reporting,
							giving you clear insights so you can focus on growth. <a href="/services/#Finance and Accounting" class="highlight animate-pulse text-end text-sm font-bold hover:animate-none hover:text-neutral-500">Read more</a> </p> </div> </div> <div class="mb-4 w-full px-2 sm:w-1/2"> <div class="h-full rounded-br-xl border border-l-0 border-t-0 border-green-500 px-4 py-4"> <h3 class="text-md mb-6 text-2xl font-bold">
Business <br> Registration & Compliance
</h3> <p class="mb-0 text-sm">
Get your business started with Partnership Registration, Company
							Incorporation, MSME Registration, and FSSAI Registration. We handle
							ongoing needs like Trust Incorporation and ROC Filing to keep your
							business legally sound. <a href="/services/#Business Registration & Compliance" class="highlight animate-pulse text-end text-sm font-bold hover:animate-none hover:text-neutral-500">Read more</a> </p> </div> </div> <div class="mb-4 w-full px-2 sm:w-1/2"> <div class="h-full rounded-br-xl border border-l-0 border-t-0 border-green-500 px-4 py-4"> <h3 class="text-md mb-6 text-2xl font-bold">Financial Advisory</h3> <p class="mb-0 text-sm">
Achieve financial security with our Investment Advisory, Asset
							Management, and Financial Planning services. We offer Mutual Fund
							Advisory and comprehensive Insurance Options like Term, Health, and
							Vehicle Insurance to protect your future. <a href="/services/#Financial Advisory" class="highlight animate-pulse text-end text-sm font-bold hover:animate-none hover:text-neutral-500">Read more</a> </p> </div> </div> </div> ` })} ` })} ` })}`;
}, "D:/tax-site/src/components/blocks/Services/OurServices.astro", void 0);

const stats = new Proxy({"src":"/_astro/our-stats.CrY4H0Yv.svg","width":133,"height":148,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/tax-site/src/assets/our-stats.svg";
							}
							
							return target[name];
						}
					});

const $$WhyUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "whyus" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "classes": "items-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-pretty mb-0 text-center text-5xl"><strong>Why</strong> Us</h2> <p class="pb-0 text-lg">Precision and Expertise, All in OnePoint.</p> <div class="grid w-full grid-cols-1 gap-8 xl:gap-16 md:grid-cols-4"> <div class="space-y-3"> <span class="inline-block p-3 text-primary-500 bg-primary-100 rounded-xl dark:text-white dark:bg-primary-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"></path> </svg> </span> <h3 class="text-2xl font-bold text-md mb-6">We Speak in Plain Language</h3> <p class="text-gray-500 dark:text-gray-300">
We make financial advice easy to understand, without the jargon.
</p> </div> <div class="space-y-3"> <span class="inline-block p-3 text-primary-500 bg-primary-100 rounded-xl dark:text-white dark:bg-primary-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path> </svg> </span> <h3 class="text-2xl font-bold text-md mb-6">Client-Focused Expertise</h3> <p class="text-gray-500 dark:text-gray-300">
Your needs drive our solutions, ensuring personalized support every time.
</p> </div> <div class="space-y-3"> <span class="inline-block p-3 text-primary-500 bg-primary-100 rounded-xl dark:text-white dark:bg-primary-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path> </svg> </span> <h3 class="text-2xl font-bold text-md mb-6">Quality in Everything</h3> <p class="text-gray-500 dark:text-gray-300">
Excellence and accuracy are at the heart of every service we provide.
</p> </div> <div class="space-y-3"> <span class="inline-block p-3 text-primary-500 bg-primary-100 rounded-xl dark:text-white dark:bg-primary-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path> </svg> </span> <h3 class="text-2xl font-bold text-md mb-6">Save up to 49% Than Others</h3> <p class="text-gray-500 dark:text-gray-300">
Enjoy up to 49% savings with us, without compromising quality.
</p> </div> </div> ` })} ` })} ` })} ${renderComponent($$result, "Section", $$Section, { "padding": "bottom", "id": "whyus", "classes": "dark:bg-neutral-900" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "classes": "items-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "5", "classes": "" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": stats, "alt": "OnePointTax. Stats", "class": "w-full h-full md:h-5/6 md:w-5/6 dark:shadow-neutral-950", "format": "webp" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "7", "align": "center" }, { "default": ($$result4) => renderTemplate` <h2 class="text-pretty text-center text-5xl mb-0">Our <strong>Stats</strong></h2> <p class="pb-0 text-lg"> Proof of Excellence in Every Figure!</p> <dl class="grid gap-8 mx-auto text-gray-900 sm:grid-cols-3 shadow-md rounded-lg p-8 max-w-screen-md dark:bg-neutral-900  dark:text-white"> <div class="flex flex-col items-center justify-center"> <dt class="mb-2 text-3xl md:text-4xl font-extrabold highlight">600+</dt> <dd class="text-sm mb-0">Happy clients</dd> </div> <div class="flex flex-col items-center justify-center"> <dt class="mb-2 text-3xl md:text-4xl font-extrabold highlight">10</dt> <dd class="text-sm mb-0">Expert Professional</dd> </div> <div class="flex flex-col items-center justify-center"> <dt class="mb-2 text-3xl md:text-4xl font-extrabold highlight">4+</dt> <dd class="text-sm mb-0">Years of service</dd> </div> </dl> ` })} ` })} ` })}`;
}, "D:/tax-site/src/components/blocks/whyUs/WhyUs.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "padding": "bottom", "id": "testimonial" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "classes": "items-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-pretty mb-0 text-center text-5xl"><strong>Happy </strong> Stories</h2> <p class="pb-0 text-lg">Your Financial Partner, Every Step of the Way.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-white"> <div class="shadow rounded-lg p-8"> <p class="mb-4">"Their team is reliable, knowledgeable, and always available when I have questions!"</p> <p class="font-medium">- Madesh <small>(Small Business Owner)</small></p> </div> <div class="shadow rounded-lg p-8"> <p class="mb-4">"Onepointtax transformed the way I approach my finances."</p> <p class="font-medium">- Prakash <small>(Freelancer)</small></p> </div> <div class="shadow rounded-lg p-8"> <p class="mb-4">"As a new startup, we needed reliable support for our accounting and compliance needs. OnepointTax provided exactly that, guiding us through every step with clarity and professionalism."</p> <p class="font-medium">- Steffi <small>(Startup Founder)</small></p> </div> </div> ` })} ` })} ` })}`;
}, "D:/tax-site/src/components/blocks/Testimonial/Testimonial.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "OnePointTax | Your Partner in Finance & Tax Solutions",
    description: "Simplify your finances with OnePointTax! Expert in Income Tax, Accounting services, GST & TDS filings, Business registration, and Financial advisory."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HomeCTA, {})} ${renderComponent($$result2, "WhyUs", $$WhyUs, {})} ${renderComponent($$result2, "OurServices", $$OurServices, {})} ${renderComponent($$result2, "Features", $$FeatureCards, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ` })}`;
}, "D:/tax-site/src/pages/index.astro", void 0);

const $$file = "D:/tax-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

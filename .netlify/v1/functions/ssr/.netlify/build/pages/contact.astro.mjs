/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BnWE_35o.mjs';
import { $ as $$GoogleSignInForm } from '../chunks/GoogleSignInForm_DMhBvRJ1.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "OnePointTax. | Get in Touch with Us",
    description: "Have questions or need assistance? Contact OnePointTax. today for support, inquiries, or feedback. Our team is here to help you make the most of your OnePointTax. experience."
  };
  const header = {
    title: "We're <strong>here</strong>  to help!",
    text: 'Got questions or need assistance? Fill out the form below, and our team will get back to you promptly to discuss how we can support your financial and business needs. For faster assistance, <br> <span class="text-primary-500"> Feel Free </span> to Call, Email, or reach us on WhatsApp.'
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24"> <div class="container mx-auto px-4"> <div class="mx-auto mb-12 max-w-3xl text-center"> <h1 class="mb-4 font-headings text-4xl font-black tracking-tight text-neutral-950 md:text-6xl dark:text-white">${unescapeHTML(header.title)}</h1> <p class="text-lg text-neutral-500 dark:text-neutral-400">${unescapeHTML(header.text)}</p> </div>  ${renderComponent($$result2, "GoogleSignInForm", $$GoogleSignInForm, {})} </div> </section> ` })}`;
}, "D:/tax-site/src/pages/contact.astro", void 0);

const $$file = "D:/tax-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

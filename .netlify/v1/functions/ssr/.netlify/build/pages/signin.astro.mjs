/* empty css                                  */
import { c as createComponent, r as renderComponent, i as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BnWE_35o.mjs';
import { $ as $$GoogleSignInForm } from '../chunks/GoogleSignInForm_DMhBvRJ1.mjs';
import { $ as $$Section, a as $$Row, b as $$Col } from '../chunks/Col_-kpsvJ5I.mjs';
export { renderers } from '../renderers.mjs';

const transition = "none";
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Sign In | OnePointTax",
    description: "Sign in to your OnePointTax account using Google."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Row", $$Row, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Col", $$Col, { "span": "12", "classes": "flex justify-center" }, { "default": ($$result5) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-md"> ${renderComponent($$result5, "GoogleSignInForm", $$GoogleSignInForm, {})} </div> ` })} ` })} ` })} ` })} ${renderScript($$result, "D:/tax-site/src/pages/signin.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/tax-site/src/pages/signin.astro", void 0);

const $$file = "D:/tax-site/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Signin,
	file: $$file,
	transition,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

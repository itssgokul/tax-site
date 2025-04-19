/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button, b as $$Icon } from '../chunks/Layout_06QFzFFe.mjs';
import { $ as $$Section, a as $$Row, b as $$Col } from '../chunks/Col_CXK7UgQZ.mjs';
import { $ as $$Spacer } from '../chunks/Spacer_Dg3SIBCq.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bl8UiN6Z.mjs';
export { renderers } from '../renderers.mjs';

const soon = new Proxy({"src":"/_astro/comming-soon.6PJ9lEmU.svg","width":155,"height":155,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/tax-site/src/assets/comming-soon.svg";
							}
							
							return target[name];
						}
					});

const $$ComingSoon = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Oops! OnePointTax. Lost the Trail - Page Not Found",
    description: " Looks like we chased our tail and lost the page. Don't worry, let's get you back on the OnePointTax. trail!"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "bottom" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center"><strong>Tools & Calculator</strong> </h1> <h1 class="text-center mb-0">Coming Soon<strong>! </strong> Under Devlopment<strong>!</strong> </h1> ${renderComponent($$result3, "Row", $$Row, { "flex": true, "classes": "text-center" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": soon, "alt": "Coming Soon", "class": "h-full w-full md:w-2/4 md:h-2/4 md:-translate-y-20 dark:shadow-neutral-950", "format": "webp" })} ` })} ${renderComponent($$result3, "Row", $$Row, { "flex": true, "classes": "text-center items-center justify-center" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Col", $$Col, { "span": "2" })} ${renderComponent($$result4, "Col", $$Col, { "span": "8" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Spacer", $$Spacer, { "size": "2", "desktopSize": "4" })} ${renderComponent($$result5, "Button", $$Button, { "link": "/" }, { "default": ($$result6) => renderTemplate` Return to homepage ${renderComponent($$result6, "Icon", $$Icon, { "name": "long-arrow-right" })} ` })} ` })} ${renderComponent($$result4, "Col", $$Col, { "span": "2" })} ` })} ` })} ` })}`;
}, "D:/tax-site/src/pages/coming-soon.astro", void 0);

const $$file = "D:/tax-site/src/pages/coming-soon.astro";
const $$url = "/coming-soon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ComingSoon,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

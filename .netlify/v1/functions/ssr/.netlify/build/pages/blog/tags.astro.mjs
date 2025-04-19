/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_06QFzFFe.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_7sVUQKzn.mjs';
import { $ as $$BlogPosts } from '../../chunks/BlogPosts_Bt7bwT3S.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DpgAjiTA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": "Tags" })} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, { "data": allPosts })} ` })}`;
}, "D:/tax-site/src/pages/blog/tags/index.astro", void 0);

const $$file = "D:/tax-site/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

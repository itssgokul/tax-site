/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$PostLayout } from '../../chunks/PostLayout_gn9wlVnO.mjs';
import { a as getEntry, g as getCollection } from '../../chunks/_astro_content_DpgAjiTA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://onepointtax.in/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug }
    // props: { slug: entry.slug } // Removed props as slug is accessed via Astro.params
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug || typeof slug !== "string") {
    return Astro2.redirect("/404");
  }
  const entry = await getEntry("blog", slug);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$PostLayout, { "frontmatter": entry.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "D:/tax-site/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/tax-site/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

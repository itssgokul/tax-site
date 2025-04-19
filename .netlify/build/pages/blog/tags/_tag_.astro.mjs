/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BnWE_35o.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_7saHbGJJ.mjs';
import { $ as $$BlogPosts } from '../../../chunks/BlogPosts_Ky2ZmFGV.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_YtFwpWCF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://onepointtax.in/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const SEO = {
    title: `OnePointTax. | posts tagges as ` + tag,
    description: "Explore OnePointTax's latest news"
  };
  const header = {
    title: `OnePointTax posts about <br><strong>` + tag + `</strong>`,
    text: `Stay informed, stay productive with all the latest from OnePointTax.`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, { "data": posts })} ` })}`;
}, "D:/tax-site/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "D:/tax-site/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

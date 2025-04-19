import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, e as renderSlot } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Layout } from './Layout_06QFzFFe.mjs';
import { $ as $$Section, a as $$Row, b as $$Col } from './Col_CXK7UgQZ.mjs';
import { $ as $$Badge } from './Badge_BzUedGMn.mjs';
/* empty css                          */

const $$Astro$2 = createAstro("https://onepointtax.in/");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const url = new URL(Astro2.request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = ["Home", ...segments];
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(["breadcrumbs", { [`${classes}`]: classes }], "class:list")} data-astro-cid-licbrrf5> <ol class="breadcrumbs__list" data-astro-cid-licbrrf5> ${breadcrumbs.map((segment, index) => renderTemplate`<li class="breadcrumbs__list-item" data-astro-cid-licbrrf5> <a${addAttribute(`/${segments.slice(0, index).join("/")}`, "href")} class="breadcrumbs__item-link" data-astro-cid-licbrrf5> ${index === 0 ? segment : segment.replace(/-/g, " ")} </a> ${index < breadcrumbs.length - 1 && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-left", "class": "breadcrumbs__item-icon", "data-astro-cid-licbrrf5": true })}`} </li>`)} </ol> </nav> `;
}, "D:/tax-site/src/components/ui/Breadcrumbs.astro", void 0);

const $$Astro$1 = createAstro("https://onepointtax.in/");
const $$BlogPostHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostHero;
  const { tags, title, author, publishDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "post-intro", "classes": "bg-neutral-50 dark:bg-neutral-900", "data-astro-cid-s5km4abd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-s5km4abd": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "data-astro-cid-s5km4abd": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<header class="post-header" data-astro-cid-s5km4abd> ${renderComponent($$result4, "Breadcrumbs", $$Breadcrumbs, { "classes": "mb-6", "data-astro-cid-s5km4abd": true })} <h1 class="post-header__title" data-astro-cid-s5km4abd> ${title} </h1> ${author ? renderTemplate`<p class="page-header__text" data-astro-cid-s5km4abd>
Written by, ${author} ${publishDate && "on " + publishDate} </p>` : publishDate && renderTemplate`<p class="page-header__text" data-astro-cid-s5km4abd>Published on, ${publishDate}</p>`} </header> ${tags && renderTemplate`<div class="post-header__tags" data-astro-cid-s5km4abd> ${tags.map((tag) => renderTemplate`${renderComponent($$result4, "Badge", $$Badge, { "name": tag, "link": `/blog/tags/` + tag, "classes": "capitalize", "data-astro-cid-s5km4abd": true })}`)} </div>`}` })} ` })} ` })} `;
}, "D:/tax-site/src/components/blocks/blog/BlogPostHero.astro", void 0);

const $$Astro = createAstro("https://onepointtax.in/");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  const { title, description, image, pubDate, author, tags } = frontmatter;
  const SEO = {
    title: `${title} | OnePointTax.`,
    // Use destructured title
    description: `${description}`,
    // Use destructured description
    ogImage: image
    // Use destructured image
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description, "ogImage": SEO.ogImage, "data-astro-cid-gjtny2mx": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BlogPostHero", $$BlogPostHero, { "tags": tags, "title": title, "author": author, "publishDate": pubDate.toLocaleDateString("en-US", {
    // Use destructured pubDate
    year: "numeric",
    month: "long",
    day: "numeric"
  }), "data-astro-cid-gjtny2mx": true })} ${maybeRenderHead()}<div class="post-body basic-text basic-text--lg" data-astro-cid-gjtny2mx> ${renderSlot($$result2, $$slots["default"])} </div> ` })} `;
}, "D:/tax-site/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };

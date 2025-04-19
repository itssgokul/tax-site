import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent, F as Fragment } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Section, a as $$Row, b as $$Col } from './Col_CXK7UgQZ.mjs';
import { $ as $$Image } from './_astro_assets_Bl8UiN6Z.mjs';
import { $ as $$Card } from './Card_BK8nP-3t.mjs';
import 'clsx';
/* empty css                         */
import { $ as $$Badge } from './Badge_BzUedGMn.mjs';
import { g as getCollection } from './_astro_content_DpgAjiTA.mjs';

const $$Astro$3 = createAstro("https://onepointtax.in/");
const $$CardBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardBody;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["card__body", { [`${classes}`]: classes }], "class:list")} data-astro-cid-4v6mohoo> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "D:/tax-site/src/components/ui/cards/partials/CardBody.astro", void 0);

const $$Astro$2 = createAstro("https://onepointtax.in/");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    title = "",
    subtitle,
    image,
    link,
    classes = "!shadow-none border border-neutral-100 dark:border-neutral-800",
    tags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "classes": classes, "data-astro-cid-ulirv4bf": true }, { "default": ($$result2) => renderTemplate`${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": title, "width": 600, "height": 400, "data-astro-cid-ulirv4bf": true })}`}${renderComponent($$result2, "CardBody", $$CardBody, { "data-astro-cid-ulirv4bf": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3 class="post-title" data-astro-cid-ulirv4bf> <a${addAttribute(link, "href")} data-astro-cid-ulirv4bf>${title}</a> </h3> <h4 class="post-subtitle" data-astro-cid-ulirv4bf>${subtitle}</h4> ${renderSlot($$result3, $$slots["default"])} ` })} ${tags && renderTemplate`<div class="post-tags" data-astro-cid-ulirv4bf> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "name": tag, "link": `/blog/tags/` + tag, "classes": "capitalize", "data-astro-cid-ulirv4bf": true })}`)} </div>`}` })} `;
}, "D:/tax-site/src/components/ui/cards/BlogCard.astro", void 0);

const $$Astro$1 = createAstro("https://onepointtax.in/");
const $$TagNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagNavigation;
  const posts = await getCollection("blog");
  const tags = [...new Set(posts.map((post) => post.data.tags).flat())];
  const currentPath = new URL(Astro2.request.url).pathname;
  const pathSegments = currentPath.split("/").filter((segment) => segment.length > 0);
  const currentTag = pathSegments[pathSegments.length - 1] || "";
  return renderTemplate`${maybeRenderHead()}<div class="tags" data-astro-cid-4odnjaj3> ${renderComponent($$result, "Badge", $$Badge, { "link": `/blog/`, "name": `All`, "type": `${currentTag === "blog" ? "primary" : "neutral"}`, "data-astro-cid-4odnjaj3": true })} ${tags.map((tag) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-4odnjaj3": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Badge", $$Badge, { "link": `/blog/tags/${tag}`, "name": tag, "type": `${currentTag === tag ? "primary" : "neutral"}`, "data-astro-cid-4odnjaj3": true })} ` })}`)} </div> `;
}, "D:/tax-site/src/components/ui/blog/TagNavigation.astro", void 0);

const $$Astro = createAstro("https://onepointtax.in/");
const $$BlogPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPosts;
  const { data: allPosts } = Astro2.props;
  const sortedPosts = Array.isArray(allPosts) ? allPosts.sort((a, b) => {
    const dateA = a?.data?.pubDate ? new Date(a.data.pubDate).getTime() : 0;
    const dateB = b?.data?.pubDate ? new Date(b.data.pubDate).getTime() : 0;
    return dateB - dateA;
  }) : [];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TagNavigation", $$TagNavigation, {})} ` })} ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "4" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Post", $$BlogCard, { "link": `/blog/${post.slug}`, "title": post.data.title, "subtitle": `By ${post.data.author} on ${new Date(post.data.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, "image": post.data.image, "tags": post.data.tags }, { "default": ($$result5) => renderTemplate`${post.data.description}` })} ` })}`)}` })} ` })}`;
}, "D:/tax-site/src/components/blocks/blog/BlogPosts.astro", void 0);

export { $$BlogPosts as $ };

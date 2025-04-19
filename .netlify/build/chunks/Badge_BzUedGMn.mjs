import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://onepointtax.in/");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { name, link, type = "neutral", classes } = Astro2.props;
  return renderTemplate`${link ? renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["badge", { [`${classes}`]: classes }, { [`badge--${type}`]: type }], "class:list")} data-astro-cid-35zd7xm4>${name}</a>` : renderTemplate`<span${addAttribute(["badge", { [`${classes}`]: classes }, { [`badge--${type}`]: type }], "class:list")} data-astro-cid-35zd7xm4>${name}</span>`}`;
}, "D:/tax-site/src/components/ui/Badge.astro", void 0);

export { $$Badge as $ };

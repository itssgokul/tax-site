import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                       */

const $$Astro = createAstro("https://onepointtax.in/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { link, classes } = Astro2.props;
  return renderTemplate`${link ? renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["card", { [`${classes}`]: classes }], "class:list")} data-astro-cid-eypzv45g>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<div${addAttribute(["card", { [`${classes}`]: classes }], "class:list")} data-astro-cid-eypzv45g>${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "D:/tax-site/src/components/ui/cards/partials/Card.astro", void 0);

export { $$Card as $ };

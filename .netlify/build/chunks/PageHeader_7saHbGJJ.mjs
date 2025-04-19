import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Section, a as $$Row, b as $$Col } from './Col_-kpsvJ5I.mjs';
/* empty css                         */

const $$Astro = createAstro("https://onepointtax.in/");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { id = "intro", title, text, classes, classess } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": `bg-neutral-50 dark:bg-neutral-900 ${classes}`, "data-astro-cid-bl63ps4a": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-bl63ps4a": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "data-astro-cid-bl63ps4a": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<header${addAttribute(["page-header", classess], "class:list")} data-astro-cid-bl63ps4a> <h1 class="page-header__title" data-astro-cid-bl63ps4a>${unescapeHTML(title)}</h1> <p class="page-header__text" data-astro-cid-bl63ps4a>${unescapeHTML(text)}</p> </header> ` })} ` })} ` })} `;
}, "D:/tax-site/src/components/blocks/hero/PageHeader.astro", void 0);

export { $$PageHeader as $ };

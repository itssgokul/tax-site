import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import { $ as $$Section, a as $$Row, b as $$Col } from './Col_-kpsvJ5I.mjs';
/* empty css                       */

const $$Astro = createAstro("https://onepointtax.in/");
const $$StickySidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StickySidebar;
  const { id, type = "left", classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { ...id ? { id } : {}, "classes": classes, "stickyCol": true, "data-astro-cid-72tgqkab": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-72tgqkab": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "3", "classes": type === "right" ? "lg:order-2" : "", "data-astro-cid-72tgqkab": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="sticky-sidebar" data-astro-cid-72tgqkab> ${renderSlot($$result4, $$slots["sidebar"])} </div> ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "9", "data-astro-cid-72tgqkab": true }, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })} ` })} ` })} `;
}, "D:/tax-site/src/components/blocks/basic/StickySidebar.astro", void 0);

export { $$StickySidebar as $ };

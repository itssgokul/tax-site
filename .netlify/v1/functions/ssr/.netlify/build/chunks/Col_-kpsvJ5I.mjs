import { b as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, e as renderSlot, a as renderTemplate } from './astro/server_BQC3fY5D.mjs';
/* empty css                         */
import 'clsx';
import 'kleur/colors';

const $$Astro$2 = createAstro("https://onepointtax.in/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id,
    fullWidth,
    stickyCol = false,
    mode,
    padding = "both",
    bg,
    bgPosition = "center",
    bgHeight = "100%",
    classes
  } = Astro2.props;
  const bgStyle = bg ? {
    backgroundImage: `url(${bg.src})`,
    height: bgHeight,
    backgroundPosition: bgPosition
  } : {
    height: bgHeight
  };
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(id ? { id } : {})}${addAttribute([
    "section",
    { "section--sticky-col": stickyCol },
    { "section--fullwidth": fullWidth },
    { "section--padded": padding === "both" },
    { "section--padded-t": padding === "top" },
    { "section--padded-b": padding === "bottom" },
    { [`${mode}`]: mode },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-5v3l7meg> <div class="section__bg"${addAttribute(bgStyle, "style")} data-astro-cid-5v3l7meg></div> <div class="container" data-astro-cid-5v3l7meg> ${renderSlot($$result, $$slots["default"])} </div> </section> `;
}, "D:/tax-site/src/components/ui/Section.astro", void 0);

const $$Astro$1 = createAstro("https://onepointtax.in/");
const $$Row = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Row;
  const { flex, mode, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["row", { "row--flex": flex }, { [`${classes}`]: classes }, { [`${mode}`]: mode }], "class:list")} data-astro-cid-eq54w2gt> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "D:/tax-site/src/components/ui/Row.astro", void 0);

const $$Astro = createAstro("https://onepointtax.in/");
const $$Col = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Col;
  const { span, spanMobile = "12", align, classes } = Astro2.props;
  const hasContent = Astro2.slots.default;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "col",
    { [`col-span-${spanMobile}`]: spanMobile },
    { [`lg:col-span-${span}`]: span },
    { [`text-${align}`]: align },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-poit3qco> ${hasContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`<div class="col__placeholder" data-astro-cid-poit3qco></div>`} </div> `;
}, "D:/tax-site/src/components/ui/Col.astro", void 0);

export { $$Section as $, $$Row as a, $$Col as b };

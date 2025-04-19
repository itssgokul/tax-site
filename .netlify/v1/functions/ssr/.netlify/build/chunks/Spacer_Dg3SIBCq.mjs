import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BQC3fY5D.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://onepointtax.in/");
const $$Spacer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Spacer;
  const { size = "6", desktopSize = "12" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([{ [`h-${size}`]: size }, { [`lg:h-${desktopSize}`]: desktopSize }], "class:list")}></div>`;
}, "D:/tax-site/src/components/ui/Spacer.astro", void 0);

export { $$Spacer as $ };

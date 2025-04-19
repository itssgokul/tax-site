import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CBOP6Xou.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/submit-contact.astro.mjs');
const _page3 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page4 = () => import('./pages/blog/tags.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page8 = () => import('./pages/coming-soon.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/faq.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/services.astro.mjs');
const _page13 = () => import('./pages/signin.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/submit-contact.ts", _page2],
    ["src/pages/blog/tags/[tag].astro", _page3],
    ["src/pages/blog/tags/index.astro", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/blog/[...slug].astro", _page7],
    ["src/pages/coming-soon.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/faq.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/services.astro", _page12],
    ["src/pages/signin.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0a9d54b6-e213-4ae9-a58d-49af5025c07f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

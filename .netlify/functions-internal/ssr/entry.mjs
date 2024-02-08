import { renderers } from './renderers.mjs';
import { manifest } from './manifest_PE5u3X-w.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_LcVq5Fd8.mjs');
const _page1 = () => import('./chunks/index_KiHoM2MG.mjs');
const _page2 = () => import('./chunks/confirm_ekfh3muN.mjs');
const _page3 = () => import('./chunks/thanks_5s0wkQg2.mjs');
const _page4 = () => import('./chunks/_page__TWxwZfEZ.mjs');
const _page5 = () => import('./chunks/_slug__tN76zoSR.mjs');
const _page6 = () => import('./chunks/_page__gBOPZH7W.mjs');
const _page7 = () => import('./chunks/index__E_Yebct.mjs');
const _page8 = () => import('./chunks/_page__CzoDEFD0.mjs');
const _page9 = () => import('./chunks/_slug__1t72Jlp_.mjs');
const _page10 = () => import('./chunks/index_cxsWj4Zf.mjs');
const _page11 = () => import('./chunks/index_xvUz6cbF.mjs');
const _page12 = () => import('./chunks/index_mje8HPSz.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact/index.astro", _page1],
    ["src/pages/contact/confirm.astro", _page2],
    ["src/pages/contact/thanks.astro", _page3],
    ["src/pages/news/page/[page].astro", _page4],
    ["src/pages/news/[slug].astro", _page5],
    ["src/pages/pokemon/category/[category]/page/[page].astro", _page6],
    ["src/pages/pokemon/category/[category]/index.astro", _page7],
    ["src/pages/pokemon/page/[page].astro", _page8],
    ["src/pages/pokemon/[slug].astro", _page9],
    ["src/pages/index.astro", _page10],
    ["src/pages/news/index.astro", _page11],
    ["src/pages/pokemon/index.astro", _page12]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "c927d2cf-7219-49e1-b054-80814a8e4083"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

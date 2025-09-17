import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CX_F4STg.mjs';
import { manifest } from './manifest_DgIdBnMA.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_HOYERTjv.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_Cpfep3O8.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c19ae5c5-f23f-43c9-aedf-a826d702fda2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

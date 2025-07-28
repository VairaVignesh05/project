
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 846, hash: '27df005bdf81593a09bc160f407bf8a767c522f12331108b06209ea8b4a5114d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '28b4dc19e508865ce190dace8748f9fa785fc5132f37d7ba6538c1682d23695b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21958, hash: '33a9385ea4adef4a239d31c2bb7738ae64b983fcd2999f83660a3d5e5a90753e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BF6HSDYB.css': {size: 230, hash: 'dURoFEuz4e8', text: () => import('./assets-chunks/styles-BF6HSDYB_css.mjs').then(m => m.default)}
  },
};

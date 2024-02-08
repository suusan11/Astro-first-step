export { renderers } from '../renderers.mjs';

const page = () => import('./pages/_page__ixKidnd1.mjs').then(n => n.f);

export { page };

import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_9JpyRYba.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$PageTitle, $ as $$Layout } from './_page__ixKidnd1.mjs';
import '../thanks.62d14f66_w40geAFS.mjs';

const $$Astro = createAstro();
const $$Thanks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thanks;
  const metas = {
    title: "THANKS",
    discription: "\u554F\u3044\u5408\u308F\u305B\u3010\u5B8C\u4E86\u3011\u306E\u30DA\u30FC\u30B8\u{1F353}",
    dir: "/thanks",
    path: "../"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false, "data-astro-cid-eaplqb2c": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue" data-astro-cid-eaplqb2c> <div class="l-container" data-astro-cid-eaplqb2c> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "\u304A\u554F\u3044\u5408\u308F\u305B\u3010\u5B8C\u4E86\u3011", "isWhite": true, "data-astro-cid-eaplqb2c": true })} <div class="lead__wrap" data-astro-cid-eaplqb2c> <h2 class="title" data-astro-cid-eaplqb2c>サンキュー！！</h2> </div> </div> </section> ` })} `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/contact/thanks.astro", void 0);

const $$file = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/contact/thanks.astro";
const $$url = "/contact/thanks";

export { $$Thanks as default, $$file as file, $$url as url };

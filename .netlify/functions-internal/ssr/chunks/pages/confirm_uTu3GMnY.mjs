import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_9JpyRYba.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$PageTitle, $ as $$Layout } from './_page__ixKidnd1.mjs';
import '../confirm.ade05b26_w40geAFS.mjs';
import '../confirm.92d76cab_w40geAFS.mjs';

const $$Astro$1 = createAstro();
const $$FormButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormButton;
  const { type, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="form__button"${addAttribute(type, "type")}><span class="button__text">${text}</span></button> <!-- <button class="form__button g-recaptcha" data-sitekey="{reCAPTCHA(v3)用サイトキーがここに}" data-callback="onSubmit" data-action="submit" type={type}><span class="button__text">{text}</span></button> --> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/FormButton.astro", void 0);

const $$Astro = createAstro();
const $$Confirm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Confirm;
  const metas = {
    title: "CONFIRM",
    discription: "\u554F\u3044\u5408\u308F\u305B\u3010\u78BA\u8A8D\u3011\u306E\u30DA\u30FC\u30B8\u{1F353}",
    dir: "/confirm",
    path: "../"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false, "data-astro-cid-ll326eo4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue" data-astro-cid-ll326eo4> <div class="l-container" data-astro-cid-ll326eo4> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "\u304A\u554F\u3044\u5408\u308F\u305B\u3010\u78BA\u8A8D\u3011", "isWhite": true, "data-astro-cid-ll326eo4": true })} <form action="" method="POST" data-astro-cid-ll326eo4> <dl data-astro-cid-ll326eo4> <dt data-astro-cid-ll326eo4>メールアドレス</dt> <dd data-astro-cid-ll326eo4> <p class="input__text" data-astro-cid-ll326eo4>会社名が入ります</p> </dd> <dt data-astro-cid-ll326eo4>コメント</dt> <dd data-astro-cid-ll326eo4> <p class="input__text" data-astro-cid-ll326eo4>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p> </dd> </dl> ${renderComponent($$result2, "FormButton", $$FormButton, { "type": "submit", "text": "\u5185\u5BB9\u3092\u78BA\u8A8D\u3059\u308B", "data-astro-cid-ll326eo4": true })} ${renderComponent($$result2, "FormButton", $$FormButton, { "type": "button", "text": "\u5165\u529B\u753B\u9762\u306B\u623B\u308B", "data-astro-cid-ll326eo4": true })} </form> </div> </section> ` })} `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/contact/confirm.astro", void 0);

const $$file = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/contact/confirm.astro";
const $$url = "/contact/confirm";

const confirm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Confirm,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormButton as $, confirm as c };

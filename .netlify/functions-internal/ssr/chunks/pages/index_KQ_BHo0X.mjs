import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_9JpyRYba.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$PageTitle, $ as $$Layout, b as $$CharacterCard, c as $$Pagination, d as $$NewsCard } from './_page__ixKidnd1.mjs';
import { $ as $$FormButton } from './confirm_uTu3GMnY.mjs';
import '../index.661a9648_w40geAFS.mjs';
import '../index.2c419d23_w40geAFS.mjs';
import { $ as $$Image } from './generic_TkWY2sMa.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$b = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$4;
  const metas = {
    title: "CONTACT",
    discription: "\u554F\u3044\u5408\u308F\u305B(\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9)\u306E\u30DA\u30FC\u30B8\u{1F353}",
    dir: "/contact",
    path: "../"
  };
  return renderTemplate(_a || (_a = __template(["", '  <!-- \u5C02\u7528\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u5FC5\u8981 --> <!-- <script is:inline src="https://www.google.com/recaptcha/api.js"><\/script> -->'])), renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false, "data-astro-cid-ahc3q4vw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue" data-astro-cid-ahc3q4vw> <div class="l-container" data-astro-cid-ahc3q4vw> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "\u304A\u554F\u3044\u5408\u308F\u305B", "isWhite": true, "data-astro-cid-ahc3q4vw": true })} <form action="https://ssgform.com/s/KgbqKFobDoKy" method="POST" id="astro-form" data-astro-cid-ahc3q4vw> <dl data-astro-cid-ahc3q4vw> <dt data-astro-cid-ahc3q4vw><label class="required" data-astro-cid-ahc3q4vw>メールアドレス</label></dt> <dd data-astro-cid-ahc3q4vw> <input name="メールアドレス" required="required" type="email" data-astro-cid-ahc3q4vw> </dd> <dt data-astro-cid-ahc3q4vw><label data-astro-cid-ahc3q4vw>コメント</label></dt> <dd data-astro-cid-ahc3q4vw> <textarea name="コメント" data-astro-cid-ahc3q4vw></textarea> </dd> </dl> ${renderComponent($$result2, "FormButton", $$FormButton, { "type": "submit", "text": "\u9001\u4FE1\u3059\u308B", "data-astro-cid-ahc3q4vw": true })} </form> </div> </section> ` }));
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/contact/index.astro", void 0);

const $$file$4 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/contact/index.astro";
const $$url$4 = "/contact";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
async function getStaticPaths() {
  const perPage = 3;
  const result = [];
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat?per_page=100`);
  const categories = await res.json();
  for (const cat of categories) {
    const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?per_page=${perPage}&character_cat=${cat.id}&acf_format=standard`);
    const posts = await res2.json();
    const total = Number(res2.headers.get("x-wp-totalpages"));
    const pages = Array(+total).fill(null).map((_, i) => i + 1);
    result.push({ params: { category: cat.slug }, props: { posts, total, catName: cat.name, pages, firstPage: 1 } });
  }
  return result;
}
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$3;
  const metas = {
    title: "POKEMON",
    discription: "CMS(カスタムフィールド)のページ🍓",
    dir: "/pokemon",
    path: "../"
  };
  const { category } = Astro2.params;
  const { posts, total, catName, pages, firstPage } = Astro2.props;
  const getTermInfo = async (termId) => {
    const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat/${termId}`);
    const termData = await res.json();
    return termData.name || "未分類";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue"> <div class="l-container"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": `${catName}タイプのポケモン`, "isWhite": true })} ${posts.map((post) => renderTemplate`${renderComponent($$result2, "CharacterCard", $$CharacterCard, { "href": `/pokemon/${post.slug}`, "thumbnail": post.thumbnail.url, "alt": post.acf.name, "name": post.acf.name, "cats": post.character_cat.map((catId) => getTermInfo(catId)) })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "pages": pages, "currentPage": firstPage, "parentPage": `pokemon/category/${category}` })} </div> </section> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/category/[category]/index.astro", void 0);
const $$file$3 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/category/[category]/index.astro";
const $$url$3 = "/pokemon/category/[category]";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    getStaticPaths,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$TextScroll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TextScroll;
  return renderTemplate`${maybeRenderHead()}<div class="text-scroll font-en" data-astro-cid-zw7dracv> <span class="text" data-astro-cid-zw7dracv>It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro.</span> <span class="text" data-astro-cid-zw7dracv>It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro.</span> <span class="text" data-astro-cid-zw7dracv>It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro. It should be impossible to build a slow website in Astro.</span> </div> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/TextScroll.astro", void 0);

const $$Astro$8 = createAstro();
const $$CommonButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CommonButton;
  const { href, text, isEng } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["button js-text-split", Astro2.props.bgColor, { font_en: isEng }], "class:list")}>${text}</a>  `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/CommonButton.astro", void 0);

const $$Astro$7 = createAstro();
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { text, isWhite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(["section__title", { white: isWhite }], "class:list")} data-astro-cid-azbpcp4f>${text}</h2> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/SectionTitle.astro", void 0);

const $$Astro$6 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-dohjnao5> <h3 class="card__title" data-astro-cid-dohjnao5>${title}</h3> <p class="card__text" data-astro-cid-dohjnao5>${text}</p> </div> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/Card.astro", void 0);

const case1 = new Proxy({"src":"/_astro/case1.MT0d-z5k.jpg","width":600,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/cases/case1.jpg";
							}
							
							return target[name];
						}
					});

const case2 = new Proxy({"src":"/_astro/case2.zqKZUoLV.jpg","width":600,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/cases/case2.jpg";
							}
							
							return target[name];
						}
					});

const case3 = new Proxy({"src":"/_astro/case3.hOtFM2Fu.jpg","width":600,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/cases/case3.jpg";
							}
							
							return target[name];
						}
					});

const case4 = new Proxy({"src":"/_astro/case4.jqLskdZj.jpg","width":600,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/cases/case4.jpg";
							}
							
							return target[name];
						}
					});

const case5 = new Proxy({"src":"/_astro/case5.lccfVb6v.jpg","width":600,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/cases/case5.jpg";
							}
							
							return target[name];
						}
					});

const case6 = new Proxy({"src":"/_astro/case6.NE_QcmEp.jpg","width":600,"height":336,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/cases/case6.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$CasesSwiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CasesSwiper;
  const cases = [
    {
      href: "https://www.kindai.ac.jp/covid19/",
      img: case1,
      alt: "\u8FD1\u757F\u5927\u5B66\u306E\u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u5BFE\u5FDC"
    },
    {
      href: "https://jp-news.mercari.com/10th-anniversary/",
      img: case2,
      alt: "\u30E1\u30EB\u30AB\u30EA10\u5468\u5E74\u7279\u8A2D\u30B5\u30A4\u30C8"
    },
    {
      href: "https://www.kindai.ac.jp/covid19/",
      img: case3,
      alt: "\u8FD1\u757F\u5927\u5B66\u306E\u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u5BFE\u5FDC"
    },
    {
      href: "https://corp.infomart.co.jp/",
      img: case4,
      alt: "\u682A\u5F0F\u4F1A\u793E\u30A4\u30F3\u30D5\u30A9\u30DE\u30FC\u30C8"
    },
    {
      href: "https://newpeace.jp/",
      img: case5,
      alt: "NEWPEACE"
    },
    {
      href: "https://visit-teshikaga.com/ja/",
      img: case6,
      alt: "\u5317\u6D77\u9053\u5F1F\u5B50\u5C48\u753A \u884C\u304D\u305F\u3044\u307E\u3061\u3078\u3001\u751F\u304D\u305F\u3044\u307E\u3061\u3078\u3002"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="cases-swiper swiper" data-astro-cid-mx2ki4ti> <div class="swiper-wrapper" data-astro-cid-mx2ki4ti> ${cases.map((item) => renderTemplate`<div class="case swiper-slide" data-astro-cid-mx2ki4ti> <a${addAttribute(item.href, "href")} data-astro-cid-mx2ki4ti>${renderComponent($$result, "Image", $$Image, { "src": item.img, "alt": item.alt, "data-astro-cid-mx2ki4ti": true })}</a> </div>`)} </div> </div>  `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/CasesSwiper.astro", void 0);

const $$Astro$4 = createAstro();
const $$CountButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CountButton;
  return renderTemplate`${renderComponent($$result, "astro-heart", "astro-heart", { "data-astro-cid-76e3kl4b": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="intractive__button" data-astro-cid-76e3kl4b> <p class="button__inner" data-astro-cid-76e3kl4b> <span class="emoji" data-astro-cid-76e3kl4b>🤩</span> <span class="text" data-astro-cid-76e3kl4b> WOW x </span> <span class="num" data-astro-cid-76e3kl4b>0</span> </p> </div> ` })}  `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/CountButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$SubTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SubTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute("sub__title", "class:list")} data-astro-cid-n3qa66mr>${text}</h3> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/SubTitle.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/astronaut.URKqfgU3.png","width":500,"height":492,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/astronaut.png";
							}
							
							return target[name];
						}
					});

const toTop = new Proxy({"src":"/_astro/totop.DD2b17HX.svg","width":31,"height":23,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/images/totop.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const featuresCard = [
    {
      title: "サーバーファースト",
      text: "従来のサーバーサイドフレームワーク（PHPやRuby on Railsなど）と同じサーバーサイドのレンダリングを可能な限り活用します。\nこれは、近年のモダンなJavaScriptフレームワークのクライアントサイドレンダリングとは対照的なアプローチです。"
    },
    {
      title: "アイランド",
      text: "静的コンテンツUIと、インタラクティブUI(ReactやVueなどを用いた)をそれぞれ島のように孤立させ、一つのページで共存させます。大部分の島はHTMLやCSSで構成されるため、インタラクティブな島だけにJSを読み込ませます。結果、軽量化が実現されます。"
    },
    {
      title: "複雑さへのオプトイン",
      text: ".astroファイルは、HTML とよく似たシンタックスを使用し、「必要な複雑さ」を可能な限り取り除いています。\n新しい機能やAPIを段階的に追加することで、よりダイナミックなサイトを構築することも可能です。"
    }
  ];
  const advantageCard = [
    {
      title: "ファイルベースのルーティングシステム",
      text: "src/pages/ディレクトリ以下に.astroか.mdを配置すると、自動的に静的なルーティングを設定できます。"
    },
    {
      title: "Markdown形式をサポート",
      text: "ブログ投稿やドキュメントのようなテキストを多用するコンテンツ制作時に使われるMarkdownを、ビルトインでサポートしています。"
    },
    {
      title: "TypeScriptのサポート",
      text: ".tsや.tsxファイルをインポートしたり、コンポーネントの中で直接TypeScriptコードを書いたり、astro.config.tsファイルを使うこともできます。"
    }
  ];
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}posts?_embed&per_page=5`);
  const news = await res.json();
  const dateFormatt = (defaultDate) => {
    const date_data = new Date(defaultDate);
    const year = date_data.getFullYear();
    const month = date_data.getMonth() + 1;
    const day = date_data.getDate();
    const date = `${year}/${month}/${day}`;
    return date;
  };
  const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?_embed&acf_format=standard&per_page=4`);
  const pokes = await res2.json();
  const metas = {
    title: "Astro is the one.",
    discription: "Astroの魅力を伝えるサイトです。",
    dir: "",
    path: "/"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="pg-hero"> ${renderComponent($$result2, "TextScroll", $$TextScroll, {})} <div class="l-container"> <p class="hero__img">${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": "宇宙飛行士", "loading": "eager" })}</p> <h3 class="title">Astro is...</h3> <p class="lead">Astroは高パフォーマンスな静的サイトをつくる静的サイトジェネレーターです。ビルド時に可能な限りJavaScriptを排除（Partial Hydration）するため、<span class="font-bold">軽量</span>かつ<span class="font-bold">スピードの早い</span>パフォーマンスに優れたサイトを実現します</p> ${renderComponent($$result2, "CommonButton", $$CommonButton, { "href": "https://astro.build/", "text": "Get started", "bgColor": "is__orange", "isEng": true })}</div> </section> <section class="pg-features"> <div class="l-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "特徴", "isWhite": true })} ${featuresCard.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": card.title, "text": card.text })}`)} <div class="feature__intractive"> <h3 class="title">こんな感じで<br>インタラクティブに<br>できるよ<span class="font-sm">Click!</span></h3> ${renderComponent($$result2, "CountButton", $$CountButton, {})} </div> </div> </section> <section class="pg-advantage"> <div class="l-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "メリット", "isWhite": true })} ${advantageCard.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": card.title, "text": card.text })}`)} </div> ${renderComponent($$result2, "TextScroll", $$TextScroll, {})} </section> <section class="pg-recommend l-bg-white"> <div class="l-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "こんなサイトに...", "isWhite": false })} <ul class="recommend__list"> <li class="recommend"><span class="text-underline">高パフォーマンスな静的サイトを構築したい</span></li> <li class="recommend"><span class="text-underline">Next.jsやNuxtJSがオーバースペックに感じるサイト</span></li> <li class="recommend"><span class="text-underline">JSフレームワークを使いつつ、不要なJavaScriptは省きたい</span></li> <li class="recommend mgb"><span class="text-underline">コンポーネント指向で開発したい</span></li> <li class="unrecommend">アプリ開発</li> <li class="unrecommend">SPA</li> </ul> </div> </section> <section class="pg-news l-bg-white"> <div class="l-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "CMSも使えるよ", "isWhite": false })} ${renderComponent($$result2, "SubTitle", $$SubTitle, { "text": "最新ニュース5件" })} <ul class="news__wrap"> ${news.map((news2) => renderTemplate`<li><a${addAttribute(`/news/${news2.slug}`, "href")}><span class="date">${dateFormatt(news2.date)}</span><span class="title">${news2.title.rendered}</span></a></li>`)} </ul> ${renderComponent($$result2, "CommonButton", $$CommonButton, { "href": "/news", "text": "一覧へ", "bgColor": "is__purple", "isEng": false })} </div> </section> <section class="pg-pokemon l-bg-white"> <div class="l-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "CPもACFも使えるよ", "isWhite": false })} <ul class="poke__wrap l-inner__flex"> ${pokes.map((poke) => renderTemplate`<li><a${addAttribute(`/pokemon/${poke.slug}`, "href")}><img${addAttribute(poke.thumbnail.url, "src")}${addAttribute(poke.acf.name, "alt")}><span class="name">${poke.acf.name}</span></a></li>`)} </ul> </div> ${renderComponent($$result2, "CommonButton", $$CommonButton, { "href": "/pokemon", "text": "一覧へ", "bgColor": "is__purple", "isEng": false })} </section> <section class="pg-cases l-bg-white"> <div class="l-container"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "text": "導入事例", "isWhite": false })} ${renderComponent($$result2, "CasesSwiper", $$CasesSwiper, {})} </div> </section> <section class="pg-start"> <div class="l-container"> ${renderComponent($$result2, "CommonButton", $$CommonButton, { "href": "https://astro.build/", "text": "Get started", "bgColor": "is__orange", "isEng": true })} <p class="code">$ npm create astro@latest</p> <a class="totop-image" href="/">${renderComponent($$result2, "Image", $$Image, { "src": toTop, "alt": "先頭へ戻る" })}</a> </div> </section> </main> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/index.astro", void 0);
const $$file$2 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const metas = {
    title: "NEWS",
    discription: "CMSのページ🍓",
    dir: "/news",
    path: "../"
  };
  Astro2.params;
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}posts?_embed&per_page=10`);
  const posts = await res.json();
  const total = Number(res.headers.get("x-wp-totalpages"));
  const pages = Array(+total).fill(null).map((_, i) => i + 1);
  const firstPage = 1;
  const dateFormatt = (defaultDate) => {
    const date_data = new Date(defaultDate);
    const year = date_data.getFullYear();
    const month = date_data.getMonth() + 1;
    const day = date_data.getDate();
    const date = `${year}/${month}/${day}`;
    return date;
  };
  const omittedContent = (string) => {
    const MAX_LENGTH = 50;
    const pureString = string.replace(/(<([^>]+)>)/gi, "");
    if (pureString.length > MAX_LENGTH) {
      return pureString.substr(0, MAX_LENGTH) + "...";
    }
    return pureString;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue"> <div class="l-container"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "お知らせ", "isWhite": true })} ${posts.map((post) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "href": `/news/${post.slug}`, "thumbnail": post.thumbnail.url, "alt": post.title.rendered, "date": dateFormatt(post.date), "title": post.title.rendered, "excerpt": omittedContent(post.content.rendered) })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "pages": pages, "currentPage": firstPage, "parentPage": "news" })} </div> </section> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/news/index.astro", void 0);
const $$file$1 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/news/index.astro";
const $$url$1 = "/news";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metas = {
    title: "POKEMON",
    discription: "CMS(カスタムフィールド)のページ🍓",
    dir: "/pokemon",
    path: "../"
  };
  Astro2.params;
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?_embed&acf_format=standard&per_page=10`);
  const posts = await res.json();
  const getTermInfo = async (termId) => {
    const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat/${termId}`);
    const termData = await res2.json();
    console.log(termData);
    return termData.name || "未分類";
  };
  const total = Number(res.headers.get("x-wp-totalpages"));
  const pages = Array(+total).fill(null).map((_, i) => i + 1);
  const firstPage = 1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue"> <div class="l-container"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "ポケモン", "isWhite": true })} ${posts.map((post) => renderTemplate`${renderComponent($$result2, "CharacterCard", $$CharacterCard, { "href": `/pokemon/${post.slug}`, "thumbnail": post.thumbnail.url, "alt": post.acf.name, "name": post.acf.name, "cats": post.character_cat.map((catId) => getTermInfo(catId)) })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "pages": pages, "currentPage": firstPage, "parentPage": "pokemon" })} </div> </section> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/index.astro", void 0);
const $$file = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/index.astro";
const $$url = "/pokemon";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };

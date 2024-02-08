import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, u as unescapeHTML, h as renderComponent, F as Fragment } from '../astro_9JpyRYba.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import '../index.247da4aa_w40geAFS.mjs';
import '../confirm.a40db63f_w40geAFS.mjs';
import '../confirm.5c9ff26f_w40geAFS.mjs';
import '../index.af06e698_w40geAFS.mjs';
import '../index.a84a1f11_w40geAFS.mjs';

const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, dir, path, menuBgBlue } = Astro2.props;
  return renderTemplate`<html lang="ja" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content=""><!-- ogp --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:image" content="/opg-img.jpg"><meta property="og:description"${addAttribute(description, "content")}><meta name="twitter:card" content="Summary with Large Image"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="ROBOTS" content="NOODP"><link rel="canonical"${addAttribute(`https://exapmle.com/${dir}`, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- favicon --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="bg-pc" data-astro-cid-sckkx6r4></div> <div class="main__wrapper" data-astro-cid-sckkx6r4> <header data-astro-cid-sckkx6r4> <div class="global__menu" data-astro-cid-sckkx6r4> ${menuBgBlue ? renderTemplate`<div id="js-open-toggle" class="open__toggle" data-astro-cid-sckkx6r4> <span class="border" data-astro-cid-sckkx6r4></span> <span class="border" data-astro-cid-sckkx6r4></span> <span class="border" data-astro-cid-sckkx6r4></span> </div>` : renderTemplate`<div id="js-open-toggle" class="open__toggle is__white" data-astro-cid-sckkx6r4> <span class="border" data-astro-cid-sckkx6r4></span> <span class="border" data-astro-cid-sckkx6r4></span> <span class="border" data-astro-cid-sckkx6r4></span> </div>`} <div class="menu__container" data-astro-cid-sckkx6r4> <div class="menu__wrap" data-astro-cid-sckkx6r4> <div id="js-close-toggle" class="close__toggle" data-astro-cid-sckkx6r4> <span class="border" data-astro-cid-sckkx6r4></span> <span class="border" data-astro-cid-sckkx6r4></span> </div> <nav class="inner" data-astro-cid-sckkx6r4> <ul data-astro-cid-sckkx6r4> <li data-astro-cid-sckkx6r4><a href="/" data-astro-cid-sckkx6r4>home</a></li> <li data-astro-cid-sckkx6r4><a href="/news" data-astro-cid-sckkx6r4>news</a></li> <li data-astro-cid-sckkx6r4><a${addAttribute(`/pokemon`, "href")} data-astro-cid-sckkx6r4>pokemon</a></li> <li data-astro-cid-sckkx6r4><a${addAttribute(`/contact`, "href")} data-astro-cid-sckkx6r4>contact</a></li> </ul> </nav> </div> </div> </div> </header> ${renderSlot($$result, $$slots["default"])} <footer class="l-bg-white" data-astro-cid-sckkx6r4> <small data-astro-cid-sckkx6r4>&copy;2023 MIE SUZUKI developed by 🐣</small> </footer> </div>  </body></html>`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/layouts/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$PageTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const { text, isWhite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(["page-title", { white: isWhite }], "class:list")}>${text}</h1> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/PageTitle.astro", void 0);

const $$Astro$5 = createAstro();
const $$NewsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { href, thumbnail, alt, date, title, excerpt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="news__card" data-astro-cid-ibl2wg7k> <p class="thumbnail" data-astro-cid-ibl2wg7k><img${addAttribute(thumbnail, "src")}${addAttribute(alt, "alt")} data-astro-cid-ibl2wg7k></p> <p class="date" data-astro-cid-ibl2wg7k>${unescapeHTML(date)}</p> <p class="title" data-astro-cid-ibl2wg7k>${unescapeHTML(title)}</p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(excerpt)}` })} </a> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/NewsCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { pages, currentPage, parentPage } = Astro2.props;
  const maxDisplayedPages = 4;
  const getPageNumbers = () => {
    if (pages.length <= maxDisplayedPages) {
      return pages;
    }
    const currentPageIndex = pages.indexOf(+currentPage);
    const startIndex = Math.max(0, currentPageIndex - 1);
    const endIndex = Math.min(pages.length - 1, startIndex + maxDisplayedPages - 2);
    const displayedPages = [];
    if (startIndex > 0) {
      displayedPages.push(pages[0]);
      if (startIndex > 1) {
        displayedPages.push("...");
      }
    }
    displayedPages.push(...pages.slice(startIndex, endIndex + 1));
    if (endIndex < pages.length - 1) {
      if (endIndex < pages.length - 2) {
        displayedPages.push("...");
      }
      displayedPages.push(pages[pages.length - 1]);
    }
    return displayedPages;
  };
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-d776pwuy> <ul data-astro-cid-d776pwuy>  ${currentPage > 1 && renderTemplate`<li data-astro-cid-d776pwuy> <a${addAttribute(`/${parentPage}/page/${+currentPage - 1}`, "href")} data-astro-cid-d776pwuy>&lt;</a> </li>`}  ${getPageNumbers().map((page) => renderTemplate`<li data-astro-cid-d776pwuy> ${typeof page === "number" ? renderTemplate`<a${addAttribute([{ "is-active": page === +currentPage }], "class:list")}${addAttribute(page === 1 ? `/${parentPage}` : `/${parentPage}/page/${page}`, "href")} data-astro-cid-d776pwuy>${page}</a>` : renderTemplate`<span data-astro-cid-d776pwuy>${page}</span>`} </li>`)}  ${currentPage < pages.length && renderTemplate`<li data-astro-cid-d776pwuy> <a${addAttribute(`/${parentPage}/page/${+currentPage + 1}`, "href")} data-astro-cid-d776pwuy>&gt;</a> </li>`} </ul> </nav> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/Pagination.astro", void 0);

const $$Astro$3 = createAstro();
async function getStaticPaths$2() {
  const perPage = 10;
  const result = [];
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}posts?per_page=${perPage}`);
  const total = res.headers.get("x-wp-totalpages");
  const pages = Array(+total).fill(null).map((_, i) => i + 1);
  if (Number(total) > 1) {
    for (let i = 2; i <= Number(total); i++) {
      const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}posts?per_page=${perPage}&page=${i}`);
      const posts = await res2.json();
      result.push({
        params: { page: i },
        props: { posts, total, pages }
      });
    }
  }
  return result;
}
const $$page$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$page$2;
  const metas = {
    title: "NEWS",
    discription: "CMSのページ🍓",
    dir: "/news",
    path: "../"
  };
  const { page } = Astro2.params;
  const { posts, total, pages } = Astro2.props;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue"> <div class="l-container"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "お知らせ", "isWhite": true })} ${posts.map((post) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "href": `/news/${post.slug}`, "thumbnail": post.thumbnail.url, "alt": post.title.rendered, "date": dateFormatt(post.date), "title": post.title.rendered, "excerpt": omittedContent(post.content.rendered) })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "pages": pages, "currentPage": page, "parentPage": "news" })} </div> </section> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/news/page/[page].astro", void 0);
const $$file$2 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/news/page/[page].astro";
const $$url$2 = "/news/page/[page]";

const _page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page$2,
	file: $$file$2,
	getStaticPaths: getStaticPaths$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$CharacterCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CharacterCard;
  const { href, thumbnail, alt, name, cats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="character__card" data-astro-cid-vm2uhce5> <p class="thumbnail" data-astro-cid-vm2uhce5><img${addAttribute(thumbnail, "src")}${addAttribute(alt, "alt")} data-astro-cid-vm2uhce5></p> <p class="title" data-astro-cid-vm2uhce5>${unescapeHTML(name)}</p> <div class="l-inner__flex flex-start" data-astro-cid-vm2uhce5> <p class="type" data-astro-cid-vm2uhce5>タイプ：</p> <ul class="l-inner__flex flex-start" data-astro-cid-vm2uhce5> ${cats.map((cat) => renderTemplate`<li class="list" data-astro-cid-vm2uhce5>${cat}</li>`)} </ul> </div> </a> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/CharacterCard.astro", void 0);

const $$Astro$1 = createAstro();
async function getStaticPaths$1() {
  const perPage = 3;
  const result = [];
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat?per_page=100`);
  const categories = await res.json();
  for (const cat of categories) {
    const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?per_page=${perPage}&character_cat=${cat.id}`);
    const total = Number(res2.headers.get("x-wp-totalpages"));
    const pages = Array(+total).fill(null).map((_, i) => i + 1);
    if (total > 1) {
      for (let i = 2; i <= total; i++) {
        const page = i.toString();
        const res3 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?per_page=${perPage}&character_cat=${cat.id}&page=${i}&acf_format=standard`);
        const posts = await res3.json();
        result.push({ params: { category: cat.slug, page }, props: { posts, total, catName: cat.name, pages } });
      }
    }
  }
  return result;
}
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$page$1;
  const metas = {
    title: "POKEMON",
    discription: "CMS(カスタムフィールド)のページ🍓",
    dir: "/pokemon",
    path: "../"
  };
  const { category, page } = Astro2.params;
  const { posts, total, catName, pages } = Astro2.props;
  const getTermInfo = async (termId) => {
    const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat/${termId}`);
    const termData = await res.json();
    return termData.name || "未分類";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue"> <div class="l-container"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": `${catName}タイプのポケモン`, "isWhite": true })} ${posts.map((post) => renderTemplate`${renderComponent($$result2, "CharacterCard", $$CharacterCard, { "href": `/pokemon/${post.slug}`, "thumbnail": post.thumbnail.url, "alt": post.acf.name, "name": post.acf.name, "cats": post.character_cat.map((catId) => getTermInfo(catId)) })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "pages": pages, "currentPage": page, "parentPage": `pokemon/category/${category}` })} </div> </section> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/category/[category]/page/[page].astro", void 0);
const $$file$1 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/category/[category]/page/[page].astro";
const $$url$1 = "/pokemon/category/[category]/page/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const perPage = 10;
  const result = [];
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?per_page=${perPage}`);
  const total = res.headers.get("x-wp-totalpages");
  const pages = Array(+total).fill(null).map((_, i) => i + 1);
  if (Number(total) > 1) {
    for (let i = 2; i <= Number(total); i++) {
      const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?per_page=${perPage}&page=${i}`);
      const posts = await res2.json();
      result.push({
        params: { page: i },
        props: { posts, total, pages }
      });
    }
  }
  return result;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const metas = {
    title: "POKEMON",
    discription: "CMS(カスタムフィールド)のページ🍓",
    dir: "/pokemon",
    path: "../../"
  };
  const { page } = Astro2.params;
  const { posts, total, pages } = Astro2.props;
  const getTermInfo = async (termId) => {
    const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat/${termId}`);
    const termData = await res.json();
    console.log(termData);
    return termData.name || "未分類";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metas.title, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue"> <div class="l-container"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "text": "ポケモン", "isWhite": true })} ${posts.map((post) => renderTemplate`${renderComponent($$result2, "CharacterCard", $$CharacterCard, { "href": `/pokemon/${post.slug}`, "thumbnail": post.thumbnail.url, "alt": post.acf.name, "name": post.acf.name, "cats": post.character_cat.map((catId) => getTermInfo(catId)) })}`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "pages": pages, "currentPage": page, "parentPage": "pokemon" })} </div> </section> ` })}`;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/page/[page].astro", void 0);
const $$file = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/page/[page].astro";
const $$url = "/pokemon/page/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _page_$2 as _, $$PageTitle as a, $$CharacterCard as b, $$Pagination as c, $$NewsCard as d, _page_$1 as e, _page_ as f };

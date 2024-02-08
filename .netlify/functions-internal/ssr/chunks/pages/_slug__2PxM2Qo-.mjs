import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent, u as unescapeHTML, F as Fragment } from '../astro_9JpyRYba.mjs';
import 'kleur/colors';
import 'cssesc';
import { $ as $$Layout } from './_page__ixKidnd1.mjs';
import '../_slug_.7e7f751e_w40geAFS.mjs';
import 'clsx';
import '../_slug_.b5b21288_w40geAFS.mjs';
import '../_slug_.050397bb_w40geAFS.mjs';

const $$Astro$2 = createAstro();
const $$PrevNext = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PrevNext;
  const { prevPostSlug, nextPostSlug, parentPage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="l-inner__flex" data-astro-cid-oerjsknp> <li data-astro-cid-oerjsknp>${prevPostSlug ? renderTemplate`<a class="prev"${addAttribute(`/${parentPage}/${prevPostSlug}/`, "href")} data-astro-cid-oerjsknp>Prev</a>` : ""}</li> <li data-astro-cid-oerjsknp><a${addAttribute(`/${parentPage}/`, "href")} data-astro-cid-oerjsknp>All</a></li> <li class="next" data-astro-cid-oerjsknp>${nextPostSlug ? renderTemplate`<a class="next"${addAttribute(`/${parentPage}/${nextPostSlug}/`, "href")} data-astro-cid-oerjsknp>Next</a>` : ""}</li> </ul> `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/components/PrevNext.astro", void 0);

const sortDate = (a, b) => {
    // WP REST APIからのデータを使用する場合、日付は各記事のプロパティに格納されていると仮定します。
    const dateA = new Date(a.date); // a.dateは記事の日付プロパティに置き換える必要があります
    const dateB = new Date(b.date); // b.dateも同様に記事の日付プロパティに置き換えます
    return dateB - dateA;
};

const $$Astro$1 = createAstro();
async function getStaticPaths$1() {
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}posts?per_page=100`);
  let posts = await res.json();
  const total = Number(res.headers.get("x-wp-totalpages"));
  const postsLength = posts.length;
  if (total > 1) {
    for (let i = 2; i <= total; i++) {
      const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}posts?per_page=100&page=${i}`);
      const morePosts = await res2.json();
      posts = posts.concat(morePosts);
    }
  }
  return posts.sort(sortDate).map((post, i) => {
    return {
      params: { slug: decodeURI(post.slug) },
      props: {
        post,
        prevPost: i === 0 ? { slug: "" } : posts[i - 1],
        nextPost: i + 1 === postsLength ? { slug: "" } : posts[i + 1]
      }
    };
  });
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$slug$1;
  const metas = {
    discription: "CMSのページ🍓",
    dir: "/news/",
    path: "../"
  };
  Astro2.params;
  const { post, prevPost, nextPost } = Astro2.props;
  const renderedTitle = post.title.rendered;
  const renderedContent = post.content.rendered;
  const thumbnailUrl = post.thumbnail.url;
  const date_data = new Date(post.date);
  const year = date_data.getFullYear();
  const month = date_data.getMonth() + 1;
  const day = date_data.getDate();
  const date = `${year}/${month}/${day}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": renderedTitle, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false, "data-astro-cid-vcwz2lde": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue" data-astro-cid-vcwz2lde> <div class="l-container" data-astro-cid-vcwz2lde> <article class="news" data-astro-cid-vcwz2lde> <p class="date" data-astro-cid-vcwz2lde>${unescapeHTML(date)}</p> <p class="title" data-astro-cid-vcwz2lde>${unescapeHTML(renderedTitle)}</p> <p class="thumbnail" data-astro-cid-vcwz2lde><img${addAttribute(thumbnailUrl, "src")}${addAttribute(renderedTitle, "alt")} data-astro-cid-vcwz2lde></p> <div class="content" data-astro-cid-vcwz2lde> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(renderedContent)}` })} </div> </article> ${renderComponent($$result2, "PrevNext", $$PrevNext, { "prevPostSlug": prevPost.slug, ",": true, "nextPostSlug": nextPost.slug, ",": true, "parentPage": "news", "data-astro-cid-vcwz2lde": true })} </div> </section> ` })} `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/news/[slug].astro", void 0);
const $$file$1 = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/news/[slug].astro";
const $$url$1 = "/news/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug$1,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?per_page=100`);
  let posts = await res.json();
  const total = Number(res.headers.get("x-wp-totalpages"));
  const postsLength = posts.length;
  if (total > 1) {
    for (let i = 2; i <= total; i++) {
      const res2 = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character?_embed&acf_format=standard?per_page=100&page=${i}`);
      const morePosts = await res2.json();
      posts = posts.concat(morePosts);
    }
  }
  return posts.sort(sortDate).map((post, i) => {
    return {
      params: { slug: decodeURI(post.slug) },
      props: {
        post,
        prevPost: i === 0 ? { slug: "" } : posts[i - 1],
        nextPost: i + 1 === postsLength ? { slug: "" } : posts[i + 1]
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const metas = {
    discription: "CMSのページ🍓",
    dir: "/pokemon/",
    path: "../"
  };
  Astro2.params;
  const { post, prevPost, nextPost } = Astro2.props;
  const characterName = post.acf.name;
  const characterCategory = post.acf.category;
  const characterCharacteristic = post.acf.characteristic;
  const characterOfficialUrl = post.acf.official_url;
  const thumbnailUrl = post.thumbnail.url;
  const getTermData = async (termId) => {
    const res = await fetch(`${"https://astro-wp.project-mm.com/wp-json/wp/v2/"}character_cat/${termId}`);
    const termData = await res.json();
    return {
      name: termData.name,
      slug: termData.slug
    };
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": characterName, "description": metas.discription, ",": true, "dir": metas.dir, ",": true, "path": metas.path, ",": true, "menuBgBlue": false, "data-astro-cid-sqegfadz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="l-second-page l-bg-blue" data-astro-cid-sqegfadz> <div class="l-container" data-astro-cid-sqegfadz> <article class="character" data-astro-cid-sqegfadz> <p class="thumbnail" data-astro-cid-sqegfadz><img${addAttribute(thumbnailUrl, "src")}${addAttribute(characterName, "alt")} data-astro-cid-sqegfadz></p> <p class="name" data-astro-cid-sqegfadz>${unescapeHTML(characterName)}</p> <dl class="list" data-astro-cid-sqegfadz> <dt data-astro-cid-sqegfadz>分類</dt> <dd data-astro-cid-sqegfadz>${characterCategory}</dd> <dt data-astro-cid-sqegfadz>特性</dt> <dd data-astro-cid-sqegfadz>${characterCharacteristic}</dd> <dt data-astro-cid-sqegfadz>タイプ</dt> <dd data-astro-cid-sqegfadz> ${post.character_cat.map(async (catId) => {
    const { name, slug: slug2 } = await getTermData(catId);
    return renderTemplate`<a class="type"${addAttribute(`/pokemon/category/${slug2}`, "href")} data-astro-cid-sqegfadz>${name}</a>`;
  })} </dd> </dl> <a class="official__url"${addAttribute(characterOfficialUrl, "href")} data-astro-cid-sqegfadz>${characterName}の公式ページへ</a> </article> ${renderComponent($$result2, "PrevNext", $$PrevNext, { "prevPostSlug": prevPost.slug, ",": true, "nextPostSlug": nextPost.slug, ",": true, "parentPage": "pokemon", "data-astro-cid-sqegfadz": true })} </div> </section> ` })} `;
}, "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/[slug].astro", void 0);
const $$file = "/Volumes/miiiiiiiiiiie SSD/web/Astro/first-project/src/pages/pokemon/[slug].astro";
const $$url = "/pokemon/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_$1 as _, _slug_ as a };

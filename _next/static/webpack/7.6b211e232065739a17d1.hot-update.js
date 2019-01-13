webpackHotUpdate(7,{

/***/ "./_posts/2016-06-26-angularbeers-with-misko-hevery.md":
/*!*************************************************************!*\
  !*** ./_posts/2016-06-26-angularbeers-with-misko-hevery.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nlayout: post\ntitle: AngularBeers with Miško Hevery\ntags:\n  - Angular\n---\n\nLast Tuesday I enjoyed a talk of [Miško Hevery](http://misko.hevery.com/about/)\nabout Angular2 thanks to guys of [AngularBeers](http://www.meetup.com/AngularJS-Beers/).\nIt was a talk about what is coming with Angular 2 and the key point with which\nwe have to stay is that Angluar leave the concept of frontend framework to\nbecome a full a platform.\n\n![miskohevery](../static/img/angularbeers-with-misko-hevery.jpg)\n_Sara (a good coworker and better friend), Miško and me_\n\nBut, a part from this, I would like to remark a couple of things that will make\nAngular 2 a powerful option in a near future.\n\n## Offline compile\n\nWhat this means? Templates have been one of the places where mistakes are made\nsince Angular 1. Even if we introduce TypeScript or lint tools, we couldn't be\nable to detect mistakes in templates until they are evaluated at the runtime.\nUntil now Angular 1.X compiles the templates each time they should be rendered.\n\nWith Angular 2 (without offline compile) the templates are compiled only once.\nBut with offline compiling the templates are compiled on build time to\nJavaScript so it will be never compiled in the browser.The benefits we obtain\nhere is that it enables us to statically type-check our templates with\nTypeScript, which is awesome, in addition to skipping the runtime compilation\nand smaller library size.\n\n## Angular Universal\n\n> Universal (isomorphic) JavaScript support for Angular 2.\n\nWith Angular Universal we can run Angular 2 in the server side and this give us\nsome advantages:\n\n1. **Better Perceived Performance:** The users will instantly see a server rendered\n   view which greatly improves perceived performance and the overall user\n   experience.\n1. **Optimized for Search Engines:** Server-side pre-rendering is a reliable way to\n   ensure that all search engines can access your content.\n1. **Site Preview:** Ensure that Facebook, Twitter and all other social media apps\n   correctly display a preview image of your app. (I deal with this problem before\n   and is a pain in the ass)\n\n## Extra: the slides\n\n!(https://docs.google.com/presentation/d/1pIS0dhazArjoDHO1FLK1sEC8iO6rnGLw-WXFIiqafzc/embed?start=false&loop=false&delayms=3000)\n"

/***/ })

})
//# sourceMappingURL=7.6b211e232065739a17d1.hot-update.js.map
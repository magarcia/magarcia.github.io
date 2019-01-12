(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{500:function(e,t){e.exports="---\nlayout: post\ntitle: First coding week\ntags:\n  - GSoC\n  - Jangouts\n---\n\nFirst week of coding period at GSoC 2016, so I started the upgrading process of\nJangouts from Angular 1.x to Angular 2. This week, the tasks have been\nfulfilled within the deadline, I hope to remain so for the next week.\n\nI'm following the [upgrade guide](https://angular.io/docs/ts/latest/guide/upgrade.html)\nfrom official Angular docs, which has two main blocks:\n\n- Preparation\n- Upgrading with The Upgrade Adapter\n\nI just finished the preparation block. I was lucky because the code of Jangouts\nis really clear and it follow two important points of the preparation block:\nFollow the Angular style guide and use component directives. So this left me\nonly two things to do. First of all, switch from load files with `<script>`\ntags to a module loader and then migrate the code from JavaScript to TypeScript.\nBut I've done it in reverse order, first migrate to TypeScript and then switch to\na module loader. Why? I think this way is more \"natural\", at least for this project.\n\n## Migrating to TypeScript\nJangouts has a gulp build system working, so I didn't have to worry about how\nthe scripts are loaded. First I worry about migrating the files to TypeScript\nand when all was ready, then I try to take profit from the `import` syntax of\nTypeScript/ES6.\n\nMigrate code from JavaScript to TypeScript is really easy, only need to change\nthe extension form `.js` to `.ts`. Obviously the existing gulp system not works\nwith this changes, so in parallel of running gulp you should run\n`tsc --watch src/**/*.ts`. This command shows a lot of errors but don't worry\nabout that, if the JavaScript code is correct all this errors are related to the\ntype checking process of TypeScript compiler.\n\nDuring this migration process, I also perform some changes in the code for make\nit more modular. Jangouts have all the components registered in the same Angular\nmodule `janusHangouts` and in other projects I worked before I learnt that this\ncan make some troubles when you have to done unit testing, so I define a\ndifferent module for each component (`janusHangouts.componentName`)\nand then make it a dependency of the main module. This have to advantages: make\ntests is more easy and in a future we can load components on demand with a\nmodule loader (but I'm not sure about the last one).\n\nBack to some I said earlier, when compile the JavaScript code with `tsc` this\nshows a lot of errors. One that could appear a lot is something like this:\n\n> `error TS7006: Parameter '$state' implicitly has an 'any' type.`\n\nThis is because TypeScript compiler wants a type defined for all variables, but\nwe can make that `tsc` set the implicit type any for variables without type.\nOnly thing to do is disable the option `noImplicitAny` in the `tsconfig.json`\nfile.\n\nAnother error we can find when working with HTML elements is:\n\n> `error TS2339: Property 'muted' does not exist on type 'HTMLElement'.`\n\nThis error is produced from a code like that:\n\n```javascript\nvar video = $('video', element)[0];\nvideo.muted = true;\n```\n\nThe error is produced because TypeScript is type save. So the\n`$('video', element)[0]` returns the type `HTMLElement` which does not contain\na `muted` property. The subtype `HTMLVideoElement` does however contain the\n`muted` property. So the solution is to cast the result to `HTMLVideoElement`\nlike this:\n\n```javascript\nvar video = <HTMLVideoElement>$('video', element)[0];\nvideo.muted = true;\n```\n\nFinally, another common error is:\n\n> `error TS2339: Property 'id' does not exist on type '{}'.`\n\nThis is another \"problem\" produced by the type validations of TypeScript. We can\nfound errors like that in fragments of code similar to:\n\n```javascript\nvar room = {};\n\n// Some code here...\n\nfunction isRoom (room) {\n\treturn room.id == roomId;\n}\n\n```\n\nTo solve this and make the code less error prone, we should define an interface\nfor the room object.\n\n```javascript\ninterface Room {\n\tid?: number  // ? makes the attribute optional\n}\n\n// Some code here ...\n\nvar room: Room = {};\n\n// Some code here...\n\nfunction isRoom (room: Room) {\n\treturn room.id == roomId;\n}\n```\n\n\n## Using a Module Loader\n\nWhy we should use a module loader? We can find the response in Angular site:\n\n> Using a module loader such as [SystemJS](https://github.com/systemjs/systemjs),\n> [Webpack](http://webpack.github.io/), or [Browserify](http://browserify.org/)\n> allows us to use the built-in module systems of the TypeScript or ES2015\n> languages in our apps. We can use the import and export features that explicitly\n> specify what code can and will be shared between different parts of the\n> application. [...]\n>\n> When we then take our applications into production, module loaders also make\n> it easier to package them all up into production bundles with batteries\n> included.\n\nI discard Browserify because I had bad experiences in the past. So I have only\ntried with SystemJS and Webpack.\n\n### SystemJS\nSystemJS looks really clean, really simple. The only thing I was to do is define\nan entry point (normally the main file of the application) and the `import`\nsyntax do the rest. So, if we have the `import` statements correctly placed, all\nworks without problem.\n\nBut with this solution, we need to conserve gulp, because SystemJS only cares\nabout the imports. So this implies add the TypesScript compiler to gulp and\ndisable the auto inject of script ins html.\n\nSincerely I didn't try that, before try to rewrite the gulp configuration I\nwanted to have a look at Webpack first.\n\n### Webpack\nThe configuration of Webpack is more complex than SystemJS, but it gives a\nsubstitution of gulp. As SystemJS does, we need to define an entry point for the\napplication and also tell him where is the `index.html` to include the\nJavaScript files.\n\nInitially I had some troubles, but after looking some examples, I had a\nfunctional version. Exploring more depth in Webpack I found something that make\nme choose it before others: we can `import` or `require` non JavaScript files.\nSo we can do things like require the template of an Angular directive, and in\nthe building process this template will be included as a string variable inside\nthe component, and with styles we have the same feature. This functionality\nimproves the final build of the application, because all the files needed by a\ncomponent will be placed inside the JavaScript file of the component, improving\nthe performance but without make difficult program it.\n\n\n## One more thing\n\nThis summer looks exciting with all the things I have to learn with GSoC. If\nyou want to follow the progress of what I'm doing keep update of this blog or\nfollow my contributions on GitHub. Also I published a\n[Trello board](https://trello.com/b/vtQJBxbf/jangouts) with the planning and\nthings to do with this project (not fully update yet but in progress).\n\n"}}]);
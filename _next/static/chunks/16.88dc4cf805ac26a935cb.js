(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{504:function(e,n){e.exports="---\nlayout: post\ntitle: Midterm\ntags:\n  - GSoC\n  - Jangouts\n---\n\nGSoC midterm just passed. I think it's time to do a review about the work done\nsince I started the project. After this weeks working on Jangouts and using it\nregularly for follow up meetings I can say that I love it like it was mine.\nIt's really rewarding work on a project like that, not too big but with a\ngrowing community behind. Nowdays Jangouts its in a early stage, at least this\nis that I believe, but with a lot of potential.\n\n## Work done\n\nI have not fulfilled the timings defined initially by myself, but I'm really\nclose and the worst part passed. Until now Jangots was migrated to Typescript\nwith a new build/development process and it's an hybrid application with\nAngular 1.x  and Angular 2.\n\nJangouts is composed by different components:\n\n* `browser-info`\n* `chat` - **Migrated**\n* `feed` - **Almost migrated**\n* `footer` - **Migrated**\n* `notifier`\n* `room`\n* `router`\n* `screen-share`\n* `user`\n* `videochat`\n* `signin`\n\nThe migration process for each component implies a conversion from Angular 1 to\n2 and a collection of tests with as close as possible to 100% of coverage. The\nmost complex component to migrate from my point of view are `feed` and `room`\nbecouse are the component in charge of the video render and the communication\nwith Janus backend. Probably router will be problematic, but because with new\nAngular 2 router it should be a complete rewrite.\n\n## Mentors\n\nAll that I can say about **@ancorgs** and **@imobach** is good. We make daily meetings\n(when it's possible) giving me feedback about what I'm doing, but with enough\nfreedom to take mi own decissions (whenever I give reasons).\n\n## Next steps\n\nFor the next weeks I will continue migrating components until I can quit Angular\n1 from the project. When migration finish, Jangouts will be an Angular 2 project\nwith quite complete test suite, so can be considered that my GSoC work will be\nfinished, but this is not enough for me. I think a lot of things can be do\nbetter:\n\n1. Reestructure the project moving some login that now are inside components to a services.\n1. Take more profit about Observables (probably using [@ngrx/store](https://github.com/ngrx/store))\n1. Improve the UI and the mobile UX ([progressive web apps](https://developers.google.com/web/progressive-web-apps/) concepts will be useful here).\n1. Improve communication and community (a project webpage, better contributing docs, etc)\n"}}]);
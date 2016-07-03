---
layout: post
title: Events in Angular2
tags:
  - GSoC
  - Jangouts
---

During the migration of the feed component, I found a some lines that I didn't
know how to code it on Angular 2. The following gist is an extract of the code
I'm talking about:
<script src="https://gist.github.com/magarcia/fee90f6add9dd3eee8ce1059c3de7fea.js"></script>

As you can see in the snippet, if the condition is true then the directive
listens for events of type `muted.byRequest`, `muted.byUser` and `muted.Join`.
The code that involves this events is easy, without any type of complexity (for
now we ignore the `$watch`).

But, wait a minute, I have read the documentation of Angular 2 like hundred
times and I do not remember nothing about "events" with Angular 1.X style. Thats
because it not exist. Angular 2 don't have a way to make events like in Angular 1,
so I have to find a solution. After search for a solution I found [this entry](http://blog.lacolaco.net/post/event-broadcasting-in-angular-2/)
in laco's blog.

## Broadcaster
Basicaly the idea is to make a service that implements the `$broadcast` and
`$on` method like we had in `$rootScope`. For do this we use Observables, very
important in Angular 2, and in this case we use a [Subject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/subjects.md).
<script src="https://gist.github.com/magarcia/3ba28087603347c1dadc2f7d4f70ec47.js"></script>

So, now we can start to use events like in the example:

<script src="https://gist.github.com/magarcia/57ec93cc03bf98f2499c94a46c6edc7b.js"></script>

## How I solved the problem?

I didn't. This events are only to show the user information pop ups about when
he is muted, so it's not a critical feature. By now this events are fired and
listen in different components, and some of it still implemented in Angular 1.4.

This is a solution I want to share with you, but I'm not sure if this will be
the way that I will use to solve the problem. Because this events probably won't
be necessary when I reimplement the `MuteNotifier`.

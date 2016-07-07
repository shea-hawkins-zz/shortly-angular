
# Angular and Single Page Applications (SPA)

##What exactly is Angular?
An open source framework maintained by Google and the community. Angular tries to make it easy to build single page applications by taking a very opinionated approach compared to other MVC's such as Backbone.

### Concepts covered in the sprint
* Controllers & `$scope`
* Modules
* Routing & multiple views
* Factories & Services
* Directives
* Promises
* Filters
* Testing with Karma

## What is a SPA?
A single page application operates differently than a traditional web app. The server does not render any views, it only serves the index.html, static assets, and might act as a RESTFUL JSON API. Once the index.html is loaded, all templating and routing is handled in the front-end by javaScript frameworks like Angular.

## Token based authentication
Instead of using sessions and having a server keep track of users and sessions, with token-based authentication the server simply issues clients tokens. To be exact, it issues JSON web tokens or JWT (pronounced 'jot'). The client stores its token locally and must send it with every request for access to a protected endpoint.

## Mongo
Mongo is a popular No-SQL database. It is a document-based database built entirely in Javascript which does not require schemas. Our Shortly-Angular server uses Mongo and an ORM called Mongoose, instead of Bookshelf and sql-lite.

## ORM
An Object-Relational Mapper is a software layer that simplifies the use of databases to store objects by mapping objects and their properties to relational database structures (tables, records, columns).  It also provides a simplified, developer-friendly syntax for interacting with databases, abstracting away the often-times hard work of representing and querying object data in a relational data store.  The ORM we are using for this sprint is Mongoose.

## Gulp
Gulp is a task runner that will make your life easier. So easy. You just tell it what to do, and it'll do it. For this repo, Gulp will start your node server with nodemon, it will also watch for any changes to your client side files and refresh the browser automagically for you using browser-sync (you may have to manually refresh the browser the first time browser-sync launches). To learn more, look at the material list below and read the comments in `Gulpfile.js`

## Express architecture
Version 4 removes almost all dependencies on `connect`. Which means you'll have to manually install popular middleware like `body-parser`. All middleware can be found in `server/config/middlware.js` and all API endpoints can be found in `server/config/routes.js`.

## What's in this repo?
Skeleton Angular app
  * All the files and folders needed for your Angular app
  * Tests for the controllers/services you'll build

Express 4 sever
  * Connected to MongoDB using Mongoose
  * Removal of EJS templating and sessions
  * JWT for authentication

Gulpfile
  * Instructions for running all your tasks

## Installing dependencies and Getting started
* [ ] run `npm install -g gulp karma karma-cli nodemon` global modules
* [ ] run `npm install` all node dependencies are listed in the package.json
* [ ] run `bower install` all client dependencies are listed in the bower.json*
* [ ] in a separate tab in your terminal, run `mongod` to start mongo up
* [ ] run `gulp` to start our server and app
* [ ] in another separate tab, run `gulp karma` to run all your test

#### *A note about `.bowerrc`
The `.bowerrc` dotfile exists to configure bower's behavior for this sprint. Inside `.bowerrc`, the `directory` property is a path, relative to `bower.json`, where bower will install libraries in during `bower install`. This technique is particularly useful for this app because the server sends only the `client` directory to the browser. This means when scripts are loaded and executed in `index.html`, their paths must be defined relative to the `client` directory. `index.html` will know nothing about the files/folders that exist as parents/siblings to `client`, such as `node_modules` and `server`. Therefore, in order for `index.html` to load our libraries correctly, we must make sure they get installed somewhere inside the `client` directory, in this case `client/lib`. This is a common pattern for single page applications that contain both a client and server in the same repo.

## Your Goals

### Bare Minimum requirements
Pass the tests. Run them with `gulp karma`
  * [ ] Build out `Links` service
  * [ ] Build out `LinksController` and template
  * [ ] Build out `ShortenController` and template
  * [ ] Add routing for both Links and Shorten templates

Navigation
  * [ ] Enable navigation between the links view and shorten view
  * [ ] Enable authentication for the links view and shorten view
  * [ ] Default to links view if an unknown client-side route is attempted

Validations
  * [ ] Validate the shorten links form before it submits to the server.
  * [ ] Validate sign up and sign in forms before it submits to the server.
  * [ ] Show errors when forms are invalid

Sorting and filtering
  * [ ] Display the links on the listing page sorted by visit count
  * [ ] Add a live-search box that displays only the links that match the search criteria

### Example

+![Project Demo Image](https://cloud.githubusercontent.com/assets/15180/5589465/4f24c206-90d4-11e4-8466-68e9fa0e77ce.gif)

### Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.

Deep Dive into Angular
  * [ ] Take advantage of the `resolve` feature of ng-router to make the initialization in your `LinksController` easier
  * [ ] Use a custom directive to display your links. ex: `<shortend-link> </shortened-link>`
  * [ ] Strip out ngRoute and use [ui-router](https://github.com/angular-ui/ui-router) . ui-router is the standard. The angular team did not create ui-router but it is better in many ways compared to ngRoute. The biggest advantage is the ability to have multiple and nested views.
  * [ ] Refactor your controllers to use the [`controllerAs`](https://github.com/johnpapa/angular-styleguide#controllers) syntax. This technique is often used because it hides some complexity of `$scope` and feels more like vanilla JavaScript.

UI/UX
  * [ ] Display a spinner (there's one in `assets/`) to your users while they're waiting for a new link to be created.
  * [ ] Upgrade your UI and style with a CSS library
  * [ ] Add animations to views & elements with [ngAnimate](https://docs.angularjs.org/api/ngAnimate) and [ng-Fx](https://github.com/Hendrixer/ng-Fx)
  * [ ] Look up [Google Material Design](https://www.google.com/design/spec/material-design/introduction.html)
  * [ ] Incorporate [Material Design elements](https://material.angularjs.org/latest/) into your UI or create your own.

Testing
  * Write tests for the `Auth` service. Follow the existing structure outlined for the `Links` service test, and consult [this guide](http://angularclass.github.io/angular-testing-quick-start-guide/) for further guidance

### Nightmare Mode
Views
  * [ ] Create a detailed stats view for each of your links
  * [ ] Display a d3 graph that shows the link's stats

More features
  * [ ] Allow users to sign in with GitHub using passport with JWTs.
  * [ ] Create a relationship between links and users with the mongoose schemas
  * [ ] Links view should only fetch links for the current signed in user, not all links

Testing
  * [ ] Write unit tests for any new features you write
  * [ ] Create end to end tests using Protractor


## Reference material
* [Getting started with Angular series](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)
* [Angular form validation](https://scotch.io/tutorials/angularjs-form-validation)
* [Factories & Services](http://stackoverflow.com/questions/14324451/angular-service-vs-angular-factory)
* [Routing with ngRoute](http://scotch.io/tutorials/javascript/single-page-apps-with-angularjs-routing-and-templating)
* [Todd Motto's Style Guide](https://github.com/toddmotto/angularjs-styleguide)
* [John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide)
* [Unit testing](http://angularclass.github.io/angular-testing-quick-start-guide/)
* [e2e testing with Protractor](http://www.ng-newsletter.com/posts/practical-protractor.html)
* [What's new in Express 4](https://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)
* [What is JWT](http://www.sitepoint.com/using-json-web-tokens-node-js/)
* [Cookies vs JWT in Angular](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/)
* [Intro to Gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp/)

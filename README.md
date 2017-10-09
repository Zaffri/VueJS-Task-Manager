## VueJS Task Manager
Version 1.2.0

Trello inspired task manager written in JavaScript using the VueJS framework. App data is stored in your browser using LocalStorage.

![Task Manager](screenshot.JPG?raw=true)

## How to run

* Install app dependencies using npm.

```
npm install
```

* Bundle app JS using Webpack.

```
cd webpack
webpack
```

* Run app using node (or you can access index.html directly - only after running webpack).

```
node app.js
```

## Future changes (to do):
* Restructure app and implement Vuex for state management.
* On click - all edit/new input boxes hide.
* Design overhaul.
* Task input focus open, and close on unfocus.
* Unfocus on category create.

# Veux setup
* Add action for newCategory.
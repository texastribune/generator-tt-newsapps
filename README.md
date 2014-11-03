# Texas Tribune News Apps Generator

[Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app **OR** embeddable graphic using Texas Tribune stylings. Generously inspired by the original Yeoman [web app generator](https://github.com/yeoman/generator-webapp).

**PLEASE NOTE:** This is still very much in development. Your mileage my vary until we hit `1.0`.

![](http://i.imgur.com/OHMWZgQ.png)

## Features

* Automatic CSS prefixing with [autoprefixer](https://github.com/postcss/autoprefixer)
* Built in preview server with [LiveReload](http://livereload.com/)
* Automatic compiling of Sass/SCSS with [grunt-contrib-sass](https://www.npmjs.org/package/grunt-contrib-sass) (requires [Ruby + Sass](http://sass-lang.com/install))
* Automatic wiring of installed Bower components with [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)
* Built in image optimization via [grunt-contrib-imagemin](grunt-contrib-imagemin)

And so much more! Please take a look at each generator's `package.json` and `Gruntfile.js` to learn more about what's possible.

## Install

```sh
$ npm install -g generator-tt-newsapps
```
The News Apps Generator depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/).

## Usage

So what do you wanna create? Are you developing a web app or a web graphic? The command you run will differ depending on your needs.

The web app generator is the default. Create the folder you want your project to live in then run the following command inside of it.

```sh
$ mkdir <project-name>
$ cd <project-name>
$ yo tt-newsapps
```

If you are creating a web graphic, use this command instead.

```sh
$ mkdir <project-name>
$ cd <project-name>
$ yo tt-newsapps:graphic
```

How about a map?

```sh
$ mkdir <project-name>
$ cd <project-name>
$ yo tt-newsapps:map
```

After installing, run `grunt serve` to preview what you generator has set up. Now get to work! When it comes time to ship to production, use `grunt build` to prepare `dist` folder.

## Deployment

You'll need `aws-cli` for deployment. [Install it](http://docs.aws.amazon.com/cli/latest/userguide/installing.html), then run:

```sh
make deploy
```

## License

Licensed under the [MIT License](http://opensource.org/licenses/MIT).

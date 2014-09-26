'use strict';

var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../package.json');

    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function() {
    var done = this.async();

    this.log(yosay('Welcome to the Texas Tribune News Apps graphics generator!'));
    this.log(chalk.bold.green('Let us begin. I come with SCSS and autoprefixer out of the box. Enjoy!'));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?'
    }];

    this.prompt(prompts, function(answers) {
      this.appname = answers.projectName;

      done();
    }.bind(this));
  },

  gruntfile: function() {
    this.template('Gruntfile.js');
  },

  packageJSON: function() {
    this.template('_package.json', 'package.json');
  },

  bowerJSON: function() {
    this.template('_bower.json', 'bower.json');
  },

  git: function() {
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
  },

  jshint: function() {
    this.copy('jshintrc', '.jshintrc');
  },

  editorconfig: function() {
    this.copy('editorconfig', '.editorconfig');
  },

  app: function() {
    this.template('data.json');
  },

  mainJS: function() {
    this.copy('main.js', 'app/scripts/main.js');
  },

  pymJS: function() {
    this.copy('pymload.js', 'app/scripts/pymload.js');
  },

  mainStylesheet: function() {
    this.template('main.scss', 'app/styles/main.scss');
  },

  mainIndex: function() {
    this.copy('index.html', 'app/index.html');
  }
});

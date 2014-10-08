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

    this.log(yosay('Welcome to the Texas Tribune News Apps generator!'));
    this.log(chalk.bold.yellow('Let us begin. I come with SCSS and autoprefixer out of the box. Enjoy!'));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: this._.slugify(this.appname),
      filter: function(response) {
        return this._.slugify(response);
      }.bind(this)
    },{
      type: 'confirm',
      name: 'grandHeader',
      message: 'Do you need a grand header? (Centered headline, large background image)',
    },{
      type: 'list',
      name: 'footerType',
      message: 'Which footer would you like to use?',
      choices: [
        {name: 'Basic', value: 'basic'}
        // {name: 'News Apps', value: 'newsapps'} // TODO
      ]
    }];

    this.prompt(prompts, function(answers) {
      this.appname = answers.projectName;
      this.grandHeader = answers.grandHeader;
      this.footerType = answers.footerType;

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

  bowerrc: function() {
    this.template('_bowerrc', '.bowerrc');
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
    this.copy('data.json');
  },

  mainStylesheet: function() {
    this.template('main.scss', 'app/styles/main.scss');
  },

  baseTemplate: function() {
    this.template('base.html', 'app/templates/base.html');
  },

  mainIndex: function() {
    this.copy('index.html', 'app/index.html');
  }
});

// Generated on <%= (new Date).toISOString().split('T')[0] %> using
// <%= pkg.name %> <%= pkg.version %>
'use strict';

// # Globbing
// For performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// Use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

    // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    config: config,

    autoprefixer: {
      options: {
        browsers: ['last 1 version', 'ie 8', 'ie 9']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%%= config.dist %>/*',
            '!<%%= config.dist %>/.git*'
          ]
        }]
    },
      server: '.tmp'
    },

    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          base: ['.tmp'],
          middleware: function(connect, options) {
            return [
              connect.static(options.base[0]),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      }
    },

    copy: {
      dist: {
        expand: true,
        dot: true,
        cwd: '<%%= config.app %>',
        dest: '<%%= config.dist %>',
        src: [
          '*.{json,csv,tsv,geojson}',
          '*.{ico,png,txt}',
          'images/{,*/}*.webp',
          'styles/fonts/{,*/}*.*'
        ]
      },
      compiledHtml: {
        expand: true,
        dot: true,
        cwd: '.tmp',
        dest: '<%%= config.dist %>',
        src: [
          '{,*/}*.html',
        ]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%%= config.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      pym: {
        src: 'bower_components/pym.js/src/pym.js',
        dest: '<%%= config.dist %>/scripts/vendor/pym.js'
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%%= config.dist %>'
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= config.app %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%%= config.dist %>/images'
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%%= config.app %>/scripts/{,*/}*.js',
        '!<%%= config.app %>/scripts/vendor/*'
      ]
    },

    nunjucks: {
      options: {
        data: grunt.file.readJSON('data.json')
      },
      render: {
        files: [{
          expand: true,
          cwd: '<%%= config.app %>',
          src: ['{,*/}*.html', '!templates/*'],
          dest: '.tmp',
          ext: '.html'
        }]
      }
    },

    sass: {
      options: {
        loadPath: [
          'bower_components'
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= config.app %>/styles',
          src: ['*.scss'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%%= config.app %>/styles',
          src: ['*.scss'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    rev: {
      dist: {
        files: {
          src: [
            '<%%= config.dist %>/scripts/{,*/}*.js',
            '<%%= config.dist %>/styles/{,*/}*.css',
            '<%%= config.dist %>/images/{,*/}*.*',
            '<%%= config.dist %>/styles/fonts/{,*/}*.*',
            '<%%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    useminPrepare: {
    options: {
      dest: '<%%= config.dist %>'
    },
      html: '.tmp/index.html'
    },

    usemin: {
      options: {
        assetsDirs: ['<%%= config.dist %>', '<%%= config.dist %>/images']
      },
      html: ['<%%= config.dist %>/{,*/}*.html'],
      css: ['<%%= config.dist %>/styles/{,*/}*.css']
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: ['<%%= config.app %>/{,*/}*.html'],
        tasks: ['nunjucks', 'wiredep'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['<%%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%%= connect.options.livereload %>'
        },
        files: [
          '.tmp/styles/{,*/}*.css',
          '<%%= config.app %>/images/{,*/}*'
        ]
      },
      sass: {
        files: ['<%%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },
    },

    wiredep: {
      app: {
        src: ['.tmp/{,*/}*.html']
      }
    }
  });

  grunt.registerTask('serve', [
    'clean:server',
    'nunjucks',
    'wiredep',
    'sass:server',
    'autoprefixer',
    'connect:livereload',
    'watch'
  ]);

   grunt.registerTask('build', [
    'clean:dist',
    'nunjucks',
    'wiredep',
    'useminPrepare',
    'sass:dist',
    'copy:styles',
    'imagemin',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'copy:compiledHtml',
    'rev',
    'usemin',
    'htmlmin',
    'copy:pym'
    ]);

  grunt.registerTask('default', ['serve']);
};

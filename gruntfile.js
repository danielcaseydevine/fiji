module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      options: {
        outputStyle: 'expanded',
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/main.min.css': 'assets/css/sass/main.scss'
        }
      },
    },

    // Post CSS tasks
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          }),
          require('cssnano')()
        ]
      },
      dist: {
        files: {
          'assets/css/main.min.css': 'assets/css/main.min.css'
        }
      }
    },

    // Minify Javascript
    uglify: {
      my_target: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js']
        }
      }
    },

    //Watch tasks
    watch: {
      css: {
        files: ['assets/css/sass/**/*.scss'],
        tasks: ['sass', 'postcss'],
        options: {
          spawn: false,
          livereload: true
        }
      },

      js: {
        files: ['assets/js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }

  });

  // Grunt dependencies
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tasks
  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('js', ['uglify']);

  // Deployment Task
  grunt.registerTask('default', ['js', 'css', 'watch']);

};
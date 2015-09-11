
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // clean: {
  //     dist: 'dist'
  //   },
    less: {
      compileCore: {
        // options: {
        //   strictMath: true,
        //   sourceMap: true,
        //   outputSourceFiles: true,
        //   sourceMapURL: '<%= pkg.name %>.css.map',
        //   sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        // },
        src: 'css/bootstrap.less',
        dest: 'css/bootstrap.css'
      }
    },
    concat: {
      css: {
        src: [
          'bower_components/fancybox/source/jquery.fancybox.css',
          'css/bootstrap.css',
          'css/main.css'
        ],
        dest: 'css/<%= pkg.name %>.css'
      },      
      js_build: {
        src: [
          'bower_components/bootstrap/js/transition.js',
          'bower_components/bootstrap/js/alert.js',
          'bower_components/bootstrap/js/button.js',
          //'bower_components/bootstrap/js/carousel.js',
          //'bower_components/bootstrap/js/collapse.js',
          //'bower_components/bootstrap/js/dropdown.js',
          'bower_components/bootstrap/js/modal.js',
          'bower_components/bootstrap/js/tooltip.js'
          //'bower_components/bootstrap/js/popover.js',
          //'bower_components/bootstrap/js/scrollspy.js',
          //'bower_components/bootstrap/js/tab.js',
          //'bower_components/bootstrap/js/affix.js',
        ],
        dest: 'js/bootstrap.js'
      },      
      js: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'js/bootstrap.js',
          'bower_components/jquery-validation/dist/jquery.validate.js',
          // 'bower_components/dropzone/dist/dropzone.js',
          'bower_components/fancybox/source/jquery.fancybox.js',
        ],
        dest: 'js/<%= pkg.name %>.js'
      }
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      minifyCore: {
        src: 'css/<%= pkg.name %>.css',
        dest: 'css/<%= pkg.name %>.min.css'
      }      
    },
    uglify: {
      options: {
        preserveComments: 'some'
      },
      core: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }      
    },
    copy: {
      fonts_build: {
        expand: true,
        src: 'bower_components/bootstrap/dist/fonts/**',
        dest: 'fonts/',
        flatten: true,
        filter: 'isFile'
      },
      fancybox_build: {
        expand: true,
        src: ['bower_components/fancybox/source/*.png','bower_components/fancybox/source/*.gif'],
        dest: 'css/',
        flatten: true,
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        src: 'bower_components/bootstrap/dist/fonts/**',
        dest: 'fonts/',
        flatten: true,
        filter: 'isFile'
      },
      fancybox: {
        expand: true,
        src: ['bower_components/fancybox/source/*.png','bower_components/fancybox/source/*.gif'],
        dest: 'css/',
        flatten: true,
        filter: 'isFile'
      }
      // images: {
      //   expand: true,
      //   src: 'src/images/**',
      //   dest: 'dist/images/',
      //   flatten: true,
      //   filter: 'isFile'
      // }
    },
  });
  
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);
  
  // grunt.registerTask('build', ['less', 'concat:js_build','copy:fonts_build','copy:fancybox_build']);
  grunt.registerTask('dist', ['less', 'concat:css', 'concat:js', 'cssmin:minifyCore','uglify:core','copy:fonts','copy:fancybox']);


};
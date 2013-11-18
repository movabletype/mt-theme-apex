/*global module:false*/
module.exports = function (grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    watch: {
      css: {
        files: 'scss/**.scss',
        tasks: ['compass:build']
      },
    },
    compass: {
      build: {
        options: {
          noLineComments: true,
          sassDir: 'scss',
          cssDir: '../themes/apex/static/css'
        }
      }
    },
    'sass-convert': {
      scss: {
        files: [{
          src: ['scss/*.scss']
        }]
      }
    },
  });

  grunt.registerTask('build', [
    'sass-convert',
    'compass:build'
  ]);
};

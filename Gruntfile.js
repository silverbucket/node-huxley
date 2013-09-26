/*
 * grunt-contrib-cssmin
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    huxley: {
      one: {},
      two: {
        options: {
          mode: 'update'
        },
        src: 'tests/grunt/**/'
      },

  });

  grunt.loadNpmTasks('grunt-huxley');

  grunt.registerTask('default', ['huxley:one']);

};

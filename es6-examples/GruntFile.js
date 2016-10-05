module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-babel');
  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["**/*.js"],
          "dest": "build/",
          "ext": ".js"
        }]
      }
    }
  });
};
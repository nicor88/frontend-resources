module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 4000,
          base: "./",
          interrupt: true,
          spawn: false
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/controllers/**.js','js/directives/**.js','views/**.html']

      }
    }
  });
  grunt.registerTask('serve', ['connect:server', 'watch']);
};
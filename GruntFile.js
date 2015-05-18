module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        // configure nodemon
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            js: {
                src: ['public/js/app/*.js','public/js/app/*/*.js'],
                dest: 'public/js/mean.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'public/js/app.min.js': ['public/js/app/*.js','public/js/app/*/*.js']
                }
            }
        }

    });
    grunt.registerTask('start server', ['nodemon']);
    grunt.registerTask('create app.js', ['concat']);
    grunt.registerTask('minification', ['cssmin','uglify']);
};
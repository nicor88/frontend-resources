module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
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
            build: {
                files: {
                    'public/customers/js/customers.js': ['public/customers/js/app/*.js', 'public/customers/js/app/*/*.js']
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'public/customers/js/customers.min.js': ['public/customers/js/app/*.js', 'public/customers/js/app/*/*.js']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/customers/js/app/**/*.js']
        }
    });
    grunt.registerTask('start server', ['nodemon']);
    grunt.registerTask('create app.js', ['concat']);
    grunt.registerTask('minification', ['uglify']);
    grunt.registerTask('validate JS', ['jshint']);
    //grunt.registerTask('minification', ['cssmin','uglify']);
};
/**
 * Created by fabio on 14/02/17.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        tags: {
            build: {
                src: [
                    'app/lib/*/*.min.js',
                    'app/app.*.js',
                    'app/controllers/**/*.js',
                    'app/services/**/*.js'
                ],
                dest: 'app/index.html'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.registerTask('default', ['uglify','tags']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-script-link-tags');
    // Default task(s).





};
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
        prompt: {
            target: {
                options: {
                    questions: [
                        {
                            config: 'vvv', // arbitrary name or config for any other grunt task
                            type: 'input', // list, checkbox, confirm, input, password
                            message: 'Nome del controller', // Question to ask the user, function needs to return a string,
                        }
                    ],
                    then: function (results, done) {
                        someAsyncFunction(function () {
                            done();
                        });
                        return true;
                    },
                },
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-prompt');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    var inquirer = require('inquirer');

    grunt.task.registerTask('createController', function() {

            var questions = [{
                'Modulo del controller': 'moduleName',
                'nome del controller': 'controllerName'
            }];

            return Promise.resolve(inquirer.prompt(questions).then(function (answer) {
                const moduleName = answer.moduleName;
                const ctrlName = answer.controllerName;
                console.log(answer);
                const contents ="Prova";
                grunt.file.write('app/controllers/'+ctrlName+'Ctrl.js', contents)
                }))
    });



};
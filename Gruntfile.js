module.exports = function(grunt) {

    // Project configuration.                                                                                                                                                                
    grunt.initConfig({
        nodeunit: {
            all: ['./**/*Test.js']
        }
    });

    // Load nodeunit task                                                                                                                                                                
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

};


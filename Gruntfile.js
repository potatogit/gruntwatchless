module.exports = function (grunt) {

grunt.initConfig({
    less: {
        myless: {
            files: [
              {
                expand: true,
                cwd: 'less/', // source path
                // Compile each LESS component excluding "bootstrap.less",
                // "mixins.less" and "variables.less"
                src: ['*.less', '!{boot,var,mix}*.less'],
                dest: 'css/', // destination path
                ext: '.css'
              }
            ]
        }
    },

    watch: { // 1. add watch task
        mywatch: {
            files: ['less/*.less'], // what to watch
            tasks: ['less:myless'] // what to do
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch'); // 2.load npm task

grunt.registerTask('mycompile', ['less:myless', 'watch:mywatch']);  //3. register task
};

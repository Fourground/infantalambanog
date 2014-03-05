module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
    
            js: {
        src: [
            'js/vendor/*.js', // All js librarys
            'js/*.js'  // all other plugins and authored js
        ],
        dest: 'js/build.js',
    },
            css: {
        src: [
            'css/*.css', 

        ],
        dest: 'css/build.css',
    },
},

        uglify: {
    js: {
        src: 'js/build.js',
        dest: 'js/build.min.js'
    }
},
    cssmin: {
  add_banner: {
    options: {
      banner: '/* Minified */'
    },
    files: {
      'css/build.min.css': ['css/build.css']
    }
  }
}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
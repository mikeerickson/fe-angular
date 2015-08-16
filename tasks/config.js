// CONFIG (TASKS)
// =============================================================================


module.exports = {

  defaults: {
    show: false,
  },

  css: {
    src:  './src/sass/*.scss',
    dest: './public/css',
    destFilename: 'app.min.css'
  },

  images: {
    src:  './public/images',
    dest: './public/images'
  },

  lib: {
    src: [
      './src/lib/jquery.min.js',
      './src/lib/sprintf.min.js',
      './src/lib/lodash.min.js',
      './src/lib/bootstrap.min.js',
      './src/lib/angular.min.js',
      './src/lib/angular-sprintf.min.js'
    ],
    dest: './public/js',
    destFilename: 'lib.min.js',
  },

  logs: {
    paths: ['./logs']
  },

  scripts: {
    src: [
      './src/js/app.js',
      './src/js/info.js'
    ],
    dest: './public/js',
    destFilename: 'app.min.js'
  },

  jscs: {
    src: './src/js/**/*.js',
    dest: './src/js/_fixed'
  },

  browserify: {
    src:      './examples/app.js',
    dest:     './examples/public/js',
    filename: 'app.js'
  },

  build: {
    lib: {
      src:       ['./src/tableMultiRowSelect/TableMultiRowSelect.js'],
      dest:      './src/tableMultiRowSelect',
      filename : 'TableMultiRowSelect.min.js',
      dist:      './dist'
    },

    copy: {
      src: [
        './src/tableMultiRowSelect/TableMultiRowSelect.min.js',
        './src/tableMultiRowSelect/tableMultiRowSelect.css',

        './src/tableColumnResize/tableColumnResize.css',
        './src/tableColumnResize/tableColumnResize.js',
        './src/tableColumnResize/tableColumnResize.min.js',

        './src/tableContextualMenu/tableContextualMenu.css'
      ],
      dist:     './dist',
      buildSrc: './dist/**/*.*',
      lib:      './examples/public/lib'
    }
  },

  watch: {
    browserify: ['./examples/js/app.js','./src/**/*.js'],
    uglify:     ['./examples/lib/**/*.js']
  },

  todo: {
    src:        ['./src/**/*.js','./tasks/**/*.js'],
    exclude:    ['./src/_old/**/*.js','./task/_old/**/*.js','./tasks/todo.js'],
    successMsg: '*** ./TODO.md File Created Successfully',
    reporter:   {
      open: false
    }
  }

};

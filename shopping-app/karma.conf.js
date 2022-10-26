// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
// jasmine config options @ https://jasmine.github.io/api/edge/Configuration.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-spec-reporter'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        random:false // disable random execution
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true 
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },        
        { type: 'lcovonly' },
      ],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
          excludes: [
            // 'app/bar/**/*.ts'
          ]
        },
        each: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
          excludes: [
            // 'app/directory/**/*.ts'
          ],
        },
        watermarks: {
          statements: [ 60, 80 ],
          functions: [ 60, 80 ],
          branches: [ 60, 80 ],
          lines: [ 60, 80 ]
        },
      },
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    // logLevel: config.LOG_DISABLE,  // ??
    // logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    // browsers: ['Firefox'],
    // browsers: ['Chrome', 'Firefox'],
    detatched: true,  // ??
    singleRun: false,
    restartOnFileChange: true
  });
};

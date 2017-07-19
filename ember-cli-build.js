/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// const autoprefixer = require('autoprefixer');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: false
      },
      shimEnabled: true,
      shimPlugins: [
        'autoprefixer'
      ]
    }
  });
  return app.toTree();
};

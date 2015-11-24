exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'specs/**'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};

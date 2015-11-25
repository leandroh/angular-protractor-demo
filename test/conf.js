exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'specs/calculadora-spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};

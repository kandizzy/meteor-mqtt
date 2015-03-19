Package.describe({
  name: 'kandizzy:meteor-mqtt-fork',
  version: '0.0.1',
  summary: 'a fork of spectrum:mqtt',
  git: 'https://github.com/kandizzy/meteor-mqtt',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.addFiles('mqtt.js');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('mqtt.js', 'server');
  api.export('mqtt');
});

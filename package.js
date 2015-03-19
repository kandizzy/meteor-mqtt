Package.describe({
  name: 'kandizzy:meteor-mqtt-fork',
  version: '0.0.2',
  summary: 'a fork of spectrum:mqtt',
  git: 'https://github.com/kandizzy/meteor-mqtt',
  documentation: 'README.md'
});


Npm.depends({
  "mqtt": "1.1.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('mqtt.js', 'server');
  api.export('mqtt');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('mqtt.js', 'server');
  api.export('mqtt');
});

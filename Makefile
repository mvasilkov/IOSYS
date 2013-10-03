jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
npm = npm

all: jshint mocha

node_modules: package.json
	@ $(npm) install

jshint: node_modules
	@ $(jshint) IOSYS.js lib/*.js package.json

mocha: node_modules
	@ $(mocha) -R spec

'use strict';

var express      = require('express'),
    app          = express(),
    expressBrowserify = require('express-browserify');

// for local development
require('dotenv').load({
    silent: true,
    path: __dirname + '/../.env'
});

// automatically create and serve a bundle.js file with the watson Speech JS SDK + client code run through browserify
// alternatively, you could just download a standalone JS file from https://github.com/watson-developer-cloud/speech-javascript-sdk/releases
app.get('/bundle.js', expressBrowserify(__dirname + '/../client/index.js', {
    watch: process.env.NODE_ENV != 'production'
}));

app.use(express.static(__dirname + '/../public'));

// token endpoints
// **Warning**: these endpoints should be guarded with additional authentication & authorization for production use
app.use('/api/speech-to-text/', require('./stt.js').router);
app.use('/api/text-to-speech/', require('./tts.js').router);

// bluemix sets VCAP_APP_PORT
var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port, function() {
   console.log('Server live at http://localhost:%s/', port);
});

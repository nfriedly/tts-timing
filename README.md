# tts-timing

A fairly ridiculous way to get word timings with the Watson Text to Speech service.

Try it out at https://watson-tts-timing.mybluemix.net/ or click the button below to spin up your own copy:

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/nfriedly/tts-timing)

### Local setup

 Create a file named [.env] and give it credentials for the Watson Speech to Text and Text to Speech services. 
(To retrieve credentials, create a [Bluemix] server instance, bind Watson Speech to Text and Text to Speech instances to it, then click show credentials.)

```
STT_USERNAME="..."
STT_PASSWORD="..."
TTS_USERNAME="..."
TTS_PASSWORD="..."
```

### Server setup

It should work out-of-the box with the Deploy to Bluemix button.

[.env]: https://www.npmjs.com/package/dotenv
[Bluemix]: https://console.ng.bluemix.net/

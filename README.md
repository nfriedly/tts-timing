# tts-timing

A fairly ridiculous way to get word timings with the Watson Text to Speech service.

Try it out at https://watson-tts-timing.mybluemix.net/

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/nfriedly/tts-timing)

### Local setup

 Create a file named [`.env`] and give it credentials for the Watson Speech to Text and Text to Speech services. 
(Create a [Bluemix] account create a server instance, create Watson Speech to Text and Text to Speech instances, bind them to the server, then click show credentials.)

```
STT_USERNAME="..."
STT_PASSWORD="..."
TTS_USERNAME="..."
TTS_PASSWORD="..."
```

### Server setup

It should work out-of-the box on a bluemix server with the Watson Speech services bound to it.

[.env]: https://www.npmjs.com/package/dotenv
[Bluemix]: https://console.ng.bluemix.net/

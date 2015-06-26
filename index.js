var LightwaveRF = require("lightwaverf");
var Speakable = require('speakable');

var lw = new LightwaveRF({ip:"192.168.1.101"});

var speakable = new Speakable({lang: 'en-GB'});

speakable.on('speechStart', function() {
  console.log('onSpeechStart');
});

speakable.on('speechStop', function() {
  console.log('onSpeechStop');
});

speakable.on('speechReady', function() {
  console.log('onSpeechReady');
});

speakable.on('error', function(err) {
  console.log('onError:');
  console.log(err);
  speakable.recordVoice();
});

speakable.on('speechResult', function(recognizedWords) {
  console.log('onSpeechResult:');
  console.log(recognizedWords);
  speakable.recordVoice();
});

speakable.recordVoice();


// lw.turnDeviceOn("4", "1", function(error, content) {
    // if (error) {
        // console.log("Error turning device on " + error.message);
    // } else {
        // console.log("Response: " + content);
    // }
// });

// lw.turnDeviceOff("4", "1", function(error, content) {
    // if (error) {
        // console.log("Error turning device off " + error.message);
    // } else {
        // console.log("Response: " + content);
    // }
// });
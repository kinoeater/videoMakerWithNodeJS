var videoshow = require('videoshow')

// do not forget brew install ffmpeg

var images = [
  'DP169212.jpg',
  'DP14274.jpg',
  'DP243637.jpg',
  'DP331536.jpg'
]

var videoOptions = {
    fps: 25,
    loop: 20, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '1920x1080',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
  }

videoshow(images,videoOptions)
.audio('./audios/happy.mp3')
  .save('video.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err) {
    console.error('Error:', err)
  })
  .on('end', function (output) {
    console.log('Video created in:', output)
  })
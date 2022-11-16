let game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
start: function(){
  game.startTime = Date.now();
  document.body.onkeydown = game.stop;
},
stop: function() {
  let currentTime = Date.now();
  let seconds = (currentTime - game.startTime) / 1000;
  if (10.000 <= seconds && seconds <= 10.000) {
    game.displayArea.innerText = seconds + '秒でした。perfect!。';
  } else {
    game.displayArea.innerText = seconds + '秒でした。残念。';
   }
  }
}
if (confirm('OKを押して10秒経ったらキーを押してください')) {
  game.start();
}



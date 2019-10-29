var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function updateCountry() {
  var x = document.getElementById('select_language').value;
  recognition.lang = x;
};
recognition.interimResults = true;

let p = document.createElement('p');
var words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  var transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  
  }
  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

$('#start-record-btn').on('click', function(e) {
  recognition.start();
  console.log('Speech recognition service has started');
});

$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  console.log('Speech recognition service disconnected');
  
});

const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  $('.target').removeClass('target'); 
  $('.miss').removeClass('miss'); 

  let divSelector = randomDivId();
  $(divSelector).addClass('target')
  $(divSelector).text(hits + 1)
  

  if (hits === 1) { firstHitTime = getTimestamp(); } 
  if (hits === maxHits) { endGame(); } 
}

function endGame() {
  $('.game-field').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $('#total-time-played').text(totalPlayedSeconds);

  $('#win-message').removeClass("d-none");
}

function handleClick(event) {
  let target = $(event.target)
  if (target.hasClass('target')) {
    hits = hits + 1;
    target.text('');
    round();
  } else { $(event.target).addClass('miss'); } 
}

function init() {
  round();

  $('.game-field').click(handleClick);
  $('#button-reload').click(function() {
    location.reload();
  });
}

$(document).ready(init);
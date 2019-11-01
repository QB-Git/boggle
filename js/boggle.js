function startBoggle() {
  tabRes = _.shuffle([
    ['S','N','H','R','E','I'],
    ['R','B','T','L','I','A'],
    ['D','C','M','P','A','E'],
    ['D','T','N','S','E','O'],
    ['N','U','L','E','G','Y'],
    ['R','A','F','X','I','O'],
    ['N','O','E','U','K','T'],
    ['D','V','N','Z','E','A'],
    ['N','I','G','E','V','T'],
    ['S','P','T','L','E','U'],
    ['F','E','H','S','I','E'],
    ['A','S','O','I','M','R'],
    ['A','M','O','Q','J','B'],
    ['A','R','E','L','S','C'],
    ['R','I','E','U','L','W'],
    ['E','A','T','I','O','A']
  ]);

  for(let i = 0; i < tabRes.length; i++) {
    var ligne;
    if(i%4 == 0) {
      ligne = $('<div/>')
        .addClass('row')
        .appendTo('#container');
    }
    $('<div/>')
      .addClass('col-3')
      .html(_.shuffle(tabRes[i])[0])
      .appendTo(ligne);
  }


  var timer = new easytimer.Timer();
  timer.start({countdown: true, startValues: {minutes: 3}});
  /*timer.start({countdown: true, startValues: {seconds: 7}});*/
  $('#countdownExample .values').html(timer.getTimeValues().toString(['minutes', 'seconds']));
  timer.addEventListener('secondsUpdated', function (e) {
      $('#countdownExample .values').html(timer.getTimeValues().toString(['minutes', 'seconds']));
  });
  timer.addEventListener('targetAchieved', function (e) {
      $('#countdownExample .values').html('FINI !');
      $('.col-3').css('filter','blur(1.3rem)');
      $('#btn_replay').toggle();
      
  $('.col-3').mouseenter(() => $('.col-3').css('filter','blur(0)'));
  $('.col-3').mouseleave(() => $('.col-3').css('filter','blur(1.3rem)'));
  });
}



$(document).ready(function () {

  $('#btn_replay').click(() => window.location.reload());
  $('#btn_replay').toggle();

  $('#btn_start').click(() => {
    startBoggle();
    $('#game_start_container').toggle();
    $('#particle-canvas').css('filter','brightness(0.4)');
  });



});

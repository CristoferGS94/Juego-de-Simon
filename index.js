// $('#level-title').html('Que pasa');
// $('#level-title').html('Que pasa');
// $('#level-title').html('Que pasa');

var colors = ['red', 'blue', 'green', 'yellow'];
var sequence = [];
var userVal = [];
var levels = 0;

var started = false; //Crea variable started en false, para que al menos una vez entre a la condicional al presionar una tecla.

$(document).keydown(function () {
  if (!started) {
    nextStepSequence();
    started = true;
  }
});

function nextStepSequence() {
  // Sumamos uno al nivel 
  $("h1").text("Level " + levels ++);
  // Calculamos número aleatorio
  var RandomNumber = Math.floor(Math.random() * 3);
  // Lo asociamos a un color
  var RandomColor = colors[RandomNumber];
  // Lo ponemos a lo último del array
  
  sequence.push(RandomColor);
  userVal = [];
  console.log(sequence.toString());
  
  // Seleccionamos el botton aleatorio y le damos efectos
  $('#' + RandomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  // Reproducimos el sonido
  var audioButton = new Audio("./sounds/" + RandomColor + ".mp3");
  audioButton.play();
}



  // Cuando le da click a un objeto lo identifica
  $(".btn").click(function () {
    var userChoosenColor = this.id;
    userVal.push(userChoosenColor);
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
      checkAnswer();
  }
  )
  function animatePress(color) {
    $("#" + color).addClass("pressed"); //Se selecciona el botón que tenga como id el color que ha clickeado el usuario y se le pone la clase pressed
    setTimeout(function () {
      $("#" + color).removeClass("pressed"); //luego de 100ms se quita la clase, para hacer el efecto del click
    }, 100);
  }

  function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3"); //Creamos el audio usando la dirección que tiene en nuestra web
    audio.play(); //Le damos play
  }
    // Cuando clickeamos un boton se reproduce el sonido
     
  
      // empezamos la comparación
      // empezamos la comparación
      // empezamos la comparación
      // empezamos la comparación
      // empezamos la comparación
      // empezamos la comparación
  
      function checkAnswer() {
        var lastPosition = userVal.length - 1;
              if (userVal[lastPosition] === sequence[lastPosition]) {
          if (userVal.length === sequence.length) {
            setTimeout(function () {
              nextStepSequence();
            }, 1000);
          }
        } else {
          playSound("wrong"); 
          $("body").addClass("game-over");
          setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("h1").text("Game Over, Press any key to Restart");
          StartOver();
        }
      }
      function StartOver() {
        levels = [];
        sequence = [];
        var started = false;
        $(document).keydown(function () {
          if (!started) {
            nextStepSequence();
            started = true;
          }
        });
      }
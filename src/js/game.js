(function() { // private module pattern

  'use strict'

  //===================================
  // CONSTANTS
  //===================================

  var FPS    = 60,
      WIDTH  = 720,
      HEIGHT = 540;

  var FPSMETER = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });

  //===================================
  // INITIAL VARIABLES
  //===================================

  var now,
      dt   = 0,
      last = timestamp(),
      step = 1/60;

  const ObjectsArr = [];

  //===================================
  // GAME - UTILIY FUNCTIONS
  //===================================

  // ... keep game loop consistent with system time
  function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  //===================================
    // GAME CLASSES
  //===================================
  class Game {
    constructor(game) {
      var road,
          camera,
          player,
          renderer;
    }

    init(images, level) {
      console.log("Game Init");
    }

    create(obj) {
      ObjectsArr.push(obj);
    }


    update(dt) {
      ///...
    }

    render(dt) {
      ///...
    }
  };
  const game = new Game();

  //===================================
  // GAME OBJECTS
  //===================================

  var Road = game.create({
    ///...
  });

  var Player = game.create({
    ///...
  });

  var Camera = game.create({
    ///...
  });

  var Renderer = game.create({
    ///...
  });

  //===================================
  // LET'S GO!
  //===================================
  game.init();
  run();    // see "the game loop" in the next article

  function run() {
    FPSMETER.tickStart();
    now   = timestamp();
    dt    = Math.min(1, (now - last) / 1000);    // duration in seconds capped @ 1.0 secs
    game.update(dt);
    game.render(dt);
    requestAnimationFrame(run); // request the next frame
    FPSMETER.tick();
  }

  requestAnimationFrame(run); // start the first frame


})();

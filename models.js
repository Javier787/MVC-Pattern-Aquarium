    var backgroundFishModel = {
        x: 600,
        y: 600,
        width: 600,
        height: 600,
        angle: 10

      }

      var bubblesModel = {
        crabY: 400,
        angelY: 400,
        jellyY: 400,
        blowY: 400,

        initCrabRadius:0,
        initAngelRadius:0,
        initJellyRadius:0,
        initBlowRadius:0,

        crabRadius: 20,
        angelRadius: 15,
        jellyRadius: 17,
        blowRadius: 10,

        crab: false,
        angel: false,
        jelly: false,
        blow: false
      }


      var blowFishModel = {
        x:350,
        y:120,
        width: 70,
        height: 70,
        vy:.5,
        vx:.5,
        angle:0,
        atMax:true,
        flip: true,
        time: 0,
        period: 10000,
        clicked: false,
        initWidth: 40,
        initHeight:40,


      }
      var clownFishModel = {
        x:250,
        y:70,
        vx:2,
        vy:2,
        angle:30,
        atMax:true,
        flip: true,
        time: 0,
        period: 44000,
        clicked: false

      }

      var seaHorseModel = {
        x:300,
        y:300,
        scaleX:45,
        scaleY:45,
        oldX:0,
        vx:2,
        vy:2,
        time: 0,
        period: 40000
      }

      var blowFishModel2 = {
        x:250,
        y:70,
        flip: true,
        period: 18000

      }

      var angelFishModel = {
        x:300,
        y:400,
        width: 50,
        height: 50,
        oldX: 0,
        oldY: 0,
        angle: 0,
        vx:.4,
        vy:.7,

        time: 0,
        angelTime: 0,
        period: 10000,
        clicked: false
      }

      var angelFishModel2 = {
        x:0,
        y:0,
        width: 30,
        height: 30,
        oldX: 0,
        oldY: 0,
        vx:.9,
        vy:.6,
        initHeight:0,
        initWidth: 0,
        time: 0,
        angelTime: 0,
        period: 10000

      }

      var jellyFishHeadModel = {
        x:50,
        y:50,
        width: 120,
        height: 120,
        angle: 0,
        oldX: 0,
        vx:0.2,
        vy:0.2,
        flip: true,
        time: 0,
        period: 5000,
        clicked: false

      }

      var jellyFishTentaclesModel = {
        x:50,
        y:50,
        factorX:5,
        factorY:60,
        shift : 0,
        frameWidth : 300,
        frameHeight : 400,
        totalFrames : 4,
        currentFrame : 0

      }

      var crabModel = {
        x:600,
        y:500,
        height: 100,
        width: 100,
        period: 4000,
        elapsed:0,
        crabTime:0,
        clicked:false

      }

      var seaStarModel = {
        x: 300,
        y: 320,
        scaleX: 400,
        scaleY: 400
      }

      var plant = {
       x : 140,
       y : 350,
       shift : 0,
       shift2 : 50,
       frameWidth : 300,
       frameHeight : 300,
       totalFrames : 4,
       currentFrame : 0
      }

      var plant2 = {
       x:10,
       y:400,
       shift : 0,
       shift2 : 50,
       frameWidth : 300,
       frameHeight : 400,
       totalFrames : 4,
       currentFrame : 0
      }

      var plant3 = {
       x : 450,
       y : 210,
       shift : 0,
       shift2 : 50,
       frameWidth : 300,
       frameHeight : 400,
       totalFrames : 4,
       currentFrame : 0
      }

      var fanModel = {
        x: 90,
        y: 460,
        scaleX: 140,
        scaleY: 140,
        atMax : true
      }

      var fan2Model = {
        x: 350,
        y: 220,
        scaleX: 120,
        scaleY: 130,
        atMax : true
      }

      var tubeModel = {
        x: 250,
        y: 360,
        scaleX: 120,
        scaleY: 125,
        atMax : true
      }

      var smallRockModel = {
        x: 0,
        y: 0,
        scaleX: 110,
        scaleY: 110
      }

      var seaStarModel = {
        x: 500,
        y: 400,
        width: 50,
        height : 50
      }

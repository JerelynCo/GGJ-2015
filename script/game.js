window.onload = function() {
	var letters;
	var hKey;
	var iKey;
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });


    function preload () {
    	matrixScene.preload();

    }

    
    function create () {
    	matrixScene.create(); 
    }


    matrixScene = {
	    preload: function() {
	    	game.load.image('A', 'assets/A.png');
	    	game.load.image('B', 'assets/B.png');
	    	game.load.image('C', 'assets/C.png');
	    	game.load.image('D', 'assets/D.png');
	    	game.load.image('E', 'assets/E.png');
	    	game.load.image('G', 'assets/G.png');
	    	game.load.image('h', 'assets/h.png');
	    	game.load.image('i', 'assets/i.png');
	    	game.load.image('J', 'assets/J.png');
	    	game.load.image('L', 'assets/L.png');
	    	game.load.image('M', 'assets/M.png');
	    	game.load.image('Q', 'assets/Q.png');
	    	game.load.image('Y', 'assets/Y.png');
	    },

	    create: function() {
	   		game.stage.backgroundColor = '#6d94b5';
	   		letters = game.add.group();

	   		for(var i = 0; i < 4; i++){
	   			letters.create(Math.random() * 800, Math.random() * 600, 'A');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'B');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'C');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'D');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'E');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'G');	
	   			letters.create(Math.random() * 800, Math.random() * 600, 'J');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'L');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'M');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'Q');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'Y');
	   		}
	   		for(var i = 0; i < 10; i++){
	   			letters.create(Math.random() * 800, Math.random() * 600, 'h');
	   			letters.create(Math.random() * 800, Math.random() * 600, 'i');
	   		}	

			hKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
			iKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

			if(hKey.isDown){
				//game.state.start('next');
				var text = "- phaser -\n with a sprinkle of \n pixi dust.";
			    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
			    game.add.text(game.world.centerX-300, 0, text, style);
				//game.add.text(0，0，'Hello', { font: "65px Arial", fill: "#ff0044", align: "center" });	
			}
			

	    }
	};

	next = {
		create: function(){
			game.stage.backgroundColor = '#FFFFFF';		
		}
	};

	game.state.add('matrixScene', matrixScene);
	game.state.add('next', next);
	game.state.start('matrixScene');

};



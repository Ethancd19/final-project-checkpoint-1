class Level0AlexAptState {
    constructor() {
        this.isPaused = false;
        this.table = new Table(0, height - 250, 200, 250); // Create new Table instance
        this.player = new Player(this.table.x + (this.table.width / 2) - 20, this.table.y - 60);
    }
  
    // Toggle the paused state
    togglePause() {
        this.isPaused = !this.isPaused;
    }
  
    // Update game state
    update() {
        this.player.update();
        this.table.checkCollision(this.player);

        // Check for player being grounded due to screen bottom
        if (this.player.y + this.player.height > height) {
            this.player.y = height - this.player.height;
            this.player.velocityY = 0;
            this.player.grounded = true;
        }

        // Check for player going off screen to the left or right
        if (this.player.x < 0) {
            this.player.x = 0;
        }
        if (this.player.x + this.player.width > width) {
            this.player.x = width - this.player.width;
        }

        if (this.isPaused) {
            return;  // If the game is paused, we don't update the game state
        }
    }

    // Render game visuals
    draw() {
        noStroke();
        background(128,160,30); // Gray background to visually differentiate from MenuState
        fill(255);
        text("Level 0", width / 2, height / 4);
        this.table.draw();  // Draw the table
        this.player.draw();

        // If the game is paused, overlay the pause menu
        if (this.isPaused) {
            drawPauseMenu(this);
        }
    }
}
// class Level0NeoTokyoState {
//     constructor() {
//         this.isPaused = false;
//         this.pauseMenuOptions = ['Resume', 'Settings', 'Quit'];
//     }
  
//     // Toggle the paused state
//     togglePause() {
//         this.isPaused = !this.isPaused;
//     }
  
//     // Update game state
//     update() {
//         if (this.isPaused) {
//             return;  // If the game is paused, we don't update the game state
//         }
  
//         // ... add game update logic here
//     }
  
//     // Render game visuals
//     draw() {
//         background(150); // Gray background to visually differentiate from MenuState
//         text("Level 0", width / 2, height / 4);
//         // ... your regular game drawing logic goes here
  
//         // If the game is paused, overlay the pause menu
//         if (this.isPaused) {
//             this.drawPauseMenu();
//         }
//     }
// }
  
// To handle key presses
function keyPressed() {
    console.log('Key pressed with code:', keyCode); // This will log which key was pressed

    if (keyCode === ESCAPE && currentState instanceof Level0AlexAptState) {
        console.log('Attempting to toggle pause'); // This will log when the pause toggle is attempted
        currentState.togglePause();
    }
}
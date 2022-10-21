
const GAME_SIZE = 600
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snake = new Snake (SQUARE_SIZE);
const food = new Food()
let currentDirection = 'right';


function detectKeyPressed() {
    document.addEventListener('keydown', function(event){
        switch (event.key) {
            case 'ArrowLeft':
                if (currentDirection != 'right') {
                    currentDirection = 'left'
                }
                break;
            case 'ArrowRight':
                if (currentDirection != 'left') {
                    currentDirection = 'right'
                }
                break;
            case 'ArrowUp':
                if (currentDirection != 'down') {
                    currentDirection = 'up'
                }
                break;
            case 'ArrowDown':
                if (currentDirection != 'up') {
                    currentDirection = 'down'
                }
                break;
        
            default:
                break;
        }
    }
    );
}


function clearScreen() {
    ctx.clearRect(0,0, GAME_SIZE, GAME_SIZE);
}

function update() {
    
    clearScreen();
    food.draw()
    snake.update();
    if(snake.alive) {
        setTimeout(update,150);
    } else {
        alert('you lose')
    }
}

function start() {
    detectKeyPressed()
    update();
}

start();
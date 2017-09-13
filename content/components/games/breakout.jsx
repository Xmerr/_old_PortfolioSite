import GameScreen from './gameScreen';

var settings = {
    ball: {},
    paddle: {
        speed: 7,
        height: 10,
        margin: 10
    },
    bricks: {
        rows: 3,
        columns: 7,
        padding: 10,
        offsetTop: 30,
        offsetSides: 30
    }
};

class Breakout extends React.Component {
    componentDidMount() {
        document.addEventListener("keydown", e => this.userPress(e), false);
        document.addEventListener("keyup",  e => this.userRelease(e), false);
        this.reset();
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", e => this.userPress(e), false);
        document.removeEventListener("keyup",  e => this.userRelease(e), false);
       clearInterval(this.loop);
    }
    
    userPress(e) {
        if(e.keyCode === 39 || e.keyCode === 68) {
            this.rightPress = true;
        }
        else if(e.keyCode === 37 || e.keyCode === 65) {
            this.leftPress = true;
        }
    }
    
    userRelease(e) {
        if(e.keyCode === 39 || e.keyCode === 68) {
            this.rightPress = false;
        }
        else if(e.keyCode === 37 || e.keyCode === 65) {
            this.leftPress = false;
        }
    }
    
    reset() {
        clearInterval(this.loop);
        
        this.canvasWidth = this.refs.game.canvas.width;
        this.canvasHeight = this.refs.game.canvas.height;
        
        this.x = this.canvasWidth/2;
        this.y = this.canvasHeight-30;
        
        settings.ball.speed = this.canvasHeight > this.canvasWidth ? this.canvasWidth * 0.005 : this.canvasHeight * 0.005;
        
        this.dx = settings.ball.speed;
        this.dy = -settings.ball.speed;
        this.ballRadius = this.canvasHeight > this.canvasWidth ? this.canvasWidth * 0.02 : this.canvasHeight * 0.02;
        
        settings.paddle.width = this.canvasWidth * 0.1;
        this.paddleX = (this.canvasWidth - settings.paddle.width) / 2;
        
        this.leftPress = false;
        this.rightPress = false;
        
        this.score = 0;
        
        this.brickWidth = (this.canvasWidth - (settings.bricks.columns * settings.bricks.padding) - (settings.bricks.offsetSides * 2)) / settings.bricks.columns;
        this.brickHeight = ((this.canvasHeight / 4) - (settings.bricks.rows * settings.bricks.padding) -(settings.bricks.offsetTop * 2)) / settings.bricks.rows;
        
        this.bricks = [];
        for(var c=0; c < settings.bricks.columns; c++) {
            this.bricks.push([]);
            
            for(var r=0; r < settings.bricks.rows; r++) {
                this.bricks[c].push({ x: 0, y: 0, status: 1 });
            }
        }
        
        this.start();
    }
    
    start() {
        this.ctx = this.refs.game.canvas.getContext("2d");
        this.loop = setInterval(() => this.draw(), 10);
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.refs.game.canvas.width, this.refs.game.canvas.height);
        this.drawBall();
        this.drawPaddle();
        this.drawBricks();
        this.drawScore();
        this.collisionDetection();
        
        if(this.score === settings.bricks.columns * settings.bricks.rows) {
            clearInterval(this.loop);
            alert("win");
        }
    }
    
    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
        
        this.x += this.dx;
        this.y += this.dy;
        
        if(this.x > this.canvasWidth - this.ballRadius || this.x < this.ballRadius) {
            this.dx = -this.dx;
        }
        
        if(this.y < this.ballRadius) {
            this.dy = -this.dy;
        }
        
        if(
            this.y > this.canvasHeight - this.ballRadius - settings.paddle.margin
            && this.x > this.paddleX
            && this.x < this.paddleX + settings.paddle.width
        ) {
            this.dy = -this.dy;
        }
        
        if(this.y > this.canvasHeight - this.ballRadius) {
            clearInterval(this.loop);
            alert('Game Over');
        }
    }
    
    drawPaddle() {
        if(this.leftPress) {
            this.paddleX -= settings.paddle.speed;
            
            if(this.paddleX < 0) {
                this.paddleX = 0;
            }
        }
        if(this.rightPress) {
            this.paddleX += settings.paddle.speed;
            
            if(this.paddleX + settings.paddle.width > this.canvasWidth) {
                this.paddleX = this.canvasWidth - settings.paddle.width;
            }
        }
        
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvasHeight - settings.paddle.height - settings.paddle.margin, settings.paddle.width, settings.paddle.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
        
    }
    
    drawBricks() {
        for(var c = 0; c < settings.bricks.columns; c++) {
            for(var r = 0; r < settings.bricks.rows; r++) {
                if(this.bricks[c][r].status === 1) {
                    var brickX = (c * (this.brickWidth + settings.bricks.padding)) + settings.bricks.offsetSides;
                    var brickY = (r * (this.brickHeight + settings.bricks.padding)) + settings.bricks.offsetTop;
                    
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    
                    this.ctx.beginPath();
                    this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                    this.ctx.fillStyle = "#0095DD";
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }
    }
    
    collisionDetection() {
        for(var c = 0; c < settings.bricks.columns; c++) {
            for(var r = 0; r < settings.bricks.rows; r++) {
                var b = this.bricks[c][r];
                
                if(b.status === 1 && this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
                    this.dy = -this.dy;
                    b.status = 0;
                    
                    this.score++;
                }
            }
        }
    }
    
    drawScore() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: " + this.score, 8, 20);
    }
    
    render() {
        return (
            <div className="Breakout">
                <GameScreen reset={() => this.reset()}
                    ref="game" />
            </div>
        );
    }
}

export default Breakout;
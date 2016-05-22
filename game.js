// JavaScript File
var player;
var playerImage;
var enemy;
var enemyImage;
var enemy2;
var enemyImage2;
var enemy3;
var enemyImage3;
var isGameOver;
var backgroundImage;

function setup(){
    createCanvas(window.innerWidth/2, window.innerHeight/1.1);
    canvas.style = "position: absolute; left: 38%; width: 800px; margin-left: -150px;";
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    enemy2 = createSprite(width/3, 0, 0, 0);
    enemy2.addImage(enemyImage);
    enemy2.rotationSpeed = 4.0;
    enemy3 = createSprite(width/4, 0, 0, 0);
    enemy3.addImage(enemyImage3);
    enemy3.rotationSpeed = 3.8;
    isGameOver = false;
}

function movePlayer(){
    if(keyDown(RIGHT_ARROW) && player.position.x + player.width/2 < width){
        player.position.x = player.position.x + 5;
    }
    if(keyDown(LEFT_ARROW) && player.position.x - player.width/2 > 0){
       player.position.x = player.position.x - 5;
    }
}

function preload(){
    playerImage = loadImage("player.png");
    backgroundImage = loadImage("background.png");
    enemyImage = loadImage("moon-15892-large.png");
    enemyImage3 = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("GAMEOVER", width/2, height/2);
    text("CLICK ANYWHERE TO START", width/2, 3*height/4);
}

function mouseClicked(){
    if(isGameOver){
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height - (playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
        enemy2.position.x = width/3;
        enemy2.position.y = 0;
        enemy3.position.x = width/4;
        enemy3.position.y = 0;
    }
}

function moveEnemy(){
    enemy.position.y = enemy.position.y + 12;
    
    if(enemy.position.y > height){
        enemy.position.y = 0;
        enemy.position.x = random(0, width-5);
    }
    if(enemy.overlap(player)){
        isGameOver = true;
    }
}

function moveEnemy2(){
    enemy2.position.y = enemy2.position.y + 10;
    
    if(enemy2.position.y > height){
        enemy2.position.y = 0;
        enemy2.position.x = random(0, width-5);
    }
    if(enemy2.overlap(player)){
        isGameOver = true;
    }
}
function moveEnemy3(){
    enemy3.position.y = enemy3.position.y + 8;
    
    if(enemy3.position.y > height){
        enemy3.position.y = 0;
        enemy3.position.x = random(0, width-5);
    }
    if(enemy3.overlap(player)){
        isGameOver = true;
    }
}
function draw(){
    background(backgroundImage);
    if(isGameOver){
        gameOver();
    }
    else{
        movePlayer();
        moveEnemy();
        moveEnemy2();
        moveEnemy3();
    }
    drawSprites();
}
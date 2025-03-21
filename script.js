let score = 0;
let gameActive = false;

function startGame() {
    if (!gameActive) {
        gameActive = true;
        document.getElementById("score").innerText = "0";
        score = 0;
        dropHearts();
    }
}

function dropHearts() {
    if (!gameActive) return;
    let gameArea = document.getElementById("gameArea");
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * (gameArea.offsetWidth - 30) + "px";
    heart.style.top = "-30px";
    heart.onclick = function() {
        score += 1;
        document.getElementById("score").innerText = score;
        heart.remove();
        if (score >= 5) {
            endGame();
        }
    };
    gameArea.appendChild(heart);

    let fall = setInterval(() => {
        let top = parseInt(heart.style.top) || 0;
        if (top > gameArea.offsetHeight) {
            heart.remove();
            clearInterval(fall);
        } else {
            heart.style.top = top + 5 + "px";
        }
    }, 50);

    setTimeout(dropHearts, 1000);
}

function endGame() {
    gameActive = false;
    alert("You caught " + score + " hearts! Happy Birthday, my love!");
}
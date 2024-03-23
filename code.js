const rules = document.getElementById("rules");
const game_rule = document.getElementById("game-rule");
const close = document.getElementById("close");
const paper_img = document.getElementById("paper-img");
const scissor_img = document.getElementById("scissor-img");
const rock_img = document.getElementById("rock-img");
const select = document.getElementById("select");
const paper = document.getElementById("paper-player");
const scissor = document.getElementById("scissor-player");
const rock = document.getElementById("rock-player");
const player_para = document.getElementById("player-para");
const computer_para = document.getElementById("computer-para");
const computer_paper = document.getElementById("computer-paper");
const computer_scissor = document.getElementById("computer-scissor");
const computer_rock = document.getElementById("computer-rock");
const lose_btn = document.getElementById("lose-btn");
const lose_para = document.getElementById("lose-para");
const score_count = document.getElementById("count");
const play_again = document.getElementById("play-again-btn");
const mobile_lose_button = document.getElementById("mobile_lose-btn");
const mobile_play_again = document.getElementById('mobile-play-again');

let count = 0;
let temp = 0;
let random = Math.floor(Math.random() * (4 - 1) + 1);
function resetGame() {
    select.style.display = "block";
    player_para.style.display = "none";
    paper.style.display = "none";
    scissor.style.display = "none";
    rock.style.display = "none";
    lose_btn.style.display = "none";
    mobile_lose_button.style.display = "none"; 
    computer_paper.style.display = "none";
    computer_scissor.style.display = "none";
    computer_rock.style.display = "none";
    computer_para.style.display = "none";
    random = Math.floor(Math.random() * (4 - 1) + 1);
}


function isMobileDevice() {

    const isMobileMode = window.innerWidth <= 768 && window.innerHeight <= 1024;
    
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return isMobileMode || isMobileUA;
}


function handleOptionClick(option) {
    temp = option;
    select.style.display = "none";
    player_para.style.display = "block";

    if (option === 1) {
        paper.style.display = "flex";
    } else if (option === 2) {
        scissor.style.display = "flex";
    } else if (option === 3) {
        rock.style.display = "flex";
    }

    if (random === 1) {
        computer_paper.style.display = "flex";
    } else if (random === 2) {
        computer_scissor.style.display = "flex";
    } else if (random === 3) {
        computer_rock.style.display = "flex";
    }

    computer_para.style.display = "block";

    if (temp === random) {
        lose_para.innerText = "MATCH DRAW";
    } else if ((temp === 1 && random === 2) || (temp === 2 && random === 3) || (temp === 3 && random === 1)) {
        count++;
        lose_para.innerText = "YOU WIN";
    } else {
        if (count !== 0) {
            count--;
        }
        lose_para.innerText = "YOU LOSE";
    }
    
    if (isMobileDevice()) {
        mobile_lose_button.style.display = "block";
    } else {    
        mobile_lose_button.style.display = "none";
    }
    
    score_count.innerHTML = count;
    lose_btn.style.display = "block";
}


rules.addEventListener('click', function (e) {
    e.preventDefault();
    game_rule.style.display = "block";
});

close.addEventListener('click', function (e) {
    e.preventDefault();
    game_rule.style.display = "none";
});

play_again.addEventListener('click', function (e) {
    e.preventDefault();
    resetGame();
});

mobile_play_again.addEventListener('click', function (e) {
    e.preventDefault();
    resetGame();
});

paper_img.addEventListener('click', function (e) {
    e.preventDefault();
    handleOptionClick(1);
});

scissor_img.addEventListener('click', function (e) {
    e.preventDefault();
    handleOptionClick(2);
});

rock_img.addEventListener('click', function (e) {
    e.preventDefault();
    handleOptionClick(3);
});

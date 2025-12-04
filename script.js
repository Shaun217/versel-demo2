let score = 0;
let timeLeft = 10;
let isPlaying = false;
let timerId = null;

const btn = document.getElementById('clickBtn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const msgDisplay = document.getElementById('msg');

// 这是给按钮绑定的主函数
function startGame() {
    if (!isPlaying) {
        // 第一次点击：开始游戏
        isPlaying = true;
        score = 0;
        timeLeft = 10;
        scoreDisplay.innerText = score;
        timerDisplay.innerText = timeLeft;
        btn.innerText = "点我！！！";
        btn.style.backgroundColor = "#f39c12"; // 变色
        msgDisplay.innerText = "加油！拼手速的时候到了！";

        // 倒计时逻辑
        timerId = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    } else {
        // 游戏中：增加分数
        score++;
        scoreDisplay.innerText = score;
        
        // 点击特效：按钮轻微变大一下
        btn.style.transform = "scale(1.1)";
        setTimeout(() => btn.style.transform = "scale(1)", 50);
    }
}

function endGame() {
    clearInterval(timerId);
    isPlaying = false;
    btn.disabled = true;
    btn.innerText = "游戏结束";
    btn.style.backgroundColor = "#95a5a6";
    
    let comment = "还需要练习哦~";
    if(score > 30) comment = "手速惊人！🔥";
    if(score > 50) comment = "你是机器人吗？！🤖";

    msgDisplay.innerText = `时间到！你的最终得分是 ${score}。${comment}`;
    
    // 3秒后允许重来
    setTimeout(() => {
        btn.disabled = false;
        btn.innerText = "再玩一次";
        btn.style.backgroundColor = "#e74c3c";
        msgDisplay.innerText = "准备好了吗？";
    }, 3000);
}

// 打印日志证明 JS 加载成功
console.log("Game Script Loaded Successfully!");
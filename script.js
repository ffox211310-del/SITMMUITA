let steps = 40;
let isLooking = false;
let gameActive = true;
let changeTimer;

// 初期化
function startGame(){
    steps = 40;
    gameActive = true;

    document.getElementById("steps").innerText = "シトムくんまであと40歩";
    document.getElementById("statusText").innerText = "だーるまさんが...";
    document.getElementById("sitom").src = "Haigo.png";

    loopChange();
}

// 向き変更ループ
function loopChange(){
    changeTimer = setInterval(()=>{
        isLooking = !isLooking;

        if(isLooking){
            // 前向き
            document.getElementById("sitom").src = "SITM.png";
            document.getElementById("statusText").innerText = "ころんだ！";
        }else{
            // 後ろ向き
            document.getElementById("sitom").src = "Haigo.png";
            document.getElementById("statusText").innerText = "だーるまさんが...";
        }
    }, Math.random()*1000 + 800); // ランダム切り替え
}

// タップ処理
document.addEventListener("click", ()=>{
    if(!gameActive) return;

    if(isLooking){
        endGame(false);
    }else{
        steps--;
        document.getElementById("steps").innerText = "シトムくんまであと" + steps + "歩";

        if(steps <= 0){
            endGame(true);
        }
    }
});

// 終了
function endGame(win){
    gameActive = false;
    clearInterval(changeTimer);

    const result = document.getElementById("resultScreen");
    const text = document.getElementById("resultText");

    if(win){
        text.innerText = "ははっ。やるやん";
    }else{
        text.innerText = "どんまい";
    }

    result.style.display = "flex";
}

// 起動
window.onload = () => {
    startGame();
};

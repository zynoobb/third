// 랜덤번호 지정
// 유저가 번호를 입력한다 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 유저번호보다 작으면 down!
// 랜덤 번호가 유저번호보다 크면 up!
// reset 버튼을 누르면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝남 (더 이상 추측 불가, 버튼 비활성화)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. (기회를 깎지 않음)
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. (기회를 깎지 않음)

let computernum = 0;
let playbutton = document.getElementById("play-button");
let userinput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
// #1 리셋
let Resetbutton = document.getElementById("Reset-button");
// #2 찬스
let chances = 5;
// #3 게임 오버
let gameover = false;
// #2 찬스
let chancesArea = document.getElementById("chancesArea");
// #5 이미 사용한 번호
let history =[]

console.log(playbutton);

playbutton.addEventListener("click", play);
// #1 리셋
Resetbutton.addEventListener("click", reset);
// #6 번호사라지기
userinput.addEventListener("focus", function(){
  userinput.value="";
});

function pickrandomnum() {
  computernum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computernum);
}
function play() {
  // # 4 유효성 검사
  let uservalue = userinput.value;
  if (uservalue < 1 || uservalue > 100) {
    resultArea.textContent = "1과 100 사이 숫자를 입력해주세요.";
    return;
  }
  // # 5
  if (history.includes(uservalue)){
    resultArea.textContent="이미 입력한 값입니다.";
    return;
  }
  // # 2 찬스
  chances--;
  chancesArea.textContent = `남은 기회:${chances}번`;
  console.log("chances", chances);
  
  if (uservalue < computernum) {
    resultArea.textContent = "UP!";
  } else if (uservalue > computernum) {
    resultArea.textContent = "Down!";
  } else {
    resultArea.textContent = "정답!";
    // #7 게임끝날시 go 비활성화
    gameover=true;
  }

  // #5 
  history.push(uservalue)
  console.log(history)
  // #2 3 찬스 게임오버
  if (chances < 1) {
    gameover = true;
  }
  if (gameover == true) {
    playbutton.disabled = true;
  }
}
// # 1 리셋
function reset() {
  userinput.value = "";
  pickrandomnum();
  resultArea.textContent = "결괏값이 여기 나옵니다";
}
pickrandomnum();

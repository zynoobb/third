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

console.log(playbutton);

playbutton.addEventListener("click", play);

function pickrandomnum() {
  computernum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computernum);
}
function play() {
  let uservalue = userinput.value;
  if (uservalue < computernum) {
    resultArea.textContent = "UP!";
  } else if (uservalue > computernum) {
    resultArea.textContent = "Down!";
  } else {
    resultArea.textContent = "정답!";
  }
}

pickrandomnum();

// 첫번째 섹션
const content = `안녕하세요, 프론트엔드 개발자 이인혁입니다.`;
const text = document.querySelector('.title');
let index = 0;

let handle = setInterval(function typing(){
    text.textContent += content[index++];
    if(index >= content.length){
        clearInterval(handle);
        return;
    }
}, 150);
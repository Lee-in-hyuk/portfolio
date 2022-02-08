// 휠 적용 스크립트
$(document).ready(function(){
    $('.wheel').on('mousewheel',function(e,delta1){
        //section에서 마우스 휠을 동작하면 다음 섹션의 위치로 스크롤하기
        if(delta1>0){
            if($(this).index()!=0){
                let prevOffy = $(this).prev().offset().top;
                $('html,body').stop().animate({scrollTop:prevOffy},1000)
                //stop을 써서 진행중인 애니메이트를 정지한 뒤 다음 애니메이트를 하도록. 부드럽게 연결함.
            }
        }else{
            if($(this).index()!=4){
                let nextOffy = $(this).next().offset().top;
                $('html,body').stop().animate({scrollTop:nextOffy},1000)
            }
        }
    })
})
// 헤더
const menu1 = document.querySelector('#main');
const menu2 = document.querySelector('#intro');
const menu3 = document.querySelector('#skills');
const menu4 = document.querySelector('#projects');

menu1.addEventListener('click',function(){
    window.scrollTo({top:0, behavior: "smooth"})
})
menu2.addEventListener('click',function(){
    window.scrollTo({top:969, behavior: "smooth"})
})
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
// 두번째 섹션

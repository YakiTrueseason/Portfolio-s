// ローディングから画面推移
const loadingAreaGray = document.querySelector('#loading');
const loadingAreablue = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',() => {

    console.log(loadingAreaGray)
    //ローディング中（グレースクリーン）
    loadingAreaGray.animate(
        {
            opacity:[1,0],
            visibility:'hidden',
        },
        {
            duration:2000,
            delay:1200,
            easing:'ease',
            fill:'forwards',
        }
    );
    //ローディング中（アクア）
    loadingAreablue.animate(
        {
            translate:['0 100vh','0 0','0 -100vh']
        },
        {
            duration:2000,
            delay:800,
            easing:'ease',
            fill:'forwards',
        }
    );
    //ローディング中テキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8
            },
            {
                opacity:0,
                offset:1,
            },
        ],
        {
            duration:1200,
            easing:'ease',
            fill:'forwards',
        }
    );
    
});
// 開閉ボタン
const openMenuButton = document.getElementById('open');
const closeMenuButton = document.getElementById('close');
const sideMenu = document.getElementById('menu');

openMenuButton.addEventListener('click',() =>{
    
sideMenu.classList.add('open');
});

closeMenuButton.addEventListener('click',() =>{
    sideMenu.classList.remove('menu');
});

document.addEventListener('click',(event) =>{
    if(!sideMenu.contains(event.target)&& !openMenuButton.contains(event.target)){
        sideMenu.classList.remove('open');
    }
});


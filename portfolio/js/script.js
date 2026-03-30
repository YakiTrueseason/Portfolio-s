// ローディングから画面推移
window.addEventListener('load',() => {
    const loadingAreaGray = document.querySelector('#loading');
    const loadingAreablue = document.querySelector('#loading-screen');
    const loadingText = document.querySelector('#loading p');

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
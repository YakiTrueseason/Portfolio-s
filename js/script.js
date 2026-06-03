// ローディングから画面推移
const loadingAreaGray = document.querySelector('#loading');
const loadingAreablue = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {

//ローディング中（グレースクリーン）
    loadingAreaGray.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
//ローディング中（アクア）
    loadingAreablue.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
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
                opacity: 0,
                offset: 1,
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );

});

// モーダル
// const dialog = document.querySelector("dialog");
const modal = document.getElementById("modal");
const showButton = document.getElementById("showDialog");
const closeButton = document.getElementById("closeDialog");

const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const projects = {
    board:{
        title:"掲示板API",
        images : [
    "./material/screenshot/スクリーンショット 2026-06-03 152946.png",
    "./material/screenshot/スクリーンショット 2026-06-03 153206.png",
    "./material/screenshot/スクリーンショット 2026-06-03 153332.png",
    "./material/screenshot/スクリーンショット 2026-06-03 153400.png"
]
    },
    gurume:{
        title:"リアルなグルメ紹介",
        images : [
    "./material/screenshot/スクリーンショット 2026-06-03 163853.png",
    "./material/screenshot/スクリーンショット 2026-06-03 163948.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164003.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164015.png"
        ]
    },
    memo:{
        title:"予定管理アプリ",
        images : [
    "./material/screenshot/スクリーンショット 2026-06-03 164127.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164140.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164207.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164228.png"
        ]
    }
}
// let currentProject = null;
let current = 0;

document.querySelectorAll(".open-modal").forEach(button =>{
    button.addEventListener("click",()=>{
        const projectKey = button.dataset.project;
        currentProject = projects[projectKey];
        current = 0;
        document.getElementById("projectTitle").textContent =
        currentProject.title;
        slide.src = currentProject.images[current];
        modal.showModal();
    });
});

// //開く
// showButton.addEventListener("click",()=>{
//     modal.showModal();
// });
//閉じる
closeButton.addEventListener("click",()=>{
    modal.close();
});

//次へ
next.addEventListener("click",()=>{
    current++;
    if(current >= currentProject.images.length){
        current = 0;
    }
    slide.src = currentProject.images[current];
});
//前へ
prev.addEventListener("click",()=>{
    current--;
    if(current < 0){
        current = currentProject.images.length - 1;
    }
    slide.src = currentProject.images[current];
});


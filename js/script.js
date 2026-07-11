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

    //背景
const backgrounds = document.querySelectorAll(".bg-top");

window.addEventListener("scroll",()=>{

    const limit = window.innerWidth < 1500 ? 1000 : 500;

    let opacity = 1 -window.scrollY /limit;

    opacity = Math.max(opacity,0);

    backgrounds.forEach(bg =>{
        bg.style.opacity = opacity;
    });

    backgrounds.forEach(bg =>{
        bg.classList.toggle("fixed",window.scrollY < limit);
    });
});

    // モーダル
const modal = document.getElementById("modal");
const showButton = document.getElementById("showDialog");
const closeButton = document.getElementById("closeDialog");

const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const functionList = document.getElementById("modal-function");
const technologyList = document.getElementById("modal-technology");
const thumbnailList = document.getElementById("thumbnail-list");

    // 実際の内容
const projects = {
    board:{
        title:"掲示板API",
        images : [
    "./material/screenshot/スクリーンショット 2026-06-03 152946.png",
    "./material/screenshot/スクリーンショット 2026-06-03 153206.png",
    "./material/screenshot/スクリーンショット 2026-06-03 153332.png",
    "./material/screenshot/スクリーンショット 2026-06-03 153400.png"
    ],
        description:
        "Todo、メモ・カレンダーをまとめた管理アプリ",
        link:
        "https://todo-memo-mu.vercel.app/",
        functions:[
            "Todo",
            "memo",
            "cale",
            "yuusen"
        ],
        technology:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "FastAPI",
            "SQLite"
        ],
    },
    gurume:{
        title:"リアルなグルメ紹介",
        images : [
    "./material/screenshot/スクリーンショット 2026-06-03 163853.png",
    "./material/screenshot/スクリーンショット 2026-06-03 163948.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164003.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164015.png"
        ],
        description:
        "Todo、メモ・カレンダーをまとめた管理アプリ",
        link:
        "https://todo-memo-mu.vercel.app/",
        functions:[
            "Todo",
            "memo",
            "cale",
            "yuusen"
        ],
        technology:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "FastAPI",
            "SQLite"
        ],
    },
    memo:{
        title:"予定管理アプリ",
        images : [
    "./material/screenshot/スクリーンショット 2026-06-03 164127.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164140.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164207.png",
    "./material/screenshot/スクリーンショット 2026-06-03 164228.png"
        ],
        description:
        "Todo、メモ・カレンダーをまとめた管理アプリ",
        link:
        "https://todo-memo-mu.vercel.app/",
        functions:[
            "Todo",
            "memo",
            "cale",
            "yuusen"
        ],
        technology:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "FastAPI",
            "SQLite"
        ],
    }
}

let current = 0;
    // スクリーンショットの変更
function updateActiveThumbnail(){
    const thumbnails = document.querySelectorAll("#thumbnail-list img");
    thumbnails.forEach((img,index)=>{
        img.classList.toggle("active",index === current);
    });
}
    // モーダル内の内容
document.querySelectorAll(".open-modal").forEach(button =>{
    button.addEventListener("click",()=>{
        const projectKey = button.dataset.project;
        currentProject = projects[projectKey];
        current = 0;
    // タイトル
        document.getElementById("projectTitle").textContent =
        currentProject.title;
    // スクリーンショット
        thumbnailList.innerHTML = "";
        currentProject.images.forEach((images,index)=>{
            const img = document.createElement("img");
            img.src = images;
    // 最初の画像を選択肢に
            img.addEventListener("click",()=>{
                current = index;
                slide.src = images;
                updateActiveThumbnail();
            });
            thumbnailList.appendChild(img);
        })
    // 説明
        document.getElementById("modal-description").textContent = currentProject.description;
    // リンク
        document.getElementById("modal-link").href = currentProject.link;
    // 主な機能
        functionList.innerHTML = "";
        currentProject.functions.forEach(item =>{
            const li = document.createElement("li");
            li.textContent = item;
            functionList.appendChild(li);
        })
    // 使用技術
        technologyList.innerHTML = "";
        currentProject.technology.forEach(item =>{
            const li = document.createElement("li");
            li.textContent = item;
            technologyList.appendChild(li);
        })
        slide.src = currentProject.images[current];
        updateActiveThumbnail();
        modal.showModal();
    });
});

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
    updateActiveThumbnail();
});
//前へ
prev.addEventListener("click",()=>{
    current--;
    if(current < 0){
        current = currentProject.images.length - 1;
    }
    slide.src = currentProject.images[current];
    updateActiveThumbnail();
});


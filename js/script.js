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
    "./material/screenshot/スクリーンショット 2026-07-17 104946.png",
    "./material/screenshot/スクリーンショット 2026-07-17 104954.png"
    ],
        description:
        "ReactとFastAPIを用いて作成した掲示板アプリです。",
        link:
        "https://board-api-three.vercel.app/",
        functions:[
        "投稿一覧",
        "投稿作成",
        "投稿編集",
        "ログイン",
        "新規登録",
        ],
        technology:[
            "React",
            "React Router",
            "Tailwind CSS",
            "FastAPI",
            "SQLAlchemy",
            "SQLite"
        ],
    },
    gurume:{
        title:"リアルなグルメ紹介",
        images : [
    "./material/screenshot/スクリーンショット 2026-07-16 135434.png",
    "./material/screenshot/スクリーンショット 2026-07-17 105058.png",
    "./material/screenshot/スクリーンショット 2026-07-17 105127.png",
    "./material/screenshot/スクリーンショット 2026-07-17 105142.png",
    "./material/screenshot/スクリーンショット 2026-07-17 105305.png"
        ],
        description:
        "実際に訪れた飲食店を紹介するランディングページです。",
        link:
        "https://landing-page-nisshocode.vercel.app/",
        functions:[
            "店舗紹介",
            "店舗写真の表示",
            "店舗情報の掲載",
            "レスポンシブ対応"
        ],
        technology:[
            "HTML5",
            "CSS3",
            "JavaScript"
        ],
    },
    memo:{
        title:"予定管理アプリ",
        images : [
    "./material/screenshot/スクリーンショット 2026-07-12 234235.png",
    "./material/screenshot/スクリーンショット 2026-07-17 105428.png",
    "./material/screenshot/スクリーンショット 2026-07-17 105828.png"
        ],
        description:
        "Todo管理とメモ管理・カレンダー表示を1つにまとめたwebアプリです。",
        link:
        "https://todo-memo-mu.vercel.app/",
        functions:[
            "タスク",
            "完了チェック",
            "優先度設定",
            "タグ設定",
            "メモ管理",
            "カレンダー",
            "ダッシュボード"
        ],
        technology:[
            "React",
            "React Router",
            "React Context API",
            "JavaScript(ES6+)",
            "CSS3",
            "Node.js",
            "Express",
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


// HTML要素の取得
const mouse1 = document.querySelector('#post-form');
const mouse2 = document.body;

// mouseenter : マウスのカーソルが要素の上に乗った時
mouse1.addEventListener('mouseenter', () => {
    mouse2.style.backgroundColor = "yellow";
});

// mouseleave : マウスのカーソルが要素の上から離れた時
mouse1.addEventListener('mouseleave', () => {
    mouse2.style.backgroundColor = "white";
});

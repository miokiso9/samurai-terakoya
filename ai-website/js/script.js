// スライドショー用の画像リストを定義
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

// 現在の画像インデックスを管理
let currentIndex = 0;

// 画像を順番に切り替える関数
function changeImage() {
  // 次の画像インデックスを計算
  currentIndex = (currentIndex + 1) % images.length;

  // img要素を取得し、src属性を変更
  const imgElement = document.getElementById("slideshow-image");
  imgElement.src = images[currentIndex];
}

// 3秒ごとにchangeImage()を実行
setInterval(changeImage, 3000);

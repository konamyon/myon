//ヒーローセクション以外をスクロールに合わせてゆっくり表示するアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".overview, .overview-news");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったらアニメーション開始

        // 透明度0かつ下に30pxずらた状態から始まって、透明度1の0pxの位置に2秒かけて動く
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 2000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

        // 一度表示された後に画面外に出ても消えないように
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10% 見えたら発火
  });

  // セクションを監視する
  targets.forEach(target => {
    observer.observe(target);
  });
});

// ヒーローセクションをスクロールに合わせって表示するアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".hero ");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったらアニメーション開始

        // 透明度0かつ下に30pxずらた状態から始まって、透明度1の0pxの位置に3秒かけて動く
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 3000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

        // 一度表示された後に画面外に出ても消えないように
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10% 見えたら発火
  });

  // セクションを監視する
  targets.forEach(target => {
    observer.observe(target);
  });
});

// ハンバーガーメニューの表示
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
// クリックによってmain-navのactiveのオンオフを切り替える
  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});



// キャラクターの吹き出しのメッセージ表示
document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("bubble");

  // 各セクションが表示されているときの対応するメッセージ
  const messages = [
    { selector: ".hero", text: "情報工学科へようこそ！" },
    { selector: ".cur", text: "1年生から4年生まで、どんなことを学ぶのかがわかるよ！" },
    { selector: ".lab", text: "先生たちの研究テーマや、配属できる研究室が紹介されてるよ！" },
    { selector: ".car", text: "卒業した先輩たちの進路がわかるよ！" },
    { selector: ".news", text: "学科の最新情報がチェックできるよ！" }
  ];

  // ページ読み込み直後に「ようこそ情報工学科へ！」を表示
  bubble.textContent = "情報工学科へようこそ！";
  bubble.style.opacity = 1;

  // 監視中の要素が画面に70%入ったときに処理を走らせる
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bubble.textContent = entry.target.dataset.message;
        bubble.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.7
  });

  // DOMから取得した要素が配列に格納されているセレクタに該当する場合、そのメッセージを表示し、その要素を監視させる
  messages.forEach(msg => {
    const el = document.querySelector(msg.selector);
    if (el) {
      el.dataset.message = msg.text;
      observer.observe(el);
    }
  });

  const mascotContainer = document.querySelector(".mascot-container");

  // 初期は吹き出し非表示
  bubble.style.opacity = 0;

  // 2秒待ってから表示
  setTimeout(() => {
    mascotContainer.classList.add("active");
    bubble.textContent = "情報工学科へようこそ！";
    bubble.style.opacity = 1;
  }, 2000);
});



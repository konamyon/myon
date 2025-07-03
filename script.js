document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".overview");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったらアニメーション開始
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

        // 一度アニメーションしたら監視解除（不要ならコメントアウト）
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10% 見えたら発火
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".hero ");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったらアニメーション開始
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 4000,
            easing: "ease-out",
            fill: "forwards"
          }
        );

        // 一度アニメーションしたら監視解除（不要ならコメントアウト）
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10% 見えたら発火
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});


const bubble = document.getElementById("bubble");

document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("bubble");

  const messages = [
    { selector: ".hero", text: "情報工学科へようこそ！" },
    { selector: ".cur", text: "カリキュラムでは4年間の流れを紹介してるよ！" },
    { selector: ".lab", text: "研究室では最新技術を学べるよ！" },
    { selector: ".car", text: "卒業後の進路も幅広いよ！" }
  ];

  // ページ読み込み直後に「ようこそ！」を表示
  bubble.textContent = "情報工学科へようこそ！";
  bubble.style.opacity = 1;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bubble.textContent = entry.target.dataset.message;
        bubble.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.6
  });

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

  // 3秒待ってから表示
  setTimeout(() => {
    mascotContainer.classList.add("active");
    bubble.textContent = "情報工学科へようこそ！";
    bubble.style.opacity = 1;
  }, 3000);
});



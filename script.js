
// DOM の読み込みを待つ
// document.addEventListener("DOMContentLoaded", () => {
//   const hero = document.querySelector(".hero");


//     hero.animate(
//       {
//         opacity: [0, 1],
//         transform: ["translateY(30px)", "translateY(0)"]
//       },
//       {
//         duration: 2000,
//         easing: "ease-out",
//         fill: "forwards"
//       }
//     );
// });
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

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("particles-container");

//   for (let i = 0; i < 30; i++) {
//     const particle = document.createElement("div");
//     particle.classList.add("particle");

//     // サイズをランダムに設定
//     const size = 6 + Math.random() * 10;
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;

//     // 四角形にする（念のため）
//     particle.style.borderRadius = "0";

//     // 初期位置（画面上部、横方向はランダム）
//     const startX = Math.random() * window.innerWidth;
//     const startY = 120;

//     particle.style.left = `${startX}px`;
//     particle.style.top = `${startY}px`;

//     container.appendChild(particle);

//     // アニメーション（落ちる＋回転）
//     particle.animate(
//       [
//         {
//           transform: "translateY(0) rotate(0deg)",
//           opacity: 1
//         },
//         {
//           transform: `translateY(${window.innerHeight + 50}px) rotate(${360 + Math.random() * 360}deg)`,
//           opacity: 0
//         }
//       ],
//       {
//         duration: 2000 + Math.random() * 1000,
//         delay: i * 100,
//         easing: "ease-in-out",
//         fill: "forwards"
//       }
//     );
//   }
// });


const bubble = document.getElementById("bubble");

const messages = [
  { selector: ".cur", text: "カリキュラムでは4年間の流れを紹介してるよ！" },
  { selector: ".lab", text: "研究室では最新技術を学べるよ！" },
  { selector: ".car", text: "卒業後の進路も幅広いよ！" }
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bubble.textContent = entry.target.dataset.message;
      bubble.style.opacity = 1;
      setTimeout(() => {
        bubble.style.opacity = 0;
      }, 4000);
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

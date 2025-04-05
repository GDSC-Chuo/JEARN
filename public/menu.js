import Menu from "../src/components/Menu.astro";

document.addEventListener('DOMContentLoaded', () => {
  const hbIconArea = document.getElementById('hb-icon-area');
  const hbMenu = document.getElementById('hb-menu');
  const menuText = document.getElementById('menu-text'); // テキスト要素
  const hbIcon = document.querySelector('.hamburger'); // ハンバーガーアイコン
  const closeIcon = document.querySelector('.close-icon'); // ✕アイコン

  // ハンバーガーメニューの開閉
  hbIconArea.addEventListener('click', () => {
    const isOpen = hbMenu.classList.toggle('open');

    // アイコンとテキストの切り替え
    if (isOpen) {
      menuText.textContent = 'Close'; // テキストを"Close"に変更
    } else {
      menuText.textContent = 'Menu'; // テキストを"Menu"に戻す
    }
  });

  // アコーディオン機能
  document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling;
      if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  const hamburger = document.getElementById('hb-icon-area');
  const menu = document.querySelector('header');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});

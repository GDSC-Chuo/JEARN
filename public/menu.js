import Menu from "../src/components/Menu.astro";

document.addEventListener('DOMContentLoaded', () => {
  const hbIconArea = document.getElementById('hb-icon-area');
  const menuPanel = document.getElementById('hamburger-menu'); // メニュー全体
  const menuText = document.getElementById('menu-text'); // テキスト要素

  // ハンバーガーメニューの開閉
  hbIconArea.addEventListener('click', () => {
    const isOpen = menuPanel.classList.toggle('hidden'); // hiddenクラスを切り替え

    // アイコンとテキストの切り替え
    if (!isOpen) {
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
        submenu.classList.toggle('hidden'); // hiddenクラスを切り替え
      }
    });
  });
});

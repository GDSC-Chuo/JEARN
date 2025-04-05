document.addEventListener('DOMContentLoaded', () => {
  const hbIconArea = document.getElementById('hb-icon-area'); // ハンバーガーアイコン全体
  const menuPanel = document.getElementById('hamburger-menu'); // アコーディオンメニュー全体
  const menuText = document.getElementById('menu-text'); // テキスト要素
  const hbMenu = document.getElementById('hb-menu'); // ハンバーガーメニューのアイコン部分

  // ハンバーガーメニューの開閉
  hbIconArea.addEventListener('click', () => {
    const isOpen = menuPanel.classList.toggle('hidden'); // hiddenクラスをトグル

    // アイコンとテキストの切り替え
    if (!isOpen) {
    if (!isOpen) {
      menuText.textContent = 'Close'; // テキストを"Close"に変更
      hbMenu.classList.add('open'); // ハンバーガーアイコンを"open"状態に
    } else {
      menuText.textContent = 'Menu'; // テキストを"Menu"に戻す
      hbMenu.classList.remove('open'); // ハンバーガーアイコンを通常状態に
    }
  });

  // アコーディオン機能
  document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling; // 対応するサブメニューを取得
      if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // 開閉をトグル
      }
    });
  });
});

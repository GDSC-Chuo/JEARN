document.addEventListener('DOMContentLoaded', () => {
  const hbIconArea = document.getElementById('hb-icon-area'); // ハンバーガーアイコン全体
  const menuPanel = document.getElementById('menu-panel'); // アコーディオンメニュー全体
  const menuText = document.getElementById('menu-text'); // テキスト要素
  const hbMenu = document.getElementById('hb-menu'); // ハンバーガーメニューのアイコン部分
  const header = document.querySelector('header'); // ヘッダー要素を取得
  const body = document.body; // body要素を取得

  // ヘッダーの高さを取得してmenu-panelに適用
  const adjustMenuPanelPosition = () => {
    const headerHeight = header.offsetHeight; // ヘッダーの高さを取得
    const bodyMarginTop = parseFloat(getComputedStyle(body).marginTop); // bodyの上マージンを取得
    menuPanel.style.top = `${headerHeight + bodyMarginTop}px`; // menu-panelのtopプロパティを調整
  };

  // 初期設定
  adjustMenuPanelPosition();

  // ウィンドウリサイズ時にも再計算
  window.addEventListener('resize', adjustMenuPanelPosition);

  // ハンバーガーメニューの開閉
  hbIconArea.addEventListener('click', () => {
    const isOpen = menuPanel.classList.toggle('open'); // openクラスをトグル
    menuText.textContent = isOpen ? 'Close' : 'Menu'; // テキストを切り替え
    hbMenu.classList.toggle('open', isOpen); // ハンバーガーアイコンをトグル
  });

  // アコーディオン機能
  document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling; // 対応するサブメニューを取得
      if (submenu) {
        submenu.classList.toggle('open'); // サブメニューの表示/非表示をトグル
        button.classList.toggle('open'); // 矢印の回転用
      }
    });
  });
});

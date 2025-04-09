document.addEventListener("DOMContentLoaded", () => {
	// ハンバーガーメニュー全体をクリックするエリア
	const hbIconArea = document.getElementById("hb-icon-area");
	// メニュー全体のパネル
	const menuPanel = document.getElementById("menu-panel");
	// メニューのテキスト部分
	const menuText = document.getElementById("menu-text");
	// ハンバーガーメニューのアイコン部分
	const hbMenu = document.getElementById("hb-menu");
	// ページ上部のヘッダー要素
	const header = document.querySelector("header");
	// メニューを開いたときに表示される背景のオーバーレイ
	const menuOverlay = document.getElementById("menu-overlay");

	// ヘッダーの高さを取得して、メニューの位置を調整する関数
	const adjustMenuPanelPosition = () => {
		const headerHeight = header.offsetHeight; // ヘッダーの高さを取得
		menuPanel.style.top = `${headerHeight}px`; // メニューの上端位置をヘッダーの高さに合わせる
	};

	// ページ読み込み時にメニューの位置を調整
	adjustMenuPanelPosition();

	// ウィンドウのサイズが変わったときにメニューの位置を再調整
	window.addEventListener("resize", adjustMenuPanelPosition);

	// ハンバーガーメニューをクリックしたときの動作
	hbIconArea.addEventListener("click", () => {
		const isOpen = menuPanel.classList.toggle("open"); // メニューの開閉状態を切り替える
		menuText.textContent = isOpen ? "Close" : "Menu"; // テキストを"Close"または"Menu"に切り替える
		hbMenu.classList.toggle("open", isOpen); // ハンバーガーアイコンの見た目を切り替える
		menuOverlay.classList.toggle("open", isOpen); // オーバーレイの表示/非表示を切り替える
	});

	// アコーディオンメニューの開閉機能
	document.querySelectorAll(".accordion-toggle").forEach((button) => {
		button.addEventListener("click", () => {
			const submenu = button.nextElementSibling; // クリックしたボタンの次にあるサブメニューを取得
			if (submenu) {
				submenu.classList.toggle("open"); // サブメニューの表示/非表示を切り替える
				button.classList.toggle("open"); // 矢印の向きを切り替える
			}
		});
	});

	// オーバーレイをクリックしたときにメニューを閉じる動作
	menuOverlay.addEventListener("click", () => {
		menuPanel.classList.remove("open"); // メニューを閉じる
		menuOverlay.classList.remove("open"); // オーバーレイを非表示にする
		hbMenu.classList.remove("open"); // ハンバーガーアイコンの状態をリセット
		menuText.textContent = "Menu"; // メニューのテキストを"Menu"に戻す
	});
});

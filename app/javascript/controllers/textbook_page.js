// app/javascript/controllers/textbook_page.js
document.addEventListener('turbo:load', function() {
  // ===== 共通インラインプレイヤー =====
  if (!window.inlinePlayer) {
    window.inlinePlayer = document.getElementById("inline-player");
  }
  if (window.inlinePlayer) {
    window.playAudio = function(file) {
      if (window.inlinePlayer.src !== file) window.inlinePlayer.src = file;
      window.inlinePlayer.play();
    }
  }

  // ===== タブ切替 =====
  document.querySelectorAll('.tab-menu .tab').forEach(tab => {
    // 既存イベントリスナーを削除して二重バインド防止
    tab.replaceWith(tab.cloneNode(true));
  });

  document.querySelectorAll('.tab-menu .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-menu .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      const pane = document.getElementById(tab.dataset.tab);
      if (pane) pane.classList.add('active');
    });
  });

});

// ===== スクロール関数をグローバルに =====
window.scrollLeft = function(id) {
  const container = document.getElementById(id);
  if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
}

window.scrollRight = function(id) {
  const container = document.getElementById(id);
  if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
}

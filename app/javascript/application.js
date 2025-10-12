// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"


  function scrollLeft(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }

  function scrollRight(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }

// 再生ボタン用
document.addEventListener('turbo:load', function() {
  const inlinePlayer = document.getElementById("inline-player");
  if (!inlinePlayer) return;

  window.playAudio = function(file) {
    if (inlinePlayer.src !== file) {
      inlinePlayer.src = file;
    }
    inlinePlayer.play();
  }

  // タブ切替
  document.querySelectorAll('.tab-menu .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-menu .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
});

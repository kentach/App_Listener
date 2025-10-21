document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");
  const scrollTabs = document.getElementById("levelTabs");

  if (!scrollTabs || tabs.length === 0 || panes.length === 0) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // ======== クリックでコンテンツ切替 ========
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // タブ切替
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // 対応コンテンツ切替
      const target = tab.dataset.target;
      panes.forEach(pane => {
        pane.classList.toggle("active", pane.id === target);
      });

      // ===== スクロール中央寄せ（スマホ時） =====
      const tabRect = tab.getBoundingClientRect();
      const scrollRect = scrollTabs.getBoundingClientRect();
      const offset = tabRect.left - scrollRect.left - (scrollRect.width / 2) + (tabRect.width / 2);
      scrollTabs.scrollBy({ left: offset, behavior: "smooth" });
    });
  });

  // ======== ドラッグスクロール対応（PC & モバイル） ========
  scrollTabs.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollTabs.classList.add("dragging");
    startX = e.pageX - scrollTabs.offsetLeft;
    scrollLeft = scrollTabs.scrollLeft;
  });
  scrollTabs.addEventListener("mouseleave", () => isDown = false);
  scrollTabs.addEventListener("mouseup", () => isDown = false);
  scrollTabs.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollTabs.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollTabs.scrollLeft = scrollLeft - walk;
  });
});

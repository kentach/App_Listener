document.addEventListener("turbo:load", () => {
  const player = document.getElementById("inline-player");
  if (!player) return; // audioタグがない場合は終了

  let currentButton = null;
  let currentAudioSrc = null;

  document.querySelectorAll(".play-button").forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const audioSrc = button.getAttribute("data-audio");

      // 同じ音声をクリックした場合 → 再生／停止のトグル
      if (audioSrc === currentAudioSrc) {
        if (player.paused) {
          player.play();
          button.classList.add("playing");
          button.textContent = "❚❚";
        } else {
          player.pause();
          button.classList.remove("playing");
          button.textContent = "▶︎";
        }
        return;
      }

      // 別の音声をクリックした場合 → 前の再生を停止
      if (currentButton && currentButton !== button) {
        currentButton.classList.remove("playing");
        currentButton.textContent = "▶︎";
      }

      // 新しい音声を再生
      player.src = audioSrc;
      player.play();
      button.classList.add("playing");
      button.textContent = "❚❚";

      currentButton = button;
      currentAudioSrc = audioSrc;
    });
  });

  // 再生終了時に状態リセット
  player.addEventListener("ended", () => {
    if (currentButton) {
      currentButton.classList.remove("playing");
      currentButton.textContent = "▶︎";
    }
    currentButton = null;
    currentAudioSrc = null;
  });

  // 一時停止時にも状態を戻す
  player.addEventListener("pause", () => {
    if (currentButton) {
      currentButton.classList.remove("playing");
      currentButton.textContent = "▶︎";
    }
  });
});

document.addEventListener("turbo:load", () => {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("playBtn");
  if (!audio || !playBtn) return;

  const playIcon = playBtn.querySelector(".icon.play");
  const pauseIcon = playBtn.querySelector(".icon.pause");
  const rewind3 = document.getElementById("rewind3");
  const forward3 = document.getElementById("forward3");
  const loopBtn = document.getElementById("loopBtn");
  const speedControl = document.getElementById("speedControl");
  const progress = document.getElementById("progress");
  const currentTime = document.getElementById("currentTime");
  const durationTime = document.getElementById("duration");

  // 再生/停止切替
  playBtn.addEventListener("click", () => {
    if(audio.paused){
      audio.play();
      playIcon.style.display="none";
      pauseIcon.style.display="inline-block";
    } else {
      audio.pause();
      playIcon.style.display="inline-block";
      pauseIcon.style.display="none";
    }
  });

  // 3秒巻き戻し・スキップ
  if (rewind3) rewind3.addEventListener("click", ()=>{ audio.currentTime = Math.max(0, audio.currentTime-3); });
  if (forward3) forward3.addEventListener("click", ()=>{ audio.currentTime = Math.min(audio.duration, audio.currentTime+3); });

  // ループ切替
  if (loopBtn) loopBtn.addEventListener("click", ()=>{
    audio.loop = !audio.loop;
    loopBtn.classList.toggle("btn-primary", audio.loop);
  });

  // 速度調整
  if (speedControl) speedControl.addEventListener("change", ()=>{ audio.playbackRate = parseFloat(speedControl.value); });

  // 進捗バー同期
  audio.addEventListener("loadedmetadata", ()=>{ if(durationTime) durationTime.textContent = formatTime(audio.duration); });
  audio.addEventListener("timeupdate", ()=>{
    if(progress) progress.value = (audio.currentTime/audio.duration)*100 || 0;
    if(currentTime) currentTime.textContent = formatTime(audio.currentTime);
  });

  if(progress) progress.addEventListener("input", ()=>{
    audio.currentTime = (progress.value/100)*audio.duration;
  });

  // 時間フォーマット mm:ss
  function formatTime(time){
    const min = Math.floor(time/60);
    const sec = Math.floor(time%60);
    return `${min}:${sec<10?'0':''}${sec}`;
  }
});

document.addEventListener("turbo:load", () => {
  const textbookSelect = document.getElementById("textbook_select");
  const chapterSelect = document.getElementById("chapter_select");

  if (!textbookSelect) return;

  textbookSelect.addEventListener("change", (event) => {
    const textbookId = event.target.value;

    if (!textbookId) {
      chapterSelect.innerHTML = '<option value="">章を選択</option>';
      return;
    }

    fetch(`/textbooks/${textbookId}/chapters.json`)
      .then(response => response.json())
      .then(data => {
        chapterSelect.innerHTML = '<option value="">章を選択</option>';
        data.forEach(chapter => {
          const option = document.createElement("option");
          option.value = chapter.id;
          option.text = chapter.title;
          chapterSelect.appendChild(option);
        });
      });
  });
});

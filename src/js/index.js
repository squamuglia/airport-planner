window.onload = () => {
  const refs = ["submit", "form", "ready", "travel", "depart", "schedule"];
  const items = {};
  refs.forEach(item => (items[item] = document.getElementById(item)));

  items.submit.addEventListener("click", () => {
    if (items.form.classList.value === "") {
      items.form.classList = "hide";
      items.schedule.classList = "";
    } else {
      items.form.classList = "";
      items.schedule.classList = "hide";
    }
  });
};

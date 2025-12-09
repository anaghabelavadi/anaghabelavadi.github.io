function includeHTML() {
  const elements = document.querySelectorAll("[include-html]");

  elements.forEach(el => {
    const file = el.getAttribute("include-html");
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        });
    }
  });
}
window.onload = includeHTML;

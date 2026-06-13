const yearEl = document.getElementById("copyright-year");
const updatedEl = document.getElementById("last-updated");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (updatedEl) {
  const date = new Date(document.lastModified);
  updatedEl.textContent = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
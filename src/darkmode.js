export function darkMode() {
  const toggle = document.querySelector("#theme-toggle");

  const root = document.documentElement;
  let darkMode = localStorage.theme === "dark";

  function setTheme() {
    if (darkMode) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }

  setTheme();

  function toggleTheme() {
    darkMode = !darkMode;
    setTheme();
  }

  toggle?.addEventListener("click", toggleTheme);
}

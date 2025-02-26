const themeSwitcher = document.querySelector(".theme-switcher");

const darkMode = function () {
  themeSwitcher.children[0].textContent = "Dark Mode";
  themeSwitcher.children[1].classList.replace("fa-sun", "fa-moon");
};

const lightMode = function () {
  themeSwitcher.children[0].textContent = "Light Mode";
  themeSwitcher.children[1].classList.replace("fa-moon", "fa-sun");
};

const switchTheme = function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (!currentTheme || currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

themeSwitcher.addEventListener("click", switchTheme);

// Current theme from local storage
const currentThemeFromLocalStorage = localStorage.getItem("theme");
document.documentElement.setAttribute(
  "data-theme",
  currentThemeFromLocalStorage || "light"
);

if (currentThemeFromLocalStorage === "dark") {
  darkMode();
}

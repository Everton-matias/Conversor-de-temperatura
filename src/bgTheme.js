function darkTheme() {
  document.getElementById("body").classList.add("darkModeAtivado");
}

function lightTheme() {
  document.getElementById("body").classList.remove("darkModeAtivado");
}

export function changeTheme() {
  const backgroundThemes = [
    { lightTheme: document.getElementById("light") },
    { darkTheme: document.getElementById("dark") },
  ];

  backgroundThemes[1].darkTheme.addEventListener("click", darkTheme);
  backgroundThemes[0].lightTheme.addEventListener("click", lightTheme);
}

const themeButtons = document.querySelectorAll('.theme-switcher__btn');

//Проверяем в LocalStorage есть ли там сохраненный ключ theme и если вернет null, тоустанавливаем light
const savedTheme = localStorage.getItem('theme') || 'light';
//сохраняет тему в документе data-theme="dark/light"
document.documentElement.dataset.theme = savedTheme;

//перебираем кнопки переключения темы и ставим актив там какая тема выбрана(data-theme="dark/light)
themeButtons.forEach((button) => {
  if (button.dataset.theme === savedTheme) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
});

//отслеживаем где клик
themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.dataset.theme;

    //и записываем в переменную selectedTheme
    document.documentElement.dataset.theme = selectedTheme;

    //запоминаем в LocalStorage
    localStorage.setItem('theme', selectedTheme);

    //проверяем соответствие вібранной темі с актив на соответствующем классе и  добавляем /удаляем класс актив
themeButtons.forEach((btn) => {
      if (btn.dataset.theme === selectedTheme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });  
  })
})
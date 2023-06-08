const btnDarkMode = document.querySelector(".dark-mode-button");

//1.Проверка на системные настройки!
//2.Проверка на заполнение структуры для проверки по ключу!
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches){
    btnDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add("dark");
}
//Алгоритм запоминания темной и свтелой темы для следующих странниц!
if(localStorage.getItem('darkMode') == 'dark'){
    btnDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add("dark");
}
else{
    btnDarkMode.classList.remove("dark-mode-button--active");
    document.body.classList.remove("dark");
}


//Прсмотр системных настроек в Windows
//Слушание системных настроек при изменении 
window.matchMedia("(prefers-color-scheme: dark").addEventListener('change', (event)=>{
    alert("CHANGE!!!");
   const newColorScheme = event.matches ? "dark": "light";
   if(newColorScheme == "dark"){
    btnDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add("dark");
   }else{
    btnDarkMode.classList.remove("dark-mode-button--active");
    document.body.classList.add("remove");
   }
})

//Включение ночного режима по кнопке!
//true - усли был добавлен элемент в класс блока через toggle
//else - если был удален блок элемента через toggle
btnDarkMode.onclick = function() { 
    console.log('Click');
    btnDarkMode.classList.toggle("dark-mode-button--active");
    const isDark = document.body.classList.toggle("dark"); /*Данный метод возвращает true, усли данный класс был добавлен в элемент*/
    if(isDark == true){
        localStorage.setItem('darkMode', 'dark');
    }else{
        localStorage.setItem('darkMode', 'light');
    }
}

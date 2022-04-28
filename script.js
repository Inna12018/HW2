// Задание
// Реализовать простую программу на Javascript, которая будет взаимодействовать с пользователем с помощью модальных окон браузера - alert, prompt, confirm. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Считать с помощью модельного окна браузера данные пользователя: имя и возраст.
// Если возраст меньше 18 лет - показать на экране сообщение: You are not allowed to visit this website.
// Если возраст от 18 до 22 лет (включительно) - показать окно со следующим сообщением: Are you sure you want to continue? и кнопками Ok, Cancel. Если пользователь нажал Ok, показать на экране сообщение: Welcome,  + имя пользователя. Если пользователь нажал Cancel, показать на экране сообщение: You are not allowed to visit this website.
// Если возраст больше 22 лет - показать на экране сообщение: Welcome,  + имя пользователя.
// Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.
// После ввода данных добавить проверку их корректности. Если пользователь не ввел имя, либо при вводе возраста указал не число - спросить имя и возраст заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).



let UserName = prompt ("What is your name?", '');
while (!UserName){
    UserName = prompt ("What is your name?", '');  
}

let UserAge = +prompt ('How old are you?', '');
while(isNaN(UserAge)){
    UserAge = +prompt ('How old are you?', '');   
}

let UserResult;


if (UserAge < 18 ) {
    alert ('You are not allowed to visit this website');
}else if (UserAge < 18 || UserAge >= 22 ) {
    UserResult = confirm ('Are you sure you want to continue?');
}if (UserResult == true){
     alert (`Welcome ${UserName}`);
}else {
    alert(' You are not allowed to visit this website. ');
}






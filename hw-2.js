// Находим кнопку по id
const button1 = document.getElementById('exercise-1');

// Добавляем обработчик события
button1.addEventListener('click', function() {
    let password = 'пароль';
    let checkPassword = prompt('Введите пароль');
    if (password === checkPassword) {
        console.log('Пароль введен верно');
        alert('Пароль введен верно');
    } else {
        console.log('Пароль введен неправильно');
        alert('Пароль введен неправильно');
    }
});

const button2 = document.getElementById('exercise-2');

button2.addEventListener('click', function() {
    let c = prompt('Веддите любое из чисел: 0, 10, -3, 2');
    if (c > 0 && c < 10) {
        console.log(`${c} больше 0, но меньше 10`);
        alert(`${c} больше 0, но меньше 10`);
    } else if(c <= 0){
        console.log(`${c} меньше или равно 0`);
        alert(`${c} меньше или равно 0`);
    } else{
        console.log(`${c} больше или равно 10`);
        alert(`${c} больше или равно 10`);
    }
    
});

const button3 = document.getElementById('exercise-3');

button3.addEventListener('click', function() {
    let d = prompt('Веддите любое чисело:');
    let e = prompt('Веддите еще одно чисело:');
    if (d > 100 || e > 100) {
        console.log(`Верно, одно из введенных чисел больше 100`);
        alert(`Верно, одно из введенных чисел больше 100`);
    } else{
        console.log(`Неверно, одно из введенных чисел меньше 100`);
        alert(`Неверно, одно из введенных чисел меньше 100`);
    }
});

const button4 = document.getElementById('exercise-4');

button4.addEventListener('click', function() {
    let a = '2';
    let b = '3';
    alert(Number(a) + Number(b));
});


const button5 = document.getElementById('exercise-5');

button5.addEventListener('click', function() {
    let month = prompt('Введите номер месяца(от 1 до 12) или название месяца');
    let monthLower = String(month).toLowerCase(); // преобразуем в строку для безопасности

    switch (monthLower) {
        case '1':
        case '2':
        case '12':
        case 'январь':
        case 'февраль':
        case 'декабрь':
            alert(`${month} - этот месяц зимы`);
            console.log(`${month} - этот месяц зимы`);
            break;
            
        case '3':
        case '4':
        case '5':
        case 'март':
        case 'апрель':
        case 'май':
            alert(`${month} - этот месяц весны`);
            console.log(`${month} - этот месяц весны`);
            break;
            
        case '6':
        case '7':
        case '8':
        case 'июнь':
        case 'июль':
        case 'август':
            alert(`${month} - этот месяц лета`);
            console.log(`${month} - этот месяц лета`);
            break;
            
        case '9':
        case '10':
        case '11':
        case 'сентябрь':
        case 'октябрь':
        case 'ноябрь':
            alert(`${month} - этот месяц осени`);
            console.log(`${month} - этот месяц осени`);
            break;
            
        default:
            alert('Неверный ввод');
            console.log('Неверный ввод');
            break;
    }
});


const button6 = document.getElementById('exercise-6');

button6.addEventListener('click', function() {
    let number2 = prompt('Пожалуйста, введите любое число');
    let num = Number(number2.trim());
    
    if (!isNaN(num) && number2.trim() !== '') {
        if (num % 2 === 0) {
            alert(`Вы ввели число: ${num}. Число ${num} - четное`);
            console.log(`Вы ввели число: ${num}. Число ${num} - четное`);
        } else {
            alert(`Вы ввели число: ${num}. Число ${num} - нечетное`);
            console.log(`Вы ввели число: ${num}. Число ${num} - нечетное`);
        }
    } else {
        alert('Ошибка! Вы ввели не число');
        console.log('Ошибка! Вы ввели не число');
    }
});


const button7 = document.getElementById('exercise-7');

button7.addEventListener('click', function() {
    let clientOS = Number(prompt('Введите 0 или 1'));
    let clientDeviceYear = Number(prompt('Введите год выпуска вашего телефона:'));
    if (clientOS === 0) {
        if (clientDeviceYear < 2015) {
            console.log('Установите облегченную версию приложения для iOS по ссылке');
            alert('Установите облегченную версию приложения для iOS по ссылке');
        } else {
            console.log('Установите версию приложения для iOS по ссылке');
            alert('Установите версию приложения для iOS по ссылке');
        }
        
    } else if (clientOS === 1) {
        if (clientDeviceYear < 2015) {
            console.log('Установите облегченную версию приложения для Android по ссылке');
            alert('Установите облегченную версию приложения для Android по ссылке');
        } else {
            console.log('Установите версию приложения для Android по ссылке');
            alert('Установите версию приложения для Android по ссылке');
        }

    } else {
        alert('Ошибка! Введите 0 или 1');
        console.log('Ошибка! Введите 0 или 1');
    }    
    
    
});



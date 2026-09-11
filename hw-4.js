// Находим кнопку по id
const button1 = document.getElementById('exercise-1');

// Добавляем обработчик события
button1.addEventListener('click', function() {
    // let i = 0;
    // let hi = 'Привет'
    // do {
    //     i ++;
    //     console.log(hi);
        
    // }while (i < 2)

    // console.log('Привет!');
    
    for (let i = 0; i < 2; i++) {
    console.log('Привет!');
}
});

const button2 = document.getElementById('exercise-2');

button2.addEventListener('click', function() {
    // let num1 = 0;
    // do {
    //     num1 ++;
    //     console.log(num1);
        
    // } while (num1 < 5);
    
    for (let i = 1; i <= 5; i++) {
        console.log(i);       
    }
    
});

const button3 = document.getElementById('exercise-3');

button3.addEventListener('click', function() {
    let num2 = 6;
    do {
        num2 ++;
        console.log(num2);
        
    } while (num2 < 22);
});

const button4 = document.getElementById('exercise-4');

button4.addEventListener('click', function() {
    const obj = {
        'Коля' : '200',
        'Вася' : '300',
        'Петя' : '400'
    }
    for (let key in obj){
     console.log(`${key} - зарплата ${obj[key]} долларов.`);
    }
    
});    

const button5 = document.getElementById('exercise-5');

button5.addEventListener('click', function() {
    let num4 = 1000;
    let count = 0;
// do {
//     num4 = num4 / 2;
//     count++
// } while (num4 >= 50);
//   console.log('Количество операций: ',count);
//   console.log('Остаток: ',num4);  

while (num4 > 50) {
    
    num4 = num4 / 2;
    count++
    console.log('Остаток: ',num4);
}
    console.log('Количество операций: ',count);
});


const button6 = document.getElementById('exercise-6');

button6.addEventListener('click', function() {
    for (let fri = 3; fri <= 31; fri += 7){
        console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`);
    }

});
      

const button7 = document.getElementById('exercise-7');

button7.addEventListener('click', function() {
    let k = 100;
    let iterations = 0;
do {
    k -= 7;
    iterations++
} while (k >= 0);
  console.log('Количество операций: ',iterations);
  console.log('Остаток: ',k); 
    
});

const button8 = document.getElementById('exercise-8');

button8.addEventListener('click', function() {
    let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    
for (let a = 0; a < 12; a++) {
    console.log(`${a + 1} ${months[a]}`);
    
}
 
    
});

const button9 = document.getElementById('exercise-9');

button9.addEventListener('click', function() {
    const book = {
        'Название' : 'Зеленая миля',
        'Автор' : 'Стивен Кинг',
        'Год издания' : '1996 г.',
        'Жанр' : 'Драма'
    }
    for (let key in book){
     console.log(`${key} : ${book[key]}.`);
    }
 
    
});

const button10 = document.getElementById('exercise-10');

button10.addEventListener('click', function() {
    let num5 = [10, 35, 65, 4, 89, 12, 5, 9, 99, 76];
    let min = num5[0];
    
for (let a = 0; a < 10; a++) {
    if (num5[a] < min){
        min = num5[a]
    }
    
    
}
 console.log('Минимальное число: ', min);
    
});
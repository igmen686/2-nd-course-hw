/* Домашняя работа 2*/
/*
//1
let t = 10;
t = 20;
alert (t);

//2
let year = 2007;
alert (`Год выпуска первого iphone - ${year}`);

//3
let user1 = {
    name: `Брендан Эйк`, 
}
alert (`Имя создателя Java Script ${user1.name}`);

//4
let number_one = 10;
let number_two = 2;
alert (`${number_one+number_two}, ${number_one-number_two}, ${number_one*number_two}, ${number_one/number_two}`);

//5
let n = 2;
let result = n**5;
alert (result);

//6
let a = 9;
let b = 2;
let remainder = 9 % 2;
alert (remainder);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num)

//8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

//9
let user2 = {
    name: 'Олег',
    age: 32,
    isAdmin: false,
}
user2["city of residence"] = 'Москва';
user2.age = 33;
delete user2["city of residence"];
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert (user2[info]);

//10
let nameUser = prompt('Введите ваше имя');
alert(`Привет ${nameUser}!`);
*/

/* Домашняя работа 3*/
/*
//1
let password = 'super_password123';
let input = prompt('Введите пароль')
    if (input = password) {
        alert('Пароль введен верно');
    } else {
        alert('Пароль введен неправильно');
    }
    
    switch (input) {
        case (password):
            alert('Пароль введен верно');
            break;
    
        default: alert('Пароль введен неправильно');
            break;
    }
    

//2
let c = 5;
    if (c>0 && c<10) {
        console.log ('Верно');
    } else {
        console.log ('Неверно');
    }

//3
let d = 5;
let e = 105;
    if (d>100 || e>100) {
        console.log ('Верно');
    } else {
        console.log ('Неверно');
    }

//4
let a = '2';
let b = '3';
let f = Number(a);
let g = Number(b);
alert (f + g);

//5
let monthNumber = Number(prompt('Введите порядковый номер месяца, чтобы узнать к какому сезону он относится'));
    switch (monthNumber) {
        case 12:
            alert('Зима');
            break;
        case 1:
            alert('Зима');
            break;
        case 2:
            alert('Зима');
            break;
        case 3:
            alert('Весна');
            break;
        case 4:
            alert('Весна');
            break;
        case 5:
            alert('Весна');
            break;
        case 6:
            alert('Лето');
            break;
        case 7:
            alert('Лето');
            break;
        case 8:
            alert('Лето');
            break;
        case 9:
            alert('Осень');
            break;
        case 10:
            alert('Осень');
            break;
        case 11:
            alert('Осень');
            break;
        default: alert('Конец света');
            break;
    }
*/

/*
while(true) {
        const msg = prompt('Введите ваше сообщение');
        if (msg === 'continue') {
            continue;
        }
        console.log(msg);
        if (msg === 'break') {
            break;
        }
    }

while(true) {
    const msg = prompt('Введите сообщение');
    if (msg === 'continue') {
        continue;
    }
    console.log(msg);
    if (msg === 'break') {
        break;
    }
}
*/
/*
for (let dayNumber = 1; friday <= 31; dayNumber++) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}
*/
/*
// Домашняя работа №4
//1
let i = 1
while (i <= 2) {
    alert('Hello');
    i++;
}

//2
let a = 1
while (a <= 5) {
    console.log(a);
    a++;
}

//3
let r = 7
while (r <= 22) {
    console.log(r);
    r++;
}

//4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
};

for (key in obj) {
    if (obj[key]) {
        alert(`${key} - зарплата ${obj[key]} долларов`);
    }
}

//5
let n = 1000,
    count = 0;
do {
    n = n / 2;
    count = count + 1;
} while (n >= 50);
console.log(n);
console.log(count);

//6
let friday = 2
while (friday <= 31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}

*/

//Домашняя работа 5 (Функции)
//1
function min(a, b) {
    if (a <= b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

let resultOne = min(8, 4)

console.log(resultOne);

//2
function even(n) {
    if (n % 2 == 0) {
        console.log(n);
    } else {
        console.log(n + 1);
    }
}

let resultTwo = even(5)

console.log(resultTwo);

//3
//3.1
function inSquare(y) {
    return y ** 2;
}

let resultThreeOne = inSquare(4)

console.log(resultThreeOne);

//3.2
function outSquare(x) {
    return Math.sqrt(x);
}

let resultThreeTwo = outSquare(16)

console.log(resultThreeTwo);

//4
let k = Number(prompt('Сколько вам лет'));

function age(k) {
    if (0 <= k, k <= 12) {
        alert('Привет, друг!');
    } else if (13 <= k) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}
let resultFour = age(k);

console.log(resultFour);

//5
let p = Number(prompt('Напишите первое из двух чисел для вычисления произведения'));
let r = Number(prompt('Напишите второе из двух чисел для вычисления произведения'));

function examinationAndSum(p) {
    if (p, r) {
        alert(p * r);
    } else {
        alert('Одно или оба значения не являются числом');
    }
}

let resultFive = examinationAndSum(p)

console.log(resultFive);


//6
let o = Number(prompt('Напишите любое число для нас от 1 до 10'));

function raiseToAPower(o) {
    if (1 <= o, o <=10) {
        alert(`${o} в кубе равняется ${o ** 3}!`);
    } else {
        alert('Переданный параметр не является числом или не тем числом');
    }
}

let resultSix = raiseToAPower(o)

console.log(resultSix);

//7
const circle1 = {
    radius: 25,
    area: function getArea() {
        console.log (circle1.radius * circle1.radius * 3.14);
    },
    perimeter: function getPerimeter() {
        console.log (circle1.radius * 2 * 3.14);
    },
};

console.log(circle1.area());
console.log(circle1.perimeter());


const circle2 = {
    radius: 34,
    area: function getArea() {
        console.log (circle2.radius * circle1.radius * 3.14);
    },
    perimeter: function getPerimeter() {
        console.log (circle2.radius * 2 * 3.14);
    },
};

console.log(circle2.area());
console.log(circle2.perimeter());

//8
function game1() {
    let monthNumber = Number(prompt('Введите порядковый номер месяца, чтобы узнать к какому сезону он относится'));
    switch (monthNumber) {
        case 12:
            alert('Зима');
            break;
        case 1:
            alert('Зима');
            break;
        case 2:
            alert('Зима');
            break;
        case 3:
            alert('Весна');
            break;
        case 4:
            alert('Весна');
            break;
        case 5:
            alert('Весна');
            break;
        case 6:
            alert('Лето');
            break;
        case 7:
            alert('Лето');
            break;
        case 8:
            alert('Лето');
            break;
        case 9:
            alert('Осень');
            break;
        case 10:
            alert('Осень');
            break;
        case 11:
            alert('Осень');
            break;
        default: alert('Конец света');
            break;
    }
}


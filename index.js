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

//1
let password = 'super_password123';
let input = prompt('Введите пароль')
    if (input = password) {
        alert('Пароль введен верно');
    } else {
        alert('Пароль введен неправильно');
    }
    /*
    switch (input) {
        case (password):
            alert('Пароль введен верно');
            break;
    
        default: alert('Пароль введен неправильно');
            break;
    }
    */

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
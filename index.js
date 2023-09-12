
let t = 10;
t = 20;
alert (t);


let year = 2007;
alert (`Год выпуска первого iphone - ${year}`);

let userr = {
    naame: `Брендан Эйк`, 
}
alert (`Имя создателя Java Script ${userr.naame}`);

let number_one = 10;
let number_two = 2;
alert (`${number_one+number_two}, ${number_one-number_two}, ${number_one*number_two}, ${number_one/number_two}`);

let n = 2;
let result = n**5;
alert (result);

let a = 9;
let b = 2;
alert (a/b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num)

let age = Number(prompt("Сколько вам лет?"));
alert(age);


let user = {
    name: 'Олег',
    age: 32,
    isAdmin: false,
}
user.cityOfResidence = 'Москва';
user.age = 33;
delete user.cityOfResidence;

let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert (user.info);


let namee = prompt('Введите ваше имя');
alert(`Привет ${namee}!`);



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



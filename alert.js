/*
var login = prompt('login');
if (login == 'Admin'){
	pass = prompt('pass');
	if (pass == 'Admin'){
		alert("privet Admin");
	}else if (pass == null) {
		alert('Вход отменен');
	}else {
		alert('wrong pass');
	}
}else if (login ==null) {
	alert('Вход отменен');
}else {
	alert("I don't know you!");
}
*/


/*
var a = +prompt("input 'a'");
var b = +prompt("input 'b'");
	result = (a + b < 4) ? 'Мало' : 'Много';
	result = (a + b < 4) ? alert('few') : alert('alot of');
*/

/*
var login = prompt("Введи имя");

var message = (login == 'Вася') ? "Hi" : 
(login == "Boss") ? "Hellow" :
(login == '') ? "no login": '';
alert(message);
*/
/*
var i = 0;
var sum = 0;
var max = 0
while (i<4) {
	var num = prompt('введи число');
	if (num == 'stop'){
		i = 10;
	} else {
	sum += +num;
	if (+num > max){
		max = +num;
	}
	}
	i++;
}
alert(sum/i);
alert(max);
*/
/*
var kapcha = "kapcha";
var flag = false;
while (flag == false){
	var input = prompt('введи строку');
	if (input == kapcha) {
		flag = true;
		alert('угадал');
	} else {
		alert("пробуй");
	}
}
*/
/*
var flag = false;
var sum = 0;
var i = 0
while (flag == false ){
	var num = +prompt("number");
	sum +=num;
	i++;
	if (sum >= 666) {
		flag = true;
		alert('>666');
	} else {
		alert('more');
	}
}

alert(sum/i);
*/
/*
var arr=['test', 123, null, undefined, 'test'] //массив 
var as = [1, 2, 3, 4 ];
var sum = 0;
for (var i = 0; i < as.length ; i++){
	sum += as[i];
}
alert(sum);
*/
/*
var s = prompt('string');
for ( var i=0; i < s.length; i++){
	if (s[i] == 'r') {
		alert('it is "r"');
		break;
	} else {
		alert('more');
	}
}
*/
/*
var i
for ( i = 2 ; i <= 10; i++){
	if (i % 2 ) continue;
	alert(i);
}
*/
/*
var i = 0;
while(i < 3){
	alert('number');
	i++
}
*/
/*
var num;

do {
	num = prompt('number' , 0);
} while (num <= 100 && num != null);
*/
/*
pum:
for ( var n = 2 ; n < 10 ; n++ ){
	for ( var i=2 ; i < n ; i++){
		if( n % i == 0) continue pum;
	}
	alert(n);
}
*/
/*
exit:
for( var i=2 ; i <= 10 ; i++){

	for( var j = 2 ; j < i ; j++){
		if (i % j == 0) continue exit;
	}
	alert(i);
}
*/
/*
var fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");
fruits.push("Арбуз");
fruits[fruits.length] = "Морковка";

alert(fruits[fruits.length - 1]); // Яблоко, Апельсин, Груша
*/
/*
var styles = ["Джаз", "Блюз"];
styles[styles.length] = "Rok-and-roll"
styles[styles.length - 2] = "Классика";
alert(styles.shift());
styles.unshift("RAP", "Reggy");
*/
/*
var arr = ["sgsf", "fsefsef", "efszfes"];
var rand = Math.floor(Math.random() * arr.length);
alert( arr[rand]);*/
/*
var numbers = [];

while (true) {

  var value = prompt("input a number", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
alert(sum);

*/
/*
mas = ["Hello", "my", "world", "!!!"];
var result = []
for ( var i=0; i < mas.length; i++){
	if ( mas[i].length >= 5){
		result.push(mas[i]);
	}
}
alert(result.join(' '));
*/
/*
var arr = [];
for(var i=2; i < 20; i++){
	var del = 0;
	for(var j = 1; j <= i; j++){
		if ( i % j == 0) {
			++del;
		}
	}
	if (del == 2) {
		arr.push(i);
	}
}
alert(arr.join(" "));
*/

/*
var srt = prompt('input string');
var result_str = "";

for(var i=0; i < srt.length; i++){
	if ( srt[i].toUpperCase() == "L" && srt[i+1].toUpperCase() == "O" && srt[i+2].toUpperCase() == "X") {
		result_str += "***";
		i += 2;
	} else{
		result_str +=srt[i];
	}
}
alert(result_str);
*/

/*
var srt = "thnfitjh";
  if (srt.indexOf('@') == -1){      //indexOf возвращает индекс!
  	alert(" no mail");
  } else{
  	alert('mail');
  };
*/

/*
var srt = "thnfit@@jh";
  if (srt.indexOf('@') == -1 ){      
  	alert(" no @");
  } else if (srt.indexOf('@') != srt.lastIndexOf('@')) {
  	alert('more then one @');
  } else {
  	alert('norm pes')
  }
*/

/*
var sum = 0;
var srt = prompt("Введите строку");  //задание 1
for(var i=0; i < srt.length; i++){
  if( srt[i] != " "){
    sum = sum + 1;
  }
}
  alert(sum);
*/
/*
arr = ["Hello", "my", "world", "!!!"]; //задание 2
result = [];
for( var i=0; i < arr.length; i++){
	if ( arr[i].length >= 5){
		result.push(arr[i]);
	}
}
alert(result.join(' '));
*/
/*
arr = [3, -5, 6, -22, -89, 56, 102]; // ЗАДАНИЕ 3 !!! DONE
mas = [];
for( var i=0; i < arr.length; i++){
	if ( arr[i] < 0){
		mas.push(arr[i]);
	}
}
alert(mas.join(' '));
*/
/*
var mail = prompt('Введите mail');

    if ( mail.length < 6 ){

  	    alert('Вы ввели короткий mail')
    } else if ( mail.indexOf('@') == -1){

    	alert('Вы пропустили @');

    } else if (mail.indexOf('@') != mail.lastIndexOf('@')){

    	alert('Вы ввели слишком много @ в mail');

    } else if ( mail.indexOf('.') == -1){

    	alert('Пропустили "." ');

    } else if ( mail.indexOf('@') > mail.indexOf('.') || mail.indexOf('@') > mail.indexOf('.') - 3)  {

    	alert('@ должна стоять не ближе двух символов перед "."');

    } else if (mail.indexOf('@') < 2) {

    	alert('Между собакой и началом строки должно быть минимум 2 символа');

    } else if ( mail.length <= mail.indexOf('.') + 2) {

    	alert('Между точкой и концом строки - минимум 2 символа');
    } else{

	alert('Вы ввели верный ' + mail + ' mail');
    }
*/
/*// Вотрое задание
var input = prompt('input string!');

    if ( isNaN(input)) {
    	alert('you wrote not a number');
    } else if ( input.indexOf('1') == -1 ) {
    	alert('no 1 in number');
    } else {
    	alert(' your number has 1');
    }
*/
/* // задание 3
var in_1 = prompt('enter the string');
var in_2 = +prompt('enter the correspond number');

if ( in_1.length == in_2 ){
	alert('your number correspond amount of words in string');
} else {
	alert('wrong number');
}
*/
/*
var input = confirm('Вы согласны с нами работать?');  // Дополнительное задание

if (input == false) {

	alert('so sorry');
	
	}else if (true) {
	
		var input_1 = prompt('Какую сомму вы хотели бы вложить?');
	
		if ( isNaN(input_1) || +input_1 < 0){
	
			alert('Сумма не валидна');
		}else if (true) {

			var input_2 = prompt('На сколько вы бы хотели положить сумму');

			if ( isNaN(input_2) || 0 > +input_2 > 24){

				alert('Срок не валиден');

			}else if (true) {

				var input_3 = confirm('Вы вкладывает ' + input_1 + ' денег на ' + input_2 + ' месяцев под 10%. Вы хотите продолжить?' );
				
				if (input_3 == true) {
				
					alert('Спасибо! Количество денег для выдачи - ' + input_1*1.1*input_2);
				
				}else {
				
					alert('Спасибо за ваш выбор приходите к нам еще');

					}
				}
			}
		}	
*/
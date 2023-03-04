console.log('bulgach');
console.dir('good' + 'morning');

let a = 'salam';
a = a + 'aleikum';
console.log(a);
const b = 20;
//нельяза присваивать новые знаечения const
//assigment to const variable
//b = 10;
console.log(b);

//Объектам можно присваивать множешство свойств порядок которых не важен
/* ObjectA - ссылочный тип, который хранит ссылку а не значение,
а значит можно делать со свойствами что угодно не смотря на CONST */
const objectA = {
    x: 10,
    y: 'abc'
};
const objectAcopy = objectA;
objectAcopy.x = 20;
objectAcopy.y = 'cba';
//Добавление новых свойств
objectAcopy.z = true; 
const i = {
    i1: 10,
    i2: 'abc'
}
//Присваиваю значение i свойству z объекта objectAcopy
objectAcopy.z[i];
//Удаления свойства
delete objectA.y;
delete objectAcopy.z[i];
console.log(objectAcopy.z +" "+ typeof objectAcopy.z);
console.log(objectA);
//Можно менять значение объектов и их типы но нельзя вызывать их предыдущие значения 
function f(){
    console.log('salam')
}
console.log(f() + " " + typeof f)
f = 10;
console.log(f + " " + typeof f);
//CONST - решает проблему
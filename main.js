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

//
const objectA = {
    x: 10,
    y: 'abc'
};
const objectAcopy = objectA;
objectAcopy.x = 20;
objectAcopy.y = 'cba';
objectAcopy.z = true; 
console.log(objectAcopy.z +" "+ typeof objectAcopy.z);

//Можно менять значение объектов и их типы но нельзя вызывать их предыдущие значения 
function f(){
    console.log('salam')
}
console.log(f() + " " + typeof f)
f = 10;
console.log(f + " " + typeof f);
//CONST - решает проблему
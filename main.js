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

const objectA = {
    x: 10,
    y: 'abc'
};
const objectAcopy = objectA;
objectAcopy.x = 20;
objectAcopy.y = 'cba';
objectAcopy.z = true; 
console.log(objectAcopy.z +" "+ typeof objectAcopy.z);
const uuid = require('UUID')

console.log(uuid.v4())
let t1 = uuid.v4();
console.log(typeof(t1));
console.log(t1.replace(/-/g, ""));

console.log(Date.now());  // current time in ms
console.log(new Date().getTime()); // current time in ms

let zero = '00123';

let number = +zero;   // remove leading zeros
console.log(number); 

// regex
let result = /hey|ho/.test('hey');
console.log(result)

const re1 = new RegExp('hey|ho')
console.log(re1.test('ho'));

console.log(new Date('2021-10-22').toString())
console.log(Number('01.23'))

let capitalize = (s) => {

  return (typeof s !== 'string') ? '' : s.charAt(0).toUpperCase() + s.slice(1);
}

console.log(capitalize('anaconda'))  // capitalize first letter
console.log(capitalize(1.23))  // return empty for non-string

// spread operator
const a = [12,3]

const b = [...a, 4, 5]

console.log(b)
console.log([...b, 3 , 6])

// object operator {}
let oo = {
  a: 12,
  b: { cc: 13, dd:14}
}
console.log(oo)
console.log(oo.b.cc)

/// class
class Bird {
  sound() {
    console.log('chirp');
  }
}

console.log('...roster')
class Rooster extends Bird {
  sound() {
    console.log('koko');
  }
}

const bbb = new Rooster();

bbb.sound();

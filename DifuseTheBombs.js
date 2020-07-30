// Defuse all of the Bombs!
//Bomb 10
Bomb.diffuse( 42 );

//Bomb 9
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');

//Bomb 8

// console.log(Object.keys(this))
// console.log(BombKey)
Bomb.diffuse(BombKey);

//Bomb 7
let diffuseTheBomb = () => true;
Bomb.diffuse();

//Bomb 6
let data = 'VGhlIGtleSBpcyAiMy4xNDE1OSI';
let buff = new Buffer(data, 'base64');
let code6 = buff.toString('ascii');
// console.log("code",code6)

Bomb.diffuse('3.14159')

//Bomb 5
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear()-4))

//Bomb 4
class Code4 {
  get key() {
    return 43;
  }
  set key(removed) { 
  }
}

Bomb.diffuse(new Code4())

//Bomb 3
class Code3 {
  constructor () {
    this.num = 100;
  }
  valueOf () {
    this.num = -this.num;
    return this.num;
  }
}

Bomb.diffuse(new Code3())

//Bomb 2
Math.random = () => {
  if(!this.called) {
    this.called = 0;
  }
  this.called++;
  
  if(this.called == 3) {
    return 0.5;
  }
  
  return 1;
}

Bomb.diffuse(42)

//Bomb 1
// console.log("Bomb.diffuse ====>", Bomb.diffuse.toString())
Array.prototype.valueOf = function() { return this.reduce((acc, num) => acc+num,0) } 
let code1 = new Buffer ('yes' ,'ascii').toString('base64')
Bomb.diffuse(code1)

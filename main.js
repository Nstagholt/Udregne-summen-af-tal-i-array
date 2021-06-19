
function add(array){
    let sum = 0 
    for(num in array) { 
        sum += array[num];
    }
    return sum;
}

console.log(add([10,2,3,4]));


class myClass {
    constructor(array) {
        this.array = array
    }
    get resultat(){
        return this.add();
    }
    add(){
        let sum = 0 
    for(num in this.array) { 
        sum += this.array[num];
    }
    return sum;

    }
}
const calc = new myClass ([1,2,3,4]);
console.log(calc.resultat);

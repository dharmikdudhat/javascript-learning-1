function accumulator (startingValue){
    this.value = startingValue;
    this.read = function (){
        this.value += +prompt("what to add????" , 0);
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
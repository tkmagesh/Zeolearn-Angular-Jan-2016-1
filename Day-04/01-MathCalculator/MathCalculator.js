 function MathCalculator(){
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
}
MathCalculator.prototype.add = function(){
    this.result = this.number1 + this.number2;
};
MathCalculator.prototype.subtract = function(){
    this.result = this.number1 - this.number2;
};
MathCalculator.prototype.multiply = function(){
    this.result =this.number1 * this.number2;
};
MathCalculator.prototype.divide = function(){
    this.result = this.number1 / this.number2;
};

function square(Number) {
    let result = Number * Number;
    return result;
}
function calculate() {
    let input = document.getElementById("input").value;
    let result = square(input);
    document.getElementById("result").innerHTML =result;
}
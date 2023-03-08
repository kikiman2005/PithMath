function calculate() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = Math.sqrt(a*a + b*b);
    document.getElementById("result").value = c;
}
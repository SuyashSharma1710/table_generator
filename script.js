function table(num, upto) {
    let content = "";
    for (let i = 1; i <= upto; i++) {
        content += `${num} x ${i} = ${num * i}<br>`;
    }
    return content;
}

function show() {
    // Get the input values
    const num = document.getElementById("num").value;
    const upto = document.getElementById("upto").value;
    const display = document.getElementById("display");

    // Generate the multiplication table
    display.innerHTML = table(num, upto);

    // Prevent form submission
    return false;
}
function reseter(){
    document.getElementById("display").innerHTML="";
}
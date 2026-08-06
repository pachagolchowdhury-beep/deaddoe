function calculate(){

    const p = Number(document.getElementById("p").value);
    const r = Number(document.getElementById("r").value);
    const t = Number(document.getElementById("t").value);
    const type = document.getElementById("type").value;

    const result = document.getElementById("result");

    // Validation
    if(!p || !r || !t){
        result.style.display = "block";
        result.innerHTML = "⚠ Please fill all fields.";
        return;
    }

    if(p <= 0 || r <= 0 || t <= 0){
        result.style.display = "block";
        result.innerHTML = "⚠ Values must be greater than zero.";
        return;
    }

    let interest;

    if(type === "Simple Interest"){
        interest = (p*r*t)/100;
    }
    else{
        interest = p*Math.pow((1+r/100),t)-p;
    }

    const total = p + interest;

    result.style.display="block";

    result.innerHTML = `
        <h3>Calculation Result</h3>

        <p><b>Interest:</b> ₹${interest.toLocaleString("en-IN",{minimumFractionDigits:2})}</p>

        <p><b>Total Amount:</b> ₹${total.toLocaleString("en-IN",{minimumFractionDigits:2})}</p>
    `;
}

function resetFields(){

    document.getElementById("p").value="";
    document.getElementById("r").value="";
    document.getElementById("t").value="";
    document.getElementById("type").selectedIndex=0;

    const result=document.getElementById("result");
    result.style.display="none";
    result.innerHTML="";
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            calculate();
        }
    });
});
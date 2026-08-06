function Pytha() {
    // Get raw input values
    const aVal = document.getElementById("a").value;
    const bVal = document.getElementById("b").value;
    const cVal = document.getElementById("c").value;

    const resultElement = document.getElementById("result");

    const a = Number(aVal);
    const b = Number(bVal);
    const c = Number(cVal);

    

    // Find the largest number (hypotenuse)
    const max = Math.max(a, b, c);
    let sumOfSquares;

    // Check if c is the hypotenuse
    if (max === c) {
        sumOfSquares = a * a + b * b;
    }
    // Check if b is the hypotenuse
    else if (max === b) {
        sumOfSquares = a * a + c * c;
    }
    // Else, a must be the hypotenuse
    else {
        sumOfSquares = b * b + c * c;
    }

    // Compare sum of squares to hypotenuse squared
    const isTriplet = (sumOfSquares === max * max);

    // Display result using the template's result states
    if (isTriplet) {
        resultElement.textContent = `Yes! (${a}, ${b}, ${c}) is a Pythagorean triplet!`;
        resultElement.className = "result show success";
    } else {
        resultElement.textContent = `No! (${a}, ${b}, ${c}) is NOT a Pythagorean triplet.`;
        resultElement.className = "result show fail";
    }
}
//operations numbers
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}
function calculateSquareRoot() {
    try {
        currentInput = Math.sqrt(parseFloat(currentInput));
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}

function calculateFactorial() {
    try {
        const num = parseFloat(currentInput);
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        currentInput = result;
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}

function calculateRadication() {
    try {
        currentInput = Math.cbrt(parseFloat(currentInput));
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}
//trigonometry
function calculateSine() {
    try {
        const angleInDegrees = parseFloat(currentInput);
        const sine = Math.sin((angleInDegrees * Math.PI) / 180); 
        currentInput = sine;
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}

function calculateCosine() {
    try {
        const angleInDegrees = parseFloat(currentInput);
        const cosine = Math.cos((angleInDegrees * Math.PI) / 180); 
        currentInput = cosine;
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}

function calculateTangent() {
    try {
        const angleInDegrees = parseFloat(currentInput);
        const tangent = Math.tan((angleInDegrees * Math.PI) / 180);
        currentInput = tangent;
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Erro';
    }
}
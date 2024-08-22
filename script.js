function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').innerText;
    document.getElementById('display').innerText = currentDisplay.slice(0, -1);
}

function calculateResult() {
    let currentDisplay = document.getElementById('display').innerText;
    try {
        document.getElementById('display').innerText = eval(currentDisplay);
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}

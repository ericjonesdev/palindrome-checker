// Declare element variables
const userDataInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const palResultDiv = document.getElementById('result');

const checkForPalindrome = input => {
    const originalInput = input; // store variable for future use

    // ensure that userDataInput is not blank
    if (input === '') {
        alert('Please input a value');
        return;
    }

    // remove previous result
    palResultDiv.replaceChildren();

    // check if the input word is equal in both directions after removing non-alphanumeric characters
    const inputLowerCase = input.replace(/[^A-Za-z1-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${inputLowerCase === [...inputLowerCase].reverse().join('') ? 'is' : 'is not'} a palindrome.`;


    // output the result to the result div area
    const paraGraph = document.createElement("p");
    paraGraph.className = userDataInput;
    paraGraph.innerHTML = resultMsg;
    palResultDiv.appendChild(paraGraph);

    // show result message by unhiding hidden element

    palResultDiv.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

};

function resetGame() {
    if (resetBtn) {
        palResultDiv.classList.add('hidden');
        resetBtn.classList.add('hidden');
    }
}


// add event listener for checkButton
checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userDataInput.value);
    userDataInput.value = '';
});

// add event listener for userDataInput

userDataInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userDataInput.value);
        userDataInput.value = '';
    }

});

resetBtn.addEventListener('click', () => {
    resetGame()
});
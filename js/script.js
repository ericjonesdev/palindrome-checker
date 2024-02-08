// Declare element variables
const userDataInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const palResultDiv = document.getElementById('result');

const checkForPalindrome = input => {
    const originalInput = input; // store variable for future use

    // ensure that userDataInput is not blank
    if (input === '') {
        alert('Please input a value');
        return;
    }

    // remove previous result
    palResultDiv.removeChild();


}









// add event listener for checkButton
checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userDataInput.value);
    userDataInput.value = '';
});

// add event listener for userDataInput

userDataInput.addEventListener( e => {
    if (e.key === 'ENTER') {
        checkForPalindrome(userDataInput.value);
        userDataInput.value = '';
    }

});
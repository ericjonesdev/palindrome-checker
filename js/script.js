const userDataInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const palResult = document.getElementById('result');

const checkForPalindrome = input => {
    const originalInput = input; // store variable for future use

    if (input === '') {
        alert('Please input a value');
    }
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
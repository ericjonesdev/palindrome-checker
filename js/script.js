const userDataInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const palResult = document.getElementById('result');

// add event listener for checkButton
checkButton.addEventListener('click', () => {
    checkForPalindrome(userDataInput.value);
    userDataInput.value = '';
})

// add event listener for userDataInput

userDataInput.addEventListener( e => {
    if (e.key === 'ENTER') {
        checkForPalindrome(userDataInput.value);
        userDataInput.value = '';
    }

})
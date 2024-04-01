const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const country = document.querySelector('#country-signup').value.trim();
    const DOB = document.querySelector('#DOB-signup').value.trim();

    if (email && username && password && country && DOB) {
        const emailChecker = await fetch('/api/users/check-email', {
            method: 'POST',
            body: JSON.stringify({email}),
            headers: {'Content-Type': 'application/json'},
        });

        const usernameChecker = await fetch('/user/api/check-username', {
            method: 'POST',
            body: JSON.stringify({ username }),
            headers: {'Content-Type': 'application/json'},
        });

        const emailData = await emailChecker.json();
        if(emailChecker.ok && emailData.exists) {
            alert('This email already has an account linked, try logginh in or sign up with a different email.');
        }

        const userData = await usernameChecker.json();
        if (usernameChecker.ok && userData.exists) {
            alert('This user name is taken, try a different one.');
        }

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Sign up failed, try again.');
        }
    }

};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
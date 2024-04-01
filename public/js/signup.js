const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const country = document.querySelector('#country-signup').value.trim();
    const DOB = document.querySelector('#DOB-signup').value.trim();

    console.log(country)

    if (email && username && password && country && DOB) {

        const emailData = await fetch('/api/user/email', {
            method: 'POST',
            body: JSON.stringify({email}),
            headers: {'Content-Type': 'application/json'}
        })

        if(!emailData.ok){
            alert('This email already has an account linked, try logging in or signing up with a different email.');
            return;
        }
        

        const usernameData = await fetch('/api/user/username', {
            method: 'POST',
            body: JSON.stringify({username}),
            headers: {'Content-Type': 'application/json'}
        })
        if (!usernameData.ok) {
            alert('This user name is taken, try a different one.');
            return;
        }

        const response = await fetch('/api/user/sign-up', {
            method: 'POST',
            body: JSON.stringify({email, username, password, country, DOB}),
            headers: {'Content-Type': 'application/json'},
        });

        

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Sign up failed, try again.');
        }
    }

};

let signUpForm = document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

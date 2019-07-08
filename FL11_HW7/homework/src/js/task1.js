let email = prompt('Please enter your email', 0);
if (email === null || email.length < 1) {
    alert('Canceled');
} else if (email.length < 6) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please enter your pasword');
    let passwordValid = false;
    if (password === null || password.length < 1) {
        alert('Canceled');
    } else if (password === 'UserPass' && email === 'user@gmail.com') {
        passwordValid = true;
    } else if (password === 'AdminPass' && email === 'admin@gmail.com') {
        passwordValid = true;
    } else {
        alert('Wrong password');

    }

    if (passwordValid) {
        let confirmPassword = confirm('Do you want to change your password?')
        if (confirmPassword) {
            let oldPassword = prompt('Please enter your old password');
            if (oldPassword === null || oldPassword.length < 1) {
                alert('Canceled');
                passwordValid = false;
            } else if (oldPassword === 'UserPass' && email === 'user@gmail.com') {
                email = 'user@gmail.com';
                oldPassword = 'UserPass';
            } else if (oldPassword === 'AdminPass' && email === 'admin@gmail.com') {
                email = 'admin@gmail.com';
                oldPassword = 'AdminPass';
            } else {
                alert('Wrong password');
                passwordValid = false;
            }
            if (passwordValid) {
                let newPassword1 = prompt('Please enter your new password')
                if (newPassword1.length < 5) {
                    alert('It’s too short password. Sorry.')
                } else {
                    let newPassword2 = prompt('Please enter your new password again')
                    if (newPassword1 !== newPassword2) {
                        alert('You wrote the wrong password.')
                    } else {
                        alert('You have successfully changed your password.')
                    }
                }
            }
        } else {
            alert('You have failed the change.');
        }
    }

} else {
    alert('I don’t know you');
}
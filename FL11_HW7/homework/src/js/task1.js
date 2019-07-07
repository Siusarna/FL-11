const email = prompt('Enter your email');
let password = '';
let newPassword = '';
const zero = 0;
const minLengthForPassword = 6;
const minLengthForNewPassword = 5;
if (email === null || email.length === zero ){
  alert('Canceled.');
} else if (email.length < minLengthForPassword ) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  password = prompt('Enter your password');
  if(password === null || password.length === zero ){
    alert('Canceled.');
  } else if ( email === 'user@gmail.com' && password === 'UserPass' ||
      email === 'admin@gmail.com' && password === 'AdminPass' ){
    if(!confirm('Do you want to change your password?')){
      alert('You have failed the change.');
    } else{
      let oldPassword = prompt('For change password enter your old password');
      if(oldPassword === null || oldPassword.length === zero ){
        alert('Canceled.');
      } else if(oldPassword === password){
        newPassword = prompt('Enter new password');
        if (newPassword.length < minLengthForNewPassword){
          alert('It’s too short password. Sorry.');
        } else{
          if (prompt('Enter new password again') === newPassword){
            alert('You have successfully changed your password.');
          } else{
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else{
  alert('I don’t know you');
}

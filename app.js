const github = new Github();
const ui = new UI();
const searchUser = document.querySelector('.form-control');

searchUser.addEventListener('keyup', (e)=> {
 const userText = e.target.value;
    if (userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
          if (data.profile.message === 'Not Found'){
             // Show alert
                ui.alertMsg('Sorry.Profile Not Found!', 'alert alert-danger');

          } else {
            // Show profile
            ui.showProfile(data.profile);
            // Show repo
            ui.showRepos(data.repos);
          }
     })
    } else {
     // Clear Profile 
     // (in case where inputField is cleared after searching sth & we wanna clear the profile thats still on UI)
     ui.clearProfile();

 }

});




function onLoad() {
      gapi.load('auth2', function() {
        gapi.auth2.init().then(function(){
          auth2 = gapi.auth2.getAuthInstance();
          loadProfileContent(auth2);
        });
      });
}

function loadProfileContent(auth2){
  if (auth2.isSignedIn.get()) {
    let profile = auth2.currentUser.get().getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    let profileImg = document.getElementById("profile-pic");
    profileImg.src = profile.getImageUrl();

  }else{
    window.location.replace("http://localhost:3000/login.html");
  }
}

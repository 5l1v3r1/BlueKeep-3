    function onSuccess(googleUser) {
      window.location.replace("http://localhost:3000/dashboard.html");
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }

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

    function signOut() {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        window.location.replace("/");
    }

// Paste the code from Firebase
var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "Your_AuthDomain",
  databaseURL: "YOUR_DATABAE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contactformmessages');

$('#contactForm').submit(function(e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: $('.fullname').val(),
      email: $('.email').val(),
      subject: $('.subject').val(),
      message: $('.message').val()
  });

  $('.success-message').show();

  $('#contactForm')[0].reset();
});
messagesRef.once('value').then((snapshot) => {
      Object.keys(snapshot.val()).forEach((key) => {
          console.log(`Name: ${snapshot.val()[key].name}`);
          console.log(`Email: ${snapshot.val()[key].email}`);
          console.log(`Subject: ${snapshot.val()[key].subject}`);
          console.log(`Message: ${snapshot.val()[key].message}`);
      });
  });
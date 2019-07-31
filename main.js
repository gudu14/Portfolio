//Initialize Firebase

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4_Dx-axAM6ckk9Wk1aK56oLkaJtsjI30",
    authDomain: "contactform-8ae0d.firebaseapp.com",
    databaseURL: "https://contactform-8ae0d.firebaseio.com",
    projectId: "contactform-8ae0d",
    storageBucket: "",
    messagingSenderId: "1059515058074",
    appId: "1:1059515058074:web:f9b476eb06b6a6eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
var messageRef = firebase.database().ref('messages');
  

 // Listen for form submit
 document.getElementById('Contactform').addEventListener('submit', submitForm);

 // Submit form
 function submitForm(e){
    e.preventDefault();

    //values
    var name=getInputVal('name');
    var email=getInputVal('email');
    var message=getInputVal('message');

    //Save message
    saveMessage(name, email, message);

    //Show alert message
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('Contactform')
 }

 // Fuction to get form values
 function getInputVal(id){
    return document.getElementById(id).value;
 }


//Save message to firebase
function saveMessage(name,email,message){
    var newMessageRef=messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    }); 
}
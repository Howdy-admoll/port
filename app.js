// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEKybXHw5JAvY86-C21WKOFYRBde3N1VQ",
    authDomain: "contact-edubolt.firebaseapp.com",
    projectId: "contact-edubolt",
    storageBucket: "contact-edubolt.appspot.com",
    messagingSenderId: "915164758881",
    appId: "1:915164758881:web:df904309e6c420b199fb20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference ContactInfo collections
let contactInfo = firebase.database().ref("infos");

// listen to submit button
document.querySelector(".contact-us-form").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();
    
    // Get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let school = document.querySelector(".school").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, phone, school, message);

    saveContactInfo(name, email, phone, school, message)
}

// save infos to firebase
function saveContactInfo(name, email, phone, school, messgage) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Username: name,
        email: email,
        phone: phone,
        school: school,
        message: message
    })
}
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUnnBDj8hy7Hb0xQDb6FwWl8d30HlCxBY",
    authDomain: "student-teacher-appointm-81a26.firebaseapp.com",
    databaseURL: "https://student-teacher-appointm-81a26-default-rtdb.firebaseio.com",
    projectId: "student-teacher-appointm-81a26",
    storageBucket: "student-teacher-appointm-81a26.appspot.com",
    messagingSenderId: "1089302650231",
    appId: "1:1089302650231:web:eb3d7dde6e1d9710ced572",
    measurementId: "G-X5TGYY2X5Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Check if a user is logged in
function checkAuth() {
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is logged in
            showLoggedInView();
        } else {
            // User is not logged in
            showLoggedOutView();
        }
    });
}

// Show the logged-in view and hide other forms
function showLoggedInView() {
    document.getElementById('nav').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
}

// Show the logged-out view and hide other forms
function showLoggedOutView() {
    document.getElementById('nav').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
}

// Register a new user
function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert('Registration successful!');
            showLoggedInView();
        })
        .catch(error => {
            alert(`Registration failed: ${error.message}`);
        });
}

// Log in an existing user
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('Login successful!');
            showLoggedInView();
        })
        .catch(error => {
            alert(`Login failed: ${error.message}`);
        });
}

// Log out the current user
function logout() {
    auth.signOut()
        .then(() => {
            alert('Logout successful!');
            showLoggedOutView();
        })
        .catch(error => {
            alert(`Logout failed: ${error.message}`);
        });
}

// Search for a teacher (dummy function, replace with your logic)
function searchTeacher() {
    const teacherName = document.getElementById('teacherSearchInput').value;
    alert(`Searching for teacher: ${teacherName}`);
}

// Book an appointment (dummy function, replace with your logic)
function bookAppointment() {
    alert('Booking appointment...');
}

// Send a message (dummy function, replace with your logic)
function sendMessage() {
    const message = document.getElementById('messageInput').value;
    alert(`Sending message: ${message}`);
}

// Initialize the app
checkAuth();

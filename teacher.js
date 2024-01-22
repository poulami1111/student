// Placeholder user data (replace with actual authentication mechanism)
const users = [
    { username: 'teacher1', password: 'password1', role: 'teacher' },
    { username: 'student1', password: 'password2', role: 'student' }
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appointmentForm').style.display = 'block';
        document.getElementById('logout').style.display = 'block';

        // Additional logic for different user roles (teacher/student)
        if (user.role === 'teacher') {
            // Display teacher-related features
        } else if (user.role === 'student') {
            // Display student-related features
        }
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
}

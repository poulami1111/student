// Initialize Firebase
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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add Teacher
function addTeacher() {
    const teacherName = document.getElementById('teacherName').value;
    const department = document.getElementById('department').value;
    const subject = document.getElementById('subject').value;

    db.collection('teachers').add({
        name: teacherName,
        department: department,
        subject: subject
    })
    .then(() => {
        alert('Teacher added successfully!');
        document.getElementById('addTeacher').reset();
        fetchTeachers();
    })
    .catch(error => console.error('Error adding teacher: ', error));
}

// Fetch Teachers
function fetchTeachers() {
    const teachersList = document.getElementById('teachers');

    // Clear previous entries
    teachersList.innerHTML = '';

    // Fetch teachers from Firestore
    db.collection('teachers').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${data.name}</span>${data.department}, ${data.subject} <button onclick="deleteTeacher('${doc.id}')">Delete</button>`;
            teachersList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching teachers: ', error));
}

// Delete Teacher
function deleteTeacher(teacherId) {
    db.collection('teachers').doc(teacherId).delete()
    .then(() => {
        alert('Teacher deleted successfully!');
        fetchTeachers();
    })
    .catch(error => console.error('Error deleting teacher: ', error));
}

// Initial fetch
fetchTeachers();

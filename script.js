// Load saved background color
document.body.style.backgroundColor = localStorage.getItem('bgColor') || 'lightblue';

// Change and save background color
function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
}

// Mood Diary functionality
const questions = [
    "Como está sendo seu dia?",
    "Quer me contar sobre os acontecimentos recentes?",
    "Me diga, o que está pensando?"
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayRandomQuestion() {
    const questionElement = document.getElementById('mood-question');
    questionElement.textContent = getRandomQuestion();
}

displayRandomQuestion(); // Display initial question

function saveMoodNote() {
    const note = document.getElementById('mood-note').value;
    let notes = JSON.parse(localStorage.getItem('moodNotes') || '[]');
    notes.push(note);
    localStorage.setItem('moodNotes', JSON.stringify(notes));
    alert('Anotação salva!');
    document.getElementById('mood-note').value = '';
}

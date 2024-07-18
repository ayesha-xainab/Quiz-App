// Quiz Creator
class CQuiz {
    constructor(que, o1, o2, o3, o4, ans, d) {
        this.question = que;
        this.opt1 = o1;
        this.opt2 = o2;
        this.opt3 = o3;
        this.opt4 = o4;
        this.answer = ans;
        this.asked = d;
    }
}

// Question 1
var q1 = new CQuiz(
    'What is the chemical symbol for gold?',
    'Au',
    'Ag',
    'Al',
    'Fe',
    1, // Answer is option 1 (Au)
    0   // Default value for asked 
);

// Question 2
var q2 = new CQuiz(
    'Which of the following elements is a noble gas?',
    'Oxygen (O)',
    'Helium (He)',
    'Nitrogen (N)',
    'Carbon (C)',
    2, // Answer is option 2 (Helium)
    0  
);

// Question 3
var q3 = new CQuiz(
    'What is the atomic number of carbon?',
    '5',
    '12',
    '6',
    '8',
    3, // Answer is option 3 (6)
    0   
);

// Question 4
var q4 = new CQuiz(
    'What type of bond shares electrons between atoms?',
    'Ionic bond',
    'Metallic bond',
    'Covalent bond',
    'Hydrogen bond',
    3, // Answer is option 3 (Covalent bond)
    0   
);

// Question 5
var q5 = new CQuiz(
    'What is the chemical formula for water?',
    'HO',
    'CO₂',
    'H₂O',
    'H₂O₂',
    3, // Answer is option 3 (H₂O)
    0  
);

// Question 6
var q6 = new CQuiz(
    'Which of the following is not a state of matter?',
    'Solid',
    'Gas',
    'Liquid',
    'Plasma',
    4, // Answer is option 4 (Plasma)
    0  
);

// Question 7
var q7 = new CQuiz(
    'What is the pH value of a neutral substance?',
    '0',
    '7',
    '14',
    '-1',
    2, // Answer is option 2 (7)
    0  
);

// Question 8
var q8 = new CQuiz(
    'How many electrons can K-shell of an atom hold?',
    '4 electrons',
    '6 electrons',
    '2 electrons',
    '8 electrons',
    3, // Answer is option 3 (2 electrons)
    0  
);

// Question 9
var q9 = new CQuiz(
    'What is the chemical symbol for sodium?',
    'S',
    'Na',
    'N',
    'So',
    2, // Answer is option 2 (Na)
    0   
);

// Question 10
var q10 = new CQuiz(
    'Which gas is released during photosynthesis?',
    'Oxygen',
    'Carbon dioxide',
    'Nitrogen',
    'Hydrogen',
    1, // Answer is option 1 (Oxygen)
    0  
);

// Array of all questions
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

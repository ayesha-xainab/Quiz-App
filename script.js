var theQuiz = document.getElementById('theQuiz');
var pass = document.getElementById('pass');
var submitBtn = document.getElementById('submit');
var err = document.getElementById('err');
var errH = document.getElementById('errH');
var i;

// Adding event listener for the start quiz button
document.getElementById('start-quiz-btn').addEventListener('click', function() 
{
    document.getElementById('welcome-screen').style.display = 'none';  
	// Show the quiz container and initialize the quiz
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
});

function startQuiz() {
	theQuiz.style.display = 'block'; // show the quiz page
	randomQ();   // trigger first 'random' question
}

var queDone = 0;   // question asked
var userAns = [];    // user's answers
var queDoneArr = [];   // storing which question is asked

// showing levels (dots on top)

steps(totQ.length); 
function steps() {
	var mainStepDiv = document.getElementById('steps');
	for (var i = 0; i <10; i++) {
		var span = document.createElement('span');
		span.className = 'step';
		mainStepDiv.appendChild(span);
	}
}

var p = document.getElementById('que'); // the question statement
//Answer options
var O1 = document.getElementById('opt1'); 
var O2 = document.getElementById('opt2'); 
var O3 = document.getElementById('opt3'); 
var O4 = document.getElementById('opt4'); 

// generates and places random questions
function randomQ() {
    var x;
    do {
        x = Math.floor(Math.random() * totQ.length); 
    } while (totQ[x].asked === 1);

    totQ[x].asked = 1; 
    queDoneArr.unshift(x); 
    queDone = ++queDone; 

    p.innerHTML = totQ[x].question; 
    // write options
    O1.nextElementSibling.innerHTML = totQ[x].opt1; 
    O2.nextElementSibling.innerHTML = totQ[x].opt2; 
    O3.nextElementSibling.innerHTML = totQ[x].opt3; 
    O4.nextElementSibling.innerHTML = totQ[x].opt4; 

	if (!thisAsked) {
		// If random number is already asked and this didn't become true then fire random question again
		if (queDone != totQ.length)
		randomQ(); // If not met the total length re-through random question
	}
}

function next() {
    if (!validateForm()) return false; // Validate if an option is selected

    topping(queDone); // Update step indicator

    if (queDone == 10) {
        // If all questions are answered
        theQuiz.style.display = 'none';
        document.getElementById('theResult').style.display = 'block';
        calcResult(); // Calculate and display result
        return false;
    } else {
        randomQ(); // Otherwise, show next random question
    }
}


var chkBox = document.getElementsByClassName('custom-control-input'); // targetting all checkboxes

// deals with validation of radio options and adds to the user's answer Array
function validateForm() {
	var valid = false;
	for (var i = 0; i < chkBox.length; i++) {
		if (chkBox[i].checked) {
			valid = true;
			userAns.unshift(chkBox[i].value); // if 'checked' store user's answer
			chkBox[i].checked = false;
			nextBtn.setAttribute('disabled', 'disabled'); // otherwise, disbale button for next question
			break;
		}
	}
	if (!valid) {
		// if no option selected
		alert('Please Select Any Option...');
		nextBtn.setAttribute('disabled', 'disabled');
	}
	if (valid)
       document.getElementsByClassName('step')[queDone - 1].className += ' finish';
	   return valid; // return the valid status
}

// Enable NEXT button if option is checked
var nextBtn = document.getElementById('next-button');
function enableBtn(i) {
	if (i.checked) nextBtn.removeAttribute('disabled');
	else nextBtn.setAttribute('disabled', 'disabled');
}

// dynamic next button's text
function topping(n) {
    if (n == totQ.length) {
        document.getElementById('next-button').innerHTML = 'Submit';
        calcResult();
    } else {
        document.getElementById('next-button').innerHTML = 'Next Question';
    }
    fixStepIndicator(n);
}

// Showing the active level from the total
function fixStepIndicator(n) {
    var i,
        x = document.getElementsByClassName('step');
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', ''); // removes the "active" class of all levels
	}
    x[n - 1].className += ' active'; // adds the "active" class on the current level
}

// calculates result
function calcResult() {
	var ca = 0; 
	for (var i = 0; i < totQ.length; i++) {
		var a = queDoneArr[i]; 
		if (userAns[i] == totQ[a].answer) { // if user's answer matches with array's question's answer
			ca = ca + 1; // increase correct answers' counter
		}
	}
	// calculates percentage
	var percentage = Math.round((ca / 9) * 100);// (dividing by 9 because everytime 9/10 questions are displayed)
	showResult(percentage);
}

// Result part

var resultCircle = document.getElementById('resultCircle');
var resultFb = document.getElementById('resultFb');
var correctAns = document.getElementById('correctAns');
var quizCompleted = false;
var RColor;
function showResult(percentage) {
	if (percentage == 100) {
		RColor = 'pink';
		resultFb.innerHTML = 'Wohoo...Great! You have passed.';
	} else if (percentage >= 80) {
		RColor = 'green';
		resultFb.innerHTML = 'Congrats! You have passed.';
	} else if (percentage >= 65) {
		RColor = 'blue';
		resultFb.innerHTML = 'Good Effort, You have passed.';
	} else if (percentage >= 50) {
		RColor = 'orange';
		resultFb.innerHTML = 'You have passed!';
	} else {
		RColor = 'red';
		resultFb.innerHTML = 'Oh No! Try Again';
	}

	localStorage.setItem('percentage', percentage);
	quizCompleted = true;

	var path = '<svg viewbox="0 0 36 36" class="circular-chart ' + RColor +'"> \
         <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> \
         <path class="circle" stroke-dasharray="' + percentage + ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> \
         <text x="19" y="21" id="percentage">' + percentage + '%</text> </svg>';
	 resultCircle.innerHTML = path;
}

// Retaking Quiz
function retakeQuiz() 
{
	localStorage.removeItem('percentage');
	localStorage.removeItem('ca');
	location.reload(true); 
}
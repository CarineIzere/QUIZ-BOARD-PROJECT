function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var myQuestions = [
	{
		question1: "Can you access Cookie using javascript?",
		answers: {
			a: 'yes',
			b: 'no',
			
		},
		correctAnswer: 'a'
	},
	{
		question2: "Which of the following is the correct syntax to redirect a url using JavaScript?",
		answers: {
			a: 'document.location=http://www.newlocation.com;',
			b: 'browser.location=http://www.newlocation.com;',
			c: 'navigator.location=http://www.newlocation.com;',
			d: 'window.location=http://www.newlocation.com.',
		},
		correctAnswer: 'd'
	},
	{
		question3: "Which built-in method removes the last element from an array and returns that element?",
		answers: {
			a: 'last();',
			b: 'get();',
			c: 'pop();',
			d: 'None of the above.',
		},
		correctAnswer: 'c'
	},
	{
		question4: "Which built-in method returns the characters in a string beginning at the specified location?",
		answers: {
			a: 'substr();',
			b: 'getSubstring();',
			c: 'slice();',
			d: 'None of the above.',
			
		},
		correctAnswer: 'a'
	},
	{
		question5: "Which of the following function of Boolean object returns the primitive value of the Boolean object?<",
		answers: {
			a: 'toSource();',
			b: 'valueOf();',
			c: 'toString();',
			d: 'None of the above.',
		},
		correctAnswer: 'b'
	},
	{
		question6: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?<",
		answers: {
			a: 'concat();',
			b: 'match();',
			c: 'toString();',
			d: 'None of the above.',
		},
		correctAnswer: 'd'
	},
	{
		question7: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <em>big</em> tag?<",
		answers: {
			a: 'anchor();',
			b: 'big();',
			c: 'blink();',
			d: 'italics().',
		},
		correctAnswer: 'b'
	},
	{
		question8: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <em>strike</em> tag?<",
		answers: {
			a: 'sup();',
			b: 'small();',
			c: 'strike();',
			d: 'sub().e.',
		},
		correctAnswer: 'c'
	},
	{
		question9: " Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?<",
		answers: {
			a: 'push();',
			b: 'join();',
			c: 'pop();',
			d: 'map()',
		},
		correctAnswer: 'd'
	},
	{
		question10: "Which of the following function of Array object sorts the elements of an array?<",
		answers: {
			a: 'toSource();',
			b: 'sort();',
			c: 'toString();',
			d: 'unshift().',
		},
		correctAnswer: 'b'
	}
];
function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
showQuestions(questions, quizContainer);
function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
	var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
	var submitButton = document.getElementById('submit');
	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
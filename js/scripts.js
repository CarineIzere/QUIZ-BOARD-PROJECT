$(document).ready(function() {
    $('form').submit(function getResults(event) {
		event.preventDefault();
        var q1 = parseInt($('q1').val());
		var q2 = parseInt($('q2').val());
		var q3 = parseInt($('q3').val());
		var q4 = parseInt($('q4').val());
		var q5 = parseInt($('q5').val());
		var q6 = parseInt($('q6').val());
		var q7 = parseInt($('q7').val());
		var q8 = parseInt($('q8').val());
		var q9 = parseInt($('q9').val());
		var q10 = parseInt($('q10').val());
		var sum = add(q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9+ q10);
		$('#results').text(sum);
		return results;
    })
});

// BUSINESS LOGIC

function add(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) {
    var results = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9+ q10;

    return results;
}
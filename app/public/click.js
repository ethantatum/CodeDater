//$(document).ready(function() {
    $('#submitSurvey').on(`click`, function(event) {
        event.preventDefault();

        let userResponse = {
            name: $(`#name`).val().trim(),
            photo: $(`#photo`).val().trim(),
            scores: [
                parseInt($(`#q1`).val()),
                parseInt($(`#q2`).val()),
                parseInt($(`#q3`).val()),
                parseInt($(`#q4`).val()),
                parseInt($(`#q5`).val()),
                parseInt($(`#q6`).val()),
                parseInt($(`#q7`).val()),
                parseInt($(`#q8`).val()),
                parseInt($(`#q9`).val()),
                parseInt($(`#q10`).val())
            ]
        }

        console.log(JSON.stringify(userResponse));

        $.post('/api/friends', userResponse)
        .then(function(res) {
            console.log(res);
        });


    });

  





//}); // End of document ready function

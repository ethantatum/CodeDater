$(document).ready(function() {
    $('#submitSurvey').on(`click`, function(event) {
        event.preventDefault();

        let userResponse = {
            name: $(`#name`).val().trim(),
            photo: $(`#photo`).val().trim(),
            scores: [
                $(`#q1`).val(),
                $(`#q2`).val(),
                $(`#q3`).val(),
                $(`#q4`).val(),
                $(`#q5`).val(),
                $(`#q6`).val(),
                $(`#q7`).val(),
                $(`#q8`).val(),
                $(`#q9`).val(),
                $(`#q10`).val()
            ]
        }

        console.log(JSON.stringify(userResponse));

        $.post('/api/friends', userResponse)
        .then(function(data) {
            console.log(data);
        });


    });

  





}); // End of document ready function

document.addEventListener('DOMContentLoaded', () => {
    const ques = document.getElementById('question');
    const input = document.getElementById('text');
    const scoreElement = document.querySelector('.score');
    const btn = document.getElementById('btn');
    let score = parseInt(localStorage.getItem('score')) || 0;
    let Fno, Sno;

    // Update the score display
    scoreElement.textContent = score;
   let check = true;
    // Function to generate new numbers and update the question
    function generateQuestion(){
    if(check){ 
         Fno = Math.floor(Math.random() * 10);
        Sno = Math.floor(Math.random() * 10);
        ques.innerHTML = `What is the multiplication of ${Fno} x ${Sno}?`;
        input.value = ''; }// Clear the input field

        else{
        return;
    }
    }
    // Initial question generation
    generateQuestion();
    // Event listener for the submit button
    btn.addEventListener('click', function() {
        if (parseInt(input.value) === Fno * Sno) {
            scoreElement.textContent = ++score;
        } 
        else if (input.value == ''){
            check = false;
        }
        else{
            scoreElement.textContent = --score;
        }

        // Store the updated score in local storage
        localStorage.setItem('score', score);

        // Generate a new question
        generateQuestion();
    });
});

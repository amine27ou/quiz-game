let containers = document.querySelectorAll(".container");
let score = 0;
containers.forEach(function(container){
    let answers = container.querySelectorAll(".answer");
    let correct = container.querySelector(".correct");

    answers.forEach(function(answer){
        answer.addEventListener("click", function () {
            answer.classList.add("active");
            correct.classList.add("active");
            if(answer.classList.contains("correct")){
                score++;
                console.log(score);
                document.querySelector(".score-nbr").textContent=score
            }
        });
    });
    
});

let nextButtons = document.querySelectorAll(".next");

nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let currentQuestion = document.querySelector(".container.active");
        let nextQuestion = currentQuestion.nextElementSibling;
        currentQuestion.classList.remove("active");
        nextQuestion.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const quizQuestions = [
        {
            id: 1,
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlinks Text Mark Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },

        {
            id: 2,
            question: "Which language is used to style web pages?",
            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            answer: "CSS"
        },

        {
            id: 3,
            question: "Which language is used to add interactivity to a webpage?",
            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],
            answer: "JavaScript"
        },

        {
            id: 4,
            question: "Which symbol is used for comments in JavaScript?",
            options: [
                "//",
                "##",
                "<!-- -->",
                "**"
            ],
            answer: "//"
        },

        {
            id: 5,
            question: "Which keyword is used to declare a variable that can be reassigned?",
            options: [
                "const",
                "let",
                "static",
                "define"
            ],
            answer: "let"
        }
    ];

    const startQuizBtn = document.getElementById("startQuizBtn");

    const questions = document.getElementById("questions");

    const options = document.getElementById("options");

    const nextBtn = document.getElementById("nextBtn")

    const resultPage = document.getElementById("resultPage")
     
    let currentQuestionIndex = 0;
    let marks = 0 ;
    let totalMarks = quizQuestions.length; 

    startQuizBtn.addEventListener("click", () => {

        startQuizBtn.classList.add("hidden");

        displayQuestions();

    });


    function displayQuestions() {

        options.classList.remove("hidden");
        questions.classList.remove("hidden");
        nextBtn.classList.remove("hidden")

        const currentQuestion = quizQuestions[currentQuestionIndex];

        questions.textContent = currentQuestion.question;

        options.innerHTML = ""

        currentQuestion.options.forEach(option => {

            const li = document.createElement("li");

            li.textContent = option;


            options.appendChild(li);

            li.addEventListener("click", () => {

                li.classList.add("selected")
                 
                if(option === currentQuestion.answer){
                    marks++;
                    console.log(" Correct Answer ")
                } else {
                    console.log(" Wrong Answer ")
                }
            })

        });

        
    }
    nextBtn.addEventListener("click", () => {
        
        if(currentQuestionIndex < quizQuestions.length -1 ){
            currentQuestionIndex++;
            displayQuestions();
            console.log(marks)

        } else {
            console.log("NO more questions restart quiz")
           
            
        options.classList.add("hidden");
        questions.classList.add("hidden");
        nextBtn.classList.add("hidden")
           
        const li = document.createElement("div")

        li.innerHTML= `
            <h2> Result </h2>
            <p> ${marks} out of ${totalMarks}</p>
            <button> Restart Quiz </button>


        `
        
        const restartBtn = li.querySelector("button")

        restartBtn.addEventListener("click", () => {
            li.remove()
            startQuizBtn.classList.remove("hidden")
            currentQuestionIndex=0;
            marks=0;
        })

        resultPage.appendChild(li)


        }



    } )



});
//question number; increase if more questions are added
const qNum ='25';

// Stores all questions and answers in quizQA (Questions & Answers).
const quizQA = [
    { //1
        question: "You have an eye for spotting errors in a project that others have missed. \n(Question 1/"+qNum+")",
        answer: "QA",
    },
    {  //2
        question: "People often come to you to confirm details about what the project should be. \n(Question 2/"+qNum+")",
        answer: "ProductOwner",
        
    },
    {  //3
        question: "You are not afraid to voice your opinion and concerns. \n(Question 3/"+qNum+")",
        answer: "QA",
    },
    {   //4
        question: "You offer creative new perspectives on a project. \n(Question 4/"+qNum+")",
        answer: "QA",
    },
    {  //5
        question:  "You are detailed oriented. \n(Question 5/"+qNum+")",
        answer: "QA",
    },
   
    {  //6
        question: "Your friends and family would consider you an extrovert. \n(Question 6/"+qNum+")",
        answer: "ProductOwner",
    },
    {  //7
        question: "You often reach out to absent members in a group to let them know that their absence is noticed. \n(Question 7/"+qNum+")",
        answer: "ScrumMaster",
    },
    {  //8
        question: "People often rely on you to ensure that the progress of the group is going smoothly. \n(Question 8/"+qNum+")",
        answer: "ScrumMaster",
    },
    {   //9
        question: "You like to look at the big picture. \n(Question 9/"+qNum+")",
        answer: "ScrumMaster",
    },
    {  //10
        question: "You are well organized. \n(Question 10/"+qNum+")",
        answer: "ScrumMaster",
    },
    {  //11
        question: "You often mentor and teach others new skills. \n(Question 11/"+qNum+")",
        answer: "TechLead",
    },
    {  //12
        question: "People often come to you if they are having difficulty with their part of the project. \n(Question 12/"+qNum+")",
        answer: "TechLead",
    },
    {  //13
        question: "You know how to evenly distribute work fairly among the group. \n(Question 13/"+qNum+")",
        answer: "TechLead",
    },
    {  //14
        question: "People often confide in you when they need help. \n(Question 14/"+qNum+")",
        answer: "TechLead",
    },
    {  //15
        question: "You are often the most hands-on person in a project. \n(Question 15/"+qNum+")",
        answer: "TechChaser",
    },
    {  //16
        question: "You enjoy being creative and taking on challenges. \n(Question 16/"+qNum+")",
        answer: "TechChaser",
    },
    {  //17
        question: "You are often the first to find a solution while working on a project. \n(Question 17/"+qNum+")",
        answer: "TechChaser",
    },
    {  //18 new
        question: "You like to ask the question 'what..if?'. \n(Question 18/"+qNum+")",
        answer: "ProductOwner",
    },
    {  //19 new 
        question: "You consider yourself to be very organized. \n(Question 19/"+qNum+")",
        answer: "ProductOwner",
    },
    {  //20 new
        question: "You have somewhat of a business mind and know how to sell. \n(Question 20/"+qNum+")",
        answer: "ProductOwner",
    },
    {  //21 new
        question: "If there is a disagreement amongst the group, you are often the one to delegate. \n(Question 21/"+qNum+")",
        answer: "ScrumMaster",
    },
    {  //22 new
        question: "You like collaborating with others to find a solution. \n(Question 22/"+qNum+")",
        answer: "TechChaser",
    },
    {  //23 new
        question: "You like trying new things. \n(Question 23/"+qNum+")",
        answer: "TechChaser",
    },
    {  //24 new
        question:  "Are you good with highlighting people's mistakes? \n(Question 24/"+qNum+")",
        answer: "QA",
    },
    { // 25 new
        question:  "Are you willing to make the technical decisions for the team? \n(Question 25/"+qNum+")",
        answer: "TechLead",
    },
    {  // Tiebreaker
        question: "Which of these title(s) do you resonate with the most? \n(Tiebreaker)",
        answer: "tiebreaker",
    },
];
// Stores the choices separate. Helps to reduce redundant code
const quizChoices =
{
    a:  "Strongly Agree",
    b:  "Agree",
    c:  "Neutral",
    d:  "Disagree",
    e:  "Strongly Disagree",
};
const tieBreakerChoices =
{
    a:  "Keeper of the Vision",
    b:  "The Hall Monitor",
    c:  "The Doomsayer",
    d:  "First among equals",
    e:  "The Inventor",
};
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questions = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuizQuestion = 0
var points = Array(0, 0, 0, 0, 0)
let highestIndex = 0
let tieBreakerCheck = false

loadQuiz() // Driver, Loads the first question
function loadQuiz(){
    deselectAnwsers() // Deselects answer for next question. Prevents accidently clicking the submit button twice.
    const currentQuestion = quizQA[currentQuizQuestion]
    const currentQuizData = quizChoices
    questions.innerText = currentQuestion.question
    //for testing to display points during test
    //+"("+points[0]+","+points[1]+","+points[2]+","+points[3]+","+points[4]+")"
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function loadTieBreaker(){
    deselectAnwsers() // Deselects answer for next question. Prevents accidently clicking the submit button twice.
    const currentQuestion = quizQA[currentQuizQuestion]
    const currentQuizData = tieBreakerChoices
    questions.innerText = currentQuestion.question

    var tieQuestions = Array(0, 0, 0, 0, 0);
    for(i = 0; i < 5; i++) {// Single Highest Role
        if(points[i] > points[highestIndex]){ // Compares roles to see which is the highest. 
            highestIndex = i;
         }
    }
    for(i=0; i < 5; i++){ // Deals with multiple roles being the same value
        if(points[i] == points[highestIndex]){
            tieQuestions[i]=1
        }
    }

    if (tieQuestions[0]==1)
    {
        a_text.innerText = currentQuizData.a
    }
    else
    {
        document.getElementById("a").hidden = true
        a_text.innerText = ""
    }
    if (tieQuestions[1]==1)
    {
        b_text.innerText = currentQuizData.b
    }
    else
    {
        document.getElementById("b").hidden = true
        b_text.innerText = ""
    }
    if (tieQuestions[2]==1)
    {
        c_text.innerText = currentQuizData.c
    }
    else
    {
        document.getElementById("c").hidden = true
        c_text.innerText = ""
    }
    if (tieQuestions[3]==1)
    {
        d_text.innerText = currentQuizData.d
    }
    else
    {
        document.getElementById("d").hidden = true
        d_text.innerText = ""
    }
    if (tieQuestions[4]==1)
    {
        e_text.innerText = currentQuizData.e
    }
    else
    {
        document.getElementById("e").hidden = true
        e_text.innerText = ""
    }
}
function deselectAnwsers(){
  answers.forEach(item => item.checked = false)
  }

function getSelected(){ // Searches and returns selected answer. 
    let answer;
    answers.forEach(items => {
        if(items.checked)
            answer = items.value
    })
    return answer
}


submitBtn.addEventListener('click', () =>{ // Looks for user submitting answer. 
    
    var roles = new Array("Product Owner", "Scrum Master", "QA", "Tech Lead", "Tech Chaser")
    const answer = getSelected()
    if(answer){
        if(quizQA[currentQuizQuestion].answer === "ProductOwner")
            points[0] += parseInt(answer)
        else if (quizQA[currentQuizQuestion].answer === "ScrumMaster")
            points[1] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "QA")
            points[2] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "TechLead")
            points[3] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "TechChaser")
            points[4] += parseInt(answer)
        else if(quizQA[currentQuizQuestion].answer === "tiebreaker")
        {
            //break tie
            
            if(parseInt(answer) === 5)
            {
                points[0] += 1
            }
            if(parseInt(answer) === 4)
            {
                points[1] += 1
            }
            if(parseInt(answer) === 3)
            {
                points[2] += 1
            }
            if(parseInt(answer) === 2)
            {
                points[3] += 1
            }
            if(parseInt(answer) === 1)
            {
                points[4] += 1
            }
            
        }
        
       currentQuizQuestion++
    
    if(currentQuizQuestion < quizQA.length-1){
        loadQuiz()
    } 
    else {
        if(!tieBreakerCheck){
            tieBreakerCheck = true;
            for(i = 1; i < 5; i++) {// Single Highest Role
                if(points[i] > points[highestIndex]){ // Compares roles to see which is the highest. 
                    highestIndex = i;
                 }
            }
            for(i=0; i < 5; i++){ // Deals with multiple roles being the same value; appended: this shouldn't be a problem anymore with the tiebreaker 
                if(points[i] == points[highestIndex] && highestIndex !=i){
                    loadTieBreaker()
                    tieBreakerCheck = false;
                    break;
                }
            }
        }
    }
    if(tieBreakerCheck){
        for(i = 1; i < 5; i++) {// Single Highest Role
            if(points[i] > points[highestIndex]){ // Compares roles to see which is the highest. 
                highestIndex = i;
             }
        }
        quiz.innerHTML= "Result: Your best suited role is " + roles[highestIndex] 
        var finalRole=roles[highestIndex] 

        if (finalRole==="Product Owner") 
        {
            var img = document.createElement("img");
            img.src = "js/ProductOwner.jpg";
            quiz.appendChild(img);

            quiz.innerHTML += "<br/>You are the keeper of the vision! You are the authority on the product details and know what shots to take!"

           

        }
        else if (finalRole==="Scrum Master") 
        {
            var img = document.createElement("img");
            img.src = "js/ScrumMaster.jpg";
            quiz.appendChild(img);

            quiz.innerHTML += "<br/>You are the Hall Monitor! You help the project stay on track and help call the shots!"
        }
        else if (finalRole==="QA") 
        {
            var img = document.createElement("img");
            img.src = "js/QA.jpg";
            quiz.appendChild(img);

            quiz.innerHTML += "<br/>You are the Doomsayer! You have a keen eye for details and help spot bugs within a project!"
        }
        else if (finalRole==="Tech Lead") 
        {
            var img = document.createElement("img");
            img.src = "js/TechLead.jpg";
            quiz.appendChild(img);

            quiz.innerHTML += "<br/>You are the Tech Master! Your tech knowledge is incredibly valuable to not only the project but also to others who need mentoring!"
        }
        else if (finalRole==="Tech Chaser") 
        {
            var img = document.createElement("img");
            img.src = "js/TechChaser.jpg";
            quiz.appendChild(img);

            quiz.innerHTML += "<br/>You are the Inventor! You are creative and always looking for knowledge!"
        }

        quiz.innerHTML+="<br><br>Feedback Email: scrumassignerfeedback@gmail.com "
        let btn = document.createElement("button");
        btn.innerHTML = "Copy result";
        //move to center
        btn.className="share";
        btn.style.marginTop = "-110px";

        btn.onclick = function () {
            const textRange = document.createRange();
            var range = document.getElementById('quiz');
            var node = range.childNodes[0]; // Getting the properties of the div tag
            var text = range.childNodes[0].length; // Creating range for only the first line of text within the div tag
            textRange.setStart(node,0) // setStart Range for beginning of the text line
            textRange.setEnd(node,text); // setEnd Range is set to the lenght of the first line so that it doesn't copy lines after it
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(textRange);
            try {
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                alert("Successfully copied results!");
            } catch(err) {
                alert("Unable to copy results.");
            }
        };
        document.body.appendChild(btn);
        quiz.style.height = "700px";
    
    }}})
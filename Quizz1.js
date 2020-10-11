
const questions = [
    {
      
      
       question: "What does CPU stand for?",
       correct_answer: "3",
      
        choice1: "Central Process Unit",
        choice2: "Computer Personal Unit",
        choice3:"Central Processing Unit",
        choice4:"Central Processor Unit",

      
    },
    {
      
      
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: '4',
      choice1:"Static", 
      choice2:"Private", 
      choice3:"Public",
      choice4:"Final"
    },
    {
      
      
      question: "Inside which HTML element do we put the JavaScript?",
      correct_answer: '4',
      choice1: "js",
      choice2:"<javascrip>",
      choice3:"<scripting>",
      choice4:"<script>"
    },
   
    {
    
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: '1',
      choice1: ".svg",
      choice2:".png", 
      choice3:".jpeg",
      choice4: ".gif",
    },
    {
      question: "In web design, what does CSS stand for?",
      correct_answer: '3',
     
      choice1:"Counter Strike: Source",
      choice2: "Corrective Style Sheet",
      choice3:"Computer Style Sheet",
      choice4: "Cascading Style Sheet"
      
    },
  
  ];




const question = document.getElementById ('question');
const choices = Array.from(document.getElementsByClassName('choice-text'))

let currentQuestion = {};
let QuizOver = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let MaxQuestions = questions.length


function startGame(){
 quetionCounter = 0;
 score =0;
 availableQuestions = [...questions]


 getnewQuestion();

}

function getnewQuestion(){
    if (availableQuestions.length ===0 || questionCounter>= MaxQuestions ){
     return window.location.assign ("*/end.html*")   
    }  
 questionCounter ++;
 questionIndex = Math.floor(Math.random()* availableQuestions.length) 
 currentQuestion = availableQuestions[questionIndex]
 console.log(currentQuestion)
 question.innerText = currentQuestion.question;
 choices.forEach(choice=> {
   const number = choice.dataset['number'] // we take the number from here => <p class = "choice-text" data-number= "1"> choice 1</p>
   
    choice.innerText = currentQuestion["choice" + number];

 })
    
 availableQuestions.splice(questionIndex, 1);   
 
 QuizOver = true

};
choices.forEach(choice => {
 
    choice.addEventListener("click",e => {
    
      if(!QuizOver) {
        return;
      }
      QuizOver = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number']
     
      const Checkclass = selectedAnswer == currentQuestion.correct_answer? 'correct' : 'incorrect';

      selectedChoice.parentElement.classList.add(Checkclass)
      setTimeout(()=>{
      selectedChoice.parentElement.classList.remove(Checkclass)
     getnewQuestion()
      },1000);//wait for 1000ms or 1s


    })



})

    
    
 


startGame()


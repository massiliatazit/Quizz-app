
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processing Unit",
        "Central Processor Unit",

      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      answers: ["Static", "Private", "Public","Final"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      answers: ["False","True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      answers: ["False","True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      answers: [".svg",".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      answers: [
        "Ice Cream Sandwich",
        "Nougat",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      answers: ["120", "160","140", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      answers: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      answers: ["Python","Java", "C", "Jakarta"],
    },
  ];


  
  
  let quizzOver = false ;
  let currentquestionindex =0;
  let questionNumber = 1;
  let score = 0;
  let questionCounter = 0;
  
  function showquestion (){
    
    let  questionText = document.querySelector('.questionText')
    
    questionText.innerText = questions[currentquestionindex].question
    let questionNumber = document.querySelector('.questionNumber')
    
    questionNumber.innerHTML = questions.length
  


   }

  showquestion()


  function Nextquestion(){
    
    let nextButton = document.querySelector('.nextquestionButton')
    let choice = document.querySelectorAll('.choice')
    questionNumber.innerHTML = "Question"+ (questionCounter+1) + "of " +questions.length
    currentquestionindex++;
    questionNumber.innerHTML =  questionNumber-1;
    nextButton.classList.add('hidden')
    for (i=0;i<choice.length;i++){

      choice[i].classList.remove('wrong')
      choice[i].classList.remove('correct')

    }


    showquestion()
     
      
    
}

function showanswers(){

 let choice = document.querySelectorAll('.choice-text')
 for(let i=0;i<questions[currentquestionindex].answers.length;i++){
   
   choice[i].innerHTML = questions[currentquestionindex].answers[i]
    
   }
  
}

showanswers()


function selectAnswer(){
    let currentTarget = event.target.innerText;

    let currentDiv = event.target;
    let current_choice = document.querySelectorAll(".choice-text")
    let currentTargetSplit = currentTarget.split("\n");
    let currentTargetText = currentTargetSplit.pop(currentTargetSplit.length - 1);
   //console.log(current_choice.innerText)
   let nextButton = document.querySelector('.nextquestionButton')
    let correctAnswer = questions[currentquestionindex].correct_answer
    
    //console.log(correctAnswer)
     
      if (currentTargetText === correctAnswer){
        
        currentDiv.classList.add("correct");
        nextButton.classList.add('hidden')
  
        score+=1
       }else{

        currentDiv.classList.add("wrong");  
       } 
  
       console.log("Current Score is: " + score);
      
 }

 function nextanswer(){
  
  let choice = document.querySelectorAll('.choice')

  console.log(choice.innerText)




 }
 nextanswer()

  window.onload = function () {

  


   
  

  }

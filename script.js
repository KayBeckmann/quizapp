function initialisation(){
  renderQuestion(0)
}

function renderFooter(question){
  document.getElementById("qustionnumber").innerHTML = question
  document.getElementById("qustionstotal").innerHTML = questions.length
}

function renderQuestion(id){
  let card = document.getElementById("cardbody")

  renderFooter(id + 1)
  renderButton(id + 1)

  card.innerHTML = /* html */`
  <h5 class="card-title">${questions[id].qusestion}</h5>
  ${renderAnswers(id)}
  `
}

function renderAnswers(id){
  let answers = "";

  for(let i=0; i<questions[id].answers.length;i++){
    answers += /* html */`
    <div class="card quiz-answer mb-2">
      <div class="card-body quiz-answer" onclick="answer(${id}, ${i})">
        ${questions[id].answers[i]}
      </div>
    </div>
    `
  }

  return answers;
}

function answer(questionID, answerID){
  let answer = questions[questionID].right_answer;

  if(answer == answerID){
    console.log("Richtig geraten!!!");
    renderQuestion(questionID +1);
  }else{
    console.log("Leider falsch, versuche es erneut");
  }
}

function renderButton(id){
  let button = document.getElementById("button");
console.log(id);
  if(id < questions.length){
    // button.innerHTML = /* html */ `
    //   <button class="btn btn-primary" onclick="${renderQuestion(id)}">Nächste Frage</button>
    //   `
    console.log(id);
  }else{}
}
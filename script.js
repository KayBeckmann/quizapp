let points = 0;

function initialisation(){
  points = 0;
  document.getElementById("footer").classList.remove("d-none");
  renderQuestion(0);
}

function renderFooter(question){
  document.getElementById("qustionnumber").innerHTML = question;
  document.getElementById("qustionstotal").innerHTML = questions.length;
}

function renderQuestion(id){
  let card = document.getElementById("cardbody");

  renderFooter(id + 1);
  renderButton(id + 1)

  card.innerHTML = /* html */`
  <h5 class="card-title">${questions[id].qusestion}</h5>
  ${renderAnswers(id)}
  `;
}

function renderAnswers(id){
  let answers = "";

  for(let i=0; i<questions[id].answers.length;i++){
    answers += /* html */`
    <div class="card quiz-answer mb-2">
      <div class="card-body quiz-answer" id="${i}" onclick="answer(${id}, ${i})">
        ${questions[id].answers[i]}
      </div>
    </div>
    `;
  }

  return answers;
}

function answer(questionID, answerID){
  let answer = questions[questionID].right_answer;
  let answerButton = document.getElementById(answerID)

  if(answer != answerID){
    answerButton.classList.add("bg-danger");
    points--; 
  }
    
  document.getElementById(answer).classList.add("bg-success");
  document.getElementById("btn-next-question").disabled = false;
  points++;
}

function renderButton(id){
  let button = document.getElementById("button");

  // button.innerHTML = `<button class="btn btn-primary d-none" id="btn-next-question">Click Me</button>`;
  button.innerHTML = buttonHTML(id);
}

function buttonHTML(id){
  let button="";

  if(id < questions.length){
    button = /* html */ `
      <button class="btn btn-primary" id="btn-next-question" disabled onclick="renderQuestion(${id})">Nächste Frage</button>
      `;
  }else{
    button = /* html */ `
      <button class="btn btn-primary" id="btn-next-question" disabled onclick="renderFinish()">Auswertung</button>
      `;
  }

  return button;
}

function renderFinish(){
  let card = document.getElementById("cardbody");
  let button = document.getElementById("button");
  document.getElementById("footer").classList.add("d-none");

  card.innerHTML = /* html */ `
  <h1>Du hast ${points} von ${questions.length} möglichen Punkten</h1>
  <h2>Das sind ${Math.round(points / questions.length * 100)}%</h2>
  `

  button.innerHTML = /* html */`
  <button class="btn btn-primary" onclick="initialisation()">Restart</button>
  `
}
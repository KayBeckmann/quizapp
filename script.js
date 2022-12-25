function initialisation(){
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

  if(answer == answerID){
    answerButton.classList.add("bg-success");
    document.getElementById("btn-next-question").classList.remove("d-none");
  }else{
    answerButton.classList.add("bg-danger")
  }
}

function renderButton(id){
  let button = document.getElementById("button");

  button.innerHTML = `<button class="btn btn-primary">Click Me</button>`;
  // button.innerHTML = buttonHTML(id);
}

function buttonHTML(id){
  let button="";

  if(id < questions.length){
    button = /* html */ `
      <button class="btn btn-primary d-none" id="btn-next-question" onclick="${renderQuestion(id)}">Nächste Frage</button>
      `;
      alert(id);
  }else{
    button = /* html */ `
      <button class="btn btn-primary d-none" id="btn-next-question" onclick="">Auswertung</button>
      `;
  }

  return button;
}
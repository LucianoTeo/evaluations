let API_KEY = null;
let company = null;
let role_title = undefined;

const url = "https://api-cade.herokuapp.com" || "http://localhost:3333";

const questions = [
  {
    id: 0,
    question: "O que achou da descrição da vaga?",
    type: "checkbox",
  },
  {
    id: 1,
    question: "Quais são os pontos positivos?",
    type: "text",
  },
  {
    id: 2,
    question: "Quais são os pontos a serem melhorados?",
    type: "text",
  },
  {
    id: 3,
    question: "Quanto você indicaria essa vaga a partir da descrição da vaga?",
    type: "numbers",
  },
];

async function initApp(client_key) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ api_key: client_key }),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + client_key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      company = data;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  if (!company.token) {
    return;
  }

  constructor();
}

async function constructor() {
  if (!company.token) {
    return;
  }

  role_title = document.querySelector("[data-feedtitle]").textContent;

  var divButton = document.createElement("div");
  divButton.setAttribute("class", "feedbackContainer");

  document.body.appendChild(divButton);

  var button = document.createElement("button");
  button.setAttribute("class", "feedbackBoardButton");

  document.querySelector(".feedbackContainer").appendChild(button);

  var icon =
    '<svg id="feedback" xmlns="http://www.w3.org/2000/svg" width="287.138" height="287.138" viewBox="0 0 287.138 287.138"><g id="Group_8" data-name="Group 8"><g id="Group_7" data-name="Group 7"><path id="Path_5" data-name="Path 5" d="M261.034,0H26.1A26.133,26.133,0,0,0,0,26.1V280.612a6.528,6.528,0,0,0,4.027,6.029,6.449,6.449,0,0,0,2.5.5,6.524,6.524,0,0,0,4.614-1.912l63.347-63.347H261.034a26.133,26.133,0,0,0,26.1-26.1V26.1A26.134,26.134,0,0,0,261.034,0Zm13.051,195.775a13.065,13.065,0,0,1-13.051,13.051H71.784a6.522,6.522,0,0,0-4.614,1.912L13.051,264.857V26.1A13.065,13.065,0,0,1,26.1,13.052H261.034A13.064,13.064,0,0,1,274.085,26.1V195.775Z" fill="#efefef"/><path id="Path_6" data-name="Path 6" d="M189.118,64A71.784,71.784,0,1,0,260.9,135.784,71.869,71.869,0,0,0,189.118,64Zm0,130.517a58.733,58.733,0,1,1,58.733-58.733A58.8,58.8,0,0,1,189.118,194.517Z" transform="translate(-45.549 -24.845)" fill="#efefef"/><circle id="Ellipse_7" data-name="Ellipse 7" cx="13.051" cy="13.051" r="13.051" transform="translate(104.414 78.31)" fill="#efefef"/>      <circle id="Ellipse_8" data-name="Ellipse 8" cx="13.051" cy="13.051" r="13.051" transform="translate(156.62 78.31)" fill="#efefef"/><path id="Path_7" data-name="Path 7" d="M244.055,192.21a6.6,6.6,0,0,0-7.928,4.7c-.229.867-5.748,21.19-26.307,21.19s-26.078-20.323-26.307-21.19a6.527,6.527,0,0,0-12.657,3.193c2.689,10.738,14.288,31.049,38.964,31.049s36.275-20.31,38.964-31.049A6.524,6.524,0,0,0,244.055,192.21Z" transform="translate(-66.251 -74.528)" fill="#efefef"/></g></g></svg>';

  document.querySelector(".feedbackBoardButton").innerHTML = icon;

  var buttonToggle = document.querySelector(".feedbackBoardButton");
  var container = document.querySelector(".feedbackContainer");

  var board = document.createElement("div");
  board.setAttribute("class", "board");

  var title = document.createElement("div");
  title.setAttribute("class", "boardHeader");
  title.innerHTML =
    "<span>Bem vindo ao </span> <strong>Cade meu Feedback</strong>";

  var text = document.createElement("div");
  text.setAttribute("class", "boardText");

  var text1 = document.createElement("span");
  text1.innerHTML =
    "Feedback sobre a vaga: <br /> " + "<strong>" + role_title + "</strong>";

  text.appendChild(text1);

  // cria o form
  var boardQuestions = document.createElement("form");
  boardQuestions.setAttribute("class", "boardQuestions");

  // cria a lista de perguntas e adiciona no form
  var form_row_1 = document.createElement("div");
  form_row_1.setAttribute("class", "form_row_1");
  boardQuestions.appendChild(form_row_1);

  var form_row_2 = document.createElement("div");
  form_row_2.setAttribute("class", "form_row_2");
  boardQuestions.appendChild(form_row_2);

  var form_row_3 = document.createElement("div");
  form_row_3.setAttribute("class", "form_row_3");
  boardQuestions.appendChild(form_row_3);

  var form_row_4 = document.createElement("div");
  form_row_4.setAttribute("class", "form_row_4");
  boardQuestions.appendChild(form_row_4);

  // mapeia as perguntas cadastradas e printa
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].type === "checkbox") {
      // cria a lista e adiciona um LI com uma div
      var boardQuestionsListItem = document.createElement("div");
      boardQuestionsListItem.setAttribute("class", "boardQuestionsListItem");
      var valuesContainer = document.createElement("div");
      valuesContainer.setAttribute("class", "boardQuestionsListItemValues");
      boardQuestionsListItem.appendChild(valuesContainer);

      // label
      var label = document.createElement("label");
      label.innerHTML = questions[i].question;
      boardQuestionsListItem.prepend(label);

      // custom radio input
      var inputRadio_1 = document.createElement("input");
      inputRadio_1.setAttribute("class", "input_values");
      inputRadio_1.setAttribute("type", "radio");
      inputRadio_1.setAttribute("id", "super_happy");
      inputRadio_1.setAttribute("value", "super_happy");
      inputRadio_1.setAttribute("name", questions[i].question);

      var inputRadio_2 = document.createElement("input");
      inputRadio_2.setAttribute("class", "input_values");
      inputRadio_2.setAttribute("type", "radio");
      inputRadio_2.setAttribute("id", "happy");
      inputRadio_2.setAttribute("value", "happy");
      inputRadio_2.setAttribute("name", questions[i].question);

      var inputRadio_3 = document.createElement("input");
      inputRadio_3.setAttribute("class", "input_values");
      inputRadio_3.setAttribute("type", "radio");
      inputRadio_3.setAttribute("id", "neutral");
      inputRadio_3.setAttribute("value", "neutral");
      inputRadio_3.setAttribute("name", questions[i].question);

      var inputRadio_4 = document.createElement("input");
      inputRadio_4.setAttribute("class", "input_values");
      inputRadio_4.setAttribute("type", "radio");
      inputRadio_4.setAttribute("id", "bad");
      inputRadio_4.setAttribute("value", "bad");
      inputRadio_4.setAttribute("name", questions[i].question);

      var inputRadio_5 = document.createElement("input");
      inputRadio_5.setAttribute("class", "input_values");
      inputRadio_5.setAttribute("type", "radio");
      inputRadio_5.setAttribute("id", "super_bad");
      inputRadio_5.setAttribute("value", "super_bad");
      inputRadio_5.setAttribute("name", questions[i].question);

      // svg feedback e insere na
      var valuesContainerItem1 = document.createElement("label");
      valuesContainerItem1.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="53.883" height="53.883" viewBox="0 0 53.883 53.883"><g id="super_happy" transform="translate(-1590.356 -249.585)"><circle id="Ellipse_19" data-name="Ellipse 19" cx="18.55" cy="18.55" r="18.55" transform="translate(1591.064 276.526) rotate(-45)" fill="#39b54a" stroke="#000" stroke-width="1"/><circle id="Ellipse_20" data-name="Ellipse 20" cx="2.593" cy="2.593" r="2.593" transform="translate(1607.656 269.065)" fill="#05364a"/><circle id="Ellipse_21" data-name="Ellipse 21" cx="2.593" cy="2.593" r="2.593" transform="translate(1621.753 269.065)" fill="#05364a"/><path id="Path_27" data-name="Path 27" d="M158.138,251H144.7a1.633,1.633,0,0,0-1.484,2.35c.023.043.047.086.074.128a9.629,9.629,0,0,0,16.26,0c.027-.042.051-.085.074-.127A1.633,1.633,0,0,0,158.138,251Z" transform="translate(1465.88 28.83)" fill="#05364a"/></g></svg>';

      var valuesContainerItem2 = document.createElement("label");
      valuesContainerItem2.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="53.883" height="53.883" viewBox="0 0 53.883 53.883"><g id="happy" transform="translate(-1633.803 -249.585)"><circle id="Ellipse_16" data-name="Ellipse 16" cx="18.55" cy="18.55" r="18.55" transform="translate(1634.51 276.526) rotate(-45)" fill="#91ca60" stroke="#000" stroke-width="1"/><circle id="Ellipse_17" data-name="Ellipse 17" cx="2.593" cy="2.593" r="2.593" transform="translate(1651.103 269.065)" fill="#05364a"/><circle id="Ellipse_18" data-name="Ellipse 18" cx="2.593" cy="2.593" r="2.593" transform="translate(1665.199 269.065)" fill="#05364a"/><path id="Path_26" data-name="Path 26" d="M377.924,256.772a9.583,9.583,0,0,1-8.13-4.469,1.8,1.8,0,1,1,3.032-1.924,6.039,6.039,0,0,0,10.2,0,1.8,1.8,0,1,1,3.032,1.924A9.582,9.582,0,0,1,377.924,256.772Z" transform="translate(1282.82 30.009)" fill="#05364a"/></g></svg>';

      var valuesContainerItem3 = document.createElement("label");
      valuesContainerItem3.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="53.883" height="53.883" viewBox="0 0 53.883 53.883"><g id="neutral" transform="translate(-1677.249 -249.585)"><circle id="Ellipse_9" data-name="Ellipse 9" cx="18.55" cy="18.55" r="18.55" transform="translate(1677.956 276.526) rotate(-45)" fill="#fbb040" stroke="#000" stroke-width="1"/><path id="Path_21" data-name="Path 21" d="M594.9,197.428a2.593,2.593,0,1,1-2.593-2.593A2.593,2.593,0,0,1,594.9,197.428Z" transform="translate(1104.839 74.23)" fill="#05364a"/><path id="Path_22" data-name="Path 22" d="M668.424,197.428a2.593,2.593,0,1,1-2.593-2.593A2.593,2.593,0,0,1,668.424,197.428Z" transform="translate(1045.407 74.23)" fill="#05364a"/><path id="Path_23" data-name="Path 23" d="M611.159,253.137H597.931a1.8,1.8,0,0,1,0-3.591h13.228a1.8,1.8,0,0,1,0,3.591Z" transform="translate(1099.645 30.008)" fill="#05364a"/></g></svg>';

      var valuesContainerItem4 = document.createElement("label");
      valuesContainerItem4.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="53.883" height="53.883" viewBox="0 0 53.883 53.883"><g id="bad" transform="translate(-1720.695 -249.585)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="18.55" cy="18.55" r="18.55" transform="translate(1721.402 276.526) rotate(-45)" fill="#f15a29" stroke="#000" stroke-width="1"/><circle id="Ellipse_11" data-name="Ellipse 11" cx="2.593" cy="2.593" r="2.593" transform="translate(1736.921 271.659) rotate(-45)" fill="#05364a"/><circle id="Ellipse_12" data-name="Ellipse 12" cx="2.593" cy="2.593" r="2.593" transform="matrix(0.64, -0.768, 0.768, 0.64, 1751.032, 271.989)" fill="#05364a"/><path id="Path_24" data-name="Path 24" d="M837.779,256.773a1.794,1.794,0,0,1-1.518-.834,6.038,6.038,0,0,0-10.2,0,1.8,1.8,0,0,1-3.032-1.924,9.629,9.629,0,0,1,16.26,0,1.8,1.8,0,0,1-1.514,2.757Z" transform="translate(916.473 30.008)" fill="#05364a"/></g></svg>';

      var valuesContainerItem5 = document.createElement("label");
      valuesContainerItem5.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="53.883" height="53.883" viewBox="0 0 53.883 53.883"><g id="super_bad" transform="translate(-1764.141 -249.585)"><circle id="Ellipse_13" data-name="Ellipse 13" cx="18.55" cy="18.55" r="18.55" transform="translate(1764.848 276.526) rotate(-45)" fill="#e01f25" stroke="#000" stroke-width="1"/><g id="Group_40" data-name="Group 40" transform="translate(1780.367 267.991)"><g id="Group_39" data-name="Group 39"><circle id="Ellipse_14" data-name="Ellipse 14" cx="2.593" cy="2.593" r="2.593" transform="translate(0 3.667) rotate(-45)" fill="#05364a"/></g></g><g id="Group_42" data-name="Group 42" transform="translate(1794.897 268.425)"><g id="Group_41" data-name="Group 41" transform="translate(0 0)"><circle id="Ellipse_15" data-name="Ellipse 15" cx="2.593" cy="2.593" r="2.593" transform="translate(0 4.964) rotate(-73.153)" fill="#05364a"/></g></g><path id="Path_25" data-name="Path 25" d="M1066.1,254.143q-.034-.065-.074-.128a9.629,9.629,0,0,0-16.26,0c-.026.042-.051.084-.074.128a1.633,1.633,0,0,0,1.484,2.35h13.439A1.633,1.633,0,0,0,1066.1,254.143Z" transform="translate(733.186 30.008)" fill="#05364a"/></g></svg>';

      valuesContainer.appendChild(valuesContainerItem5);
      valuesContainer.appendChild(valuesContainerItem4);
      valuesContainer.appendChild(valuesContainerItem3);
      valuesContainer.appendChild(valuesContainerItem2);
      valuesContainer.appendChild(valuesContainerItem1);

      valuesContainerItem1.prepend(inputRadio_1);
      valuesContainerItem2.prepend(inputRadio_2);
      valuesContainerItem3.prepend(inputRadio_3);
      valuesContainerItem4.prepend(inputRadio_4);
      valuesContainerItem5.prepend(inputRadio_5);

      form_row_1.appendChild(boardQuestionsListItem);
    }

    if (questions[i].type === "text") {
      // cria a lista e adiciona um LI com uma div
      var boardQuestionsListItem = document.createElement("div");
      boardQuestionsListItem.setAttribute("class", "boardQuestionsListItem");

      // label
      var label = document.createElement("label");
      label.innerHTML = questions[i].question;
      boardQuestionsListItem.prepend(label);

      if (questions[i].question === "Quais são os pontos positivos?") {
        var textarea = document.createElement("textarea");
        textarea.setAttribute("class", "positive_points");
        boardQuestionsListItem.appendChild(textarea);
      } else {
        var textarea = document.createElement("textarea");
        textarea.setAttribute("class", "negative_points");
        boardQuestionsListItem.appendChild(textarea);
      }

      form_row_2.appendChild(boardQuestionsListItem);
    }

    if (questions[i].type === "numbers") {
      // cria a lista e adiciona um LI com uma div
      var boardQuestionsListItem = document.createElement("div");
      boardQuestionsListItem.setAttribute(
        "class",
        "boardQuestionsListItemNumbers"
      );

      // label
      var label = document.createElement("label");
      label.innerHTML = questions[i].question;
      form_row_3.appendChild(label);

      for (i = 0; i <= 10; i++) {
        // label
        var labelInput = document.createElement("label");
        labelInput.setAttribute("for", i);
        labelInput.innerHTML = i;
        boardQuestionsListItem.appendChild(labelInput);

        // input
        var radio = document.createElement("input");
        radio.setAttribute("id", i);
        radio.setAttribute(
          "name",
          "Quanto você indicaria essa vaga a partir da descrição da vaga?"
        );
        radio.setAttribute("value", i);
        radio.setAttribute("class", "radio");
        radio.setAttribute("type", "radio");
        labelInput.appendChild(radio);

        form_row_3.appendChild(boardQuestionsListItem);
      }
    }
  }

  var textareaLabel = document.createElement("label");
  textareaLabel.innerHTML = "Gostaria de deixar uma mensagem?";
  form_row_4.appendChild(textareaLabel);

  var textarea = document.createElement("textarea");
  textarea.setAttribute("class", "feedback___message");
  form_row_4.appendChild(textarea);

  form_row_4.appendChild(textarea);

  var submit = document.createElement("button");
  submit.setAttribute("class", "submit");
  submit.setAttribute("onclick", "handleSendFeedbackRole(this, event)");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "ENVIAR FEEDBACK";

  boardQuestions.appendChild(submit);

  container.appendChild(board);
  board.appendChild(title);
  board.appendChild(text);

  var errorContainer = document.createElement("span");
  errorContainer.setAttribute("class", "feedback-error");
  board.append(errorContainer);

  var successContainer = document.createElement("span");
  successContainer.setAttribute("class", "feedback-success");
  board.append(successContainer);

  board.appendChild(boardQuestions);

  buttonToggle.addEventListener("click", () => {
    container.classList.toggle("active");
  });
}

async function handleSendFeedbackRole(el, event) {
  event.preventDefault();

  if (!company) {
    return;
  }

  var boardContainer = document.querySelector(".boardQuestions");
  var inputs = Array.from(
    document.querySelectorAll(".boardQuestionsListItemValues input")
  );
  var inputsRadio = Array.from(
    document.querySelectorAll(".boardQuestionsListItemNumbers input")
  );
  var message = document.querySelector(".feedback___message").value;

  var positivePoints = document.querySelector(".positive_points").value;
  var negativePoints = document.querySelector(".negative_points").value;

  var errorContainer = document.querySelector(".feedback-error");
  var successContainer = document.querySelector(".feedback-success");

  errorContainer.classList.remove("active");
  successContainer.classList.remove("active");

  var answers = [];

  inputs.forEach((answer) => {
    if (answer.checked === true) {
      answers.push({
        question: answer.getAttribute("name"),
        value: answer.value,
      });
    }
  });

  inputsRadio.forEach((answer) => {
    if (answer.checked === true) {
      answers.push({
        question: answer.getAttribute("name"),
        value: answer.value,
      });
    }
  });

  if (positivePoints && negativePoints) {
    answers.push(
      { question: "Quais são os pontos positivos?", value: positivePoints },
      {
        question: "Quais são os pontos a serem melhorados?",
        value: negativePoints,
      }
    );
  }

  var formData = {
    role_title,
    answers,
    message,
    company,
  };

  async function sendForm() {
    el.innerHTML = "ENVIANDO...";

    await fetch(url + "/feedback", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + company.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        el.innerHTML = "ENVIADO";
        successContainer.classList.add("active");
        successContainer.innerHTML =
          "Feedback enviado com sucesso! Muito Obrigado por fazer parte.";
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        errorContainer.classList.add("active");
        errorContainer.innerHTML =
          "Responda todas as questoes para enviarmos o seu feedback";
        el.innerHTML = "ENVIADO";
      });
  }

  if (answers.length < 4) {
    errorContainer.classList.add("active");
    errorContainer.innerHTML =
      "Responda todas as questoes para enviarmos o seu feedback";
    return false;
  }

  if (answers.length >= 4) {
    const formSent = await sendForm();

    if (formSent) {
      successContainer.classList.add("active");
      successContainer.innerHTML =
        "Feedback enviado com sucesso! Muito Obrigado por fazer parte.";

      boardContainer.classList.add("hidden");
    }
  }
}

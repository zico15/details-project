import "./style.css";
import message from "./message.json";
import Tooltip from "./tooltip";
import { markdown } from "markdown";

const app = document.getElementById("editor");

class Component {
  constructor(body, item) {
    this.body;
    this.item = item;
    this.title = body.querySelector("#main_title");
    this.text = body.querySelector("#main_text");
    //const texts = item.items[0].content.split(/\n{2,}/);
    //texts.forEach((text) => {
    //  const paragraph = document.createElement("p");
    //  paragraph.setAttribute("edit-text", "");
    //  paragraph.style.whiteSpace = "pre-line";
    //  paragraph.innerText = text;
    //  body.appendChild(paragraph);
    //});
    this.text.innerHTML = markdown.toHTML(item.items[0].content);
    const paragraphs = this.text.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.setAttribute("edit-text", "");
    });
    const strongs = this.text.querySelectorAll("strong");
    strongs.forEach((strong) => {
      strong.setAttribute("edit-text", "");
    });
  }
}

function createComponent(item) {
  const element = document.createElement("div");
  element.classList.add(item.className);
  element.classList.add("model-section");
  element.innerHTML = `
  <div class="w-100 d-block p-2 border-one">
    <div class="header">
      <div>
        <h1 id="main_title" class="title">key partners</h1>
        <div class="helper">
          <i class="fas fa-question-circle"></i>
          <div class="tooltip">
          <p id="main_text" style="white-space: pre-line;">Who are your suppliers? Who are your partners? What key activities do they perform? What key resources do you acquire from them?</p></div>
        </div>
      </div>
      <div class="btn-add float-right pointer"><i class="far fa-plus-square"></i></div>
    </div>
  </div>`;
  app.appendChild(element);
  return new Component(element, item);
}

function init() {
  message.sections.forEach((item) => {
    const component = createComponent(item);
  });

  //Tooltip.quill = new Quill("#editor", {
  //  modules: { toolbar: "#toolbar" },
  //  theme: "snow",
  //});
  const tooltip = new Tooltip();
  tooltip.initTooltip();
  tooltip.onUpdate((content) => {
    console.log("update");
  });

  tooltip.setActionAskAI(async (text, selectedText, paragraph) => {
    console.log("text: ", text);
    console.log("selectedText: ", selectedText);
    console.log("paragraph: ", paragraph);

    return new Promise((resolve, reject) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        userQuestion: text,
        userSelection: selectedText,
        context: paragraph[0],
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch("https://main-tlsfstft2a-uc.a.run.app/data", requestOptions)
        .then((response) => response.text())
        .then((result) => resolve(result))
        .catch(() => reject(""));
    });
  });
}

init();
console.log(message);

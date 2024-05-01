import "./style.css";
import message from "./message.json";
import Tooltip from "./tooltip";

const app = document.getElementById("app");

Tooltip.onUpdate((content) => {
  console.log("update");
});

Tooltip.setActionAskAI(async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 3000);
  });
});

class Component {
  constructor(body, item) {
    this.body;
    this.item = item;
    this.title = body.querySelector("#main_title");
    this.text = body.querySelector("#main_text");
    const texts = item.items[0].content.split(/\n{2,}/);
    texts.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.setAttribute("edit-text", "");
      paragraph.style.whiteSpace = "pre-line";
      paragraph.innerText = text;
      body.appendChild(paragraph);
    });
    this.text.innerText = "";
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
}

init();
console.log(message);

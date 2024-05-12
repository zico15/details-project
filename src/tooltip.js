class _Tooltip {
  spanSelection = undefined;
  data = undefined;
  popup = undefined;
  serializabel = 0;
  selections = [];
  optionsListSelected = undefined;
  selectedText = undefined;
  default_colour = "red";
  defaultAction = async (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("resolve: ", text);
        resolve(true);
      }, 3000);
    });
  };
  defaultOnUpdate = (content) => {};

  constructor() {
    this.popup = document.createElement("div");
    this.popup.onclick = (e) => {
      //  this.hide();
    };
    //   popup
    this.tooltip = document.createElement("div");
    this.tooltip.style.pointerEvents = "auto";
    this.tooltip.style.position = "absolute";
    this.tooltip.style.display = "flex";
    this.tooltip.style.flexDirection = "column";
    this.tooltip.innerHTML = `
    <div id="tooltip">
			<div role="button" tabindex="0" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; padding: 0px 8px; white-space: nowrap; box-shadow: rgba(255, 255, 255, 0.094) 1px 0px 0px; margin-right: 1px;"><svg role="graphics-symbol" viewBox="0 0 16 16" class="sparkles" style="width: 16px; height: 16px; display: block; fill: rgb(167, 130, 195); flex-shrink: 0; margin-right: 4px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.2757 4.82358C7.57934 4.71847 7.57934 4.53161 7.2757 4.41483L5.62905 3.78419C5.33709 3.67908 4.99842 3.3404 4.88164 3.03676L4.25101 1.39009C4.1459 1.08644 3.95905 1.08644 3.84226 1.39009L3.21163 3.03676C3.10653 3.32872 2.76786 3.6674 2.46422 3.78419L0.817572 4.41483C0.513934 4.51994 0.513934 4.70679 0.817572 4.82358L2.46422 5.45422C2.75618 5.55933 3.09485 5.898 3.21163 6.20165L3.84226 7.84832C3.94737 8.15196 4.13422 8.15196 4.25101 7.84832L4.88164 6.20165C4.98674 5.90968 5.32541 5.571 5.62905 5.45422L7.2757 4.82358ZM15.2991 10.5929C16.2334 10.3593 16.2334 9.9739 15.2991 9.74032L13.2321 9.22647C12.2978 8.9929 11.3402 8.03526 11.1066 7.10097L10.5928 5.03387C10.3592 4.09959 9.97382 4.09959 9.74025 5.03387L9.2264 7.10097C8.99283 8.03526 8.03521 8.9929 7.10094 9.22647L5.03387 9.74032C4.09961 9.9739 4.09961 10.3593 5.03387 10.5929L7.10094 11.1067C8.03521 11.3403 8.99283 12.2979 9.2264 13.2322L9.74025 15.2993C9.97382 16.2336 10.3592 16.2336 10.5928 15.2993L11.1066 13.2322C11.3402 12.2979 12.2978 11.3403 13.2321 11.1067L15.2991 10.5929Z"></path></svg><span style="color: rgb(167, 130, 195); font-weight: 500;">Ask AI</span></div>
			<div class="tooltip-enable" role="button" tabindex="1" style="color: white;user-select: none;transition: background 20ms ease-in 0s;cursor: pointer;display: flex;align-items: center;padding: 0px 10px;white-space: nowrap;box-shadow: rgba(255, 255, 255, 0.094) 1px 0px 0px;margin-right: 1px;"><svg role="graphics-symbol" viewBox="0 0 16 16" class="speechBubbleFilled" style="width: 16px; height: 16px; display: block; fill: inherit; flex-shrink: 0; margin-top: 1px; margin-right: 4px;"><path d="M4.32 15.424c.39 0 .677-.192 1.149-.609l2.344-2.064h4.116c2.057 0 3.213-1.19 3.213-3.22V4.22c0-2.03-1.156-3.22-3.213-3.22H3.213C1.163 1 0 2.19 0 4.22V9.53c0 2.037 1.196 3.22 3.165 3.22h.28v1.675c0 .608.322.998.875.998zm.342-1.531v-1.949c0-.403-.178-.56-.56-.56H3.26c-1.285 0-1.9-.65-1.9-1.894V4.26c0-1.243.615-1.893 1.9-1.893h8.627c1.278 0 1.893.65 1.893 1.894v5.23c0 1.243-.615 1.893-1.893 1.893h-4.15c-.417 0-.622.068-.909.369l-2.167 2.14zm-.567-8.668h6.884a.433.433 0 00.423-.438.425.425 0 00-.423-.417H4.095a.419.419 0 00-.417.417c0 .24.184.438.417.438zm0 2.167h6.884a.427.427 0 000-.855H4.095a.425.425 0 00-.417.424c0 .24.184.43.417.43zm0 2.173h4.484c.24 0 .424-.191.424-.423 0-.24-.185-.431-.424-.431H4.095a.422.422 0 00-.417.43.42.42 0 00.417.424z" style="fill: white;"></path></svg>Comment</div>
			<div class="tooltip-enable" role="button" tabindex="2" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; padding-left: 7px; padding-right: 6px; white-space: nowrap; box-shadow: rgba(255, 255, 255, 0.094) 1px 0px 0px; margin-right: 1px;"><div style="display: inline-flex; align-items: center; justify-content: center; height: 18px; text-align: center; font-size: 15px; border-radius: 2px; width: 48px; font-weight: 500; margin-bottom: 2px; color: #FFFFFF;"><input type="color" style="appearance: none;background-color: transparent;border: none;inline-size: 0;block-size: 0;"><span>Color</span></div><svg role="graphics-symbol" viewBox="0 0 30 30" class="chevronDown" style="width: 10px; height: 100%; display: block; fill: white; flex-shrink: 0; margin-left: 3px;"><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg></div>
			<div class="tooltip-enable" role="button" tabindex="3" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; padding-left: 7px; padding-right: 6px; white-space: nowrap; box-shadow: rgba(255, 255, 255, 0.094) 1px 0px 0px; margin-right: 1px;"><div style="display: inline-flex; align-items: center; justify-content: center; height: 18px; text-align: center; font-size: 15px; border-radius: 2px; width: 48px; font-weight: 500; margin-bottom: 2px; color: #FFFFFF;">Font</div><svg role="graphics-symbol" viewBox="0 0 30 30" class="chevronDown" style="width: 10px; height: 100%; display: block; fill: white; flex-shrink: 0; margin-left: 3px;"><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg></div>
			<div class="tooltip-enable" role="button" tabindex="4" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; padding: 0px 8px; color: #FFFFFF;"><span style="font-weight: 600;">B</span></div>
			<div class="tooltip-enable" role="button" tabindex="5" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; padding: 0px 8px; color: #FFFFFF;"><span style="text-decoration: underline;">U</span></div>
			<div class="tooltip-enable" role="button" tabindex="6" style="user-select: none;transition: background 20ms ease-in 0s;cursor: pointer;display: flex;align-items: center;padding: 0px 8px;color: #FFFFFF;box-shadow: rgba(255, 255, 255, 0.094) 1px 0px 0;"><span style="text-decoration: line-through;">S</span></div>
			<div class="tooltip-desable" role="button" tabindex="7" style="user-select: none;transition: background 20ms ease-in 0s;cursor: pointer;display: flex;align-items: center;padding: 0px 8px;color: #FFFFFF;box-shadow: rgba(255, 255, 255, 0.094) 1px 0px 0;"><img src="../../assets/img/loading-ai-2.gif" style="width: 15px; height: 15px;"/></div>
      <div role="button" tabindex="10" style="user-select: none;transition: opacity 200ms ease-in 0s;cursor: pointer;display: flex;align-items: center;flex-shrink: 0;width: 30px;border-radius: 0px;fill: rgba(255, 255, 255, 0.443);border-right: none;padding: 0px;justify-content: center;"><span style="margin-left: 5px;color: red;">X</span></div>
			</div>
      <div id="font-options" class="options-list" style="max-height: 300px; overflow-y: auto;" >
        <div class="option" style="font-family: Arial">Arial</div>
        <div class="option" style="font-family: 'Courier New'">Courier New</div>
        <div class="option" style="font-family: 'Times New Roman'">Times New Roman</div>
        <div class="option" style="font-family: 'Comic Sans MS'">Comic Sans MS</div>
        <div class="option" style="font-family: 'Lucida Console'">Lucida Console</div>
        <div class="option" style="font-family: 'Lucida Sans Unicode'">Lucida Sans Unicode</div>
        <div class="option" style="font-family: 'Palatino Linotype'">Palatino Linotype</div>
        <div class="option" style="font-family: 'Trebuchet MS'">Trebuchet MS</div>
        <div class="option" style="font-family: 'Verdana'">Verdana</div>
        <div class="option" style="font-family: 'Georgia'">Georgia</div>
        <div class="option" style="font-family: 'Garamond'">Garamond</div>
        <div class="option" style="font-family: 'Bookman Old Style'">Bookman Old Style</div>
        <div class="option" style="font-family: 'Century Gothic'">Century Gothic</div>
        <div class="option" style="font-family: 'Book Antiqua'">Book Antiqua</div>
        <div class="option" style="font-family: 'Arial Black'">Arial Black</div>
        <div class="option" style="font-family: 'Impact'">Impact</div>
        <div class="option" style="font-family: 'Lucida Handwriting'">Lucida Handwriting</div>
        <div class="option" style="font-family: 'Lucida Bright'">Lucida Bright</div>
        <div class="option" style="font-family: 'Monotype Corsiva'">Monotype Corsiva</div>
        <div class="option" style="font-family: 'Tahoma'">Tahoma</div>
        <div class="option" style="font-family: 'Arial Narrow'">Arial Narrow</div>
        <div class="option" style="font-family: 'Franklin Gothic Medium'">Franklin Gothic Medium</div>
        <div class="option" style="font-family: 'MS Sans Serif'">MS Sans Serif</div>
        <div class="option" style="font-family: 'MS Serif'">MS Serif</div>
        <div class="option" style="font-family: 'MS Reference Sans Serif'">MS Reference Sans Serif</div>
        <div class="option" style="font-family: 'MS Reference Specialty'">MS Reference Specialty</div>
        <div class="option" style="font-family: 'MS Reference Serif'">MS Reference Serif</div>
        <div class="option" style="font-family: 'MS Reference Sans Serif'">MS Reference Sans Serif</div>
        <div class="option" style="font-family: 'MS Reference Specialty'">MS Reference Specialty</div>
        <div class="option" style="font-family: 'MS Reference Serif'">MS Reference Serif</div>
        <div class="option" style="font-family: 'MS Reference Sans Serif'">MS Reference Sans Serif</div>
        <div class="option" style="font-family: 'MS Reference Specialty'">MS Reference Specialty</div>
        <div class="option" style="font-family: 'MS Reference Serif'">MS Reference Serif</div>
      </div>
      <div id="color-options" class="options-list" >
      <grid id="grid-color-options" style="display: grid; grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(5, 1fr); grid-gap: 5px; padding: 5px; justify-items: center">
        <div class="option option-color" style="background: #ffffff"></div>
        <div class="option option-color" style="background: #000106"></div>
        <div class="option option-color" style="background: #3e6259"></div>
        <div class="option option-color" style="background: #3f7a8a"></div>
        <div class="option option-color" style="background: #95c483"></div>
        <div class="option option-color" style="background: #b8d5c5"></div>
        <div class="option option-color" style="background: #bdd6e7"></div>
        <div class="option option-color" style="background: #7c91c1"></div>
        <div class="option option-color" style="background: #9d8495"></div>
        <div class="option option-color" style="background: #dad0d9"></div>
        <div class="option option-color" style="background: #4c50cf"></div>
        <div class="option option-color" style="background: #4f0b76"></div>
        <div class="option option-color" style="background: #a565ba"></div>
        <div class="option option-color" style="background: #ee3e6d"></div>
        <div class="option option-color" style="background: #d83d64"></div>
        <div class="option option-color" style="background: #c5a670"></div>
        <div class="option option-color" style="background: #f56601"></div>
        <div class="option option-color" style="background: #efacbd"></div>
        <div class="option option-color" style="background: #8d0522"></div>
        <div class="option option-color" style="background: #f1b99b"></div>
        <div class="option option-color" style="background: #f0ca69"></div>
        <div class="option option-color" style="background: #62372f"></div>
        <div class="option option-color" style="background: #c97545"></div>
        <div class="option option-color" style="background: #c1800d"></div>
        <div class="option option-color" style="background: #ffffff; color: ${this.default_colour}; /* position: relative; */display: flex;align-content: space-between;align-items: center;justify-content: flex-end;">
        <div style="
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin: -17px;
        margin-top: 7px;
        margin-bottom: -13px; */
 "> <div class="diagonal-line"></div></div></div>
      </grid>
      </div>
      <div id="ask-ai-options" class="options-list">
        <div style="display: flex;">
			    <textarea  class="edit-textarea" id="ask-ai" placeholder="" style="flex: 1; height: 150px;"></textarea>
        </div>
        <div style="margin-top: 10px;">
          <button id="ask-ai-send" style="width:100%; background-color: #535bf28f;">Send</button>
        </div>
			</div>
      `;
    const action = this.tooltip.querySelector("[tabindex='0']");

    const grid_color_options = this.tooltip.querySelector("#grid-color-options");
    grid_color_options.childNodes.forEach((e) => {
      e.onclick = () => {
        const background = e.style.background;
        const color = e.style.color.trim();
        if (color != "") this.updateTextAll(e.style.color);
        else this.updateTextAll(background);
      };
    });

    this.ask_ai_options_list = this.tooltip.querySelector("#ask-ai-options");
    this.font_options_list = this.tooltip.querySelector("#font-options");

    const fonts = Array.from(this.font_options_list.querySelectorAll(".option"));

    fonts.forEach((e) => {
      e.onclick = () => {
        this.updateTextAll(undefined, e.style.fontFamily);
      };
    });

    const ask_ai_textarea = this.ask_ai_options_list.querySelector("textarea");
    const btnSend = this.tooltip.querySelector("#ask-ai-send");
    btnSend.onclick = () => {
      this.sendAskAI(ask_ai_textarea.value);
    };
    this.color_options_list = this.tooltip.querySelector("#color-options");
    let isAction = false;
    action.onclick = async (value) => {
      if (isAction == true) return;
      ask_ai_textarea.value = "";
      this.ask_ai_options_list.classList.toggle("active");
      this.color_options_list.classList.remove("active");
      this.font_options_list.classList.remove("active");
      this.optionsListSelected = this.ask_ai_options_list;
    };
    const color = this.tooltip.querySelector("[tabindex='2']");
    this.inputColor = color.querySelector("input");
    this.inputColor.onchange = () => {
      this.updateTextAll(this.inputColor.value);
    };
    color.onclick = () => {
      this.ask_ai_options_list.classList.remove("active");
      this.font_options_list.classList.remove("active");
      this.color_options_list.classList.toggle("active");
      this.optionsListSelected = this.color_options_list;
    };
    const comment = this.tooltip.querySelector("[tabindex='1']");
    comment.onclick = () => {
      this.closeOptionsList();
      this.updateTextAll(undefined, undefined, undefined, undefined, undefined, undefined, true);
    };

    this.underline = this.tooltip.querySelector("[tabindex='5']");

    this.underline.onclick = () => {
      this.closeOptionsList();
      this.updateTextAll(undefined, undefined, true);
    };

    this.bold = this.tooltip.querySelector("[tabindex='4']");
    this.bold.onclick = () => {
      this.closeOptionsList();
      this.updateTextAll(undefined, undefined, undefined, true);
    };

    this.strikethrough = this.tooltip.querySelector("[tabindex='6']");
    this.strikethrough.onclick = () => {
      this.closeOptionsList();
      this.updateTextAll(undefined, undefined, undefined, undefined, true);
    };

    this.font = this.tooltip.querySelector("[tabindex='3']");
    this.font.onclick = () => {
      this.ask_ai_options_list.classList.remove("active");
      this.color_options_list.classList.remove("active");
      this.font_options_list.classList.toggle("active");
      this.optionsListSelected = this.font_options_list;
      console.log("Font");
    };

    const btnClose = this.tooltip.querySelector("[tabindex='10']");
    btnClose.onclick = this.hide.bind(this);
    this.popup.className = "popup";
    this.popup.appendChild(this.tooltip);
    this.popup = document.body.appendChild(this.popup);
  }

  closeOptionsList() {
    this.optionsListSelected = undefined;
    this.color_options_list.classList.remove("active");
    this.ask_ai_options_list.classList.remove("active");
    this.font_options_list.classList.remove("active");
  }

  setVisibilityOptions(element) {
    this.optionsListSelected?.classList.remove("active");
    this.optionsListSelected = element;
  }

  getSelections() {
    return this.selections;
  }

  sendAskAI(value) {
    this.closeOptionsList();
    console.log("Action: ", value);
    const main_paragraph = this.selections[0];
    //this.createDetails(main_paragraph?.element, value);
    this.isAction = true;

    const enables = this.tooltip.querySelectorAll(".tooltip-enable");
    const desables = this.tooltip.querySelectorAll(".tooltip-desable");
    enables.forEach((e) => {
      e.classList.toggle("tooltip-enable");
      e.classList.toggle("tooltip-desable");
    });
    desables.forEach((e) => {
      e.classList.toggle("tooltip-enable");
      e.classList.toggle("tooltip-desable");
    });
    const paragraph = this.selections.filter((e) => e.element.tagName == "P").map((e) => e.element.innerText);
    this.defaultAction(value, this.selectedText, paragraph)
      .then((result) => {
        const enables = this.tooltip.querySelectorAll(".tooltip-enable");
        const desables = this.tooltip.querySelectorAll(".tooltip-desable");
        enables.forEach((e) => {
          e.classList.toggle("tooltip-enable");
          e.classList.toggle("tooltip-desable");
        });
        desables.forEach((e) => {
          e.classList.toggle("tooltip-enable");
          e.classList.toggle("tooltip-desable");
        });
        const main_paragraph = this.selections[0];
        this.createDetails(main_paragraph?.element, result);
      })
      .finally(() => (this.isAction = false));
  }

  setSelection(value) {
    this.spanSelection = value;
    if (this.spanSelection != undefined) {
      this.underline.style.color = this.spanSelection.style.textDecoration == "underline" ? "deepskyblue" : "#FFFFFF";
      this.bold.style.color = this.spanSelection.style.fontWeight == "bold" ? "deepskyblue" : "#FFFFFF";
      this.strikethrough.style.color = this.spanSelection.style.textDecoration == "line-through" ? "deepskyblue" : "#FFFFFF";
      this.inputColor.value = this.spanSelection.style.color;
    } else {
      this.underline.style.color = "#FFFFFF";
      this.bold.style.color = "#FFFFFF";
      this.strikethrough.style.color = "#FFFFFF";
      this.inputColor.type = "color";
      this.inputColor.value = "#FFFFFF";
    }
  }

  setActionAskAI(e) {
    if (e != undefined) this.defaultAction = e;
  }

  reorganizeList(list) {
    let newList = [];
    let p = undefined;
    while (list.length > 0) {
      const e = list.shift();

      if (p == undefined) {
        if (e.tagName == "P") p = e;
        else newList.push(e);
      } else {
        if (!e.tagName == "P") {
          newList.push(e);
        } else {
          newList.push(p);
          p = e;
        }
      }
    }
    if (p) newList.push(p);
    return newList;
  }

  createElementData(element, start, end, range, startParachraph, endParachraph) {
    const data = {
      element: element,
      startOffset: element == start ? range.startOffset : 0,
      endOffset: element == end ? range.endOffset : element.innerText.length,
    };

    if (element == startParachraph && start != startParachraph) {
      const startOffset = startParachraph.innerHTML.indexOf(start.outerHTML) + start.innerText.length;
      console.log("startOffset: ", startOffset);
      data.startOffset = startOffset;
    }
    if (element == endParachraph && end != endParachraph) {
      const endOffset = endParachraph.innerHTML.indexOf(end.outerHTML);
      console.log("endOffset: ", endOffset);
      data.endOffset = endOffset;
    }

    return data;
  }

  getElementsBetween(start, end, range) {
    const selections = [];
    const startParachraph = this.getParentParagraph(start);
    const endParachraph = this.getParentParagraph(end);
    if (startParachraph == endParachraph && start == startParachraph && end == endParachraph) return [start];
    let isStart = false;
    const elementsAll = this.reorganizeList(Array.from(document.querySelectorAll("[edit-text]")));
    for (let i = 0; i < elementsAll.length; i++) {
      if (isStart == false && elementsAll[i] == startParachraph) isStart = true;
      if (isStart) selections.push(this.createElementData(elementsAll[i], start, end, range, startParachraph, endParachraph));
      if (elementsAll[i] == end) break;
    }
    return selections;
  }

  show(text, rect, selection, startElement, endElement) {
    this.popup.style.display = "flex";
    this.selections = [];
    this.selectedText = text;
    this.setSelection(undefined);
    this.setVisibilityOptions(undefined);
    this.data = {
      "element-start": startElement,
      "element-end": endElement,
      "text-select": text,
      rect: rect,
    };
    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      console.log("range: ", range);
      const startElement = range.startContainer.nodeType === Node.TEXT_NODE ? range.startContainer.parentElement : range.startContainer;
      const endElement = range.endContainer.nodeType === Node.TEXT_NODE ? range.endContainer.parentElement : range.endContainer;
      console.log("elements between: ", this.getElementsBetween(startElement, endElement, range));
      const elementsAll = this.reorganizeList(Array.from(document.querySelectorAll("[edit-text]")));
      let elements = [];
      let countElementEditSummary = 0;
      let isStart = false;
      for (let i = 0; i < elementsAll.length; i++) {
        if (isStart == false && elementsAll[i] == startElement) isStart = true;
        if (isStart) {
          elements.push(elementsAll[i]);
          if (elementsAll[i].getAttribute("edit-summary") == "true") countElementEditSummary++;
        }
        if (elementsAll[i] == endElement) break;
      }

      if (countElementEditSummary != elements.length) {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].getAttribute("edit-summary") == "true") {
            elements.splice(i, 1);
            i--;
          }
        }
      }

      for (let i = 0; i < elements.length; i++) {
        const el = {
          element: elements[i],
          start: elements[i] == startElement ? range.startOffset : 0,
          end: elements[i] == endElement ? range.endOffset : elements[i].innerText.length,
          color: elements[i].style.color,
          font: elements[i].style.fontFamily,
          underline: elements[i].style.textDecoration == "underline",
          bold: elements[i].style.fontWeight == "bold",
          strikethrough: elements[i].style.textDecoration == "line-through",
          italic: elements[i].style.fontStyle == "italic",
          comment: elements[i].className == "comment" ? true : false,
          text: elements[i] == startElement ? range.startContainer.data : elements[i] == endElement ? range.endContainer.data : "",
          isTextComplete: false,
          elementSpan: undefined,
          nextElementSibling: elements[i] == startElement ? range.startContainer.nextElementSibling : elements[i] == endElement ? range.endContainer.nextElementSibling : undefined,
          previousElementSibling: elements[i] == startElement ? range.startContainer.previousElementSibling : elements[i] == endElement ? range.endContainer.previousElementSibling : undefined,
          preview: this.getPreViewElement(elements, i),
          next: this.getNextViewElement(elements, i),
        };
        el.isTextComplete = el.start + el.end == el.element.innerText.length;
        el.text = this.updateContent(el);
        this.selections.push(el);
      }
    }
    console.log("selections: ", this.selections);
    this.tooltip.style.top = `${rect.top + window.scrollY - this.tooltip.clientHeight - 20}px`;
    this.tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - 30}px`;
    if (this.tooltip.style.left < 0) this.tooltip.style.left = "10px";
    const size = Number.parseInt(this.tooltip.style.left.replace("px", "")) + this.tooltip.clientWidth;
    if (size > window.innerWidth) {
      this.tooltip.style.left = `${window.innerWidth - this.tooltip.clientWidth - 20}px`;
    }
    if (this.selections.length == 0) this.hide();
  }

  getPreViewElement(elements, i) {
    for (let j = i - 1; j >= 0; j--) {
      if (elements[j].tagName == "P") return elements[j];
    }
    return undefined;
  }

  getNextViewElement(elements, i) {
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[j].tagName == "P") return elements[j];
    }
    return undefined;
  }

  updateContent(select) {
    const nextElementSibling = select.nextElementSibling;
    const previousElementSibling = select.previousElementSibling;

    if (nextElementSibling != undefined) {
      console.log("nextElementSibling: ", nextElementSibling);
      return select.text || "nextElementSibling";
    } else if (previousElementSibling != undefined) {
      return select.text || "previousElementSibling";
    } else {
      return select.element.innerHTML.substring(select.start, select.end);
    }
  }

  hide() {
    this.popup.style.display = "none";
    this.selections = [];
  }

  updateTextAll(color, font, underline, bold, strikethrough, italic, comment) {
    if (this.spanSelection == undefined) this.setSelection(this.selections.find((e) => e.elementSpan != undefined)?.elementSpan || this.selections.find((e) => e.element.tagName === "SPAN")?.element);
    else this.setSelection(this.spanSelection);
    const baseColor = this.spanSelection?.style.color || color;
    const baseFont = this.spanSelection?.style.fontFamily;
    const baseUnderline = this.spanSelection?.style.textDecoration == "underline";
    const baseBold = this.spanSelection?.style.fontWeight == "bold";
    const baseStrikethrough = this.spanSelection?.style.textDecoration == "line-through";
    const baseItalic = this.spanSelection?.style.fontStyle == "italic";
    const baseComment = this.spanSelection?.classList?.contains("comment");
    if (color != undefined) color = baseColor == undefined ? "#FFFFFF" : color;
    if (font != undefined) font = baseFont == undefined ? "Arial" : font;
    if (underline != undefined) underline = baseUnderline == undefined ? true : !baseUnderline;
    if (bold != undefined) bold = baseBold == undefined ? true : !baseBold;
    if (strikethrough != undefined) strikethrough = baseStrikethrough == undefined ? true : !baseStrikethrough;
    if (italic != undefined) italic = baseItalic == undefined ? true : !baseItalic;
    if (comment != undefined) comment = baseComment == undefined ? true : !baseComment;
    for (let i = 0; i < this.selections.length; i++) {
      const span = this.selections[i].element.tagName === "SPAN" ? this.selections[i].element : undefined;
      this.updateText(this.selections[i], this.selections[i].element, span, color, font, underline, bold, strikethrough, italic, comment);
    }
    if (this.spanSelection == undefined) this.setSelection(this.selections.find((e) => e.elementSpan != undefined)?.elementSpan || this.selections.find((e) => e.element.tagName === "SPAN")?.element);
    else this.setSelection(this.spanSelection);
    this.defaultOnUpdate("test");
  }

  updateText(selection, element, elementSpan, color, font, underline, bold, strikethrough, italic, comment) {
    const span = selection.elementSpan != undefined ? selection.elementSpan : elementSpan == undefined || selection.isTextComplete == false ? document.createElement("span") : elementSpan;
    if (color != undefined) span.style.color = color;
    if (font != undefined) span.style.fontFamily = font;
    if (underline != undefined) span.style.textDecoration = underline ? "underline" : "none";
    if (bold != undefined) span.style.fontWeight = bold ? "bold" : "normal";
    if (strikethrough != undefined) span.style.textDecoration = strikethrough ? "line-through" : "none";
    if (italic != undefined) span.style.fontStyle = italic ? "italic" : "normal";
    if (comment != undefined) span.className = comment ? "comment" : "";
    if (selection.elementSpan == undefined && (elementSpan == undefined || selection.isTextComplete == false)) {
      if (selection.element.childNodes.length == 1) this.createSpanParAll(selection, element, span);
      else if (selection.previousElementSibling) this.createSpanPartLast(selection, element, span);
      else if (selection.nextElementSibling) this.createSpanPartFirst(selection, element, span);
    }
  }

  createSpanPartLast(selection, element, span) {
    console.log("createSpanPartLast: ", selection, element, span);
  }

  createSpanPartFirst(selection, element, span) {
    console.log("createSpanPartFirst: ", selection, element, span);
  }

  createSpanParAll(selection, element, span) {
    console.log("createSpanParAll: ", selection, element, span);
    span.innerText = selection.text;
    span.id = `span_text_${this.serializabel++}_${new Date().getTime()}`;
    span.setAttribute("edit-text", "");
    const html = element.innerHTML;
    const htmlStart = html.substring(0, selection.start);
    const htmlEnd = html.substring(selection.end, html.length);
    const outerHTML = span.outerHTML;
    element.innerHTML = `${htmlStart}${outerHTML}${htmlEnd}`;
    selection.elementSpan = element.querySelector(`#${span.id}`);
  }

  getParentParagraph(value) {
    if (value.tagName == "P") return value;
    let parent = value;
    while (parent.tagName != "P") {
      parent = parent.parentElement;
      if (parent != undefined && parent.tagName == "P") return parent;
    }
    return undefined;
  }

  getParentDetails(paragraph) {
    console.log("getParentDetails: ", paragraph);
    const detail = Array.from(paragraph.childNodes).find((e) => e.tagName == "DETAILS");
    if (detail != undefined) return detail;
    let parent = paragraph;
    while (parent.tagName != "DETAILS" && parent.tagName != "DIV") {
      parent = parent.parentElement;
      if (parent != undefined && parent.tagName == "DETAILS") return parent;
    }
    return paragraph;
  }

  createDetails(main_paragraph, response) {
    if (main_paragraph == undefined) return;

    if (main_paragraph.tagName == "SPAN") main_paragraph = this.getParentParagraph(main_paragraph);
    //  console.log("main_1: ", main_paragraph);
    //  if (main_paragraph == undefined) return;
    if (main_paragraph.tagName == "P") main_paragraph = this.getParentDetails(main_paragraph);
    console.log("createDetails: ", main_paragraph);
    //let detail = Array.from(main_paragraph.childNodes).find((e) => e.tagName == "DETAILS");
    //console.log("main_paragraph: ", main_paragraph, " detail: ", detail);

    //if (detail != undefined) main_paragraph = detail;
    //else {
    //
    //}
    //detail = Array.from(main_paragraph.childNodes).find((e) => e.tagName == "DETAILS");
    //if (detail != undefined) main_paragraph = detail;
    let details = undefined;
    if (main_paragraph && main_paragraph.tagName != "DETAILS") {
      details = document.createElement("details");
      const summary = document.createElement("summary");
      details.appendChild(summary);
      summary.style.listStylePosition = "outside";
      summary.innerHTML = main_paragraph.outerHTML;
      main_paragraph.innerHTML = "";
      main_paragraph.removeAttribute("edit-text");
      main_paragraph.appendChild(details);
    } else {
      details = main_paragraph;
      console.log("details: ", details);
    }
    if (details == undefined) return;
    const paragraph = document.createElement("p");
    paragraph.setAttribute("edit-text", "");
    paragraph.setAttribute("edit-summary", "true");
    paragraph.innerHTML = response;
    paragraph.style.color = "red";
    details.appendChild(paragraph);
  }

  onUpdate(e) {
    if (e != undefined && typeof e == "function") this.defaultOnUpdate = e;
  }
}

const Tooltip = new _Tooltip();

// selecionar todos os elemento com o atributpo tooltip-div
const divs = Array.from(document.querySelectorAll("[tooltip-div]") || []);

divs.forEach((div) => {
  div.addEventListener("mouseup", function (e) {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText !== "") {
      const range = selection.getRangeAt(0);
      const boundingRect = range.getBoundingClientRect();
      const anchorNode = selection.anchorNode;
      const commonAncestor = range.commonAncestorContainer;
      const startElement = anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
      const endElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
      Tooltip.show(selectedText, boundingRect, selection, startElement, endElement);
    }
    e.stopPropagation();
  });
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") Tooltip.hide();
});

export default Tooltip;
Tooltip.onUpdate((content) => {
  console.log("update");
});

Tooltip.setActionAskAI(async (text, selectedText, paragraph) => {
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

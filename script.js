// METHOD ONE
window.addEventListener("keydown", (e) => {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <div class="first">
        <p class="codes">e.key</p>
        <button>${e.key === " " ? "Space" : e.key}</button>
        </div>
        <div class="first">
        <p class="codes">e.keyCode</p>
        <button>${e.keyCode}</button>
        </div>
        <div class="first">
        <p class="codes">e.code</p>
        <button>${e.code}</button>
        </div>`;
});

// METHOD TWO
// key: value,

// function keyCodeElements(e) {
//   const keyCodes = {
//     "e.key": e.key === " " ? "Space" : e.key,
//     "e.keyCode": e.keyCode,
//     "e.code": e.code,
//   };

//   for (let key in keyCodes) {
//     const container = document.querySelector(".container");
//     container.innerHTML = "";

//     const div = document.createElement("div");
//     div.className = "first";
//     const paragraph = document.createElement("p");
//     const btn = document.createElement("button");

//     const keyName = document.createTextNode(key);
//     const keyValue = document.createTextNode(keyCodes[key]);

//     paragraph.appendChild(keyName);
//     btn.appendChild(keyValue);
//     div.appendChild(para);
//     div.appendChild(btn);

//     container.appendChild(div);
//   }
// }

// window.addEventListener("keydown", keyCodeElements);

const periodicTable = document.getElementById("periodic-table");
const tooltip = document.getElementById("tooltip");

// Đọc file JSON chứa dữ liệu nguyên tố
fetch("src/elements.json")
  .then((response) => response.json())
  .then((elements) => {
    elements.forEach((elements) => {
      const div = document.createElement("div");
      const divNum = document.createElement("div");
      const divSymbol = document.createElement("div");
      const divName = document.createElement("div");
      div.classList.add("elements", `${elements.group}`);
      divNum.textContent = elements.atomicNumber;
      divNum.classList.add("numbers");
      divSymbol.classList.add("symbol");
      divName.classList.add("name");
      divSymbol.textContent = elements.symbol;
      divName.textContent = elements.name;
      div.appendChild(divNum);
      div.appendChild(divSymbol);
      div.appendChild(divName);
      div.style.gridColumn = `${elements.gridColumn}`;
      div.style.gridRow = `${elements.gridRow}`;
      periodicTable.appendChild(div);
    });
  });
fetch("src/annotations.json")
  .then((response) => response.json())
  .then((annotation) => {
    annotation.forEach((annotation) => {
      console.log(annotation);
      const div = document.createElement("div");
      const divName = document.createElement("div");
      const divNum = document.createElement("div");
      div.classList.add("elements", `${annotation.group}`, "list_element");
      div.id = "list_element";
      divNum.classList.add("numbers");
      divName.classList.add("name");
      divNum.textContent = annotation.numbers;
      divName.textContent = annotation.name;
      div.style.gridColumn = `${annotation.gridColumn}`;
      div.style.gridRow = `${annotation.gridRow}`;
      div.appendChild(divNum);
      div.appendChild(divName);
      periodicTable.appendChild(div);
    });
  });

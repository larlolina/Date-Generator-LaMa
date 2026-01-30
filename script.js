let dates = [
  { cat: "Essen", idea: "Italienisch essen gehen" },
  { cat: "Bar", idea: "Cocktailbar ausprobieren" },
  { cat: "Ausflug", idea: "Spaziergang am See" }
];

const category = document.getElementById("category");
const result = document.getElementById("result");

function refresh() {
  category.innerHTML = "";
  [...new Set(dates.map(d => d.cat))].forEach(c => {
    let o = document.createElement("option");
    o.textContent = c;
    category.appendChild(o);
  });
}

document.getElementById("roll").onclick = () => {
  const f = dates.filter(d => d.cat === category.value);
  result.textContent = f[Math.floor(Math.random() * f.length)].idea;
};

document.getElementById("add").onclick = () => {
  dates.push({
    cat: newCategory.value,
    idea: newIdea.value
  });
  refresh();
};

refresh();

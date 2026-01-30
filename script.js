const baseDates = [
  { cat: "Aktivität", idea: "Kostenlose Hafenrundfahrt mit der ÖPNV-Fähre und eine Piccolo-Flasche Sekt" },
  { cat: "Aktivität", idea: "Richtige Hafenrundfahrt" },
  { cat: "Aktivität", idea: "Minigolf (Planten und Blomen, Stadtpark oder Schwarzlichtviertel)" },
  { cat: "Aktivität", idea: "Film im Abaton-Kino" },
  { cat: "Aktivität", idea: "Frühstücken und Shoppen auf dem Isemarkt (Di, Fr)" },
  { cat: "Aktivität", idea: "Ausflug in den Loki-Schmidt-Garten (Snacks für ein kleines Picknick mitnehmen!)" },
  { cat: "Aktivität", idea: "Ausflug ins Planetarium" },
  { cat: "Aktivität", idea: "Kulturprogramm im Kampnagel" },
  { cat: "Aktivität", idea: "Ausstellung in den Deichtorhallen gucken" },
  { cat: "Aktivität", idea: "Wellness-Tag im Hamam im Hamam Hafen Hamburg" },
  { cat: "Aktivität", idea: "Trödeln auf dem Nachtflohmarkt in der Rindermarkthalle (Mi, Do)" },
  { cat: "Aktivität", idea: "Trödeln auf dem Flohdom auf der Bahrenfelder Trabrennbahn" },
  { cat: "Aktivität", idea: "Last-minute Musical Tickets buchen" },
  { cat: "Aktivität", idea: "Rehe füttern im Wildpark Schwarze Berge" },
  { cat: "Aktivität", idea: "Waldspaziergang und Hochlandrinder gucken im Naturschutzgebiet Höltigbaum" },
  { cat: "Aktivität", idea: "Sonnenuntergang am Hafen schauen" },
  { cat: "Aktivität", idea: "Irgendein Konzert im Knust oder MOJO" },
  { cat: "Aktivität", idea: "Dart spielen in nächstgelegener Kneipe" },
  
  { cat: "Aktivität mit Freunden", idea: "Kegeln im Das Lemon" },
  { cat: "Aktivität mit Freunden", idea: "Billard auf der Hoheluftchaussee" },
  { cat: "Aktivität mit Freunden", idea: "Pubquiz im Galopper (Mo, Di), Landgang-Brauerei (Fr) oder woanders" },
  { cat: "Aktivität mit Freunden", idea: "BattleKart in Bispingen" },
  { cat: "Aktivität mit Freunden", idea: "Brettspielabend" },
  
  { cat: "Bar", idea: "Einfach Bar bei google maps eingeben und zum ersten Vorschlag gehen" },
  { cat: "Bar", idea: "Fancy Drinks im Botanic District" },
  { cat: "Bar", idea: "Bohemian Bar in der Deichstraße" },
  { cat: "Bar", idea: "Mit Aussicht trinken im Clouds" },
  { cat: "Bar", idea: "Kunstvoll zusammengestellte Drinks und Tacos in der Collab Bar auf St. Pauli" },
  { cat: "Bar", idea: "Mit Potenzial zum Versacken: The Rabbithole Bar auf der kleinen Freiheit" },
  { cat: "Bar", idea: "Ein schönes Glas Wein in der Alten Druckerei in der Innenstadt" },
  { cat: "Bar", idea: "Wein probieren im Vineyard Eimsbüttel" },
  { cat: "Bar", idea: "Eimsbütteler Bars testen im Rye & Dry" },
  { cat: "Bar", idea: "Eimsbütteler Bars testen in der Auster Bar" },
  { cat: "Bar", idea: "Drinks am Rande der Schanze im Lilli Escher" },
  { cat: "Bar", idea: "Drinks mit Aussicht im KARO&PAUL im Bunker" },
  
  { cat: "Essen gehen", idea: "Kleine Brunnenstraße 1 in Ottensen" },
  { cat: "Essen gehen", idea: "Restaurant HACO in St. Pauli" },
  { cat: "Essen gehen", idea: "Mastroianni Bar im Eppendorfer Weg mit Mini-Pizzen und Mini-Cocktails" },
  { cat: "Essen gehen", idea: "Nordische Tapas im Heemann im Eppendorfer Weg" },
  { cat: "Essen gehen", idea: "Restaurant Nil (vielleicht Spargel essen, wenn das zeitlich gerade passt?)" },
  { cat: "Essen gehen", idea: "Ausgefallenes Essen im Restaurant Jellyfish auf der Weidenallee" },
  { cat: "Essen gehen", idea: "Mexikanisches Essen direkt auf dem Kiez in der Mexiko Straße" },
  { cat: "Essen gehen", idea: "Italienisch Essen im Crispi in Ottensen" },
  { cat: "Essen gehen", idea: "High-Class Küche vor Ort testen im Heimatjuwel" },
  { cat: "Essen gehen", idea: "Koreanische Tapas im sulsul" },
  
  { cat: "Sommer-Aktivität", idea: "Mit dem SUP über die Alster schippern" },
  { cat: "Sommer-Aktivität", idea: "Lichtspiele im Planten un Blomen" },
  { cat: "Sommer-Aktivität", idea: "Tretbootfahren auf dem Stadtparksee" },
  { cat: "Sommer-Aktivität", idea: "Fahrradausflug in den Volkspark" },
  { cat: "Sommer-Aktivität", idea: "Aufstieg auf den grünen Bunker" },
  { cat: "Sommer-Aktivität", idea: "Tagesausflug mit dem Fahrrad in das Alte Land (Snackstop beim Hofcafe Ottilie)" },
  { cat: "Sommer-Aktivität", idea: "Tagesausflug nach Schwerin zum Schloss" },
  { cat: "Sommer-Aktivität", idea: "Tagesausflug auf die Insel Neuwerk" },
  { cat: "Sommer-Aktivität", idea: "Fahrradausflug nach Wilhelmsburg mit Stopp im Hofcafé Schröder" },
  { cat: "Sommer-Aktivität", idea: "Ausflug in die Boberger Dünen" },
  { cat: "Sommer-Aktivität", idea: "Ausflug in den Botanischen Sondergarten Wandsbek" },
  
  { cat: "Zuhause", idea: "Gemütlich It takes two auf dem Sofa spielen" },
  { cat: "Zuhause", idea: "Zieh dich für ein richtig schickes Date an und dann schauen wir mal, ob wir es noch schaffen, etwas zu essen zu machen" },
  { cat: "Zuhause", idea: "Zufallsrezept kochen" },
  { cat: "Zuhause", idea: "Gemütlich zusammen Brot backen" },
  { cat: "Zuhause", idea: "Irgendwas neues aus der Kiste unter dem Bett probieren" },
  { cat: "Zuhause", idea: "Kartenspiel Erzähl mir was" },
  { cat: "Zuhause", idea: "Einen richtig guten Film aussuchen und selbst Nachos mit Käse dazu machen" },
  { cat: "Zuhause", idea: "2-Personen Kartenspiel aussuchen" },
  { cat: "Zuhause", idea: "Outfit für nächste Date Night aussuchen / bestellen" },
];

const storedDates = JSON.parse(localStorage.getItem("userDates")) || [];
let dates = [...baseDates, ...storedDates];

const category = document.getElementById("category");
const result = document.getElementById("result");

const categoryContainer = document.getElementById("categories");
let selectedCategories = [];

function refreshCategories() {
  categoryContainer.innerHTML = "";

  const cats = [...new Set(dates.map(d => d.cat))];

  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "cat-btn";

    if (selectedCategories.includes(cat)) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      if (selectedCategories.includes(cat)) {
        selectedCategories = selectedCategories.filter(c => c !== cat);
        btn.classList.remove("active");
      } else {
        selectedCategories.push(cat);
        btn.classList.add("active");
      }
    };

    categoryContainer.appendChild(btn);
  });
}

document.getElementById("roll").onclick = () => {
  if (selectedCategories.length === 0) {
    result.textContent = "Bitte mindestens eine Kategorie auswählen";
    return;
  }

  const filtered = dates.filter(d =>
    selectedCategories.includes(d.cat)
  );

  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  result.textContent = pick.idea;
};

document.getElementById("add").onclick = () => {
  const cat = newCategory.value.trim();
  const idea = newIdea.value.trim();

  if (!cat || !idea) return;

  const entry = { cat, idea };

  storedDates.push(entry);
  localStorage.setItem("userDates", JSON.stringify(storedDates));

  dates.push(entry);
  refreshCategories();

  newCategory.value = "";
  newIdea.value = "";
};

refresh();

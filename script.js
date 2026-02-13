const baseDates = [
  { cat: "Aktivität", idea: "Schwaben-Ausflug auf der Elbe: Wir machen eine kostenlose Hafenrundfahrt von den Landungsbrücken mit der ÖPNV-Fähre. Eine Piccolo-Flasche Sekt darf hierbei nicht fehlen!" },
  { cat: "Aktivität", idea: "Wir gönnen uns eine richtige Hafenrundfahrt, am besten bei Abenddämmerung! Romantisch!" },
  { cat: "Aktivität", idea: "Wir gehen eine gemütliche und garnicht kompetitive Runde Minigolf spielen (im Planten und Blomen, im Stadtpark oder im Schwarzlichtviertel in Stellingen)" },
  { cat: "Aktivität", idea: "Wir schauen uns einen Film im Abaton-Kino an und kaufen dort auf jeden Fall eine Packung Eiskonfekt!" },
  { cat: "Aktivität", idea: "Frühstücken, Bummeln und Shoppen auf dem Isemarkt (Dienstag- oder Freitagmorgen)" },
  { cat: "Aktivität", idea: "Ausflug in den Loki-Schmidt-Garten (Snacks für ein kleines Picknick mitnehmen!)" },
  { cat: "Aktivität", idea: "Ausflug ins Planetarium - je nach Stimmung mit Vorführung oder nur zwecks Ausblick vom Turm" },
  { cat: "Aktivität", idea: "Wir suchen uns was aus dem Kulturprogramm im Kampnagel aus und machen einen Ausflug nach Barmbek" },
  { cat: "Aktivität", idea: "Wir gehen uns die aktuelle Ausstellung in den Deichtorhallen anschauen" },
  { cat: "Aktivität", idea: "Wir machen einen Wellness-Tag im Hamam im Hamam Hafen Hamburg" },
  { cat: "Aktivität", idea: "Trödeln auf dem Nachtflohmarkt in der Rindermarkthalle (Mi, Do abends)" },
  { cat: "Aktivität", idea: "Trödeln auf dem Flohdom auf der Bahrenfelder Trabrennbahn (Sa morgens)" },
  { cat: "Aktivität", idea: "Last-minute Musical Tickets buchen - wir nehmen, was gerade kommt!" },
  { cat: "Aktivität", idea: "Wir gehen Rehe füttern im Wildpark Schwarze Berge und genießen die frische Luft" },
  { cat: "Aktivität", idea: "Waldspaziergang und Hochlandrinder gucken im Naturschutzgebiet Höltigbaum" },
  { cat: "Aktivität", idea: "Ganz klassisch: Sonnenuntergang am Hafen schauen. Darf nicht fehlen: Kaltes Bier, kleiner Snack, viel knutschen." },
  { cat: "Aktivität", idea: "Wir suchen uns spontan das nächste Konzert im Knust oder MOJO raus" },
  { cat: "Aktivität", idea: "Wir gehen Dart spielen in der nächstgelegenen Alkoholiker-Kneipe" },
  
  { cat: "Aktivität mit Freunden", idea: "Gemeinsam Kegeln gehen im Das Lemon im Eimsbüttel" },
  { cat: "Aktivität mit Freunden", idea: "eine Runde Billard zocken auf der Hoheluftchaussee" },
  { cat: "Aktivität mit Freunden", idea: "Wir gehen zum Pubquiz im Galopper (Mo, Di), in der Landgang-Brauerei (Fr) oder woanders" },
  { cat: "Aktivität mit Freunden", idea: "Richtiger Ausflug zum BattleKart in Bispingen" },
  { cat: "Aktivität mit Freunden", idea: "Wir machen einen Brettspielabend - jeder darf sein Lieblingsspiel vorschlagen und dann wird gelost!"},
  { cat: "Aktivität mit Freunden", idea: "Ausflug ins Brettspielcafé Würfel und Zucker nach Barmbek"},
  { cat: "Aktivität mit Freunden", idea: "Kleine Fahrradausfahrt aus dem Hamburger Osten heraus mit Einkehr in Entenwerder"},
  
  { cat: "Bar", idea: "Einfach Bar bei google maps eingeben und zum ersten Vorschlag gehen" },
  { cat: "Bar", idea: "Wir probieren fancy Drinks im Botanic District" },
  { cat: "Bar", idea: "Wir schauen uns mal die Bohemian Bar in der Deichstraße genauer an" },
  { cat: "Bar", idea: "Wir gönnen uns Getränke mit Aussicht trinken im Clouds" },
  { cat: "Bar", idea: "Wir schnabulieren kunstvoll zusammengestellte Drinks und Tacos in der Collab Bar auf St. Pauli" },
  { cat: "Bar", idea: "Mit Potenzial zum Versacken: Wir versacken vielleicht in der The Rabbithole Bar auf der kleinen Freiheit" },
  { cat: "Bar", idea: "Wir gönnen uns ein schönes Glas Wein in der Alten Druckerei in der Innenstadt" },
  { cat: "Bar", idea: "Wir probieren Weine im Vineyard Eimsbüttel" },
  { cat: "Bar", idea: "Wir testen lokale Eimsbütteler Bars: das Rye & Dry" },
  { cat: "Bar", idea: "Wir testen lokale Eimsbütteler Bars: die Auster Bar" },
  { cat: "Bar", idea: "Wir trinken am Rande der Schanze im Lilli Escher" },
  { cat: "Bar", idea: "Wir genießen Drinks mit Aussicht im KARO&PAUL im Bunker" },
  { cat: "Bar", idea: "Kurze Wege: Wir probieren die Weine (und kein Wasser) im Vin Aqua Vin" },
  { cat: "Bar", idea: "Kurze Wege: Wir versuchen, im AURA Wein & Tapas Bar einen Tisch zu bekommen" },
  
  { cat: "Essen gehen", idea: "Wir probieren ganz neugierig die norddeutsche Küche mit mediterraner Note in der Kleine Brunnenstraße 1 in Ottensen" },
  { cat: "Essen gehen", idea: "Neues Konzept: Wir essen heute in der Mastroianni Bar im Eppendorfer Weg mit Mini-Pizzen und Mini-Cocktails" },
  { cat: "Essen gehen", idea: "Yummy: Wir essen nordische Tapas im Heemann im Eppendorfer Weg" },
  { cat: "Essen gehen", idea: "Dekadenter Ausflug zum Restaurant Nil (vielleicht Spargel essen, wenn das zeitlich gerade passt?)" },
  { cat: "Essen gehen", idea: "Wir probieren mal das ausgefallene Essen im Restaurant Jellyfish auf der Weidenallee" },
  { cat: "Essen gehen", idea: "Heute gibt es mexikanisches Essen direkt auf dem Kiez in der Mexiko Straße" },
  { cat: "Essen gehen", idea: "Wir gönnen uns fancy Italienisch Essen im Crispi in Ottensen" },
  { cat: "Essen gehen", idea: "Wir testen die High-Class Küche bei mir um die Ecke im Heimatjuwel" },
  { cat: "Essen gehen", idea: "Schon lang auf der to-do Liste aber nie geschafft: Koreanische Tapas im sulsul" },
  { cat: "Essen gehen", idea: "Der gemütliche Italiener ums Eck: Luca Bistro e Vino" },
  { cat: "Essen gehen", idea: "Den Touri-Hype verstehen lernen im LOKMAM KÖZ auf der Schanze" },
  
  { cat: "Sommer-Aktivität", idea: "Wir schippern mit dem SUP über die Außenalster" },
  { cat: "Sommer-Aktivität", idea: "Wir schauen uns die Lichtspiele im Planten un Blomen an" },
  { cat: "Sommer-Aktivität", idea: "Wir gehen zum Tretbootfahren auf den Stadtparksee" },
  { cat: "Sommer-Aktivität", idea: "Wir machen einen Fahrradausflug in den Volkspark" },
  { cat: "Sommer-Aktivität", idea: "Wir nehmen uns den anstrengenden Aufstieg auf den grünen Bunker vor (gottseidank gibt es unterwegs einen Coffeeshop)" },
  { cat: "Sommer-Aktivität", idea: "Wir machen einen Tagesausflug mit dem Fahrrad in das Alte Land (Snackstop beim Hofcafe Ottilie)" },
  { cat: "Sommer-Aktivität", idea: "Wir machen einen Tagesausflug nach Schwerin zum Schloss" },
  { cat: "Sommer-Aktivität", idea: "Wir machen einen Tagesausflug auf die Insel Neuwerk" },
  { cat: "Sommer-Aktivität", idea: "Wir machen einen Fahrradausflug nach Wilhelmsburg mit Stopp im Hofcafé Schröder" },
  { cat: "Sommer-Aktivität", idea: "Ausflug in die Boberger Dünen mit Zuschau-Stopp an der Start- und Landebahn für Segelflieger" },
  { cat: "Sommer-Aktivität", idea: "Ausflug in den Botanischen Sondergarten Wandsbek" },
  
  { cat: "Zuhause", idea: "Gemütlich It takes two auf dem Sofa spielen" },
  { cat: "Zuhause", idea: "Zieh dich für ein richtig schickes Date an und dann schauen wir mal, ob wir es noch schaffen, etwas zu essen zu machen" },
  { cat: "Zuhause", idea: "Zufallsrezept kochen - wir lassen uns von Chatty was aussuchen :)" },
  { cat: "Zuhause", idea: "Gemütlich zusammen ein Brot backen" },
  { cat: "Zuhause", idea: "Irgendwas neues aus der Kiste unter dem Bett probieren" },
  { cat: "Zuhause", idea: "Kartenspiel Erzähl mir was" },
  { cat: "Zuhause", idea: "Einen richtig guten Film aussuchen und selbst Nachos mit Käse dazu machen" },
  { cat: "Zuhause", idea: "2-Personen Kartenspiel aussuchen und spielen" },
  { cat: "Zuhause", idea: "Outfit für nächste Date Night aussuchen / bestellen" },
  { cat: "Zuhause", idea: "Neue Unterwäsche für nächste Date Night bestellen" },
];

const storedDates = JSON.parse(localStorage.getItem("userDates")) || [];
let dates = [...baseDates, ...storedDates];

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

refreshCategories();

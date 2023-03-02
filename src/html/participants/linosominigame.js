/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  // Select DOM elements
  const tasks_template = ["Du musst trinken, wenn du jemals eine falsche Telefonnummer gegeben hast.",
  "Du musst trinken, wenn du jemals beim Karaoke betrunken warst.",
  "Du musst trinken, wenn du jemals eine Beziehung per SMS beendet hast.",
  "Du musst trinken, wenn du jemals auf einer Party eingeschlafen bist.",
  "Du musst trinken, wenn du jemals auf einer Toilette eingeschlafen bist.",
  "Du musst trinken, wenn du jemals einen Wutanfall in der Öffentlichkeit hattest.",
  "Du musst trinken, wenn du jemals vergessen hast, mit wem du in der Nacht zuvor geschlafen hast.",
  "Du musst trinken, wenn du jemals einen Gegenstand aus Versehen in Brand gesetzt hast.",
  "Du musst trinken, wenn du jemals ein Geheimnis verraten hast.",
  "Du musst trinken, wenn du jemals Essen aus dem Müll gegessen hast.",
  "Du musst trinken, wenn du jemals eine Mahlzeit übersprungen hast, um zu trinken.",
  "Du musst trinken, wenn du jemals in einem Film eingeschlafen bist.",
  "Du musst trinken, wenn du jemals etwas geklaut hast.",
  "Du musst trinken, wenn du jemals in der Schule betrunken warst.",
  "Du musst trinken, wenn du jemals einen One-Night-Stand hattest.",
  "Du musst trinken, wenn du jemals einen Freund deiner Eltern attraktiv fandest.",
  "Du musst trinken, wenn du jemals ein peinliches Foto auf Social Media gepostet hast.",
  "Du musst trinken, wenn du jemals bei einem Bewerbungsgespräch gelogen hast.",
  "Du musst trinken, wenn du jemals deinen Freunden erzählt hast, dass du krank bist, um auszugehen.",
  "Du musst trinken, wenn du jemals beim Versuch, jemanden zu beeindrucken, hingefallen bist.",
  "Du musst trinken, wenn du jemals ein Date aufgrund von Geldproblemen abgebrochen hast.",
  "Du musst trinken, wenn du jemals vergessen hast, wo du geparkt hast.",
  "Du musst trinken, wenn du jemals bei einem Date eingeschlafen bist.",
  "Du musst trinken, wenn du jemals auf einem Tisch getanzt hast.",
  "Du musst trinken, wenn du jemals in der Öffentlichkeit geweint hast.",
  "Du musst trinken, wenn du jemals einen Text an die falsche Person geschickt hast.",
  "Du musst trinken, wenn du jemals bei einer Familienfeier betrunken warst.",
  "Du musst trinken, wenn du jemals einen peinlichen Spitznamen hattest.",
  "Verteile 1 Schluck an den Spieler mit dem höchsten Alkoholpegel.",
  "Verteile 2 Schlücke an den Spieler mit den wenigsten Klamotten an.",
  "Verteile 3 Schlücke an Spieler deiner Wahl.",
  "Verteile 1 Schluck an den Spieler, der als letztes etwas Dummes gesagt hat.",
  "Verteile 2 Schlücke an den Spieler, der am weitesten von dir entfernt sitzt.",
  "Verteile 1 Schluck an den Spieler, der als nächstes Geburtstag hat.",
  "Verteile 2 Schlücke an den Spieler mit den meisten Tattoos.",
  "Verteile 3 Schlücke an den Spieler mit dem kürzesten Bart.",
  "Verteile 1 Schluck an den Spieler, der als letztes auf Klo war.",
  "Verteile 2 Schlücke an den Spieler, der am meisten Haare auf der Brust hat.",
  "Verteile 3 Schlücke an den Spieler, der die meisten Geschwister hat.",
  "Verteile 1 Schluck an den Spieler, der als erstes am Morgen aufsteht.",
  "Verteile 2 Schlücke an den Spieler, der den höchsten Alkoholpegel hat.",
  "Verteile 3 Schlücke an den Spieler, der am meisten Geld in der Tasche hat.",
  "Verteile 1 Schluck an den Spieler, der als letztes ein Date hatte.",
  "Verteile 2 Schlücke an den Spieler, der die meisten Tattoos hat.",
  "Verteile 3 Schlücke an den Spieler, der am weitesten von seinem Zuhause entfernt wohnt.",
  "Verteile 1 Schluck an den Spieler, der am meisten von diesem Spiel versteht.",
  "Verteile 2 Schlücke an den Spieler, der die meisten Piercings hat.",
  "Verteile 3 Schlücke an den Spieler, der als erstes einen 6er-Pasch würfelt.",
  "Verteile 1 Schluck an den Spieler, der als erstes seinen Drink austrinkt.",
  "Verteile 2 Schlücke an den Spieler, der am meisten Sport treibt.",
  "Verteile 3 Schlücke an den Spieler, der am besten tanzt.",
  "Verteile 1 Schluck an den Spieler, der als letztes einen Cocktail bestellt hat.",
  "Verteile 2 Schlücke an den Spieler, der die meisten exotischen Reisen unternommen hat.",
  "Verteile 3 Schlücke an den Spieler, der am meisten über seine Ex-Freundin redet.",
  "Verteile 1 Schluck an den Spieler, der als nächstes ins Ausland reist.",
  "Verteile 2 Schlücke an den Spieler, der am meisten über seinen Job jammert.",
  "Verteile 3 Schlücke an den Spieler, der am meisten von diesem Spiel profitiert hat.",
  "Beginne eine Runde 'Ich hab noch nie' und sag etwas, das du noch nie getan hast. Derjenige, der es getan hat, trinkt 2 Schlücke.",
  "Beginne eine Runde 'Wahrheit oder Pflicht' und wähle, ob du eine Wahrheit sagen oder eine Pflicht erfüllen möchtest. Wenn du nicht erfüllst, trinke 3 Schlücke.",
  "Beginne eine Runde 'Wer bin ich?' und wähle eine Person, um sie den anderen Spielern zu erraten zu geben. Derjenige, der als Letzter errät, trinkt 1 Schluck.",
  "Beginne eine Runde '20 Fragen' und wähle ein Objekt aus, über das die anderen Spieler Fragen stellen müssen, um es zu erraten. Derjenige, der als Letzter errät, trinkt 2 Schlücke.",
  "Beginne eine Runde 'Flaschendrehen' und drehe die Flasche, um zu entscheiden, wer als nächstes dran ist. Derjenige, auf den die Flasche zeigt, trinkt 1 Schluck.",
  "Beginne eine Runde 'Never Have I Ever' und sag etwas, das du noch nie gemacht hast. Derjenige, der es getan hat, trinkt 1 Schluck.",
  "Beginne eine Runde 'Bierpong' und wähle die Kategorie, in der die Bälle landen müssen. Der Verlierer des Spiels trinkt 2 Schlücke.",
  "Beginne eine Runde 'Kings' und wähle eine Karte aus dem Stapel, um zu entscheiden, welche Aktion ausgeführt wird. Die Person, auf die die Aktion abzielt, trinkt 1 Schluck.",
  "Beginne eine Runde 'Fragen' und stelle die erste Frage, um das Spiel zu starten. Derjenige, der eine Frage nicht beantworten kann, trinkt 1 Schluck.",
  "Beginne eine Runde 'Rate, wer ich bin' und wähle eine Person oder ein Objekt aus, das die anderen Spieler erraten müssen. Derjenige, der als Letzter errät, trinkt 3 Schlücke.",
  "Beginne eine Runde 'Zwei Wahrheiten und eine Lüge' und sag drei Aussagen, von denen zwei wahr und eine falsch sind. Diejenige, die deine Lüge nicht erraten, trinkt 2 Schlücke.",
  "Beginne eine Runde 'Never Have I Ever' und wähle eine Kategorie, wie 'Sex', 'Drogen' oder 'Alkohol'. Derjenige, der es getan hat, trinkt 2 Schlücke.",
  "Beginne eine Runde 'Wahrheit oder Pflicht' und wähle eine Person aus, die dir eine Frage stellen oder dir eine Aufgabe geben muss. Wenn du nicht erfüllst, trinke 2 Schlücke.",
  "Beginne eine Runde 'Kategorie' und wähle eine Kategorie wie 'Filme', 'Musik' oder 'Essen'. Derjenige, der keinen passenden Begriff mehr nennen kann, trinkt 1 Schluck.",
  ];
          const nameInput = document.getElementById('name-input');
          const addButton = document.getElementById('add-button');
          const addplayer_text = document.getElementById("addplayer_text")
          const nameList = document.getElementById('name-list');
          const startButton = document.getElementById('start-button');
          const gameArea = document.getElementById('game-area');
          const winnerName = document.getElementById('winner-name');
          const taskText = document.getElementById('task-text');
  
          // End the game
          function endGame() {
              winnerName.style.display = "block";
              taskText.style.display = "none";
              winnerName.textContent = `Spiel beendet`;
              document.body.removeEventListener("click", () => {
                  round++;
                  if (tasks.length === 0) {
                      tasks = tasks_template
                      winnerName.innerText = "Spiel beendet!";
                      taskText.style.display = "none";
                      endGame()
              } else {
                  playRound();
              }
          });
          }
          
          // Array to store the names and tasks
          let names = [];
          let tasks = tasks_template;
          let round = 1;
  
          // Add a name to the array and the list
          addButton.addEventListener('click', () => {
              const name = nameInput.value.trim();
              if (name) {
                  names.push(name);
                  const li = document.createElement('li');
                  li.textContent = name;
                  nameList.appendChild(li);
                  nameInput.value = '';
              }
          });
  
          // Remove a name from the array and the list
          nameList.addEventListener('click', (event) => {
              if (event.target.tagName === 'LI') {
                  const index = Array.from(nameList.children).indexOf(event.target);
                  names.splice(index, 1);
                  nameList.removeChild(event.target);
              }
          });
  
          // Start the game with the selected names
          startButton.addEventListener('click', () => {
              if (names.length > 0) {
                  startButton.style.display = 'none';
                  addplayer_text.style.display = "none";
                  document.getElementById("hideme").style.display = "none";
                  nameInput.style.display = "none";
                  gameArea.style.display = 'block';
                  document.body.addEventListener('click', () => {
                  round++;
                  if (tasks.length === 0) {
                      tasks = tasks_template
                      winnerName.innerText = "Spiel beendet!";
                      taskText.style.display = "none";
                      endGame()
              } else {
                  playRound();
              }
          });
                  playRound();
              }
          });
  
          // Play a round of the game
          function playRound() {
              if (round > 50) {
                  endGame();
                  return;
              }
          
              const winnerIndex = Math.floor(Math.random() * names.length);
              const winner = names[winnerIndex];
              winnerName.textContent = `${winner}`;
  
              const taskIndex = Math.floor(Math.random() * tasks.length);
              const task = tasks[taskIndex];
              taskText.textContent = `${task}`;
              tasks.splice(taskIndex, 1);
  
              if (round == 1) {
                  nameList.style.display = 'none';
                  addButton.style.display = 'none';
              }
  
          }
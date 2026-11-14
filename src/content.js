export const navigation = [
  { id: 'home', label: 'Start', icon: 'home' },
  { id: 'winners', label: 'Gewinner', icon: 'trophy' },
  { id: 'tips', label: 'Tipps', icon: 'spark' },
  { id: 'rules', label: 'Regeln', icon: 'book' },
  { id: 'faq', label: 'FAQ', icon: 'help' },
];

export const winners = [
  { year: '2026', names: 'Valerio (2), Sofia (1), Simon (1) und Andri (1)', featured: true },
  { year: '2025', names: 'Sean (3), Caroline (2)' },
  { year: '2024', names: 'Sean (2), Caroline (1)' },
  { year: '2023', names: 'Linus (1), Nicole (1) und Marc (1)' },
  { year: '2022', names: 'Sean (1), Jana (1) und Valerio (1)' },
];

// Scoreboard: add one record per participant and update their counts after each edition.
export const participantStats = [
  { name: 'Linus', editions: 5, first: 1, second: 3, third: 1 },
  { name: 'Sean', editions: 5, first: 3, second: 0, third: 1 },
  { name: 'Lara', editions: 5, first: 0, second: 1, third: 3 },
  { name: 'Nicole', editions: 4, first: 1, second: 2, third: 1 },
  { name: 'Simon', editions: 5, first: 1, second: 1, third: 2 },
  { name: 'Caroline', editions: 5, first: 2, second: 2, third: 1 },
  { name: 'Valerio', editions: 5, first: 2, second: 0, third: 1 },
  { name: 'Marc', editions: 5, first: 1, second: 2, third: 1 },
  { name: 'Sofia', editions: 4, first: 1, second: 0, third: 2 },
  { name: 'Jana', editions: 4, first: 1, second: 0, third: 0 },
  { name: 'Gian', editions: 1, first: 0, second: 1, third: 0 },
  { name: 'Agostina', editions: 1, first: 0, second: 1, third: 0 },
  { name: 'Livio', editions: 3, first: 0, second: 0, third: 2 },
  { name: 'Andri', editions: 4, first: 1, second: 1, third: 2 },
  { name: 'Jonas', editions: 1, first: 0, second: 1, third: 0 },
];

export const tips = [
  ['Alles ist normal', 'Zu wenig getrunken', 'Such dir mehr Getränke'],
  ['Klumpiges Spucken', 'Zu wenig Nahrung', 'Hol dir was zu essen – und trink etwas Wasser.'],
  ['Es ist alles blau', 'Die Spiele haben erst begonnen und du liegst bereits auf dem Boden.', 'Hol dir Hilfe und lass dir ein Getränk bringen.'],
  ['Die Spiele sind öde', 'Das Orga-Team hat deinen Geschmack nicht getroffen.', 'Gib konstruktive Kritik ans Orga-Team – oder geh zu Mami und Papi und weine ein bisschen.'],
  ['Die Gegner sind gemein zu dir', 'Du gibst ihnen einen Grund dazu.', 'Sei besser oder beginn zu weinen (siehe Regelbuch, Artikel 5.3).'],
  ['Dein Getränk riecht nicht nach Kartoffelsirup', 'Du hast die Spiele missverstanden. Etwas fehlt in deinem Getränk.', 'Frag das Orga-Team, was fehlen könnte. (Achtung: Strafe incoming!)'],
  ['Du bist trotz Anmeldung verhindert', 'Du suchst nach Ausreden.', 'Schreib eine begründete Entschuldigung und hoffe auf eine nächste Chance.'],
  ['Du hast Hunger', 'Du hast dich nicht adäquat auf die Spiele vorbereitet.', 'Frag das Orga-Team, wann die Halftime-Show beginnt. Vielleicht gibt’s etwas zu knabbern.'],
  ['Knacks und Schmerz', 'Du hast dich verletzt.', 'Hol dir Hilfe und kümmere dich um deine Gesundheit.'],
  ['Du hast gewonnen', 'Obwohl dein Team nichts kann, hast du den Sieg ermöglicht.', 'Sei stolz auf dich und signiere den Pokal.'],
  ['Du hast verloren', 'Du scheinst ein schlechtes Team erwischt zu haben.', 'Hoffe auf ein besseres Team beim nächsten Mal. Oder trainiere fürs nächste Turnier.'],
];

export const rules = [
  {
    title: 'Artikel 1 · Teams',
    paragraphs: [
      '1.1 Die Teams werden zufällig gelost.',
      '1.2.1 Die Teilnehmenden werden in Zwei- bis Viererteams aufgeteilt (im Ermessen des Orga-Teams).',
      '1.2.2 Lediglich das Siegerteam der letzten Ausgabe muss, sofern möglich, unverändert als Titelverteidiger antreten.',
      '1.3 Ist ein Teilnehmer verhindert, entscheidet das Orga-Team über die neue Aufteilung.',
    ],
  },
  {
    title: 'Artikel 2 · Spiele',
    paragraphs: [
      '2.1 Es gibt acht Spiele.',
      '2.2 Vier dieser Spiele werden je zweimal gespielt.',
      '2.3 Vier dieser Spiele werden je einmal gespielt.',
      '2.4 Insgesamt werden zwölf Runden gespielt.',
      '2.5 Nach dem sechsten Spiel findet eine Spielpause statt. Das Orga-Team entscheidet, wie lange sie dauert, und kündigt die Wiederaufnahme mindestens fünf Minuten vorher an.',
    ],
  },
  {
    title: 'Artikel 3 · Punkte',
    paragraphs: [
      '3.1 Pro Team können maximal zwölf Punkte erreicht werden.',
      '3.2 Jedes Spiel wird mit einem Punkt für das Siegerteam und null Punkten für das Verliererteam bewertet.',
      '3.3 Bei Gleichstand am Ende eines Spiels legt das Orga-Team eine Lösung fest.',
    ],
  },
  {
    title: 'Artikel 4 · Sieger',
    paragraphs: [
      '4.1 Sieger ist das Team mit den meisten Punkten am Ende der Spiele.',
      '4.2 Die Siegerehrung wird vom Orga-Team abgehalten.',
      '4.3 Bei Punktegleichheit wird mithilfe des einzig wahren Spiels ein Sieger ermittelt. Die Teams wählen gemeinsam ein Entscheidungsspiel.',
      '4.4.1 Das Siegerteam darf sich ein Jahr lang – bis zur Austragung der nächsten Spiele – um die glamouröse goldene Giesskanne kümmern und sich während oder nach der Siegerehrung mit den Namen der Teammitglieder darauf verewigen.',
      '4.4.2 Die Namen müssen in normaler Schriftgrösse und neben dem Jahresdatum stehen.',
      '4.5 Das Siegerteam darf für die nächste Ausgabe ein Wunschspiel anmelden. Das Orga-Team entscheidet, ob und wie dieses durchgeführt wird.',
    ],
  },
  {
    title: 'Artikel 5 · Sonstige Bestimmungen',
    paragraphs: [
      '5.1 Ehre ist eine Sache der Ehre.',
      '5.2 Unlauteres Verhalten wird bestraft.',
      '5.3 Den Gegner mithilfe verbaler Äusserungen zu demoralisieren, ist erwünscht.',
      { text: '5.4 Wer eigene Linoso Games veranstalten möchte, muss einen Antrag über das ', link: 'Kontaktformular', href: '#/faq', suffix: ' stellen. Bei Nichteinhaltung dieser Bedingungen werden Schadensersatzforderungen von 1’000’000 CHF gegen den Schädiger geltend gemacht.' },
      '5.5 Mit Beginn des ersten Spiels gilt das Regelbuch als gelesen und akzeptiert. Ein nachträgliches Einspruchsrecht besteht nicht.',
      '5.6 Jeder Teilnehmer darf während der Spiele einen Shot verteilen. Dieser darf nicht abgelehnt werden; andernfalls greift zusätzlich zum Shot Artikel 5.2.',
    ],
  },
  {
    title: 'Artikel 6 · Haftungsausschlüsse',
    paragraphs: [
      '6.1 Jegliche Haftung wird abgelehnt.',
      '6.2 Die Teilnahme an den Spielen geschieht auf eigene Gefahr.',
      '6.3 Mit der Teilnahme wird akzeptiert, dass das Orga-Team nicht für allfällige Schäden haftbar gemacht werden kann. Wie in Artikeln 6.1 und 6.2 festgehalten, muss jeder Teilnehmer selbst für eine Absicherung aufkommen.',
    ],
  },
  {
    title: 'Artikel 69 · Orga',
    paragraphs: [
      '69.1 Das Orga-Team besteht aus vier Personen.',
      '69.2 In Streitfällen berät sich das Orga-Team. Der Entscheid wird demokratisch gefällt und ist rechtsgültig.',
      '69.3 Das Orga-Team handelt nicht zwingend im Willen der Allgemeinheit.',
      '69.4 Das Orga-Team entscheidet über Form und Härte der jeweiligen Strafen.',
    ],
  },
];

export const questions = [
  {
    question: 'Warum gibt es die Linoso Games?',
    answer: 'Die Erfahrung hat gezeigt, dass eine «0815»-Geburtstagsfeier eintönig sein kann. Eines frühen Morgens kam Linus die Idee, seine Geburtstagsfeier zu revolutionieren. Die Idee, kein übliches Fest zu feiern, war geboren. Zusammen mit Sean und Marc und etwas kreativitätsförderndem Weizensirup wurden die Linoso Games entwickelt.',
  },
  {
    question: 'Wie werden die Teams entschieden?',
    answer: 'Zuerst werden die Teams ausgelost. Lediglich das Siegerteam des Vorjahres darf oder muss wieder als Team antreten. Ist ein Kandidat verhindert und die Teams gehen nicht mehr auf, bekommt das Siegerteam einen zusätzlichen zugelosten Spieler.',
  },
  {
    question: 'Wer entscheidet über die Spiele und deren Regeln?',
    answer: 'Die Spiele werden vom Orga-Team geplant und gemeinsam festgelegt.',
  },
  {
    question: 'Wer ist das Orga-Team?',
    answer: 'Linus, Sean, Simon und Marc.',
  },
  {
    question: 'Kann ich auch teilnehmen?',
    answer: 'Keine Einladung, keine Teilnahme – tut uns leid!',
  },
  {
    question: 'Darf ich die Linoso Games nachahmen?',
    answer: 'Für dieses Anliegen kontaktiere bitte das Orga-Team über das Kontaktformular.',
  },
  {
    question: 'Wer sind die Gründerväter der Linoso Games?',
    answer: 'Die Idee stammt von Linus. Das erste Orga-Team bestand aus Linus, Sean und Marc.',
  },
];

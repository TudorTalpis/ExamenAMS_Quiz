import type { Question } from '../types/question';

export const useCaseQuestions: Question[] = [
  {
    id: 'uc-001',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Ce este un actor în diagrama cazurilor de utilizare?',
    options: [
      'Entitate externă sistemului care interacționează cu acesta',
      'O clasă internă a sistemului',
      'Un caz de utilizare special',
      'Un utilizator autentificat în sistem',
    ],
    correctIndex: 0,
    explanation:
      'Actorul este o entitate EXTERNĂ sistemului (persoană, alt sistem, dispozitiv) care interacționează cu acesta. NU face parte din sistem. Se reprezintă cu o siluetă umană. Denumire: substantiv.',
  },
  {
    id: 'uc-002',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Cum se denumește corect un caz de utilizare conform regulilor prof. Sava N.?',
    options: [
      'Verb la infinitiv, maxim 3 cuvinte (ex: „Autentifica utilizator")',
      'Substantiv (ex: „Autentificare")',
      'Verb la prezent indicativ (ex: „Autentifică utilizatorul")',
      'Orice denumire descriptivă, fără restricții',
    ],
    correctIndex: 0,
    explanation:
      'REGULA STRICTĂ: Cazul de utilizare = verb la INFINITIV, maxim 3 cuvinte. Actorul = SUBSTANTIV. Exemple corecte: „Autentifica Utilizator", „Plasa Comandă". „Autentificare" e substantiv → GREȘIT pentru un caz de utilizare.',
  },
  {
    id: 'uc-003',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Ce reprezintă granița sistemului în diagrama cazurilor de utilizare?',
    options: [
      'Dreptunghiul care delimitează cazurile de utilizare (intern) de actori (extern)',
      'O relație specială între actori',
      'Interfața grafică a aplicației',
      'Lista de cerințe funcționale',
    ],
    correctIndex: 0,
    explanation:
      'Granița sistemului (system boundary) = dreptunghiul cu eticheta numelui sistemului. Cazurile de utilizare se plasează ÎNĂUNTRU; actorii se plasează AFARĂ. Delimitează scopul sistemului.',
  },
  {
    id: 'uc-004',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Ce relație UML se folosește când un caz de utilizare este OBLIGATORIU inclus în altul?',
    options: [
      '<<include>> (cazul de bază → cazul inclus)',
      '<<extend>> (cazul de bază → extensia)',
      'Generalizare (cazul specific → cazul general)',
      'Asociere simplă fără stereotip',
    ],
    correctIndex: 0,
    explanation:
      '<<include>> înseamnă că funcționalitatea cazului inclus este MEREU executată ca parte din cazul de bază. Săgeata merge de la CAZUL DE BAZĂ spre CAZUL INCLUS. Ex: "Plasa Comandă" include obligatoriu "Verifica Stoc".',
  },
  {
    id: 'uc-005',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Ce relație UML se folosește când un caz de utilizare este OPȚIONAL, executat doar în anumite condiții?',
    options: [
      '<<extend>> (extensia → cazul de bază)',
      '<<include>> (cazul de bază → extensia)',
      'Generalizare (extensia → cazul de bază)',
      'Dependență simplă',
    ],
    correctIndex: 0,
    explanation:
      '<<extend>> înseamnă că funcționalitatea este OPȚIONALĂ/CONDIȚIONATĂ. Săgeata merge de la EXTENSIE spre CAZUL DE BAZĂ (invers față de <<include>>). Ex: "Aplica Reducere" extinde "Plasa Comandă" (doar dacă are cupon).',
  },
  {
    id: 'uc-006',
    topic: 'use-case',
    difficulty: 'trap',
    prompt: 'Direcția săgeții pentru <<include>>: "Plasa Comandă" include obligatoriu "Verifica Stoc". Cum se trasează săgeata?',
    options: [
      '"Plasa Comandă" → "Verifica Stoc" (de la cel care include spre cel inclus)',
      '"Verifica Stoc" → "Plasa Comandă" (de la cel inclus spre cel care include)',
      'Linie fără săgeată (bidirecțional)',
      'Săgeată de la Actor spre ambele cazuri',
    ],
    correctIndex: 0,
    explanation:
      'INCLUDE: săgeata pornește de la CAZUL DE BAZĂ spre CAZUL INCLUS. Logic: „Plasa Comandă" are nevoie de „Verifica Stoc". Inversarea e o capcană clasică. Rețineți: <<include>> = dependență, deci clientul → furnizorul.',
  },
  {
    id: 'uc-007',
    topic: 'use-case',
    difficulty: 'trap',
    prompt: 'Direcția săgeții pentru <<extend>>: "Aplica Reducere" extinde opțional "Plasa Comandă". Cum se trasează săgeata?',
    options: [
      '"Aplica Reducere" → "Plasa Comandă" (de la extensie spre cazul de bază)',
      '"Plasa Comandă" → "Aplica Reducere" (de la cazul de bază spre extensie)',
      'Linie fără direcție',
      'Săgeată inversă față de <<include>>, deci de la bază spre extensie',
    ],
    correctIndex: 0,
    explanation:
      'EXTEND: săgeata pornește de la EXTENSIE spre CAZUL DE BAZĂ – INVERS față de <<include>>! „Aplica Reducere" → „Plasa Comandă". Logica: extensia „se agață" de cazul de bază. Aceasta este capcana #1 la examene.',
  },
  {
    id: 'uc-008',
    topic: 'use-case',
    difficulty: 'hard',
    prompt: 'Câte relații de tipuri diferite poate avea un actor cu cazurile de utilizare conform regulilor UML stricte?',
    options: [
      'Doar asociere bidirecțională (linie simplă fără săgeată)',
      'Asociere unidirecțională (Actor → Caz) și generalizare',
      'Include, extend și asociere',
      'Orice relație UML standard',
    ],
    correctIndex: 0,
    explanation:
      'Conform regulilor prof. Sava N.: actorul se leagă de cazurile de utilizare DOAR prin ASOCIERE BIDIRECȚIONALĂ (linie simplă). Relațiile <<include>> și <<extend>> sunt EXCLUSIV între cazuri de utilizare. Actorul NU folosește include/extend.',
  },
  {
    id: 'uc-009',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Când se folosește generalizarea între actori?',
    options: [
      'Când un actor specializat moștenește toate cazurile de utilizare ale actorului general (minim 3 actori)',
      'Când doi actori interacționează cu același caz de utilizare',
      'Când un actor înlocuiește alt actor',
      'Generalizarea nu se aplică între actori',
    ],
    correctIndex: 0,
    explanation:
      'Generalizarea între actori: actorul specializat moștenește interacțiunile actorului general. Ex: „Administrator" (specific) generalizează „Utilizator" (general). MINIM 3 actori sunt necesari (1 general + min 2 specifici).',
  },
  {
    id: 'uc-010',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Când se folosește generalizarea între cazurile de utilizare?',
    options: [
      'Când un caz de utilizare specific moștenește și poate suprascrie comportamentul unui caz general',
      'Ca alternativă la <<include>>',
      'Când două cazuri de utilizare sunt identice',
      'Când un actor poate accesa mai multe cazuri simultan',
    ],
    correctIndex: 0,
    explanation:
      'Generalizarea între cazuri: cazul specific MOȘTENEȘTE comportamentul cazului general și poate adăuga/suprascrie pași. Diferit de <<include>> (care e obligatoriu, nu moștenire) și <<extend>> (care e opțional). Minim 3 elemente.',
  },
  {
    id: 'uc-011',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Poate un actor să fie un alt sistem software?',
    options: [
      'Da, un sistem extern poate fi actor',
      'Nu, actorii sunt exclusiv persoane fizice',
      'Nu, sistemele externe se modelează ca noduri',
      'Da, dar doar cu stereotipul <<system>>',
    ],
    correctIndex: 0,
    explanation:
      'Actorii pot fi: persoane, sisteme externe, dispozitive sau organizații – orice entitate EXTERNĂ care interacționează cu sistemul modelat. Un sistem de plăți extern este actor pentru sistemul de comenzi.',
  },
  {
    id: 'uc-012',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Cum se reprezintă grafic un caz de utilizare?',
    options: [
      'Elipsă (oval) cu numele înăuntru',
      'Dreptunghi cu compartimente',
      'Siluetă umană',
      'Cerc cu o linie verticală',
    ],
    correctIndex: 0,
    explanation:
      'Cazul de utilizare = ELIPSĂ. Actorul = siluetă umană. Clasa = dreptunghi cu compartimente. Nu trebuie confundate notațiile grafice.',
  },
  {
    id: 'uc-013',
    topic: 'use-case',
    difficulty: 'hard',
    prompt: 'Care este regula privind multiplicitatea relației Actor–Caz de utilizare?',
    options: [
      'De obicei nu se specifică multiplicitate pe asocierile Actor–Caz',
      'Multiplicitate 1..1 obligatorie pe ambele capete',
      'Multiplicitate 1..* obligatorie la capătul actorului',
      'Multiplicitate 0..* obligatorie la capătul cazului de utilizare',
    ],
    correctIndex: 0,
    explanation:
      'Asocierile Actor–Caz de utilizare nu poartă de obicei multiplicitate (se subînțelege semantic că un actor poate participa în mai multe instanțe). Conform cursului, multiplicitatea explicită nu se notează pe aceste relații.',
  },
  {
    id: 'uc-014',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Care afirmație despre <<extend>> este corectă?',
    options: [
      '<<extend>> este opțional și condiționat; cazul de bază NU știe de extensie',
      '<<extend>> este obligatoriu și mereu executat',
      '<<extend>> înseamnă că extensia este o versiune extinsă a cazului de bază',
      '<<extend>> este o formă de generalizare',
    ],
    correctIndex: 0,
    explanation:
      'CHEIE: Cazul de bază este INDEPENDENT – funcționează fără extensie. Extensia „se inserează" în cazul de bază la puncte de extensie. Cazul de bază NU cunoaște extensia la design-time. Spre deosebire de <<include>> unde cazul de bază APELEAZĂ explicit inclus-ul.',
  },
  {
    id: 'uc-015',
    topic: 'use-case',
    difficulty: 'trap',
    prompt: 'Care este diferența principală între <<include>> și <<extend>>?',
    options: [
      '<<include>> = obligatoriu, mereu executat; <<extend>> = opțional, condiționat',
      '<<include>> = opțional; <<extend>> = obligatoriu',
      '<<include>> = generalizare; <<extend>> = specializare',
      'Nu există diferență practică, sunt sinonime',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA FUNDAMENTALĂ: <<include>> = MEREU executat (obligatoriu, necesar). <<extend>> = UNEORI executat (opțional, condiționat de un punct de extensie). Ambele sunt relații de dependență, dar cu semantici opuse ca obligativitate.',
  },
  {
    id: 'uc-016',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Poate un actor să apară în mai multe diagrame de cazuri de utilizare ale aceluiași sistem?',
    options: [
      'Da, același actor poate apărea în mai multe diagrame',
      'Nu, fiecare actor apare într-o singură diagramă',
      'Nu, actorii sunt unici pe întreg proiectul',
      'Da, dar cu denumiri diferite în fiecare diagramă',
    ],
    correctIndex: 0,
    explanation:
      'Același actor poate apărea în mai multe diagrame, reprezentând același rol extern. Un „Utilizator" poate fi actor în diagrama de autentificare ȘI în diagrama de comenzi.',
  },
  {
    id: 'uc-017',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Ce înseamnă că un caz de utilizare este „primar"?',
    options: [
      'Este inițiat direct de un actor și reprezintă o funcționalitate completă valoroasă pentru actor',
      'Este primul caz de utilizare din diagramă',
      'Este inclus în toate celelalte cazuri',
      'Are cea mai mare prioritate de implementare',
    ],
    correctIndex: 0,
    explanation:
      'Cazul de utilizare primar: inițiat de un actor, reprezintă o funcționalitate completă cu valoare pentru utilizator. Ex: „Plasa Comandă" e primar. „Verifica Autentificare" (inclus) nu e primar – e auxiliar.',
  },
  {
    id: 'uc-018',
    topic: 'use-case',
    difficulty: 'hard',
    prompt: 'Conform regulilor UML stricte, asocierea dintre actor și caz de utilizare este:',
    options: [
      'BIDIRECȚIONALĂ (linie fără săgeată)',
      'Unidirecțională de la actor la caz (Actor → Caz)',
      'Unidirecțională de la caz la actor (Caz → Actor)',
      'Dependență (linie întreruptă)',
    ],
    correctIndex: 0,
    explanation:
      'Conform prof. Sava N.: asocierea Actor–Caz de utilizare este BIDIRECȚIONALĂ (linie simplă fără săgeată). NU se pune săgeată direcțională. Relația <<include>>/<<extend>> are săgeată, dar acestea sunt DEPENDENȚE, nu asocieri actor-caz.',
  },
  {
    id: 'uc-019',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Un sistem de librărie online are cazuri: "Cauta Carte", "Plasa Comanda", "Verifica Disponibilitate". "Plasa Comanda" are nevoie MEREU de "Verifica Disponibilitate". Ce relație se folosește?',
    options: [
      '<<include>>: "Plasa Comanda" → "Verifica Disponibilitate"',
      '<<extend>>: "Verifica Disponibilitate" → "Plasa Comanda"',
      'Generalizare: "Verifica Disponibilitate" → "Plasa Comanda"',
      'Asociere simplă fără stereotip',
    ],
    correctIndex: 0,
    explanation:
      'MEREU necesar → <<include>>. Săgeata: de la cel care include spre cel inclus: "Plasa Comanda" →<<include>>→ "Verifica Disponibilitate". Inversul (<<extend>>) ar implica că verificarea e opțională — nu este cazul.',
  },
  {
    id: 'uc-020',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Un sistem bancar are cazul "Retrage Numerar". Uneori se afișează un mesaj special "Notifica Descoperit" (doar dacă suma retrasă depășește soldul). Ce relație se folosește?',
    options: [
      '<<extend>>: "Notifica Descoperit" → "Retrage Numerar"',
      '<<include>>: "Retrage Numerar" → "Notifica Descoperit"',
      'Generalizare: "Notifica Descoperit" → "Retrage Numerar"',
      'Dependență simplă',
    ],
    correctIndex: 0,
    explanation:
      'OPȚIONAL/CONDIȚIONAT → <<extend>>. "Notifica Descoperit" extinde "Retrage Numerar" (se execută DOAR dacă suma > sold). Săgeata: EXTENSIA → BAZA. "Retrage Numerar" funcționează normal și fără notificare.',
  },
  {
    id: 'uc-021',
    topic: 'use-case',
    difficulty: 'hard',
    prompt: 'Poate un caz de utilizare să fie legat direct de alt caz de utilizare prin asociere simplă (fără <<include>>/<<extend>>)?',
    options: [
      'Nu, relațiile dintre cazuri de utilizare sunt DOAR <<include>>, <<extend>> sau generalizare',
      'Da, asocierea simplă e permisă între orice elemente',
      'Da, dar doar dacă ambele cazuri au același actor',
      'Da, cu multiplicitate 1..1 obligatorie',
    ],
    correctIndex: 0,
    explanation:
      'Conform regulilor UML stricte: între CAZURI DE UTILIZARE nu există asociere simplă. Relațiile permise caz-caz sunt: <<include>>, <<extend>>, generalizare. Asocierea simplă (bidirecțională) este EXCLUSIV Actor ↔ Caz de utilizare.',
  },
  {
    id: 'uc-022',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Ce este scenariul unui caz de utilizare?',
    options: [
      'O secvență specifică de pași care descrie o instanță a execuției cazului de utilizare',
      'Diagrama completă a cazurilor de utilizare',
      'Numele cazului de utilizare',
      'Lista actorilor implicați',
    ],
    correctIndex: 0,
    explanation:
      'Scenariul = o instanță concretă a cazului de utilizare (o execuție specifică). Ex: cazul „Plasa Comandă" are scenariul „Clientul Ion comandă 2 cărți prin card Visa". Include și scenarii alternative (ex: card refuzat).',
  },
  {
    id: 'uc-023',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Care afirmație despre actorii primari și secundari este corectă?',
    options: [
      'Actorul primar inițiază cazul de utilizare; actorul secundar este notificat/consultat',
      'Actorul primar e cel mai important utilizator al sistemului',
      'Actorul secundar nu apare în diagramă',
      'Actorii primari sunt la stânga, secundarii la dreapta – indiferent de rol',
    ],
    correctIndex: 0,
    explanation:
      'Actor primar: inițiază interacțiunea (de obicei la stânga graniței). Actor secundar: participă dar nu inițiază (de obicei la dreapta). Ex: Client (primar) plasează comanda, Sistemul de Plăți (secundar) este consultat.',
  },
  {
    id: 'uc-024',
    topic: 'use-case',
    difficulty: 'trap',
    prompt: 'Conform regulilor, câți actori și cazuri de utilizare sunt necesare MINIM pentru a reprezenta o generalizare între actori?',
    options: [
      '3 actori (1 general + minim 2 specifici)',
      '2 actori (1 general + 1 specific)',
      '4 actori (2 generali + 2 specifici)',
      'Minim 1 actor general și orice număr de specifici',
    ],
    correctIndex: 0,
    explanation:
      'REGULA GENERALIZARE: MINIM 3 elemente, indiferent că e între actori, clase sau cazuri de utilizare. 1 general + MINIM 2 specifici. O generalizare cu un singur element specific este INCORECTĂ conform sintaxei UML din curs.',
  },
  {
    id: 'uc-025',
    topic: 'use-case',
    difficulty: 'medium',
    prompt: 'Sistemul are: Utilizator (actor general), Client (actor specific), Administrator (actor specific). Ce relație se folosește?',
    options: [
      'Generalizare: Client → Utilizator și Administrator → Utilizator',
      '<<include>>: Utilizator include Client și Administrator',
      'Asociere: Utilizator ↔ Client ↔ Administrator',
      'Dependență: Client → Utilizator',
    ],
    correctIndex: 0,
    explanation:
      'Client ȘI Administrator sunt specializări ale Utilizatorului → GENERALIZARE. Săgeata merge de la specific spre general: Client → Utilizator, Administrator → Utilizator. Sunt 3 actori, condiție respectată.',
  },
  {
    id: 'uc-026',
    topic: 'use-case',
    difficulty: 'easy',
    prompt: 'Ce tip de diagramă se folosește pentru a descrie cerințele funcționale la nivel înalt ale unui sistem?',
    options: [
      'Diagrama Cazurilor de Utilizare',
      'Diagrama Claselor',
      'Diagrama de Secvențe',
      'Diagrama Componentelor',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Cazurilor de Utilizare captează CERINȚELE FUNCȚIONALE la nivel înalt din perspectiva utilizatorilor externi. Este prima diagramă creată în analiza unui sistem, înainte de detaliile de implementare.',
  },
  {
    id: 'uc-027',
    topic: 'use-case',
    difficulty: 'hard',
    prompt: 'Care relație UML NU este permisă în diagrama cazurilor de utilizare conform regulilor stricte?',
    options: [
      'Compoziția (romb plin) între cazuri de utilizare',
      '<<include>> între cazuri de utilizare',
      '<<extend>> între cazuri de utilizare',
      'Generalizarea între actori',
    ],
    correctIndex: 0,
    explanation:
      'Compoziția și agregarea sunt relații ale DIAGRAMEI CLASELOR, nu ale diagramei cazurilor de utilizare. Relații permise în diagrama UC: asociere (actor-caz), <<include>>, <<extend>>, generalizare (actor-actor sau caz-caz).',
  },
  {
    id: 'uc-028',
    topic: 'use-case',
    difficulty: 'trap',
    prompt: 'Care afirmație despre relația dintre actori este FALSĂ?',
    options: [
      'Actorii pot fi legați prin relații <<include>> și <<extend>>',
      'Actorii pot fi legați prin generalizare',
      'Actorul specializat moștenește cazurile de utilizare ale actorului general',
      'Un actor poate fi și persoană fizică și sistem software extern',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANĂ: Actorii NU se leagă prin <<include>> sau <<extend>> – acestea sunt EXCLUSIV între cazuri de utilizare. Singura relație permisă între actori este GENERALIZAREA. Restul afirmațiilor sunt adevărate.',
  },
];

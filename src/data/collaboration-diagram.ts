import type { Question } from '../types/question';

export const collaborationDiagramQuestions: Question[] = [
  {
    id: 'col-001',
    topic: 'collaboration',
    difficulty: 'easy',
    prompt: 'Ce descrie diagrama de colaborare în UML?',
    options: [
      'Interacțiunile dintre obiecte cu accent pe RELAȚIILE STRUCTURALE și numerele de ordine ale mesajelor',
      'Ordinea temporală a mesajelor pe o axă verticală',
      'Stările unui obiect',
      'Structura claselor și moștenirea',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama de Colaborare (Communication Diagram în UML 2.x) arată RELAȚIILE STRUCTURALE între obiecte ȘI mesajele schimbate, numerotate pentru a indica ordinea. Fără axă temporală verticală – spre deosebire de diagrama de secvențe.',
  },
  {
    id: 'col-002',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Cum se indică ordinea mesajelor în diagrama de colaborare?',
    options: [
      'Prin NUMERE de ordine pe mesaje (1:, 2:, 2.1:, 2.2:…)',
      'Prin poziția verticală (mesajele de sus sunt primele)',
      'Prin culori diferite',
      'Nu se poate indica ordinea',
    ],
    correctIndex: 0,
    explanation:
      'Numerotarea mesajelor: 1:, 2:, 3:… pentru mesajele principale; 1.1:, 1.2:… pentru submesaje (mesaje declanșate de mesajul 1). Ex: 2.1 este primul submesaj al mesajului 2. Ordinea se determină EXCLUSIV din numere.',
  },
  {
    id: 'col-003',
    topic: 'collaboration',
    difficulty: 'easy',
    prompt: 'Cum se reprezintă un obiect în diagrama de colaborare?',
    options: [
      'Dreptunghi cu notația numeObiect:ClasaObiect (subliniat)',
      'Cerc cu numele obiectului',
      'Elipsă ca în diagrama cazurilor de utilizare',
      'Siluetă pentru orice participant',
    ],
    correctIndex: 0,
    explanation:
      'Obiect în colaborare: dreptunghi cu notația numeObiect:ClasaObiect subliniat (ex: \":Client\" sau \"c:Client\"). Sublinierile sunt convența UML pentru obiecte (instanțe), spre deosebire de clase (fără subliniere).',
  },
  {
    id: 'col-004',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Care este diferența principală față de diagrama de secvențe?',
    options: [
      'Colaborare: accent pe relații structurale, fără axă timp; Secvențe: axă temporală verticală explicită',
      'Colaborare: arată clasele; Secvențe: arată obiectele',
      'Colaborare: mai detaliată; Secvențe: mai simplă',
      'Nu există diferență, sunt complet echivalente',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA CHEIE: Secvențe = axă temporală verticală (ordinea vizuală). Colaborare = fără axă timp, dar cu numere pe mesaje. Colaborare arată explicit conexiunile (liniile) dintre obiecte; Secvențe nu. Ambele sunt echivalente semantic.',
  },
  {
    id: 'col-005',
    topic: 'collaboration',
    difficulty: 'hard',
    prompt: 'Conform regulilor AMS, diagrama de colaborare se poate reprezenta la câte niveluri?',
    options: [
      '2 niveluri: nivel sistem și nivel obiecte',
      '1 nivel (nu există niveluri)',
      '3 niveluri: sistem, subsistem, obiecte',
      '4 niveluri după tipul diagramei',
    ],
    correctIndex: 0,
    explanation:
      'Conform cursului AMS (prof. Sava N.): diagrama de colaborare se poate reprezenta la 2 NIVELURI: 1) NIVEL SISTEM – participanții sunt sisteme/subsisteme mari; 2) NIVEL OBIECTE – participanții sunt obiecte individuale. Ambele sunt valide dar cu granularitate diferită.',
  },
  {
    id: 'col-006',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Ce înseamnă notația „2.1:" pe un mesaj din diagrama de colaborare?',
    options: [
      'Primul submesaj declanșat de mesajul numărul 2',
      'Mesajul cu prioritatea 2, versiunea 1',
      'Al doilea mesaj din grup 1',
      'Mesajul nr 2, pas nr 1 din loop',
    ],
    correctIndex: 0,
    explanation:
      'Numerotare ierarhică: 2.1 = primul submesaj al mesajului 2. Dacă mesajul 2 declanșează mai multe mesaje, ele sunt 2.1, 2.2, 2.3 etc. Submesajele lui 2.1 ar fi 2.1.1, 2.1.2 etc. Această numerotare înlocuiește axa temporală.',
  },
  {
    id: 'col-007',
    topic: 'collaboration',
    difficulty: 'easy',
    prompt: 'Cum se denumesc colaborările conform regulilor prof. Sava N.?',
    options: [
      'Cu un verb (ex: „Procesare Comandă", „Autentificare Utilizator")',
      'Cu un substantiv (ex: „Comanda", „Utilizatorul")',
      'Cu un actor și un caz de utilizare',
      'Fără denumire obligatorie',
    ],
    correctIndex: 0,
    explanation:
      'Colaborarea se DENUMEȘTE cu un VERB (sau sintagmă verbală), similar cu cazul de utilizare. Aceasta denotă că colaborarea descrie un PROCES/INTERACȚIUNE, nu un obiect static.',
  },
  {
    id: 'col-008',
    topic: 'collaboration',
    difficulty: 'hard',
    prompt: 'Poate o diagramă de colaborare să fie derivată dintr-o diagramă de secvențe și invers?',
    options: [
      'Da, sunt ECHIVALENTE semantic – orice diagramă de secvențe poate fi convertită în colaborare și invers',
      'Nu, conțin informații complet diferite',
      'Da, dar numai pentru scenarii simple fără condiții',
      'Nu, secvența are mai multe informații decât colaborarea',
    ],
    correctIndex: 0,
    explanation:
      'Diagramele de secvențe și de colaborare sunt SEMANTICALLY EQUIVALENT (echivalente). Ambele descriu aceeași interacțiune. UML 2.x le reuneste sub termenul de "diagrame de comunicare/interacțiune". Conversia se face prin re-organizarea layout-ului și adăugarea/ștergerea numerotării.',
  },
  {
    id: 'col-009',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Cum se reprezintă un mesaj asincron în diagrama de colaborare?',
    options: [
      'Săgeată cu vârf deschis pe o linie de legătură dintre obiecte',
      'Linie întreruptă',
      'Săgeată cu vârf plin',
      'Nu se poate reprezenta în colaborare',
    ],
    correctIndex: 0,
    explanation:
      'Ca și în diagrama de secvențe: ASINCRON = vârf deschis, SINCRON = vârf plin. Diferența față de secvențe: în colaborare, săgețile sunt pe LINIILE DE LEGĂTURĂ (care arată relații structurale), nu pe linii de viață.',
  },
  {
    id: 'col-010',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Ce reprezintă liniile dintre obiecte în diagrama de colaborare?',
    options: [
      'Legăturile (links) – instanțe ale asocierilor din diagrama claselor',
      'Mesajele transmise',
      'Relații de moștenire',
      'Dependențe temporare',
    ],
    correctIndex: 0,
    explanation:
      'Liniile dintre obiecte = LINKS: instanțe ale asocierilor (din diagrama claselor). Mesajele se afișează CA ETICHETE pe aceste linii (cu numere și săgeți). Linkul arată că obiectele se „cunosc" (au referință unul la altul).',
  },
  {
    id: 'col-011',
    topic: 'collaboration',
    difficulty: 'easy',
    prompt: 'Actorii pot apărea în diagrama de colaborare?',
    options: [
      'Da, actorii participă ca inițiatori/receptori ai interacțiunilor',
      'Nu, numai obiectele sistemului',
      'Da, dar numai ca sisteme externe',
      'Nu, diagrama de colaborare e internă sistemului',
    ],
    correctIndex: 0,
    explanation:
      'Ca și în diagrama de secvențe, ACTORII pot apărea în colaborare (cu silueta umană). Reprezintă inițiatorul sau participantul extern. Sunt legați de obiectele sistemului prin linkuri cu mesaje.',
  },
  {
    id: 'col-012',
    topic: 'collaboration',
    difficulty: 'hard',
    prompt: 'Care este avantajul diagramei de colaborare față de cea de secvențe?',
    options: [
      'Arată mai clar RELAȚIILE STRUCTURALE dintre obiecte (cine cunoaște pe cine)',
      'Arată mai clar ordinea temporală a mesajelor',
      'Suportă fragmente combinate (alt, loop)',
      'Este mai ușor de citit pentru procese cu paralelism',
    ],
    correctIndex: 0,
    explanation:
      'AVANTAJUL colaborării: vizualizarea topologiei comunicării (cine trimite la cine, densitatea legăturilor). Linkurile vizibile arată explicit rețeaua de relații. Secvențele sunt mai bune pentru ordinea temporală și pentru paralelism (fragmente combinate).',
  },
  {
    id: 'col-013',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Mesajele cu numerele 1:, 2:, 3: sunt executate în ce ordine?',
    options: [
      'Secvențial: 1 primul, 2 al doilea, 3 al treilea',
      'Paralel: toate simultan',
      'Invers: 3 primul, 2 al doilea, 1 ultimul',
      'Aleatoriu, numerele nu indică ordinea',
    ],
    correctIndex: 0,
    explanation:
      'Mesajele 1:, 2:, 3: se execută SECVENȚIAL în ordinea numerotării. Numerele ÎNLOCUIESC axa temporală din diagrama de secvențe. Mesajul 1 se execută primul, 2 al doilea, etc.',
  },
  {
    id: 'col-014',
    topic: 'collaboration',
    difficulty: 'hard',
    prompt: 'Mesajele 2:, 2.1:, 2.2: – care este ordinea corectă de execuție?',
    options: [
      '2: → 2.1: → 2.2: (2.1 și 2.2 sunt sub-apeluri ale lui 2, în ordinea lor)',
      '2.1: → 2.2: → 2: (sub-apelurile se execută înainte de apelul parent)',
      '2: → 2.2: → 2.1: (invers față de numerotare)',
      'Toate simultane',
    ],
    correctIndex: 0,
    explanation:
      'Ordinea de execuție: 2 este apelul principal, care declanșează 2.1 (primul sub-apel) și apoi 2.2 (al doilea sub-apel). Echivalentul în pseudocod: metoda_2() { metoda_2_1(); metoda_2_2(); }.',
  },
  {
    id: 'col-015',
    topic: 'collaboration',
    difficulty: 'easy',
    prompt: 'Diagrama de colaborare face parte din categoria:',
    options: [
      'Diagrame de interacțiune (comportamentale)',
      'Diagrame structurale (statice)',
      'Diagrame de implementare',
      'Diagrame de cazuri de utilizare',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama de Colaborare (sau Comunicare în UML 2.x) este o diagramă de INTERACȚIUNE = categorie de diagrame comportamentale. Cealaltă diagramă de interacțiune principală este Diagrama de Secvențe.',
  },
  {
    id: 'col-016',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Cum se poate reprezenta o condiție (if) în diagrama de colaborare?',
    options: [
      'Printr-o gardă în paranteze drepte în eticheta mesajului: [condiție] nr: mesaj',
      'Nu se pot reprezenta condiții',
      'Prin numerotare alternativă (2a, 2b)',
      'Printr-un operator alt ca în secvențe',
    ],
    correctIndex: 0,
    explanation:
      'Condiție în colaborare: se poate adăuga o GARDĂ în eticheta mesajului: [condiție] 2: numeMetoda(). Mesajul se execută NUMAI DACĂ condiția e adevărată. Colaborarea nu are fragmente combinate ca secvențele, dar suportă gărzi.',
  },
  {
    id: 'col-017',
    topic: 'collaboration',
    difficulty: 'hard',
    prompt: 'Dacă diagrama de secvențe arată că mesajul sincron de la A la B generează un return, cum se marchează return-ul în diagrama de colaborare?',
    options: [
      'Prin etichetă de mesaj pe același link, cu săgeată inversă și număr corespunzător',
      'Return-urile nu se marchează în colaborare',
      'Printr-o linie întreruptă separată',
      'Prin adăugarea unui link înapoi de la B la A',
    ],
    correctIndex: 0,
    explanation:
      'În colaborare, mesajele de return se pot marca ca etichete pe ACELAȘI LINK (aceeași linie de legătură), cu săgeată în sens invers și cu numărul de ordine al return-ului. Nu se adaugă un link separat.',
  },
  {
    id: 'col-018',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Ce avantaj are diagrama de secvențe față de cea de colaborare?',
    options: [
      'Axa temporală vizuală explicită – ordinea mesajelor e imediat vizibilă fără numerotare',
      'Poate conține mai mulți participanți',
      'Suportă obiecte create dinamic (colaborarea nu)',
      'Este mai compactă pentru sisteme mari',
    ],
    correctIndex: 0,
    explanation:
      'AVANTAJUL secvențelor: ordinea temporală este VIZUALĂ (de sus în jos) – se vede imediat ce se execută primul. La colaborare trebuie să urmărești numerotarea. Secvențele sunt mai clare pentru scenarii cu ordine importantă și paralelism.',
  },
  {
    id: 'col-019',
    topic: 'collaboration',
    difficulty: 'easy',
    prompt: 'Câte tipuri de mesaje se pot reprezenta în diagrama de colaborare?',
    options: [
      'Sincrone, asincrone, create, destroy – aceleași ca în diagrama de secvențe',
      'Numai mesaje sincrone',
      'Numai mesaje fără return',
      'Orice număr dar fără create/destroy',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama de Colaborare suportă ACELEAȘI TIPURI de mesaje ca Secvențele: sincron (vârf plin), asincron (vârf deschis), return (linie întreruptă), <<create>>, <<destroy>>. Echivalența semantică impune suportarea acelorași construcții.',
  },
  {
    id: 'col-020',
    topic: 'collaboration',
    difficulty: 'trap',
    prompt: 'Ordinea vizuală a obiectelor (stânga-dreapta, sus-jos) în diagrama de colaborare INDICĂ ordinea execuției mesajelor?',
    options: [
      'Nu – ordinea execuției este dată EXCLUSIV de numerotarea mesajelor',
      'Da – obiectele din stânga sunt apelate primele',
      'Da – obiectele de sus sunt primele',
      'Parțial – dacă nu există numere, poziția contează',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANA: Layout-ul vizual (stânga/dreapta/sus/jos) al obiectelor în diagrama de colaborare NU indică ordinea. EXCLUSIV numerele de pe mesaje determină ordinea execuției. Aceasta e diferența fundamentală față de diagrama de secvențe.',
  },
  {
    id: 'col-021',
    topic: 'collaboration',
    difficulty: 'medium',
    prompt: 'Dacă mesajele 3.1: și 3.2: sunt ambele submesaje ale mesajului 3:, cum se execută?',
    options: [
      'Secvențial: 3.1 primul, 3.2 al doilea (în ordinea numerotării)',
      'Paralel: 3.1 și 3.2 simultan',
      'Invers: 3.2 primul, 3.1 al doilea',
      'Numai unul din ele (sunt alternative)',
    ],
    correctIndex: 0,
    explanation:
      'Submesajele 3.1, 3.2, 3.3 se execută SECVENȚIAL în ordinea numerotării lor (3.1 primul, 3.2 al doilea). Dacă ar trebui să fie paralele, s-ar folosi notația specială (3.1a, 3.1b sau operatorul par).',
  },
  {
    id: 'col-022',
    topic: 'collaboration',
    difficulty: 'hard',
    prompt: 'Câte diagrame de colaborare sunt necesare de obicei pentru a descrie un caz de utilizare complet?',
    options: [
      'De obicei una per scenariu (fiecare scenariu important e o diagramă separată)',
      'Exact una per caz de utilizare',
      'Maxim două (scenariul normal + alternativ)',
      'Nu există o limită standard',
    ],
    correctIndex: 0,
    explanation:
      'Ca și diagramele de secvențe, fiecare diagramă de colaborare descrie DE OBICEI UN SINGUR SCENARIU. Un caz de utilizare cu mai multe scenarii necesită mai multe diagrame de colaborare (sau secvențe). Scenariul principal și alternativele sunt diagrame separate.',
  },
];

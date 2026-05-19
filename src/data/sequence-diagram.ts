import type { Question } from '../types/question';

export const sequenceDiagramQuestions: Question[] = [
  {
    id: 'seq-001',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Ce descrie diagrama de secvențe în UML?',
    options: [
      'Mesajele schimbate între obiecte/actori într-o ordine temporală',
      'Structura claselor și relațiile lor',
      'Fluxul activităților unui proces de business',
      'Stările unui obiect de-a lungul vieții lui',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama de Secvențe = diagramă de interacțiune care arată MESAJELE între obiecte/actori în ORDINE TEMPORALĂ (de sus în jos). Arată "cine trimite ce la cine și în ce ordine".',
  },
  {
    id: 'seq-002',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Ce este linia de viață (lifeline) în diagrama de secvențe?',
    options: [
      'Linia verticală întreruptă care coboară de la fiecare participant (obiect/actor)',
      'Durata de viață a aplicației',
      'Intervalul de timp între două mesaje',
      'O bară de activare a unui obiect',
    ],
    correctIndex: 0,
    explanation:
      'Linia de viață: linie verticală ÎNTRERUPTĂ (punctată) care coboară de la capul participantului (dreptunghi cu numeObiect:ClasaObiect). Reprezintă existența obiectului în timp. Barele de activare se suprapun pe linia de viață.',
  },
  {
    id: 'seq-003',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Ce este bara de activare (activation box) în diagrama de secvențe?',
    options: [
      'Dreptunghiul îngust pe linia de viață care arată că obiectul execută o operație',
      'Capul dreptunghiular al participantului',
      'Un mesaj de activare a unui obiect',
      'O bară orizontală care marchează sincronizarea',
    ],
    correctIndex: 0,
    explanation:
      'Bara de activare (focus of control): dreptunghi îngust pe linia de viață care arată că obiectul este ACTIV (execută o metodă). Apare la primirea unui mesaj sincron și dispare când metoda returnează.',
  },
  {
    id: 'seq-004',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Care este diferența dintre un mesaj SINCRON și unul ASINCRON în diagrama de secvențe?',
    options: [
      'Sincron: expeditorul AȘTEAPTĂ răspunsul înainte de a continua; Asincron: expeditorul NU Așteaptă',
      'Sincron: mesaj fără răspuns; Asincron: mesaj cu răspuns obligatoriu',
      'Sincron: săgeată cu cap deschis; Asincron: săgeată cu cap plin',
      'Sincron: linie continuă; Asincron: linie întreruptă',
    ],
    correctIndex: 0,
    explanation:
      'SINCRON: expeditorul BLOCHEAZĂ și așteaptă răspunsul (return). Notat cu săgeată cu vârf PLIN (→). ASINCRON: expeditorul trimite și continuă fără a aștepta. Notat cu săgeată cu vârf DESCHIS (→ cu linie). Aceasta e diferența esențială.',
  },
  {
    id: 'seq-005',
    topic: 'sequence',
    difficulty: 'trap',
    prompt: 'Ce tip de săgeată se folosește pentru un mesaj SINCRON în diagrama de secvențe?',
    options: [
      'Săgeată cu vârf PLIN (filled arrowhead)',
      'Săgeată cu vârf DESCHIS (open arrowhead)',
      'Linie întreruptă cu vârf plin',
      'Linie simplă fără săgeată',
    ],
    correctIndex: 0,
    explanation:
      'SINCRON = săgeată cu vârf PLIN (→ solid). ASINCRON = săgeată cu vârf DESCHIS (→ open). RETURN = linie ÎNTRERUPTĂ cu vârf deschis (←- -). Confuzia plin/deschis este o capcană clasică la examen.',
  },
  {
    id: 'seq-006',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Cum se reprezintă mesajul de return (răspuns) în diagrama de secvențe?',
    options: [
      'Linie ÎNTRERUPTĂ cu vârf deschis, de la receptor înapoi la expeditor',
      'Linie CONTINUĂ cu vârf plin, de la receptor la expeditor',
      'Linie întreruptă fără vârf',
      'Săgeată în sens invers față de mesajul original',
    ],
    correctIndex: 0,
    explanation:
      'Return: linie ÎNTRERUPTĂ (dashed) cu vârf DESCHIS, de la cel apelat (receptor) înapoi la apelant (expeditor). Return e OBLIGATORIU pentru mesajele sincrone. Poate purta eticheta cu valoarea returnată.',
  },
  {
    id: 'seq-007',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Ce este un mesaj de creare (create) de obiect nou în diagrama de secvențe?',
    options: [
      'Săgeată cu stereotip <<create>> sau <<new>> spre capul liniei de viață a noului obiect',
      'Un apel de metodă obișnuit',
      'O inițializare specială cu stereotip <<init>>',
      'Nu se poate reprezenta crearea de obiecte',
    ],
    correctIndex: 0,
    explanation:
      'New object: mesaj <<create>> sau <<new>> care ajunge la HEAD-ul (capul dreptunghiular) al liniei de viață a obiectului creat. Obiectul apare mai jos decât celelalte (indică crearea dinamică în acel moment al execuției).',
  },
  {
    id: 'seq-008',
    topic: 'sequence',
    difficulty: 'hard',
    prompt: 'Conform regulilor AMS, cine poate trimite mesajul de ștergere (<<destroy>>) a unui obiect?',
    options: [
      'Obiectul care a creat acel obiect (creatorul șterge creatura)',
      'Orice obiect din sistem',
      'Numai sistemul (nu actorii)',
      'Obiectul însuși (auto-distrugere)',
    ],
    correctIndex: 0,
    explanation:
      'REGULA PROF. SAVA N.: ștergerea unui obiect se face DE CĂTRE OBIECTUL CARE L-A CREAT. Mesajul de ștergere are stereotipul <<destroy>> sau se marchează cu X la capătul liniei de viață. NU orice obiect poate șterge.',
  },
  {
    id: 'seq-009',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Ce este un fragment combinat (combined fragment) în diagrama de secvențe?',
    options: [
      'O zonă delimitată cu un operator (alt, opt, loop, par) care descrie comportament condiționat/repetat',
      'Un grup de mesaje fără condiții',
      'O diagramă nested (inclusă) în alta',
      'O zonă de comentarii',
    ],
    correctIndex: 0,
    explanation:
      'Fragment combinat: dreptunghi cu etichetă operator în colțul stânga sus. Operatori principali: alt (alternativă if-else), opt (opțional), loop (buclă), par (paralel), ref (referință la altă diagramă).',
  },
  {
    id: 'seq-010',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Ce operator de fragment descrie un comportament ALTERNATIV (if-else)?',
    options: [
      'alt',
      'opt',
      'loop',
      'par',
    ],
    correctIndex: 0,
    explanation:
      'ALT (alternative): similar cu if-else. Are 2+ compartimente separate de linie întreruptă, fiecare cu gardă [condiție]. Doar compartimentul cu gardul adevărat se execută. Cel mai folosit fragment combinat.',
  },
  {
    id: 'seq-011',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Ce operator de fragment descrie un comportament OPȚIONAL (doar uneori executat)?',
    options: [
      'opt',
      'alt',
      'loop',
      'break',
    ],
    correctIndex: 0,
    explanation:
      'OPT (optional): se execută NUMAI DACĂ gardul este true, altfel e ignorat. Este echivalent cu un alt cu un singur compartiment. Diferit de alt (care are alternative exhaustive).',
  },
  {
    id: 'seq-012',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Axa temporală în diagrama de secvențe este:',
    options: [
      'Verticală – timpul curge de sus în jos',
      'Orizontală – timpul curge de la stânga la dreapta',
      'Nu există axă temporală explicită',
      'Diagonală',
    ],
    correctIndex: 0,
    explanation:
      'REGULA DE BAZĂ: în diagrama de secvențe, TIMPUL curge VERTICAL, de sus în jos. Mesajele superioare au loc ÎNAINTE de cele inferioare. Axa orizontală arată participanții, nu timpul.',
  },
  {
    id: 'seq-013',
    topic: 'sequence',
    difficulty: 'hard',
    prompt: 'Cum se reprezintă un apel recursiv (auto-apel) în diagrama de secvențe?',
    options: [
      'O săgeată care pleacă și se întoarce la aceeași linie de viață, cu o bară de activare imbricată',
      'O buclă cu operatorul loop',
      'Nu se poate reprezenta recursivitatea',
      'Două bare de activare separate pe aceeași linie de viață',
    ],
    correctIndex: 0,
    explanation:
      'Auto-apel (self-call): săgeată de la linia de viață a obiectului înapoi la ea însăși, cu o bară de activare imbricată (mai îngustă și la dreapta față de cea existentă). Arată apelul recursiv sau o metodă care apelează altă metodă a aceluiași obiect.',
  },
  {
    id: 'seq-014',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Ce operator de fragment se folosește pentru a modela un LOOP (repetare)?',
    options: [
      'loop',
      'par',
      'seq',
      'critical',
    ],
    correctIndex: 0,
    explanation:
      'LOOP: descrie o secvență de mesaje executată în mod repetat. Poate conține o gardă [condiție] sau limite [min, max]. Ex: loop[i < 10] repetă setul de mesaje de 10 ori.',
  },
  {
    id: 'seq-015',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Cum se notează capul (head) unui participant în diagrama de secvențe?',
    options: [
      'Dreptunghi cu numeObiect:ClasaObiect deasupra liniei de viață',
      'Cerc cu numele obiectului',
      'Siluetă umană pentru orice participant',
      'Elipsă cu numele clasei',
    ],
    correctIndex: 0,
    explanation:
      'Capul participantului: dreptunghi cu notația numeObiect:ClasaObiect (ex: \":Client\" sau \"c1:Client\"). Actorii au cap de siluetă umană. Deasupra capului sunt dreptunghi, sub cap e linia de viață întreruptă.',
  },
  {
    id: 'seq-016',
    topic: 'sequence',
    difficulty: 'trap',
    prompt: 'Care afirmație despre mesajul de return este CORECTĂ?',
    options: [
      'Return-ul corespunde unui mesaj sincron și este reprezentat ca linie întreruptă cu vârf deschis',
      'Return-ul este opțional și arată orice tip de răspuns',
      'Return-ul are același simbol ca mesajul sincron (săgeată plină)',
      'Return-ul se folosește numai pentru mesajele asincrone',
    ],
    correctIndex: 0,
    explanation:
      'RETURN: linie ÎNTRERUPTĂ + vârf DESCHIS (←−−). Corespunde mesajului SINCRON (expeditorul a așteptat). Simbolul diferit (întrerupt vs plin) arată natura de răspuns. Nu se folosește la asincron (nu există așteptare).',
  },
  {
    id: 'seq-017',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Diagrama de secvențe vs diagrama de colaborare: ce arată în comun și ce diferă?',
    options: [
      'Ambele arată mesaje; Secvențe: ordinea temporală explicită; Colaborare: relațiile structurale + numerele de mesaj',
      'Ambele sunt identice, doar cu layout diferit',
      'Secvențe: structura; Colaborare: comportamentul',
      'Secvențe: pentru clase; Colaborare: pentru obiecte',
    ],
    correctIndex: 0,
    explanation:
      'AMBELE sunt diagrame de interacțiune și arată mesaje între obiecte. DIFERENȚA: Secvențe = axă temporală verticală explicită (ordinea e vizuală). Colaborare = nu are axă temporală, dar are numere de mesaj (1:, 2:, 2.1:…) și arată relațiile structurale.',
  },
  {
    id: 'seq-018',
    topic: 'sequence',
    difficulty: 'hard',
    prompt: 'Un obiect A trimite mesaj sincron la B, B trimite mesaj sincron la C, C răspunde la B, B răspunde la A. Câte mesaje sunt în total?',
    options: [
      '4 mesaje (A→B, B→C, C return→B, B return→A)',
      '2 mesaje (A→B și B→C)',
      '6 mesaje',
      '3 mesaje',
    ],
    correctIndex: 0,
    explanation:
      'Fiecare mesaj SINCRON generează un return implicit: A→B (sync), B→C (sync), C−−>B (return), B−−>A (return). Total = 4 mesaje (2 apeluri sincrone + 2 returnuri). Return-ul este OBLIGATORIU pentru sincrone.',
  },
  {
    id: 'seq-019',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Ce înseamnă că un obiect este creat „dinamic" în diagrama de secvențe?',
    options: [
      'Obiectul este creat la runtime în timpul execuției scenariului, nu există de la început',
      'Obiectul se mișcă între coloane',
      'Obiectul participă în mai multe diagrame',
      'Obiectul are mai mult de 3 mesaje primite',
    ],
    correctIndex: 0,
    explanation:
      'Creare dinamică: obiectul nu există de la startul scenariului. Apare mai jos față de ceilalți participanți. Ajunge la existență printr-un mesaj <<create>> sau <<new>>. Înainte de creare NU are linie de viață.',
  },
  {
    id: 'seq-020',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Ce reprezintă X-ul de la capătul liniei de viață în diagrama de secvențe?',
    options: [
      'Distrugerea (ștergerea) obiectului la acel moment',
      'Starea finală a obiectului',
      'Un mesaj respins',
      'Sfârșitul diagramei',
    ],
    correctIndex: 0,
    explanation:
      'X la capătul liniei de viață = DESTROY: obiectul a fost distrus (deallocat, garbage collected). Linia de viață se termină la acel X. De obicei precedat de un mesaj <<destroy>> de la creatorul obiectului.',
  },
  {
    id: 'seq-021',
    topic: 'sequence',
    difficulty: 'hard',
    prompt: 'Care operator de fragment corespunde execuției PARALELE a mai multor secvențe de mesaje?',
    options: [
      'par (parallel)',
      'loop',
      'alt',
      'seq',
    ],
    correctIndex: 0,
    explanation:
      'PAR (parallel): mai multe operanzi se execută în PARALEL (concurent). Ordinea mesajelor din compartimente diferite nu este fixă. Diferit de seq (execuție secvențială ordonată) și de par (care e concurent).',
  },
  {
    id: 'seq-022',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Diagrama de secvențe descrie un SCENARIU sau TOATE scenariile posibile ale unui caz de utilizare?',
    options: [
      'Un singur scenariu (sau o familie de scenarii cu fragmente combinate)',
      'Toate scenariile posibile simultan',
      'Structura generală fără scenarii specifice',
      'Cel mult 3 scenarii',
    ],
    correctIndex: 0,
    explanation:
      'O diagramă de secvențe descrie DE OBICEI UN singur scenariu (happy path sau alternativ). Fragmentele combinate (alt, opt, loop) permit extinderea la familii de scenarii. Pentru scenarii complet diferite, se desenează diagrame separate.',
  },
  {
    id: 'seq-023',
    topic: 'sequence',
    difficulty: 'trap',
    prompt: 'Diferența dintre mesaj SINCRON și ASINCRON privind reprezentarea grafică:',
    options: [
      'Sincron: vârf plin (←—►); Asincron: vârf deschis (←—>)',
      'Sincron: linie întreruptă; Asincron: linie continuă',
      'Sincron: vârf deschis; Asincron: vârf plin',
      'Nu există diferență grafică, diferă doar semantica',
    ],
    correctIndex: 0,
    explanation:
      'SINCRON (blocking): săgeată cu vârf PLIN (solid filled). ASINCRON (non-blocking): săgeată cu vârf DESCHIS (open/hollow). Return (orice tip): linie ÎNTRERUPTĂ cu vârf deschis. Aceasta este o distincție vizuală esențială.',
  },
  {
    id: 'seq-024',
    topic: 'sequence',
    difficulty: 'easy',
    prompt: 'Actorul apare în diagrama de secvențe?',
    options: [
      'Da, actorii pot apărea ca participanți cu linie de viață',
      'Nu, actorii apar doar în diagrama cazurilor de utilizare',
      'Da, dar numai ca sisteme externe',
      'Nu, diagrama de secvențe conține numai obiecte ale sistemului',
    ],
    correctIndex: 0,
    explanation:
      'Actorii POT apărea în diagrama de secvențe ca PARTICIPANȚI (cu cap de siluetă umană și linie de viață). Reprezintă utilizatorul/sistemul extern care inițiază sau primește mesaje. Sunt plasați de obicei la extremitățile stânga/dreapta.',
  },
  {
    id: 'seq-025',
    topic: 'sequence',
    difficulty: 'medium',
    prompt: 'Operatorul de fragment „ref" are ce rol?',
    options: [
      'Referențiază o altă diagramă de secvențe (evitând duplicarea)',
      'Descrie un comportament reflexiv (auto-apel)',
      'Marchează o secvență critică (non-interruptibilă)',
      'Referențiează o clasă externă',
    ],
    correctIndex: 0,
    explanation:
      'REF (reference): inserează o referință la o ALTĂ diagramă de secvențe. Permite reutilizarea și modularizarea diagramelor complexe. Ex: ref „Autentificare" include toată diagrama de autentificare fără a o redesena.',
  },
];

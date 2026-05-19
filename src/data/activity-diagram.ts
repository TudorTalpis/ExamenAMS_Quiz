import type { Question } from '../types/question';

export const activityDiagramQuestions: Question[] = [
  {
    id: 'act-001',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Ce descrie diagrama activităților în UML?',
    options: [
      'Fluxul de control al unui proces sau algoritm (activități, decizii, paralelism)',
      'Stările unui singur obiect',
      'Structura claselor sistemului',
      'Mesajele transmise între obiecte la runtime',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Activităților descrie FLUXUL DE CONTROL al unui proces (business process, algoritm, use case). Arată ordinea activităților, ramificările (decizii), paralelismul (fork/join). Similară cu un flowchart.',
  },
  {
    id: 'act-002',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Cum se numesc punctul de start și punctul de final în diagrama activităților?',
    options: [
      'Punct inițial: cerc plin; Punct final: cerc plin în cerc gol (bull\'s-eye)',
      'Punct inițial: cerc gol; Punct final: cerc plin',
      'Punct inițial: dreptunghi; Punct final: romb',
      'Punct inițial: triunghi; Punct final: pătrat',
    ],
    correctIndex: 0,
    explanation:
      'Identic cu diagrama stărilor: punctul INIȚIAL = cerc plin negru; punctul FINAL = bull\'s-eye (cerc plin în cerc gol). Există EXACT un punct inițial și EXACT un punct final per diagramă.',
  },
  {
    id: 'act-003',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Cum se denumesc activitățile conform regulilor prof. Sava N.?',
    options: [
      'Verb conjugat la modul indicativ (ex: „Verifică stocul", „Procesează comanda")',
      'Substantiv (ex: „Verificare stoc")',
      'Verb la infinitiv (ex: „Verifica stocul")',
      'Verb la imperativ (ex: „Verifică!")',
    ],
    correctIndex: 0,
    explanation:
      'REGULA STRICTĂ pentru diagrama activităților: activitățile se denumesc cu VERB CONJUGAT (indicativ prezent sau imperativ din perspectiva sistemului). Ex: „Verifică Stocul", „Procesează Plata". NU substantive, NU infinitiv.',
  },
  {
    id: 'act-004',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Ce este un bloc de decizie în diagrama activităților?',
    options: [
      'Un romb cu O tranziție intrare și MULTIPLE tranziții ieșire cu condiții de gardă',
      'Un romb cu multiple intrări și o singură ieșire',
      'Un romb cu multiple intrări și multiple ieșiri',
      'O activitate cu mai mult de 2 rezultate posibile',
    ],
    correctIndex: 0,
    explanation:
      'Blocul de DECIZIE: romb cu 1 intrare și 2+ ieșiri. FIECARE ieșire TREBUIE să aibă condiție de gardă [condiție]. Ex: [in stoc] / [nu este in stoc]. Gardele trebuie să fie exhaustive și mutual excluse.',
  },
  {
    id: 'act-005',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Ce este un ramificator (merge/join) în diagrama activităților?',
    options: [
      'Un romb cu MULTIPLE intrări și O singură ieșire, FĂRĂ condiții de gardă',
      'Un romb cu o intrare și multiple ieșiri cu gardă',
      'O bara orizontală care pornește fluxuri paralele',
      'O stare de așteptare',
    ],
    correctIndex: 0,
    explanation:
      'Ramificatorul (merge node): romb cu MULTIPLE intrări și O SINGURĂ ieșire, FĂRĂ condiții de gardă pe intrări. Reunifică fluxuri alternative (venite de la un bloc decizie anterior).',
  },
  {
    id: 'act-006',
    topic: 'activity',
    difficulty: 'trap',
    prompt: 'Care este diferența CRITICĂ dintre blocul de decizie și ramificator?',
    options: [
      'Decizia: 1 intrare, N ieșiri CU gărzi; Ramificatorul: N intrări, 1 ieșire FĂRĂ gărzi',
      'Decizia: N intrări, 1 ieșire; Ramificatorul: 1 intrare, N ieșiri',
      'Ambele sunt romburi identice – diferă doar contextul',
      'Decizia: pătrat; Ramificatorul: romb',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANA CLASICĂ: Blocul Decizie (decision): 1 intrare, N ieșiri, FIECARE ieșire cu gardă obligatorie. Ramificatorul (merge): N intrări, 1 ieșire, FĂRĂ gărzi pe intrări. Ambele se reprezintă ca romb, dar semantica e inversă!',
  },
  {
    id: 'act-007',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Ce este un fork (bifurcator) în diagrama activităților?',
    options: [
      'O bară groasă orizontală cu 1 intrare și MULTIPLE ieșiri care pornesc fluxuri PARALELE',
      'Un romb cu condiții de gardă',
      'O activitate care se execută de mai multe ori',
      'O tranziție înapoi la un pas anterior',
    ],
    correctIndex: 0,
    explanation:
      'Fork: bară groasă orizontală (sau verticală) cu 1 INTRARE și N IEȘIRI. Creează fluxuri PARALELE (concurente) – toate activitățile de pe ieșiri se execută simultan. Diferit de decizie (unde e ales UN singur flux).',
  },
  {
    id: 'act-008',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Ce este un join în diagrama activităților?',
    options: [
      'O bară groasă cu MULTIPLE intrări și O ieșire – sincronizează fluxuri paralele',
      'Un romb cu multiple intrări',
      'O activitate care unește rezultate din mai multe surse',
      'Un nod de decizie cu gardă comună',
    ],
    correctIndex: 0,
    explanation:
      'Join: bară groasă cu N INTRĂRI și 1 IEȘIRE. SINCRONIZEAZĂ fluxurile paralele (pornite de un fork anterior) – fluxul de ieșire continuă DOAR DUPĂ ce TOATE fluxurile de intrare au ajuns. Fork și Join merg întotdeauna în perechi.',
  },
  {
    id: 'act-009',
    topic: 'activity',
    difficulty: 'trap',
    prompt: 'Câte puncte inițiale poate conține o diagramă de activități?',
    options: [
      'Exact unul (1)',
      'Oricâte, câte subprocese sunt',
      'Zero sau unul',
      'Unul per swimlane',
    ],
    correctIndex: 0,
    explanation:
      'REGULA STRICTĂ: EXACT UN punct inițial și EXACT UN punct final per diagramă de activități (la nivel global). Similar cu diagrama stărilor. Mai multor puncte inițiale sunt o eroare de sintaxă.',
  },
  {
    id: 'act-010',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Ce este un swimlane (partiție) în diagrama activităților?',
    options: [
      'O zonă verticală sau orizontală care arată cine (actor/sistem) execută activitățile din acea zonă',
      'Un tip special de activitate paralelă',
      'O grupare de activități fără semnificație de responsabilitate',
      'O linie de separare între diagrame',
    ],
    correctIndex: 0,
    explanation:
      'Swimlane (partiție): împarte diagrama în benzi care reprezintă responsabilul (actor, departament, sistem) pentru activitățile din acea bandă. Permite vizualizarea "cine face ce" în procesul modelat.',
  },
  {
    id: 'act-011',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Cum se reprezintă grafic o activitate în diagrama activităților?',
    options: [
      'Dreptunghi cu colțuri rotunjite',
      'Elipsă',
      'Dreptunghi cu colțuri ascuțite',
      'Cerc',
    ],
    correctIndex: 0,
    explanation:
      'Activitate = dreptunghi cu COLȚURI ROTUNJITE (rounded rectangle). NU confunda cu starea (diagrama stărilor folosește același simbol – diferă contextul). Rombul este decizia, bara groasă este fork/join.',
  },
  {
    id: 'act-012',
    topic: 'activity',
    difficulty: 'hard',
    prompt: 'O activitate se execută în mod repetat cât timp o condiție este adevărată. Cum se modelează în diagrama activităților?',
    options: [
      'Tranziție cu gardă de la activitate înapoi la un nod anterior sau la decizie',
      'Activitate cu stereotip <<loop>>',
      'Fork care creează instanțe multiple',
      'Substare în interiorul activității principale',
    ],
    correctIndex: 0,
    explanation:
      'Bucla în diagrama activităților se modelează cu o tranziție care merge ÎNAPOI (backwards) la o activitate sau la un nod de decizie anterior. Gardul de pe decizie determină când se iese din buclă.',
  },
  {
    id: 'act-013',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Ce semnifică un pin (object flow) în diagrama activităților?',
    options: [
      'Fluxul de date/obiecte între activități (ce date produce o activitate și consumă alta)',
      'O activitate cu un singur parametru',
      'O tranziție cu prioritate',
      'Un fork cu condiție specială',
    ],
    correctIndex: 0,
    explanation:
      'Pinii (object flow / object node): arată fluxul de DATE/OBIECTE între activități. Ex: activitatea „Procesează Comanda" produce un obiect „Comanda:Procesata" care devine input pentru „Trimite Confirmare". Se reprezintă cu dreptunghiuri mici pe tranzițiile de flux.',
  },
  {
    id: 'act-014',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Diagrama activităților poate descrie procesele de business (business workflows)?',
    options: [
      'Da, este unul din principalele utilizări ale diagramei activităților',
      'Nu, e exclusiv pentru algoritmi software',
      'Nu, pentru business processes se folosesc diagrame de secvențe',
      'Da, dar numai cu swimlanes obligatorii',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Activităților este excelentă pentru BUSINESS WORKFLOWS: flux aprobări, procese de comandă, procese HR. Swimlane-urile arată departamentele/rolurile. Este una din cele mai folosite diagrame pentru analiza proceselor.',
  },
  {
    id: 'act-015',
    topic: 'activity',
    difficulty: 'hard',
    prompt: 'Un fork generează 3 fluxuri paralele. Ce se întâmplă cu join-ul corespunzător?',
    options: [
      'Join-ul are 3 intrări și 1 ieșire; fluxul continuă NUMAI DUPĂ ce toate cele 3 fluxuri au terminat',
      'Join-ul are 3 ieșiri și 1 intrare',
      'Join-ul continuă când ORICARE flux termină',
      'Fork și Join nu trebuie să se potrivească numeric',
    ],
    correctIndex: 0,
    explanation:
      'Fork cu N fluxuri → Join cu N intrări. Join este o BARIERĂ: fluxul de ieșire continuă NUMAI CÂND TOATE cele N fluxuri de intrare au sosit (AND-synchronization). Nu e suficient ca unul să fie gata.',
  },
  {
    id: 'act-016',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Care este scopul principal al diagramei activităților față de diagrama stărilor?',
    options: [
      'Activități: fluxul unui PROCES; Stări: ciclul de viață al unui OBIECT SPECIFIC',
      'Activități: pentru sisteme mari; Stări: pentru sisteme mici',
      'Activități: statice; Stări: dinamice',
      'Nu există diferență, sunt interschimbabile',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚĂ: Diagrama Activităților = modelează un PROCES sau ALGORITM (ex: procesul de comandă online). Diagrama Stărilor = modelează ciclul de viață al unui OBIECT SPECIFIC (ex: obiectul Comandă). Ambele sunt diagrame comportamentale.',
  },
  {
    id: 'act-017',
    topic: 'activity',
    difficulty: 'trap',
    prompt: 'Un romb are o intrare și două ieșiri cu gardă [suma > 1000] și [else]. Ce tip de nod este?',
    options: [
      'Bloc de decizie (decision node) – are gărzi pe ieșiri',
      'Ramificator (merge node) – reunifică fluxuri',
      'Fork – pornește fluxuri paralele',
      'Join – sincronizează fluxuri',
    ],
    correctIndex: 0,
    explanation:
      'Un nod romb cu 1 intrare și N ieșiri CU GĂRZI = BLOC DE DECIZIE. Un nod romb cu N intrări și 1 ieșire FĂRĂ gărzi = RAMIFICATOR. Gardele pe ieșiri sunt elementul distinctiv al deciziei.',
  },
  {
    id: 'act-018',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Ce face tranziția dintr-o activitate cu gardă?',
    options: [
      'Se parcurge numai dacă condiția din gardă este adevărată',
      'Se parcurge mereu, indiferent de gardă',
      'Se parcurge invers dacă gardul e fals',
      'Nu există gărzi pe tranzițiile din diagrama activităților',
    ],
    correctIndex: 0,
    explanation:
      'Gardul pe tranziție [condiție] restricționează traversarea: tranziția se execută NUMAI DACĂ condiția este true. Dacă gardul e false, tranziția nu se execută (alt flux trebuie să fie disponibil).',
  },
  {
    id: 'act-019',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Cum se modelează o activitate excepțională (exception handler) în diagrama activităților?',
    options: [
      'Tranziție specială cu simbolul de excepție (fulger/lightning) de la activitate spre handler',
      'Activitate separată fără legătură',
      'Stare de eroare cu ieșire spre final',
      'Nu se poate modela în diagrama activităților',
    ],
    correctIndex: 0,
    explanation:
      'Exceptie în diagrama activităților: tranziție specială (cu simbolul de excepție – fulger sau triunghi) de la activitate spre activitatea handler. Executată NUMAI dacă activitatea aruncă acea excepție specifică.',
  },
  {
    id: 'act-020',
    topic: 'activity',
    difficulty: 'easy',
    prompt: 'Se poate folosi diagrama activităților pentru a descrie un algoritm de sortare?',
    options: [
      'Da, diagrama activităților poate modela algoritmi (inclusiv cu bucle și condiții)',
      'Nu, pentru algoritmi se folosesc diagrame de secvențe',
      'Nu, pentru algoritmi se folosesc diagrame de stări',
      'Da, dar numai algoritmi fără bucle',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Activităților poate modela ORICE FLUX cu decizii și bucle – inclusiv algoritmi de sortare, procesare date, etc. Punctele fork/join permit paralelism. Este echivalentul UML al unui pseudocod grafic.',
  },
  {
    id: 'act-021',
    topic: 'activity',
    difficulty: 'hard',
    prompt: 'Două swimlane-uri: „Client" și „Sistem". Activitatea „Completează Formular" aparține „Client", „Validează Date" aparține „Sistem". Ce descrie această structură?',
    options: [
      'Responsabilitate separată: Clientul completează formularul, Sistemul validează datele',
      'O relație de moștenire între Client și Sistem',
      'O dependență temporară',
      'Un flux paralel între Client și Sistem',
    ],
    correctIndex: 0,
    explanation:
      'Swimlane-urile separă RESPONSABILITĂȚILE. „Completează Formular" în swimlane „Client" → Clientul e responsabil. „Validează Date" în swimlane „Sistem" → Sistemul e responsabil. Tranziția cross-swimlane arată interacțiunea.',
  },
  {
    id: 'act-022',
    topic: 'activity',
    difficulty: 'medium',
    prompt: 'Care simbol se folosește pentru a marca END-ul unui subflux (flow final) vs END-ul întregii activități (activity final)?',
    options: [
      'Flow final: cerc cu X; Activity final: bull\'s-eye (cerc plin în cerc gol)',
      'Flow final: bull\'s-eye; Activity final: cerc cu X',
      'Ambele sunt identice',
      'Flow final: romb; Activity final: pătrat',
    ],
    correctIndex: 0,
    explanation:
      'UML face distincție: FLOW FINAL (cerc cu X înăuntru) = termină doar fluxul curent, nu întreaga activitate. ACTIVITY FINAL (bull\'s-eye) = termină ÎNTREAGA activitate. Util când există fluxuri paralele și vrem să terminăm selectiv.',
  },
  {
    id: 'act-023',
    topic: 'activity',
    difficulty: 'trap',
    prompt: 'Ce gardă este OBLIGATORIE pe un bloc de decizie cu două ieșiri?',
    options: [
      'Fiecare ieșire TREBUIE să aibă gardă; gardele trebuie să fie exhaustive și mutual exclusive',
      'Gardul este opțional pe bloc de decizie',
      'Numai o ieșire trebuie să aibă gardă',
      'Gardul [else] este suficient pentru ambele ieșiri',
    ],
    correctIndex: 0,
    explanation:
      'REGULĂ STRICTĂ: TOATE ieșirile unui bloc de decizie TREBUIE să aibă gardă. Gardele trebuie să acopere toate cazurile (exhaustive) și să fie mutual exclusive. Cel puțin una poate fi [else]. Absența gardei pe o ieșire este eroare de sintaxă.',
  },
];

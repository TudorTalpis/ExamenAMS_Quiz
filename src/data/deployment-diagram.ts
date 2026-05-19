import type { Question } from '../types/question';

export const deploymentDiagramQuestions: Question[] = [
  {
    id: 'dep-001',
    topic: 'deployment',
    difficulty: 'easy',
    prompt: 'Ce descrie diagrama de plasare (deployment) în UML?',
    options: [
      'Configurația hardware fizică și distribuția software pe noduri',
      'Fluxul activităților sistemului',
      'Clasele și relațiile lor',
      'Mesajele între obiecte la runtime',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama de Plasare (Deployment Diagram) descrie TOPOLOGIA FIZICĂ: nodurile hardware, conexiunile de comunicație dintre ele și artefactele software PLASATE (deployed) pe fiecare nod.',
  },
  {
    id: 'dep-002',
    topic: 'deployment',
    difficulty: 'easy',
    prompt: 'Ce este un nod (node) în diagrama de plasare?',
    options: [
      'Un element hardware sau software care PRELUCREAZĂ date și poate executa artefacte',
      'Un punct de rețea fără procesare',
      'Un fișier executabil',
      'O interfață de comunicație',
    ],
    correctIndex: 0,
    explanation:
      'NODUL: element care PRELUCREAZĂ date (are CPU/memorie). Ex: server web, server BD, calculator client. Se reprezintă grafic ca un cub 3D. Diferit de Device (care nu prelucrează).',
  },
  {
    id: 'dep-003',
    topic: 'deployment',
    difficulty: 'medium',
    prompt: 'Ce este un device în diagrama de plasare?',
    options: [
      'Un dispozitiv hardware care NU prelucrează date în sistem (periferic, printer, scanner)',
      'Un nod specializat cu mai mulți procesori',
      'Un fișier de configurare hardware',
      'Un server dedicat pentru I/O',
    ],
    correctIndex: 0,
    explanation:
      'DEVICE (<<device>>): element hardware care NU execută logică proprie/software. Ex: imprimantă, scanner, monitor, router. Se notează ca nod cu stereotipul <<device>>. NU confunda cu nodul (care procesează).',
  },
  {
    id: 'dep-004',
    topic: 'deployment',
    difficulty: 'trap',
    prompt: 'Un mouse și o imprimantă sunt exemple de:',
    options: [
      'Device (<<device>>) – nu prelucrează date',
      'Noduri – pentru că sunt hardware',
      'Artefacte – sunt componente fizice',
      'Actori – interacționează cu sistemul',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANA: Mouse și imprimantă sunt DEVICE (<<device>>), NU noduri! Nodul PRELUCREAZĂ date (are CPU). Un mouse transmite input fără procesare. O imprimantă primește și tipărește fără logică de afaceri. Aceasta e distincția esențială Nod vs Device.',
  },
  {
    id: 'dep-005',
    topic: 'deployment',
    difficulty: 'easy',
    prompt: 'Ce este o legătură de comunicație (communication path) în diagrama de plasare?',
    options: [
      'Linia dintre două noduri care arată că pot comunica (rețea, serial, USB etc.)',
      'O relație de dependență',
      'Un fișier de configurare a rețelei',
      'Un protocol de comunicație',
    ],
    correctIndex: 0,
    explanation:
      'Calea de comunicație (communication path): linia dintre noduri, opțional etichetată cu protocoalele sau tehnologia de comunicație (ex: TCP/IP, HTTP, USB, Serial). Arată că nodurile pot schimba date.',
  },
  {
    id: 'dep-006',
    topic: 'deployment',
    difficulty: 'medium',
    prompt: 'Cum se arată că un artefact este plasat pe un nod în diagrama de deployment?',
    options: [
      'Artefactul se desenează ÎNĂUNTRUL nodului (sau cu relația <<deploy>>)',
      'Artefactul se conectează la nod cu o linie de asociere',
      'Artefactul se plasează lângă nod cu săgeată',
      'Nu se poate arăta această relație în UML',
    ],
    correctIndex: 0,
    explanation:
      'Plasarea artefactului: fie se desenează ÎNĂUNTRUL nodului (cel mai comun), fie se folosește relația de dependență cu stereotipul <<deploy>> de la artefact spre nod. Artefactul înăuntru = cel mai clar vizual.',
  },
  {
    id: 'dep-007',
    topic: 'deployment',
    difficulty: 'medium',
    prompt: 'Ce este un mediu de execuție (execution environment) în diagrama de deployment?',
    options: [
      'Un nod software (JVM, .NET CLR, browser, container Docker) care găzduiește artefacte',
      'Un server fizic',
      'Un sistem de operare',
      'Un protocol de rețea',
    ],
    correctIndex: 0,
    explanation:
      'Execution Environment: nod SOFTWARE care poate executa artefacte. Ex: JVM, .NET Runtime, Apache Tomcat, Docker Container, Browser. Se notează cu <<executionEnvironment>>. Poate fi imbricat în noduri hardware.',
  },
  {
    id: 'dep-008',
    topic: 'deployment',
    difficulty: 'hard',
    prompt: 'Cum se arată că un server web rulează pe un server fizic în diagrama de deployment?',
    options: [
      'Nodul software (server web) se desenează ÎNĂUNTRUL nodului hardware (server fizic)',
      'Nodul software se conectează la nodul hardware cu o linie',
      'Se folosesc două noduri separate cu săgeată de dependență',
      'Nu se modelează această relație',
    ],
    correctIndex: 0,
    explanation:
      'IMBRICARE: nodurile software (execution environment: Apache, IIS) se desenează ÎNĂUNTRUL nodurilor hardware. Ex: nodul fizic „Server1" conține înăuntru nodul software „Tomcat:JEE Container" care conține artefactul „app.war".',
  },
  {
    id: 'dep-009',
    topic: 'deployment',
    difficulty: 'easy',
    prompt: 'Diagrama de plasare este o diagramă:',
    options: [
      'De implementare (statică)',
      'Comportamentală (dinamică)',
      'De interacțiune',
      'Structurală logică',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama de Deployment = diagramă de IMPLEMENTARE (statică), alături de diagrama componentelor. Descrie configurația fizică statică, nu comportamentul dinamic al sistemului.',
  },
  {
    id: 'dep-010',
    topic: 'deployment',
    difficulty: 'medium',
    prompt: 'Câte tipuri de noduri există în diagrama de deployment conform UML?',
    options: [
      '2 tipuri: noduri hardware (device) și noduri software (execution environment)',
      '3 tipuri: server, client, router',
      '1 tip generic',
      '4 tipuri: server, client, device, rețea',
    ],
    correctIndex: 0,
    explanation:
      'UML definește 2 categorii de noduri: 1) NODURI HARDWARE: fizice, cu CPU (<<node>>) și periferice fără procesare (<<device>>); 2) NODURI SOFTWARE: medii de execuție (<<executionEnvironment>>). Ambele se reprezintă ca cuburi 3D.',
  },
  {
    id: 'dep-011',
    topic: 'deployment',
    difficulty: 'hard',
    prompt: 'Un sistem web cu: Browser → Internet → Load Balancer → 2x App Server → Database Server. Câte noduri sunt în diagrama de deployment?',
    options: [
      '5 noduri (Browser, Load Balancer, AppServer1, AppServer2, DatabaseServer) + Internet ca path',
      '4 noduri',
      '6 noduri (includem Internet)',
      '3 noduri (client, server, BD)',
    ],
    correctIndex: 0,
    explanation:
      'Nodurile fizice/software: Browser (client), Load Balancer, App Server 1, App Server 2, Database Server = 5 noduri. Internet este o CALE DE COMUNICAȚIE (communication path), nu un nod distinct. Total: 5 noduri, 4 căi de comunicație.',
  },
  {
    id: 'dep-012',
    topic: 'deployment',
    difficulty: 'medium',
    prompt: 'Ce stereotip folosit frecvent pe noduri indică un sistem de calcul/server?',
    options: [
      '<<device>>, <<server>>, <<client>>, <<processor>>',
      '<<component>>, <<subsystem>>',
      '<<artifact>>, <<manifest>>',
      '<<interface>>, <<abstract>>',
    ],
    correctIndex: 0,
    explanation:
      'Stereotipuri comune pe noduri hardware: <<device>>, <<server>>, <<client>>, <<processor>>, <<mobile>>. Pe noduri software: <<executionEnvironment>>, <<container>>, <<OS>>. <<component>> e pentru diagrama componentelor, nu deployment.',
  },
  {
    id: 'dep-013',
    topic: 'deployment',
    difficulty: 'easy',
    prompt: 'Ce este un artefact în contextul diagramei de deployment?',
    options: [
      'Manifestarea fizică a unui element software: .jar, .war, .exe, .dll, fișier config',
      'O componentă abstractă',
      'Un nod de procesare',
      'O interfață de comunicație',
    ],
    correctIndex: 0,
    explanation:
      'Artefactul = fișierul fizic deploiat pe un nod: executabile (.exe, .jar), librării (.dll, .so), web archives (.war), configurări (.xml, .json), scripturi BD (.sql). Se notează cu <<artifact>> sau pictograma document.',
  },
  {
    id: 'dep-014',
    topic: 'deployment',
    difficulty: 'trap',
    prompt: 'Care este diferența dintre un NOUD și un DEVICE în diagrama de deployment?',
    options: [
      'Nodul PRELUCREAZĂ date (are CPU+software); Device-ul NU prelucrează (periferic)',
      'Nodul este software; Device-ul este hardware',
      'Nodul este client; Device-ul este server',
      'Nu există diferență, sunt termeni sinonimi',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA CRITICĂ: NOUD = PRELUCREAZĂ date (server, PC, router inteligent – are CPU și rulează software). DEVICE = NU prelucrează logic (imprimantă, scanner, monitor, mouse). Un router inteligent cu OS poate fi nod; un hub pasiv e device.',
  },
  {
    id: 'dep-015',
    topic: 'deployment',
    difficulty: 'hard',
    prompt: 'Conform UML, cum se reprezintă că un nod necesită un alt nod pentru a funcționa?',
    options: [
      'Prin dependență (linie întreruptă) sau prin imbrciare (unul în interiorul altuia)',
      'Prin generalizare',
      'Prin asociere cu multiplicitate',
      'Nu se poate modela această relație',
    ],
    correctIndex: 0,
    explanation:
      'Dependența dintre noduri: dacă Nodul A necesită Nodul B (ex: App Server necesită DB Server), se folsește dependența (linie întreruptă cu săgeată). Sau, dacă unul rulează înăuntrul altuia, se folosește IMBRICAREA (one inside other).',
  },
];

import type { Question } from '../types/question';

export const componentDiagramQuestions: Question[] = [
  {
    id: 'cmp-001',
    topic: 'component',
    difficulty: 'easy',
    prompt: 'Ce descrie diagrama componentelor în UML?',
    options: [
      'Organizarea fizică a componentelor software și interfețele lor',
      'Clasele sistemului și relațiile de moștenire',
      'Fluxul activităților în sistem',
      'Stările obiectelor la runtime',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Componentelor descrie arhitectura SOFTWARE fizică: modulele/componentele executabile sau de librărie și interfețele prin care interacționează. Este o diagramă de IMPLEMENTARE.',
  },
  {
    id: 'cmp-002',
    topic: 'component',
    difficulty: 'easy',
    prompt: 'Cum se reprezintă grafic o componentă în UML?',
    options: [
      'Dreptunghi cu două dreptunghiuri mici pe latura stângă și stereotipul <<component>>',
      'Elipsă cu interfață',
      'Cilindru',
      'Dreptunghi cu romb',
    ],
    correctIndex: 0,
    explanation:
      'Componentă UML: dreptunghi cu notația specială (două mici dreptunghiuri proeminente pe stânga) SAU dreptunghi cu stereotipul <<component>>. Poate conține alte elemente (diagrama e ierarhică).',
  },
  {
    id: 'cmp-003',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'Ce este o interfață furnizată (provided interface)?',
    options: [
      'Interfața pe care componenta o OFERĂ (implementează) altor componente – notată cu "ball" (cerc)',
      'Interfața pe care componenta o CERE de la altele',
      'O interfață internă a componentei',
      'Parametrul de configurare al componentei',
    ],
    correctIndex: 0,
    explanation:
      'Interfața FURNIZATĂ (provided): componenta o IMPLEMENTEAZĂ și o expune. Notată cu un cerc plin (ball) atașat componentei. Interfața CERUTĂ (required): componenta are NEVOIE de ea. Notată cu un arc semicerc (socket/cup). Ball și socket = lollipop notation.',
  },
  {
    id: 'cmp-004',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'Ce este o interfață cerută (required interface)?',
    options: [
      'Interfața de care componenta are NEVOIE de la alte componente – notată cu "socket" (semicerc)',
      'Interfața pe care componenta o furnizează',
      'O interfață obligatorie din UML standard',
      'Interfața externă a sistemului',
    ],
    correctIndex: 0,
    explanation:
      'Interfața CERUTĂ (required): componenta are nevoie de ea pentru a funcționa. Se notează cu un SOCKET (semicerc sau arc) la capătul conectorului. Dacă ball-ul (furnizat) se potrivește cu socket-ul (cerut), componentele sunt compatibile.',
  },
  {
    id: 'cmp-005',
    topic: 'component',
    difficulty: 'hard',
    prompt: 'Ce este un port în diagrama componentelor?',
    options: [
      'Un punct de interacțiune al componentei cu exteriorul, grupând interfețele furnizate/cerute',
      'Un număr de port TCP/IP',
      'O ieșire a componentei',
      'Un parametru de metoda',
    ],
    correctIndex: 0,
    explanation:
      'PORT: un punct de interacțiune pe granița componentei, marcat cu un mic pătrat. Un port poate agrupa mai multe interfețe furnizate și cerute. Portul numește rolul interacțiunii (ex: portul "HTTP", portul "DB").',
  },
  {
    id: 'cmp-006',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'Care relație se folosește pentru a arăta că o componentă IMPLEMENTEAZĂ o interfață?',
    options: [
      'Realizarea (linie întreruptă + triunghi gol)',
      'Asocierea',
      'Dependența',
      'Generalizarea',
    ],
    correctIndex: 0,
    explanation:
      'O componentă implementează o interfață prin REALIZARE: linie ÎNTRERUPTĂ + triunghi gol, de la componentă spre interfață. Sau în notația lollipop: ball (cerc plin) atașat la componentă reprezentând interfața furnizată.',
  },
  {
    id: 'cmp-007',
    topic: 'component',
    difficulty: 'easy',
    prompt: 'Ce este un artifact în UML?',
    options: [
      'Un element fizic al sistemului: fișier .exe, .jar, .dll, .war, fișier de config',
      'O componentă abstractă',
      'Un obiect la runtime',
      'Un modul de test',
    ],
    correctIndex: 0,
    explanation:
      'Artefactul = manifestare fizică a unui element software: executabile, librării, fișiere de configurare, scripturi, baze de date. Se notează cu <<artifact>> sau cu pictograma de document cu colț pliat. Se PLASEAZĂ pe noduri în diagrama de deployment.',
  },
  {
    id: 'cmp-008',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'Ce relație conectează un artefact la componenta pe care o implementează?',
    options: [
      'Manifestare (<<manifest>>) – dependență de la artefact la componentă',
      'Realizare',
      'Asociere',
      'Compoziție',
    ],
    correctIndex: 0,
    explanation:
      'MANIFESTARE (<<manifest>>): relație de dependență de la ARTEFACT spre COMPONENTĂ/ELEMENT care o arată că artefactul implementează sau manifestă acel element. Ex: artefactul „app.jar" manifestează componenta „ServiceLayer".',
  },
  {
    id: 'cmp-009',
    topic: 'component',
    difficulty: 'hard',
    prompt: 'Diferența dintre diagrama componentelor și diagrama claselor este:',
    options: [
      'Componente: nivel de implementare fizică/pachet; Clase: nivel logic/conceptual',
      'Componente: doar pentru sisteme mari; Clase: pentru orice sistem',
      'Componente: comportamentale; Clase: structurale',
      'Nu există diferență conceptuală',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA: Diagrama Claselor = nivel LOGIC (modelul domeniului, structura conceptuală). Diagrama Componentelor = nivel FIZIC DE IMPLEMENTARE (cum e structurat codul în module, librării, executabile). O clasă poate fi implementată de mai multe componente.',
  },
  {
    id: 'cmp-010',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'Se pot imbrica componente în interiorul altor componente?',
    options: [
      'Da, componentele pot conține subcomponente (arhitectură ierarhică)',
      'Nu, componentele sunt mereu la același nivel',
      'Da, dar numai cu stereotipul <<subsystem>>',
      'Nu, subcomponentele devin clase',
    ],
    correctIndex: 0,
    explanation:
      'Da, diagrama componentelor este IERARHICĂ. O componentă poate conține subcomponente, arătând descompunerea internă. Interfețele externe ale componentei mari sunt mapate pe interfețele subcomponentelor interne.',
  },
  {
    id: 'cmp-011',
    topic: 'component',
    difficulty: 'easy',
    prompt: 'Diagrama componentelor este o diagramă:',
    options: [
      'De implementare (statică)',
      'Comportamentală (dinamică)',
      'De interacțiune',
      'De cazuri de utilizare',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Componentelor = diagramă de IMPLEMENTARE (statică). Împreună cu Diagrama de Deployment formează categoria diagramelor de implementare din UML. Nu arată comportament dinamic.',
  },
  {
    id: 'cmp-012',
    topic: 'component',
    difficulty: 'hard',
    prompt: 'Ce arată relația de dependență între două componente?',
    options: [
      'Componenta client FOLOSEȘTE interfețe sau servicii ale componentei furnizor',
      'Componenta client MOȘTENEȘTE din componenta furnizor',
      'Componentele rulează în paralel',
      'Componentele sunt alternative la runtime',
    ],
    correctIndex: 0,
    explanation:
      'Dependența între componente (linie întreruptă cu săgeată deschisă): componenta CLIENT depinde de componenta FURNIZOR. Concret: client-ul folosește o interfață sau serviciu al furnizorului. Modificarea furnizorului poate afecta client-ul.',
  },
  {
    id: 'cmp-013',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'Ce este un conector de asamblare (assembly connector)?',
    options: [
      'Conectorul care leagă interfața furnizată a unei componente cu interfața cerută a alteia',
      'Un fir fizic de rețea',
      'O relație de moștenire între componente',
      'Un port special',
    ],
    correctIndex: 0,
    explanation:
      'Conectorul de asamblare (ball-socket notation): leagă BALL-ul (interfața furnizată) de SOCKET-ul (interfața cerută). Arată că cele două componente sunt compatibile și conectate prin acea interfață.',
  },
  {
    id: 'cmp-014',
    topic: 'component',
    difficulty: 'easy',
    prompt: 'Ce stereotipuri frecvente se folosesc pentru componente?',
    options: [
      '<<component>>, <<subsystem>>, <<service>>, <<executable>>',
      '<<class>>, <<interface>>, <<abstract>>',
      '<<actor>>, <<use-case>>, <<system>>',
      '<<node>>, <<device>>, <<artifact>>',
    ],
    correctIndex: 0,
    explanation:
      'Stereotipuri comune pentru componente: <<component>> (implicit), <<subsystem>> (un subsistem), <<service>> (serviciu web/API), <<executable>> (fișier executabil), <<library>> (librărie). Stereotipurile <<node>>/<<device>> sunt pentru diagrama de deployment.',
  },
  {
    id: 'cmp-015',
    topic: 'component',
    difficulty: 'hard',
    prompt: 'O componentă UILayer depinde de ComponentaServiceLayer. ServiceLayer implementează interfața IOrderService. UILayer cere interfața IOrderService. Ce notație se folosește?',
    options: [
      'Ball la ServiceLayer (furnizat IOrderService) + Socket la UILayer (cerut IOrderService) conectate prin assembly connector',
      'Dependență directă UILayer → ServiceLayer',
      'Generalizare ServiceLayer → UILayer',
      'Realizare UILayer → IOrderService',
    ],
    correctIndex: 0,
    explanation:
      'Notația ball-socket: ServiceLayer are BALL (cerc plin) reprezentând IOrderService furnizat. UILayer are SOCKET (semicerc) reprezentând IOrderService cerut. Assembly connector leagă ball de socket. Aceasta vizualizează cuplajul prin interfață (loose coupling).',
  },
  {
    id: 'cmp-016',
    topic: 'component',
    difficulty: 'medium',
    prompt: 'O componentă poate realiza (implementa) mai multe interfețe?',
    options: [
      'Da, o componentă poate implementa multiple interfețe',
      'Nu, fiecare componentă implementează exact o interfață',
      'Da, dar maxim 3 interfețe per componentă',
      'Nu, implementarea multiplă nu e suportată în diagrama componentelor',
    ],
    correctIndex: 0,
    explanation:
      'O componentă poate FURNIZA (implementa) multiple interfețe – fiecare reprezentată ca un ball separat pe granița componentei. Similar cu o clasă Java care poate implementa mai multe interfețe.',
  },
  {
    id: 'cmp-017',
    topic: 'component',
    difficulty: 'easy',
    prompt: 'Care este utilizarea principală a diagramei componentelor?',
    options: [
      'Arhitectura software: organizarea modulelor, librăriilor și dependențelor între ele',
      'Descrierea fluxului de date',
      'Modelarea bazei de date',
      'Specificarea interfeței utilizator',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Componentelor e folosită pentru ARHITECTURA SOFTWARE: cum e structurat sistemul în module/componente, ce interfețe expun, cum depind unele de altele. Esențială pentru documentarea arhitecturii și planificarea refactorizării.',
  },
  {
    id: 'cmp-018',
    topic: 'component',
    difficulty: 'hard',
    prompt: 'Care din notațiile de mai jos este INCORECTĂ în diagrama componentelor?',
    options: [
      'Relație de generalizare (moștenire) între două componente',
      'Relație de dependență între componente',
      'Realizare componentă → interfață',
      'Delegare de la un port la o componentă internă',
    ],
    correctIndex: 0,
    explanation:
      'GENERALIZAREA între componente nu este o relație uzuală/validă în diagrama componentelor. Componentele nu „moștenesc" unele din altele. Relațiile valide sunt: dependența, realizarea (interfață), delegarea, asamblarea (ball-socket). Generalizarea e pentru clase/actori.',
  },
];

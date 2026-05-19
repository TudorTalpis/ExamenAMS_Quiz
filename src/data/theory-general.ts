import type { Question } from '../types/question';

export const theoryGeneralQuestions: Question[] = [
  {
    id: 'gen-001',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce înseamnă acronimul UML?',
    options: [
      'Unified Modeling Language',
      'Universal Markup Language',
      'Unified Method Language',
      'Universal Modeling Library',
    ],
    correctIndex: 0,
    explanation:
      'UML = Unified Modeling Language – limbaj grafic standardizat pentru modelarea sistemelor software, adoptat de OMG în 1997.',
  },
  {
    id: 'gen-002',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Care organizație a standardizat UML?',
    options: [
      'OMG (Object Management Group)',
      'IEEE',
      'ISO',
      'W3C',
    ],
    correctIndex: 0,
    explanation:
      'OMG (Object Management Group) a adoptat UML ca standard în 1997. IEEE, ISO și W3C nu sunt responsabile pentru standardizarea UML.',
  },
  {
    id: 'gen-003',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Care sunt cei trei „trei amigos" care au creat UML?',
    options: [
      'Grady Booch, James Rumbaugh, Ivar Jacobson',
      'Erich Gamma, Richard Helm, Ralph Johnson',
      'Martin Fowler, Kent Beck, Ward Cunningham',
      'Bertrand Meyer, Peter Coad, Edward Yourdon',
    ],
    correctIndex: 0,
    explanation:
      'UML a fost creat de Grady Booch (metoda Booch), James Rumbaugh (OMT) și Ivar Jacobson (OOSE) la Rational Software în 1994–1996.',
  },
  {
    id: 'gen-004',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Câte tipuri de diagrame definește UML standard (conform cursului AMS)?',
    options: [
      '8 diagrame',
      '5 diagrame',
      '12 diagrame',
      '3 diagrame',
    ],
    correctIndex: 0,
    explanation:
      'Conform cursului AMS (prof. Sava N.), UML definește 8 diagrame: Cazuri de utilizare, Clase, Stări, Activități, Secvențe, Colaborare, Componente, Plasare (Deployment).',
  },
  {
    id: 'gen-005',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce este o entitate în UML?',
    options: [
      'Un element de bază din care se construiesc modelele UML',
      'O relație între două clase',
      'Un pachet de diagrame',
      'O metodă a unui obiect',
    ],
    correctIndex: 0,
    explanation:
      'Entitățile (building blocks) sunt elementele de bază ale UML. Ele pot fi: structurale, comportamentale, de grupare sau de adnotare.',
  },
  {
    id: 'gen-006',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Care sunt cele 4 categorii de entități UML?',
    options: [
      'Structurale, comportamentale, de grupare, de adnotare',
      'Clase, obiecte, actori, use-case-uri',
      'Statice, dinamice, logice, fizice',
      'Entități, relații, diagrame, regulile',
    ],
    correctIndex: 0,
    explanation:
      'UML definește 4 tipuri de entități: structurale (clasă, interfață, componentă…), comportamentale (interacțiune, mașină de stări), de grupare (pachet) și de adnotare (notă/comentariu).',
  },
  {
    id: 'gen-007',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Câte tipuri de relații există în UML?',
    options: [
      '4 (dependență, asociere, generalizare, realizare)',
      '3 (asociere, generalizare, realizare)',
      '5 (dependență, asociere, generalizare, realizare, compoziție)',
      '2 (asociere și generalizare)',
    ],
    correctIndex: 0,
    explanation:
      'UML definește exact 4 tipuri de relații: dependență, asociere (include agregare și compoziție), generalizare și realizare. Compoziția și agregarea sunt SUBTIPURI ale asocierii.',
  },
  {
    id: 'gen-008',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce este o dependență în UML?',
    options: [
      'O relație în care modificarea unui element poate afecta un alt element',
      'O relație de moștenire între două clase',
      'O relație în care o clasă conține instanțe ale altei clase',
      'O relație între o clasă și o interfață pe care o implementează',
    ],
    correctIndex: 0,
    explanation:
      'Dependența este o relație slabă: dacă elementul "furnizor" se modifică, elementul "client" poate fi afectat. Se reprezintă cu linie întreruptă + săgeată deschisă.',
  },
  {
    id: 'gen-009',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce este o generalizare în UML?',
    options: [
      'Relație de tip „este-un" (is-a) între un element mai specific și unul mai general',
      'Relație în care o clasă implementează o interfață',
      'Relație care arată că o componentă depinde de alta',
      'Relație de asociere cu multiplicitate 1:N',
    ],
    correctIndex: 0,
    explanation:
      'Generalizarea (moștenirea) exprimă relația is-a. Elementul specific moștenește proprietățile celui general. Se reprezintă cu linie continuă + săgeată goală (triunghi) spre clasă-părinte.',
  },
  {
    id: 'gen-010',
    topic: 'general',
    difficulty: 'hard',
    prompt: 'Care este numărul MINIM de elemente necesare pentru a reprezenta o generalizare în UML?',
    options: [
      '3 (un element general + minim 2 elemente specifice)',
      '2 (un element general + un element specific)',
      '4 (un element general + 3 specifice)',
      '1 (o singură clasă cu auto-generalizare)',
    ],
    correctIndex: 0,
    explanation:
      'Conform regulilor prof. Sava N.: generalizarea necesită MINIM 3 elemente – un element general (părinte) și CEL PUȚIN 2 elemente specifice (copii). O generalizare cu un singur copil este INCORECTĂ sintactic.',
  },
  {
    id: 'gen-011',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Ce este o realizare în UML?',
    options: [
      'Relație în care o clasă sau componentă implementează contractul unei interfețe',
      'Relație de moștenire între două clase',
      'Relație de dependență cu direcție specificată',
      'Relație în care un pachet include alt pachet',
    ],
    correctIndex: 0,
    explanation:
      'Realizarea se folosește DOAR între Clasă↔Interfață sau Componentă↔Interfață. Se reprezintă cu linie întreruptă + săgeată goală (triunghi). Arată că clasa „realizează" contractul interfatței.',
  },
  {
    id: 'gen-012',
    topic: 'general',
    difficulty: 'trap',
    prompt: 'Care relație UML se reprezintă cu LINIE ÎNTRERUPTĂ + săgeată goală (triunghi)?',
    options: [
      'Realizarea (Clasă → Interfață)',
      'Generalizarea (Clasă copil → Clasă părinte)',
      'Dependența (Client → Furnizor)',
      'Asocierea bidirecțională',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANĂ: Realizarea = linie ÎNTRERUPTĂ + săgeată goală. Generalizarea = linie CONTINUĂ + săgeată goală. Dependența = linie ÎNTRERUPTĂ + săgeată deschisă (nu goală). Diferența linie continuă/întreruptă este esențială!',
  },
  {
    id: 'gen-013',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce reprezintă un pachet (package) în UML?',
    options: [
      'Entitate de grupare care organizează elemente UML în unități logice',
      'O clasă abstractă',
      'Un modul executabil al sistemului',
      'Un nod fizic din diagrama de plasare',
    ],
    correctIndex: 0,
    explanation:
      'Pachetul este o entitate de GRUPARE. Permite organizarea diagramelor și elementelor în compartimente logice. Se reprezintă grafic ca un dosar cu tab.',
  },
  {
    id: 'gen-014',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce este o notă (note) în UML?',
    options: [
      'Entitate de adnotare care adaugă comentarii sau explicații unui element',
      'O clasă specială cu stereotip',
      'Un tip de relație de dependență',
      'O interfață cu o singură metodă',
    ],
    correctIndex: 0,
    explanation:
      'Nota este o entitate de ADNOTARE. Se reprezintă grafic ca un dreptunghi cu colțul pliat. Poate fi atașată oricărui element UML printr-o linie punctată.',
  },
  {
    id: 'gen-015',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Ce este o asociere în UML?',
    options: [
      'Relație structurală care arată că instanțele a două elemente pot fi conectate',
      'O relație de moștenire',
      'O relație unde o clasă implementează o interfață',
      'O dependență cu multiplicitate specificată',
    ],
    correctIndex: 0,
    explanation:
      'Asocierea este o relație structurală bidirectională sau unidirecțională. Implică o legătură semantică (ex. „Student frecventează Curs"). Subtipurile sunt agregarea și compoziția.',
  },
  {
    id: 'gen-016',
    topic: 'general',
    difficulty: 'hard',
    prompt: 'Ce este multiplicitatea implicită într-o asociere UML (când nu este specificată)?',
    options: [
      '1..1 (exact unul)',
      '0..* (zero sau mai mulți)',
      '1..* (unul sau mai mulți)',
      '* (orice număr)',
    ],
    correctIndex: 0,
    explanation:
      'Conform regulilor prof. Sava N.: multiplicitatea IMPLICITĂ (nemenționată) = 1..1. Regula suplimentară: dacă MĂCAR O relație are multiplicitate diferită de 1..1, TOATE relațiile din diagramă trebuie să aibă multiplicitate indicată explicit.',
  },
  {
    id: 'gen-017',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Care este diferența dintre agregare și compoziție?',
    options: [
      'La agregare „partea" poate exista independent de „întreg"; la compoziție NU poate',
      'La compoziție „partea" poate exista independent de „întreg"; la agregare NU poate',
      'Agregarea e relație de moștenire; compoziția e relație de asociere',
      'Nu există diferență, sunt termeni sinonimi',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA CHEIE: Agregare (romb gol) = „parte" poate exista fără „întreg" (ex. Student aparține Facultății, dar există și fără ea). Compoziție (romb plin) = „parte" NU poate exista fără „întreg" (ex. Camera aparține Clădirii — dacă demolezi Clădirea, Camera dispare).',
  },
  {
    id: 'gen-018',
    topic: 'general',
    difficulty: 'trap',
    prompt: 'Un obiect Camera face parte dintr-o Clădire. Dacă Clădirea este demolată, Camera nu mai există. Ce relație UML se folosește?',
    options: [
      'Compoziție (romb plin la Clădire)',
      'Agregare (romb gol la Clădire)',
      'Generalizare (Camera extinde Clădire)',
      'Dependență (Camera depinde de Clădire)',
    ],
    correctIndex: 0,
    explanation:
      'Camera NU poate exista fără Clădire → COMPOZIȚIE (romb negru/plin la capătul Clădirii). Agregarea ar fi dacă Camera ar putea exista independent. Generalizarea ar fi is-a, nu are sens. Dependența e prea slabă.',
  },
  {
    id: 'gen-019',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Ce descrie nivelul M2 (metametamodel) în arhitectura pe 4 niveluri a OMG?',
    options: [
      'Metamodelul UML însuși (definițiile elementelor UML: clasă, asociere, etc.)',
      'Modelele concrete ale aplicațiilor (ex: clasa Cont)',
      'Obiectele (instanțele) din sistemul care rulează',
      'Standardul MOF (Meta-Object Facility)',
    ],
    correctIndex: 3,
    explanation:
      'Arhitectura MOF (4 niveluri): M3 = MOF (metametamodel, definește cum se construiesc metamodele), M2 = UML Metamodel (definițiile elementelor UML), M1 = Modelul aplicației (clasa Cont, clasa Client), M0 = Instanțele la runtime (obiectul Cont#123).',
  },
  {
    id: 'gen-020',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce este un stereotip în UML?',
    options: [
      'Extensie a vocabularului UML care permite adăugarea de noi tipuri de elemente',
      'O clasă abstractă cu metodele abstracte',
      'Un tip special de relație de dependență',
      'O regulă de multiplicitate obligatorie',
    ],
    correctIndex: 0,
    explanation:
      'Stereotipul extinde vocabularul UML. Se scrie între ghilimele: <<actor>>, <<interface>>, <<boundary>>, <<control>>, <<entity>>, <<device>>. Permite clasificarea suplimentară a elementelor standard.',
  },
  {
    id: 'gen-021',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Ce stereotipuri se folosesc în analiza orientată-obiect pentru a clasifica clasele (analiza robustității)?',
    options: [
      '<<boundary>>, <<control>>, <<entity>>',
      '<<interface>>, <<abstract>>, <<concrete>>',
      '<<actor>>, <<use-case>>, <<system>>',
      '<<component>>, <<node>>, <<artifact>>',
    ],
    correctIndex: 0,
    explanation:
      'Analiza robustității (Jacobson): <<boundary>> = clasă de interfață (UI/API), <<control>> = clasă cu logică de afaceri (controller), <<entity>> = clasă de date (persistentă/DB). Aceste stereotipuri mapează arhitectura MVC.',
  },
  {
    id: 'gen-022',
    topic: 'general',
    difficulty: 'hard',
    prompt: 'Care metodă UML anterioară a introdus conceptul de „use case"?',
    options: [
      'OOSE (Object-Oriented Software Engineering) – Ivar Jacobson',
      'OMT (Object Modeling Technique) – James Rumbaugh',
      'Metoda Booch – Grady Booch',
      'RUP (Rational Unified Process)',
    ],
    correctIndex: 0,
    explanation:
      'OOSE (Jacobson, 1992) a introdus cazurile de utilizare. OMT (Rumbaugh) s-a axat pe diagrame de clase și obiecte. Metoda Booch s-a axat pe arhitectura componentelor. Toate trei s-au unificat în UML 1.0 (1996).',
  },
  {
    id: 'gen-023',
    topic: 'general',
    difficulty: 'easy',
    prompt: 'Ce este o interfață în UML?',
    options: [
      'Un classifier care definește un set de operații publice fără implementare',
      'O clasă cu toți membrii publici',
      'O clasă abstractă cu minim o metodă abstractă',
      'Un pachet cu operații exportate',
    ],
    correctIndex: 0,
    explanation:
      'Interfața definește un CONTRACT (operații publice) fără implementare. Se notează cu stereotipul <<interface>> sau cu un cerc (notație „ball"). Convenție de denumire: prefix „I" (ex. IVehicul).',
  },
  {
    id: 'gen-024',
    topic: 'general',
    difficulty: 'trap',
    prompt: 'Care afirmație despre multiplicitatea „*" este corectă în UML?',
    options: [
      '"*" este prescurtarea pentru "0..*" (zero sau mai mulți)',
      '"*" este prescurtarea pentru "1..*" (unul sau mai mulți)',
      '"*" înseamnă "exact un număr necunoscut"',
      '"*" este invalid – trebuie scris "0..n"',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANĂ: "∗" = "0..*" (zero sau mai mulți), NU "1..*". Diferența contează: "1..*" impune că TREBUIE să existe cel puțin o instanță; "0..*" permite și zero instanțe. Examinatorii testează des această distincție.',
  },
  {
    id: 'gen-025',
    topic: 'general',
    difficulty: 'medium',
    prompt: 'Diagrama Cazurilor de Utilizare aparține cărei categorii de diagrame UML?',
    options: [
      'Diagrame structurale (statice)',
      'Diagrame comportamentale (dinamice)',
      'Diagrame de interacțiune',
      'Diagrame de implementare',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Cazurilor de Utilizare este o diagramă STRUCTURALĂ – prezintă ce face sistemul fără a descrie fluxul intern. Diagramele comportamentale sunt: Stări, Activități, Secvențe, Colaborare. Diagramele de implementare: Componente, Plasare.',
  },
];

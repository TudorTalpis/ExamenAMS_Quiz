import type { Question } from '../types/question';

export const stateDiagramQuestions: Question[] = [
  {
    id: 'st-001',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Ce descrie diagrama stărilor în UML?',
    options: [
      'Ciclul de viață al unui obiect – stările prin care trece și tranzițiile dintre ele',
      'Structura claselor sistemului',
      'Fluxul activităților unui proces',
      'Mesajele schimbate între obiecte',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Stărilor (State Machine Diagram) modelează CICLUL DE VIAȚĂ al unui obiect: stările posibile și tranzițiile declanșate de evenimente. Ex: Comandă (Plasată → Confirmată → Livrată → Închisă).',
  },
  {
    id: 'st-002',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Cum se reprezintă grafic starea inițială a unui obiect în diagrama stărilor?',
    options: [
      'Cerc plin (negru)',
      'Cerc gol (alb)',
      'Dreptunghi cu colțuri rotunjite',
      'Cerc plin înconjurat de un cerc gol',
    ],
    correctIndex: 0,
    explanation:
      "Starea INIȚIALĂ = cerc plin (negru). Starea FINALĂ = cerc plin înconjurat de cerc gol (bull's-eye). Starea normală = dreptunghi cu colțuri rotunjite.",
  },
  {
    id: 'st-003',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Cum se reprezintă grafic starea finală a unui obiect?',
    options: [
      'Cerc plin înconjurat de un cerc gol (bull\'s-eye)',
      'Cerc plin (negru)',
      'Dreptunghi cu colțuri rotunjite plin',
      'X în cerc',
    ],
    correctIndex: 0,
    explanation:
      'Starea FINALĂ = bull\'s-eye: cerc negru plin înăuntru unui cerc mai mare gol. Starea INIȚIALĂ = cerc negru plin simplu. NU confunda cele două notații.',
  },
  {
    id: 'st-004',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Ce este o tranziție în diagrama stărilor?',
    options: [
      'O săgeată de la o stare la alta, etichetată cu eveniment[condiție]/acțiune',
      'O stare cu mai multe sub-stări',
      'O relație de generalizare între stări',
      'Un mesaj asincron între două obiecte',
    ],
    correctIndex: 0,
    explanation:
      'Tranziția = săgeată de la Starea Sursă la Starea Destinație. Eticheta poate conține: eveniment[gardă]/acțiune. Ex: „primesteComanda[stocDisponibil]/rezervaStoc". Toate componentele etichetei sunt opționale.',
  },
  {
    id: 'st-005',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Ce este o condiție de gardă pe o tranziție?',
    options: [
      'O condiție booleană în paranteze drepte care trebuie să fie adevărată pentru ca tranziția să aibă loc',
      'Acțiunea executată la intrarea în stare',
      'Evenimentul care declanșează tranziția',
      'Un pas de securitate al sistemului',
    ],
    correctIndex: 0,
    explanation:
      'Condiția de gardă = expresie booleană între [ ]. Tranziția are loc DOAR dacă evenimentul apare ȘI condiția de gardă este true. Ex: primesteComanda[stocDisponibil = true]. Fără gardă, tranziția se execută mereu la eveniment.',
  },
  {
    id: 'st-006',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Care sunt acțiunile interne ale unei stări?',
    options: [
      'entry (la intrare), exit (la ieșire), do (pe durata stării)',
      'start, stop, pause',
      'init, run, done',
      'begin, execute, terminate',
    ],
    correctIndex: 0,
    explanation:
      'Acțiunile interne standard ale unei stări: entry/acțiune (executată când se intră în stare), exit/acțiune (executată când se iese), do/acțiune (executată continuu cât obiectul e în stare).',
  },
  {
    id: 'st-007',
    topic: 'state',
    difficulty: 'hard',
    prompt: 'Care este diferența dintre substări DISJUNCTE și CONCURENTE?',
    options: [
      'Disjuncte: exact o substare activă la un moment dat; Concurente: mai multe substări active simultan',
      'Disjuncte: substările se exclud reciproc la activare; Concurente: toate sunt mereu active',
      'Disjuncte: separate prin linie plină; Concurente: separate prin linie punctată',
      'Nu există diferență practică',
    ],
    correctIndex: 0,
    explanation:
      'SUBSTĂRI DISJUNCTE (exclusiv sau): EXACT O substare activă la un moment dat (ca un switch). SUBSTĂRI CONCURENTE (paralele): MAI MULTE substări active simultan (separate de linie întreruptă orizontală în UML). Concurente = AND-state; Disjuncte = OR-state.',
  },
  {
    id: 'st-008',
    topic: 'state',
    difficulty: 'trap',
    prompt: 'Câte stări inițiale poate avea o diagramă de stări?',
    options: [
      'Exact una (1)',
      'Oricâte',
      'Zero sau una',
      'Exact două',
    ],
    correctIndex: 0,
    explanation:
      'Regula strictă: EXACT O stare inițială per diagramă (sau per regiune de substări). La fel, EXACT O stare finală (sau una per regiune). Două stări inițiale sunt INCORECT conform sintaxei UML.',
  },
  {
    id: 'st-009',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Ce este o stare compozită (composite state)?',
    options: [
      'O stare care conține în interior alte stări (substări)',
      'O stare cu mai mult de 3 tranziții',
      'Starea inițială a sistemului',
      'O stare comună la mai multe obiecte',
    ],
    correctIndex: 0,
    explanation:
      'Starea compozită (superstate) conține substări înăuntrul ei. Permite modelarea comportamentelor ierarhice. Tranzițiile externe pot ieși din superstate (acoperind toate substările sale).',
  },
  {
    id: 'st-010',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Ce este o tranziție internă?',
    options: [
      'O tranziție care nu schimbă starea (nu declanșează entry/exit)',
      'O tranziție între substări',
      'O tranziție la starea inițială',
      'O tranziție fără etichetă',
    ],
    correctIndex: 0,
    explanation:
      'Tranziția INTERNĂ: evenimentul este procesat fără a schimba starea curentă (nu se execută exit/entry). Diferit de auto-tranziție (self-transition) care iese și reintră în aceeași stare, deci execută exit+entry.',
  },
  {
    id: 'st-011',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Ce semnifică o tranziție fără etichetă eveniment?',
    options: [
      'Tranziție automată (completion transition) – se execută imediat când activitatea stării se termină',
      'Tranziție greșit definită',
      'Tranziție eternă (se execută continuu)',
      'Tranziție blocată',
    ],
    correctIndex: 0,
    explanation:
      'Tranziția fără eveniment = completion transition (sau λ-transition): se declanșează AUTOMAT când acțiunea do din stare se termină. Utilizată frecvent la stări cu calcule sau operații lungi.',
  },
  {
    id: 'st-012',
    topic: 'state',
    difficulty: 'hard',
    prompt: 'Dacă un obiect Comandă trece prin stările: Plasată → Confirmată → În Livrare → Livrată → Arhivată, câte tranzițiii are diagrama?',
    options: [
      '5 tranziții (plus tranziția de la starea inițială la Plasată)',
      '4 tranziții',
      '5 stări, deci 5 tranziții',
      '6 tranziții',
    ],
    correctIndex: 0,
    explanation:
      'Numărând tranzițiile: Inițial→Plasată + Plasată→Confirmată + Confirmată→Livrare + Livrare→Livrată + Livrată→Arhivată = 5 tranziții (plus eventual Arhivată→Final = 6). Există și tranziția de la starea inițială care nu se numără uneori.',
  },
  {
    id: 'st-013',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Când se folosește diagrama stărilor?',
    options: [
      'Când un obiect are un ciclu de viață complex cu stări bine definite',
      'Întotdeauna, pentru orice clasă',
      'Doar pentru clasele cu mai mult de 5 atribute',
      'Numai pentru sistemele în timp real',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama stărilor se folosește NUMAI pentru obiectele cu comportament dependent de stare (stateful objects). Nu toate clasele au nevoie de diagramă de stări – doar cele cu cicluri de viață semnificative (Comandă, Cont, Proces).',
  },
  {
    id: 'st-014',
    topic: 'state',
    difficulty: 'trap',
    prompt: 'Care este sintaxa completă a etichetei unei tranziții în diagrama stărilor?',
    options: [
      'eveniment[condiție]/acțiune (toate opționale, ordinea fixă)',
      'acțiune/eveniment[condiție]',
      '[condiție]eveniment/acțiune',
      'acțiune[condiție]/eveniment',
    ],
    correctIndex: 0,
    explanation:
      'Sintaxa standard: eveniment[gardă]/acțiune. Exemplu: primestePlata[suma > 0]/confirmaCont. Ordinea este FIXĂ: eveniment întâi, gardă în paranteze drepte, slash, acțiune. Toate componentele sunt opționale.',
  },
  {
    id: 'st-015',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Ce este un pseudostat de alegere (choice pseudostate)?',
    options: [
      'Un romb care permite bifurcarea tranzițiilor bazate pe condiții de gardă',
      'O stare cu două tranziții de ieșire',
      'Starea inițială alternativă',
      'O tranziție condiționată automată',
    ],
    correctIndex: 0,
    explanation:
      'Pseudostatul de alegere (choice): nod romb din care pleacă mai multe tranziții cu gărzi exclusive ([condiție1], [else]). Permite ramificarea fluxului. Similar cu if-else în cod.',
  },
  {
    id: 'st-016',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Ce se întâmplă cu acțiunile entry și exit când se face o tranziție internă?',
    options: [
      'Nu se execută (obiectul rămâne în aceeași stare, fără exit/entry)',
      'Se execută ambele',
      'Se execută doar exit',
      'Se execută doar entry',
    ],
    correctIndex: 0,
    explanation:
      'Tranziția INTERNĂ: procesează evenimentul fără a schimba starea → NU se execută nici exit, nici entry. Auto-tranziția (self-loop) iese efectiv din stare și reintră → execută exit + entry. Diferența este importantă.',
  },
  {
    id: 'st-017',
    topic: 'state',
    difficulty: 'hard',
    prompt: 'Cum se modelează substările CONCURENTE (paralele) în UML?',
    options: [
      'Starea compozită se împarte în regiuni separate printr-o linie întreruptă orizontală',
      'Se folosesc două stări compozite separate',
      'Se folosesc tranziții simultane',
      'Se folosesc pseudostate fork/join',
    ],
    correctIndex: 0,
    explanation:
      'Substări concurente: starea compozită este împărțită în 2+ REGIUNI de o linie întreruptă orizontală. Fiecare regiune are propriul set de substări active simultan. Toate regiunile devin active la intrarea în starea compozită.',
  },
  {
    id: 'st-018',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Diagrama stărilor vs diagrama activităților: care este diferența principală?',
    options: [
      'Stări: ciclul de viață al unui OBIECT; Activități: fluxul unui PROCES/ALGORITM',
      'Stări: pentru sisteme; Activități: pentru persoane',
      'Stări: statice; Activități: dinamice',
      'Nu există diferență semnificativă',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA: Diagrama Stărilor = perspectiva unui SINGUR OBIECT și stările lui de viață (Cont Bancar: Activ/Blocat/Închis). Diagrama Activităților = fluxul unui PROCES (algoritm, business process) cu ramificări și paralelism.',
  },
  {
    id: 'st-019',
    topic: 'state',
    difficulty: 'easy',
    prompt: 'Un obiect Cont Bancar poate fi în stările: Activ, Blocat, Închis. Care este starea inițială?',
    options: [
      'Activ (la deschiderea contului)',
      'Blocat',
      'Închis',
      'Nu există stare inițială',
    ],
    correctIndex: 0,
    explanation:
      'La crearea unui cont bancar, starea inițială este Activ. Starea inițială (cerc plin) → Activ. Tranziții: Activ→Blocat (la suspendare), Blocat→Activ (la reactivare), Activ→Închis (la închidere cont), etc.',
  },
  {
    id: 'st-020',
    topic: 'state',
    difficulty: 'medium',
    prompt: 'Care este rolul pseudostatului „history" în diagrama stărilor?',
    options: [
      'Reintroduce obiectul în ultima substare activă înainte de o tranziție anterioară',
      'Afișează istoricul tranzițiilor',
      'Creează o tranziție înapoi la starea inițială',
      'Salvează starea curentă pentru rollback',
    ],
    correctIndex: 0,
    explanation:
      'Pseudostatul History (H) rememorează ultima substare activă din acea stare compozită. La revenirea în starea compozită, obiectul reintră direct în ultima substare activă, nu în cea inițială.',
  },
  {
    id: 'st-021',
    topic: 'state',
    difficulty: 'trap',
    prompt: 'Care afirmație despre diagrama stărilor este FALSĂ?',
    options: [
      'Poate exista mai mult de o stare inițială per diagramă',
      'Stările pot conține acțiuni entry, exit și do',
      'Tranzițiile pot fi condiționate de gardă',
      'Stările pot fi compozite (cu substări)',
    ],
    correctIndex: 0,
    explanation:
      'CAPCANĂ: O diagramă de stări are EXACT O stare inițială (per regiune). Mai mult de una este sintactic incorect. Restul afirmațiilor sunt adevărate.',
  },
  {
    id: 'st-022',
    topic: 'state',
    difficulty: 'hard',
    prompt: 'Ce este un eveniment în contextul diagramei stărilor?',
    options: [
      'O apariție semnificativă care poate declanșa o tranziție (semnal, apel metodă, expirare timp, condiție)',
      'O acțiune executată în timpul stării',
      'O stare cu durată scurtă',
      'Un pseudostat de decizie',
    ],
    correctIndex: 0,
    explanation:
      'Evenimentele în UML: CallEvent (apel metodă), SignalEvent (semnal asincron), TimeEvent (after X seconds), ChangeEvent (when condiție devine true). Orice poate declanșa o tranziție dacă e modelat ca eveniment.',
  },
];

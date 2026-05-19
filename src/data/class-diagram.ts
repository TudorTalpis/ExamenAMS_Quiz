import type { Question } from '../types/question';

export const classDiagramQuestions: Question[] = [
  {
    id: 'cls-001',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Din câte compartimente este formată o clasă UML?',
    options: [
      '3: nume, atribute, operații',
      '2: nume și metode',
      '4: nume, atribute, operații, relații',
      '1: doar numele clasei',
    ],
    correctIndex: 0,
    explanation:
      'O clasă UML are 3 compartimente: 1) Numele clasei (centrat, cu majusculă), 2) Atributele (câmpurile), 3) Operațiile/metodele. Clasele abstracte: numele se scrie în italic sau cu stereotipul <<abstract>>.',
  },
  {
    id: 'cls-002',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Ce simboluri se folosesc pentru vizibilitate în UML?',
    options: [
      '+ (public), - (privat), # (protejat), ~ (pachet)',
      '+ (public), * (privat), ^ (protejat)',
      'public, private, protected ca în Java',
      '+ (privat), - (public), # (protejat)',
    ],
    correctIndex: 0,
    explanation:
      'Vizibilitate UML: + = public, - = private, # = protected, ~ = package. Notație prefix înaintea numelui atributului/metodei. Atributele private sunt cele mai frecvente.',
  },
  {
    id: 'cls-003',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Cum se numește relația în care o clasă „moștenește" atributele și metodele altei clase?',
    options: [
      'Generalizare (moștenire / inheritance)',
      'Realizare',
      'Compoziție',
      'Dependență',
    ],
    correctIndex: 0,
    explanation:
      'Generalizarea în diagrama claselor = moștenire. Clasa copil extinde clasa părinte (is-a). Săgeata GOALĂ (triunghi) merge de la copil spre părinte pe o linie CONTINUĂ.',
  },
  {
    id: 'cls-004',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Cum se reprezintă grafic AGREGAREA în diagrama claselor?',
    options: [
      'Romb GOL (alb) la capătul clasei "întreg"',
      'Romb PLIN (negru) la capătul clasei "întreg"',
      'Săgeată goală (triunghi) de la parte la întreg',
      'Linie întreruptă cu săgeată deschisă',
    ],
    correctIndex: 0,
    explanation:
      'Agregare = romb GOL (alb/hollow) plasat la capătul clasei ÎNTREG. Compoziție = romb PLIN (negru/filled) la capătul clasei ÎNTREG. Confuzia dintre plin/gol este o capcană frecventă.',
  },
  {
    id: 'cls-005',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Cum se reprezintă grafic COMPOZIȚIA în diagrama claselor?',
    options: [
      'Romb PLIN (negru) la capătul clasei "întreg"',
      'Romb GOL (alb) la capătul clasei "întreg"',
      'Linie continuă cu săgeată triunghiulară',
      'Linie întreruptă cu romb',
    ],
    correctIndex: 0,
    explanation:
      'Compoziție = romb PLIN (negru) la capătul "întreg". La compoziție, multiplicitatea la capătul "întreg" este MEREU 1 (o parte aparține unui singur întreg). La agregare, poate fi mai relaxată.',
  },
  {
    id: 'cls-006',
    topic: 'class',
    difficulty: 'trap',
    prompt: 'O clasă Facultate este compusă din clase Departament. Departamentul NU poate exista fără Facultate. La ce capăt se pune rombul plin?',
    options: [
      'La Facultate (întreg)',
      'La Departament (parte)',
      'La ambele capete',
      'Nu se pune romb – se folosește agregare',
    ],
    correctIndex: 0,
    explanation:
      'ROMBUL (plin sau gol) se pune MEREU la capătul ÎNTREG-ului. Facultatea este "întregul", Departamentul este "partea". Romb plin la Facultate. Inversarea este o capcană comună.',
  },
  {
    id: 'cls-007',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Ce este o interfață în diagrama claselor?',
    options: [
      'Un classifier cu operații publice fără implementare, notat <<interface>>',
      'O clasă abstractă cu toți membrii publici',
      'O clasă fără atribute',
      'Un pachet de tipuri de date',
    ],
    correctIndex: 0,
    explanation:
      'Interfața = <<interface>>: declară operații publice fără corp. Clasele o implementează prin relație de REALIZARE (linie întreruptă + săgeată goală). Convenție denumire: prefix „I" (ex: IVehicul, IRepository).',
  },
  {
    id: 'cls-008',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Cum se reprezintă relația de realizare (Clasă implementează Interfață)?',
    options: [
      'Linie ÎNTRERUPTĂ + săgeată goală (triunghi), de la Clasă spre Interfață',
      'Linie CONTINUĂ + săgeată goală, de la Clasă spre Interfață',
      'Linie ÎNTRERUPTĂ + săgeată deschisă, de la Interfață spre Clasă',
      'Linie CONTINUĂ fără săgeată',
    ],
    correctIndex: 0,
    explanation:
      'Realizarea: linie ÎNTRERUPTĂ + triunghi gol, săgeata de la clasă concretă SPRE interfață (sau spre clasa abstractă). NU confunda cu generalizarea (linie continuă + triunghi gol).',
  },
  {
    id: 'cls-009',
    topic: 'class',
    difficulty: 'trap',
    prompt: 'Care este diferența grafică dintre Generalizare și Realizare în diagrama claselor?',
    options: [
      'Generalizare = linie CONTINUĂ + triunghi gol; Realizare = linie ÎNTRERUPTĂ + triunghi gol',
      'Generalizare = linie ÎNTRERUPTĂ + triunghi gol; Realizare = linie CONTINUĂ + triunghi gol',
      'Ambele folosesc linie continuă; diferă culoarea săgeții',
      'Realizarea folosește romb, generalizarea triunghi',
    ],
    correctIndex: 0,
    explanation:
      'CHEIE: linia face diferența! CONTINUĂ = generalizare (moștenire). ÎNTRERUPTĂ = realizare (implementare interfață). Ambele au TRIUNGHI GOL. Aceasta este una din cele mai frecvente confuzii la examen.',
  },
  {
    id: 'cls-010',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Ce este multiplicitatea „1..*" pe o relație de asociere?',
    options: [
      'Unul sau mai mulți (cel puțin un obiect)',
      'Zero sau mai mulți (orice număr)',
      'Exact un obiect',
      'Între 1 și N cu N limitat',
    ],
    correctIndex: 0,
    explanation:
      '1..* = MINIM unu, fără limită superioară. Diferit de 0..* (zero sau mai mulți) și de * (prescurtare pentru 0..*). Ex: un Departament are 1..* Angajați (trebuie să aibă cel puțin un angajat).',
  },
  {
    id: 'cls-011',
    topic: 'class',
    difficulty: 'hard',
    prompt: 'Regula multiplicității: dacă o singură relație din diagramă are multiplicitate diferită de 1..1, ce trebuie făcut?',
    options: [
      'Toate relațiile din diagramă trebuie să aibă multiplicitate indicată explicit',
      'Doar relațiile afectate trebuie indicate',
      'Multiplicitatea se specifică doar pe relațiile de compoziție',
      'Nu există o astfel de regulă',
    ],
    correctIndex: 0,
    explanation:
      'Conform regulilor prof. Sava N.: dacă MĂCAR O relație are multiplicitate ≠ 1..1, TOATE relațiile trebuie să aibă multiplicitate notată explicit. Regula asigură consistența și claritatea diagramei.',
  },
  {
    id: 'cls-012',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Ce este o clasă abstractă?',
    options: [
      'O clasă care nu poate fi instanțiată direct și are cel puțin o metodă abstractă',
      'O clasă fără atribute',
      'O clasă cu toate metodele publice',
      'O clasă care implementează o interfață',
    ],
    correctIndex: 0,
    explanation:
      'Clasa abstractă: nu se poate instanția direct; servește ca bază pentru moștenire. Are cel puțin o metodă abstractă (fără implementare). În UML: numele în ITALIC sau stereotip <<abstract>>.',
  },
  {
    id: 'cls-013',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Cum se notează o metodă statică în diagrama claselor UML?',
    options: [
      'Subliniat (underline)',
      'În italic',
      'Cu prefixul „static:"',
      'Cu prefixul „$"',
    ],
    correctIndex: 0,
    explanation:
      'Membrii STATICI (clasă) se notează cu UNDERLINE (subliniat). Membrii ABSTRACTI se notează în ITALIC. Ex: getInstance() subliniat = metodă statică.',
  },
  {
    id: 'cls-014',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Ce este o clasă de asociere (association class)?',
    options: [
      'O clasă atașată unei relații de asociere care adaugă atribute/operații asocierii',
      'O clasă care extinde o altă clasă',
      'O clasă cu o singură asociere',
      'O interfață specială pentru relații',
    ],
    correctIndex: 0,
    explanation:
      'Clasa de asociere modelează atributele proprii relației (nu ale claselor). Ex: Student–Curs cu clasa Nota (nota nu aparține Studentului sau Cursului, ci relației dintre ele).',
  },
  {
    id: 'cls-015',
    topic: 'class',
    difficulty: 'hard',
    prompt: 'Care este notația pentru un atribut de clasă cu tip și valoare implicită în UML?',
    options: [
      'vizibilitate nume: tip = valoare (ex: + varsta: int = 0)',
      'tip nume = valoare (ex: int varsta = 0)',
      'nume(tip) = valoare (ex: varsta(int) = 0)',
      'vizibilitate tip: nume (ex: + int: varsta)',
    ],
    correctIndex: 0,
    explanation:
      'Sintaxa UML pentru atribute: vizibilitate numeAtribut: tip = valoareImplicita. Ex: + varsta: int = 0, - nume: String, # activ: boolean = true.',
  },
  {
    id: 'cls-016',
    topic: 'class',
    difficulty: 'hard',
    prompt: 'Care este notația pentru o metodă în UML?',
    options: [
      'vizibilitate numeMetoda(parametri): tipReturn (ex: + calcul(x: int): double)',
      'tipReturn numeMetoda(parametri) (ex: double calcul(int x))',
      'numeMetoda: tipReturn (ex: calcul: double)',
      'vizibilitate numeMetoda: tipReturn(parametri)',
    ],
    correctIndex: 0,
    explanation:
      'Sintaxa UML pentru operații: vizibilitate numeOp(param: tip, ...): tipReturn. Ex: + getAria(): double, - setNume(n: String): void, # calcul(x: int, y: int): int.',
  },
  {
    id: 'cls-017',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Diagrama claselor este o diagramă:',
    options: [
      'Statică – descrie structura sistemului la un moment dat, nu comportamentul',
      'Dinamică – descrie fluxul execuției',
      'De interacțiune – descrie mesajele între obiecte',
      'De implementare – descrie artefactele fizice',
    ],
    correctIndex: 0,
    explanation:
      'Diagrama Claselor = diagramă STATICĂ. Arată structura (clase, atribute, metode, relații) fără flux temporal. Opusul ei sunt diagramele DINAMICE (Stări, Activități, Secvențe, Colaborare) care arată comportamentul.',
  },
  {
    id: 'cls-018',
    topic: 'class',
    difficulty: 'trap',
    prompt: 'Care relație permite existența „parii" independent de „întreg"?',
    options: [
      'Agregarea (romb gol)',
      'Compoziția (romb plin)',
      'Generalizarea',
      'Realizarea',
    ],
    correctIndex: 0,
    explanation:
      'DIFERENȚA CHEIE: AGREGARE (romb gol) = partea poate exista INDEPENDENT. COMPOZIȚIE (romb plin) = partea NU poate exista fără întreg. Ex: Roata poate exista fără Mașină (agregare); Camera nu există fără Casă (compoziție).',
  },
  {
    id: 'cls-019',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Ce este o dependență în diagrama claselor?',
    options: [
      'Relație în care o clasă „client" folosește/referință clasa „furnizor" (parametru, variabilă locală)',
      'Relație de moștenire între două clase',
      'Relație în care o clasă conține instanțe ale altei clase',
      'Relație simetrică între două clase cu aceleași metode',
    ],
    correctIndex: 0,
    explanation:
      'Dependența: clasa Client utilizează Clasa Furnizor temporar (parametru de metodă, variabilă locală, tip de return). Nu e o relație structurală permanentă. Linie ÎNTRERUPTĂ cu săgeată deschisă.',
  },
  {
    id: 'cls-020',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Ce reprezintă asocierea în diagrama claselor?',
    options: [
      'O relație structurală permanentă (un obiect „cunoaște"/„deține o referință la" alt obiect)',
      'O relație temporară (parametru de metodă)',
      'O relație de moștenire',
      'O relație contractuală',
    ],
    correctIndex: 0,
    explanation:
      'Asocierea = relație STRUCTURALĂ PERSISTENTĂ (atribut de instanță). Ex: Profesor are o asociere cu Curs (Profesor ține o referință la obiectele Curs). Diferit de dependență (temporară, parametru).',
  },
  {
    id: 'cls-021',
    topic: 'class',
    difficulty: 'hard',
    prompt: 'Cum se modelează o relație M:N (mai mulți la mai mulți) în diagrama claselor?',
    options: [
      'Asociere cu multiplicitate * la ambele capete, opțional cu clasă de asociere',
      'Compoziție cu multiplicitate * la capătul întreg',
      'Două asocieri 1:N cu o clasă intermediară',
      'M:N nu se poate modela în UML',
    ],
    correctIndex: 0,
    explanation:
      'Asociere M:N: multiplicitate * (sau 0..*) la AMBELE capete. Dacă relația are atribute proprii (ex: Nota pentru Student–Curs), se adaugă o CLASĂ DE ASOCIERE atașată liniei de asociere.',
  },
  {
    id: 'cls-022',
    topic: 'class',
    difficulty: 'trap',
    prompt: 'Care este regula privind multiplicitatea la COMPOZIȚIE pentru capătul "întreg"?',
    options: [
      'La compoziție, capătul "întreg" are MEREU multiplicitate 1 (nu 0..1 sau 0..*)',
      'La compoziție, multiplicitatea nu se specifică',
      'La compoziție, capătul "parte" are mereu multiplicitate 1',
      'Multiplicitatea poate fi orice valoare la ambele capete',
    ],
    correctIndex: 0,
    explanation:
      'REGULA COMPOZIȚIEI: o "parte" aparține EXACT unui singur "întreg" → capătul întreg = 1 (nu 0..1). Dacă o parte ar putea aparține la zero întreguri, nu mai e compoziție (ci agregare). Capătul "parte" poate fi 1..* sau *.',
  },
  {
    id: 'cls-023',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'O clasă Cerc și o clasă Dreptunghi extind clasa abstractă Forma. Câte elemente și ce relații sunt în diagramă?',
    options: [
      '3 clase, 2 relații de generalizare (Cerc→Forma, Dreptunghi→Forma)',
      '3 clase, 1 relație de generalizare Cerc→Dreptunghi',
      '2 clase, 1 relație de realizare',
      '3 clase, 2 relații de compoziție',
    ],
    correctIndex: 0,
    explanation:
      '3 clase: Forma (abstract), Cerc, Dreptunghi. 2 relații de generalizare: Cerc→Forma și Dreptunghi→Forma (săgeată triunghi gol pe linie continuă). Condiția minim 3 elemente pentru generalizare este respectată.',
  },
  {
    id: 'cls-024',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Ce este o enumerare (enumeration) în UML?',
    options: [
      'Un tip de date cu un set fix de valori posibile, notat <<enumeration>>',
      'O clasă cu un singur atribut întreg',
      'O interfață cu metode enumerate',
      'Un pachet de constante',
    ],
    correctIndex: 0,
    explanation:
      'Enumerarea (<<enumeration>>): un tip de date cu valori fixe predefinite. Ex: <<enumeration>> Culoare cu valorile: ROSU, VERDE, ALBASTRU. Se folosește ca tip pentru atribute.',
  },
  {
    id: 'cls-025',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Care este conventia de denumire pentru o interfata in UML?',
    options: [
      'Prefix „I" (ex: IVehicul, IRepository)',
      'Sufix „Interface" (ex: VehiculInterface)',
      'Prefix „Abstract" (ex: AbstractVehicul)',
      'Fara conventie speciala, orice denumire',
    ],
    correctIndex: 0,
    explanation:
      'Convenție UML: interfețele au prefix „I" (majusculă). Ex: IVehicul, IPersistabil, INotificabil. Această convenție vine din practica de programare (C#, Java) și e menționată explicit în cursul AMS.',
  },
  {
    id: 'cls-026',
    topic: 'class',
    difficulty: 'hard',
    prompt: 'Clasa Masina are atributul static „numarTotal: int". Cum se notează în compartimentul atribute al clasei?',
    options: [
      'numarTotal: int (cu text subliniat)',
      'numarTotal: int (în italic)',
      'static numarTotal: int',
      '$ numarTotal: int',
    ],
    correctIndex: 0,
    explanation:
      'Membrii STATICI se notează cu UNDERLINE (subliniat) în UML. Nu se scrie cuvântul „static". Deci: numarTotal: int cu subliniere. Membrii abstracti s-ar scrie în italic.',
  },
  {
    id: 'cls-027',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Ce relație se folosește când clasa Raport „folosește" temporar un obiect Printer (transmis ca parametru de metodă)?',
    options: [
      'Dependență (linie întreruptă cu săgeată deschisă): Raport → Printer',
      'Asociere (linie continuă): Raport ↔ Printer',
      'Compoziție: Raport ◆ Printer',
      'Generalizare: Raport → Printer',
    ],
    correctIndex: 0,
    explanation:
      'Folosire temporară (parametru, variabilă locală) = DEPENDENȚĂ. Asociere = referință permanentă (atribut de clasă). Deoarece Printer este doar parametru de metodă (nu atribut al lui Raport), este dependență slabă.',
  },
  {
    id: 'cls-028',
    topic: 'class',
    difficulty: 'trap',
    prompt: 'Care din relațiile UML de mai jos au LINIE ÎNTRERUPTĂ?',
    options: [
      'Dependența și Realizarea',
      'Generalizarea și Asocierea',
      'Compoziția și Agregarea',
      'Generalizarea și Realizarea',
    ],
    correctIndex: 0,
    explanation:
      'LINIE ÎNTRERUPTĂ: Dependența (→ deschisă) și Realizarea (→ goală/triunghi). LINIE CONTINUĂ: Asocierea, Agregarea (romb gol), Compoziția (romb plin), Generalizarea (triunghi gol). Aceasta este o regulă de memorat obligatoriu.',
  },
  {
    id: 'cls-029',
    topic: 'class',
    difficulty: 'easy',
    prompt: 'Cum se numește relația când clasa Angajat poate exista fără clasa Companie (ex: consultant independent)?',
    options: [
      'Agregare (romb gol la Companie)',
      'Compoziție (romb plin la Companie)',
      'Generalizare',
      'Realizare',
    ],
    correctIndex: 0,
    explanation:
      'Angajatul poate exista independent → AGREGARE (romb GOL). Dacă angajatul NU ar putea exista fără companie, ar fi compoziție (romb PLIN). Rombul se plasează la capătul clasei „întreg" (Companie).',
  },
  {
    id: 'cls-030',
    topic: 'class',
    difficulty: 'medium',
    prompt: 'Ce se înțelege prin „navigabilitate" a unei asocieri în UML?',
    options: [
      'Direcția în care se poate traversa asocierea (săgeata arată cine cunoaște pe cine)',
      'Multiplicitatea de pe ambele capete',
      'Dacă asocierea este persistentă sau temporară',
      'Numărul de obiecte asociate la un moment dat',
    ],
    correctIndex: 0,
    explanation:
      'Navigabilitatea: săgeata unidirecțională indică că A cunoaște B, dar B nu cunoaște A. Fără săgeată = bidirecțional (ambele se cunosc). Important pentru implementare (cine deține referința).',
  },
  {
    id: 'cls-031',
    topic: 'class',
    difficulty: 'hard',
    prompt: 'Care afirmație despre compoziție și multiplicitate este CORECTĂ conform UML strict?',
    options: [
      'La compoziție, o „parte" aparține exact unui singur „întreg" (multiplicitate 1 la capătul întreg)',
      'La compoziție, o parte poate aparține mai multor întregi (multiplicitate * permisă)',
      'La compoziție, multiplicitatea capătului parte este mereu 1',
      'Multiplicitatea nu se specifică la compoziție',
    ],
    correctIndex: 0,
    explanation:
      'Regula esențială a compoziției: o parte aparține EXACT UNUI singur întreg → multiplicitate 1 la capătul "întreg". O parte nu poate aparține simultan mai multor întregi (ar fi agregare). Capătul "parte" poate fi 1, 1..*, etc.',
  },
  {
    id: 'cls-032',
    topic: 'class',
    difficulty: 'trap',
    prompt: 'Clasa Carte implementează interfața IPrintabila. Care relație și direcție săgeată sunt corecte?',
    options: [
      'Realizare, linie întreruptă + triunghi, Carte → IPrintabila',
      'Generalizare, linie continuă + triunghi, Carte → IPrintabila',
      'Dependență, linie întreruptă + deschis, IPrintabila → Carte',
      'Asociere simplă, IPrintabila ↔ Carte',
    ],
    correctIndex: 0,
    explanation:
      'Clasă implementează Interfață = REALIZARE. Linie ÎNTRERUPTĂ + triunghi gol (săgeata goală). Direcția: Carte → IPrintabila (clasa concretă → interfața). NU e generalizare (care ar fi linie continuă).',
  },
];

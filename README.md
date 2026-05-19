# AMS Quiz – Pregătire Examen UML

Aplicație web pentru pregătirea examenului **AMS (Analiza și Modelarea Sistemelor)** cu accent pe limbajul UML, conform cursului prof. Sava N.

## Instalare și rulare

```powershell
# Instalează dependențele
npm install

# Pornește serverul de dezvoltare
npm run dev
# Deschide http://localhost:5173
```

## Build de producție

```powershell
npm run build
npm run preview
```

## Structura întrebărilor

| Temă | Fișier | Nr. întrebări |
|---|---|---|
| Teorie generală UML | `src/data/theory-general.ts` | 25 |
| Cazuri de Utilizare | `src/data/use-case.ts` | 28 |
| Diagrama Claselor | `src/data/class-diagram.ts` | 32 |
| Diagrama Stărilor | `src/data/state-diagram.ts` | 22 |
| Diagrama Activităților | `src/data/activity-diagram.ts` | 23 |
| Diagrama Secvenței | `src/data/sequence-diagram.ts` | 25 |
| Diagrama Colaborării | `src/data/collaboration-diagram.ts` | 22 |
| Diagrama Componentelor | `src/data/component-diagram.ts` | 18 |
| Diagrama Plasării | `src/data/deployment-diagram.ts` | 15 |
| **TOTAL** | | **~210** |

## Funcționalități

- **Spaced repetition simplu**: întrebările greșite revin după 5-10 alte întrebări (prima greșeală) sau 3-5 (greșeli repetate)
- **Feedback instant**: verde + avans automat (800ms) pentru răspuns corect; roșu + explicație + buton „Următoarea" pentru greșit
- **Persistență localStorage**: progresul se salvează automat la fiecare răspuns
- **Mod revizuire greșeli**: parcurge doar întrebările cu greșeli anterioare
- **Reset complet**: șterge tot progresul și pornește o sesiune nouă cu shuffle

## Stack tehnic

- React 18 + TypeScript + Vite
- TailwindCSS
- Fără backend, fără autentificare

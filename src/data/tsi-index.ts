import { tsiIntroQuestions } from './tsi-intro';
import { tsiMalwareQuestions } from './tsi-malware';
import { tsiVectoriQuestions } from './tsi-vectori';
import { tsiAtacuriQuestions } from './tsi-atacuri';
import { tsiAccesQuestions } from './tsi-acces';
import { tsiCriptografieQuestions } from './tsi-criptografie';
import { tsiPkiQuestions } from './tsi-pki';
import { tsiDisponibilitateQuestions } from './tsi-disponibilitate';
import { tsiEndpointQuestions } from './tsi-endpoint';

export const tsiAllQuestions = [
  ...tsiIntroQuestions,
  ...tsiMalwareQuestions,
  ...tsiVectoriQuestions,
  ...tsiAtacuriQuestions,
  ...tsiAccesQuestions,
  ...tsiCriptografieQuestions,
  ...tsiPkiQuestions,
  ...tsiDisponibilitateQuestions,
  ...tsiEndpointQuestions,
];

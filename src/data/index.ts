import { theoryGeneralQuestions } from './theory-general';
import { useCaseQuestions } from './use-case';
import { classDiagramQuestions } from './class-diagram';
import { stateDiagramQuestions } from './state-diagram';
import { activityDiagramQuestions } from './activity-diagram';
import { sequenceDiagramQuestions } from './sequence-diagram';
import { collaborationDiagramQuestions } from './collaboration-diagram';
import { componentDiagramQuestions } from './component-diagram';
import { deploymentDiagramQuestions } from './deployment-diagram';

export const allQuestions = [
  ...theoryGeneralQuestions,
  ...useCaseQuestions,
  ...classDiagramQuestions,
  ...stateDiagramQuestions,
  ...activityDiagramQuestions,
  ...sequenceDiagramQuestions,
  ...collaborationDiagramQuestions,
  ...componentDiagramQuestions,
  ...deploymentDiagramQuestions,
];

export {
  theoryGeneralQuestions,
  useCaseQuestions,
  classDiagramQuestions,
  stateDiagramQuestions,
  activityDiagramQuestions,
  sequenceDiagramQuestions,
  collaborationDiagramQuestions,
  componentDiagramQuestions,
  deploymentDiagramQuestions,
};

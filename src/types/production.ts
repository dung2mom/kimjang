export interface ShotData {
  id: number;
  timeRange: string;
  startTime: number;
  endTime: number;
  duration: number; // in seconds
  title: string;
  location: string;
  sceneDescription: string;
  cameraMovement: string;
  lightingPalette: string;
  soundMusic: string;
  onScreenText: string;
  koreanText?: string;
  englishTranslation?: string;
  narration: string;
  wordCount: number;
  imagePath: string;
  aiPrompt: {
    subjectAction: string;
    settingTime: string;
    cameraMovement: string;
    visualStyle: string;
    aspectRatio: string;
    duration: string;
    continuityNotes: string;
    fullPromptText: string;
  };
}

export interface ProductionPackage {
  title: string;
  koreanTitle: string;
  oneLineConcept: string;
  theme: string;
  targetAudience: string;
  platform: string;
  tone: string;
  coreMessage: string;
  totalDuration: string;
  shots: ShotData[];
  narrationOverview: {
    totalWords: number;
    koreanPhrase: string;
    koreanPhonetic: string;
    koreanMeaning: string;
    targetWordCountRange: string;
  };
  musicDirection: {
    genre: string;
    tempoBpm: number;
    mood: string;
    instrumentation: string[];
    structureBreakdown: {
      time: string;
      description: string;
    }[];
  };
  culturalChecks: {
    title: string;
    focusArea: string;
    whyItMatters: string;
    respectfulExecution: string;
    pitfallToAvoid: string;
    verificationStatus: boolean;
  }[];
}

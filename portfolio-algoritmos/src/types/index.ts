export interface TraceStep {
  step: number;
  [key: string]: any;
  explanation?: string;
}

export interface Challenge {
  id: string;
  title: string;
  statement: string;
  code: string;
  explanation: string;
  trace: TraceStep[];
}

export interface ChallengeVersion {
  id: string;
  title: string;
  statement: string;
  code: string;
  explanation: string;
  trace: TraceStep[];
}

export interface ChallengeData {
  id: string;
  title: string;
  versions: ChallengeVersion[];
}

export interface ChallengeDay {
  day: string;
  challenges: ChallengeData[];
} 
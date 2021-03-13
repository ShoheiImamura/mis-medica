export interface ComparisonListItem {
  id: number;
  subject: string;
  expectationMessage: string;
}

export interface Comparison {
  id: number;
  subject: string;
  citationUrl: string;
  expectations: Expectation[];
  actualities: Actuality[];
}

export interface Expectation {
  id: number;
  message: string;
}
export interface Actuality {
  id: number;
  message: string;
  detail: string;
  evidenceUrl: string;
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

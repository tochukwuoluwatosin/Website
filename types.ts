
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  bibtex: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  techniques: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  thesis?: string;
  supervisors?: string[];
}

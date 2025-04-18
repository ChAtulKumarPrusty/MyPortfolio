export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
  category: 'data-analysis' | 'machine-learning' | 'visualization' | 'web-dev';
  githubUrl: string | null;
  liveUrl: string | null;
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases';
}
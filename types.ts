
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}

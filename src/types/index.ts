export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  image: string;
  registrationUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}
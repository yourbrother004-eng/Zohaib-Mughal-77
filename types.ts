
import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string | React.ReactNode;
}

export interface NewsPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: { icon: string; link: string }[];
}

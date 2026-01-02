
import React from 'react';
import { Testimonial, Project, NewsPost, PricingTier, TeamMember } from './types';

export const ASSETS = {
  profile: {
    hero: 'https://images.unsplash.com/photo-1519085185758-76911382c70b?q=80&w=800&auto=format&fit=crop', 
    about: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    signature: 'https://cdn-icons-png.flaticon.com/512/1000/1000966.png',
  },
  projects: {
    gym: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    crypto: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop',
    realestate: 'https://images.unsplash.com/photo-1460317442991-0ec239f36743?q=80&w=1200&auto=format&fit=crop',
    ai_dashboard: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    saas_app: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    fintech: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  clients: [
    'https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5', 'https://i.pravatar.cc/150?u=6',
    'https://i.pravatar.cc/150?u=7', 'https://i.pravatar.cc/150?u=8', 'https://i.pravatar.cc/150?u=9',
    'https://i.pravatar.cc/150?u=10', 'https://i.pravatar.cc/150?u=11', 'https://i.pravatar.cc/150?u=12'
  ]
};

export const FAQ_DATA = [
  { id: 1, question: "How long does a typical VIP project take?", answer: "Excellence takes time. Usually 4-8 weeks for a complete digital ecosystem." },
  { id: 2, question: "Do you offer white-label development?", answer: "Yes, I partner with premium agencies worldwide for white-label architecture." },
  { id: 3, question: "What is your tech stack?", answer: "I specialize in Next.js, React, Node, and AWS for high-performance scaling." }
];

export const TESTIMONIALS_DATA: Testimonial[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: ['Sarah Haseeb', 'John Doe', 'Alex Rivera', 'Emma Wilson', 'Ahmed Ali', 'Maria Garcia', 'Luca Rossi', 'Sophie Chen'][i % 8],
  location: ['UK', 'USA', 'Canada', 'Australia', 'Dubai', 'Spain', 'Italy', 'Singapore'][i % 8],
  service: ['E-commerce', 'SaaS App', 'Crypto Platform', 'AI Dashboard', 'Real Estate', 'Fintech'][i % 6],
  rating: 5,
  review: [
    'Absolute master of his craft. The ROI we saw was instant.',
    'Zohaib transformed our vision into a high-converting machine.',
    'The UI/UX is world-class. Best developer I have worked with.',
    'Incredible attention to detail and professional communication.',
    'Smooth, fast, and stunning. Highly recommended.',
    'Highly technical and creatively gifted. A rare find.'
  ][i % 6],
  image: `https://i.pravatar.cc/150?u=${i + 1}`
}));

export const PORTFOLIO_DATA: Project[] = [
  { id: 1, title: 'Titan Gym Ecosystem', image: ASSETS.projects.gym, description: 'Management system with real-time analytics and biometric integrations.', tech: ['Next.js', 'PostgreSQL', 'AWS'], liveLink: '#portfolio', githubLink: '#' },
  { id: 2, title: 'Crypto Terminal V2', image: ASSETS.projects.crypto, description: 'Trading terminal with multi-wallet support and real-time charting.', tech: ['TypeScript', 'Three.js', 'Framer'], liveLink: '#portfolio', githubLink: '#' },
  { id: 3, title: 'Luxury Real Estate', image: ASSETS.projects.realestate, description: 'Search engine with 3D virtual tours and automated leads.', tech: ['React', 'Node.js', 'MongoDB'], liveLink: '#portfolio', githubLink: '#' },
  { id: 4, title: 'AI Predictive Engine', image: ASSETS.projects.ai_dashboard, description: 'Enterprise dashboard for AI data visualization and reporting.', tech: ['Python', 'React', 'TensorFlow'], liveLink: '#portfolio', githubLink: '#' },
  { id: 5, title: 'SaaS Pulse', image: ASSETS.projects.saas_app, description: 'Subscription management platform with automated billing.', tech: ['Next.js', 'Stripe', 'Tailwind'], liveLink: '#portfolio', githubLink: '#' },
  { id: 6, title: 'FinSecure Banking', image: ASSETS.projects.fintech, description: 'Secure digital banking interface with high-end encryption.', tech: ['React Native', 'AWS Amplify', 'Redux'], liveLink: '#portfolio', githubLink: '#' }
];

export const VIP_SERVICES = [
  { id: 1, icon: 'bi-gem', title: 'Ultra-Luxe UI/UX', description: 'We don\'t just design layouts; we curate emotional journeys with micro-interactions and high-fidelity visual storytelling.', tags: ['Interaction Design', 'Motion Design', 'Brand Identity'] },
  { id: 2, icon: 'bi-cpu', title: 'High-Performance Arch', description: 'Cloud-native, serverless architectures built for 10M+ users with sub-second latency and absolute security.', tags: ['AWS/GCP', 'Node.js Cluster', 'Next.js 15'] },
  { id: 3, icon: 'bi-graph-up-arrow', title: 'Growth Engineering', description: 'SEO, Conversion Rate Optimization (CRO), and Data Analytics baked into the core of your digital product.', tags: ['Lead Magnetism', 'Technical SEO', 'Heatmaps'] }
];

export const TEAM_DATA: TeamMember[] = [
  { id: 1, name: 'Zohaib Mughal', role: 'Founder & Master Architect', image: ASSETS.profile.hero, socials: [{ icon: 'bi-linkedin', link: '#' }, { icon: 'bi-instagram', link: '#' }] },
  { id: 2, name: 'Ayesha Khan', role: 'Head of UI/UX', image: ASSETS.clients[0], socials: [{ icon: 'bi-behance', link: '#' }] },
  { id: 3, name: 'David Smith', role: 'Cloud Infrastructure', image: ASSETS.clients[1], socials: [{ icon: 'bi-github', link: '#' }] },
  { id: 4, name: 'Elena Vance', role: 'Growth Lead', image: ASSETS.clients[2], socials: [{ icon: 'bi-twitter-x', link: '#' }] },
  { id: 5, name: 'Marcus Aurelius', role: 'Backend Strategist', image: ASSETS.clients[3], socials: [{ icon: 'bi-linkedin', link: '#' }] },
  { id: 6, name: 'Sana Fatima', role: 'QA Automation', image: ASSETS.clients[4], socials: [{ icon: 'bi-github', link: '#' }] },
  { id: 7, name: 'Vikram Singh', role: 'Mobile Specialist', image: ASSETS.clients[5], socials: [{ icon: 'bi-android2', link: '#' }] },
];

export const MARQUEE_KEYWORDS = [
  'SaaS Architecture', 'E-Commerce Stores', 'Personal Portfolios', 'Fintech UI', 'AWS Cloud', 
  'Web3 DApps', 'AI Integrations', 'Real Estate Systems', 'Mobile Mastery', 'SEO Dominance',
  'Cyber Security', 'Landing Pages', 'Enterprise Dashboards', 'API Scalability', 'Growth Funnels'
];

export const NEWS_DATA: NewsPost[] = [
  { id: 1, title: 'The Future of Web Performance', date: 'Jan 15, 2025', category: 'Engineering', image: ASSETS.projects.ai_dashboard, link: '#' },
  { id: 2, title: 'Mastering Next.js 15 Features', date: 'Feb 02, 2025', category: 'Tech', image: ASSETS.projects.saas_app, link: '#' },
  { id: 3, title: 'UI/UX Trends for 2025', date: 'Feb 10, 2025', category: 'Design', image: ASSETS.projects.realestate, link: '#' },
];

export const PRICING_DATA: PricingTier[] = [
  { id: 1, name: 'Essential', price: '$5k', features: ['Custom UI Design', 'Responsive Build', 'Basic SEO', '3 Months Support'] },
  { id: 2, name: 'Enterprise', price: '$12k', features: ['Full SaaS Ecosystem', 'Advanced Security', 'Cloud Arch', 'Growth Strategy'], recommended: true },
  { id: 3, name: 'Custom Luxe', price: 'Custom', features: ['White Label Dev', 'Dedicated Partner', 'Unlimited Scaling', 'VIP Support'] },
];

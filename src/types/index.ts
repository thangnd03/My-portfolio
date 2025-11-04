// Contact Info Types
export interface ContactInfo {
  name: string
  title: string
  email: string
  phone: string
  birthday: string
  location: string
}

// About Data Types
export interface Service {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface AboutData {
  description: string
  additionalInfo: string
  services: Service[]
  testimonials: Testimonial[]
  clients: string[]
}

// Resume Data Types
export interface Education {
  school: string
  period: string
  description: string
}

export interface Experience {
  position: string
  company?: string
  period: string
  description: string
}

export interface Skill {
  name: string
  icon?: string
}

export interface ResumeData {
  education: Education[]
  experience: Experience[]
  skills: Skill[]
}

// Portfolio Data Types
export interface Project {
  title: string
  category: string
  link: string
  description?: string
  technologies?: string[]
  period?: string
}

export interface PortfolioData {
  projects: Project[]
}

// Blog Data Types
export interface BlogPost {
  title: string
  category: string
  date: string
  excerpt: string
  link: string
}

export interface BlogData {
  posts: BlogPost[]
}


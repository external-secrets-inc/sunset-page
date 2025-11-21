export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Eric Tilenius", role: "CEO", image: "/eric.jpg" },
  { name: "Gustavo Carvalho", role: "Founder & CTO", image: "/gustavo.jpg" },
  { name: "Lucas Severo Alves", role: "Founder & Principal Architect", image: "/lucas.jpg" },
  { name: "Matheus Fernandes", role: "Full-Stack Engineer", image: "/matheus.jpg" },
  { name: "Caio Viotti", role: "UX Engineer", image: "/caio.jpg" },
  { name: "Iuri Severo", role: "Full-Stack Engineer", image: "/iuri.jpg" },
];

export const advisors: TeamMember[] = [
  { name: "Moritz Johner", role: "Advisor", image: "/moritz.jpg" },
  { name: "Gergely Brautigam", role: "Advisor" },
];


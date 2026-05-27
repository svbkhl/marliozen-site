export interface TeamMember {
  id: string
  name: string
  role: string
  description?: string
  avatar: string
  isBureau: boolean
}

export const team: TeamMember[] = [
  {
    id: "president",
    name: "Jean-Pierre M.",
    role: "Président",
    description: "Habitant du quartier depuis plus de 20 ans, Jean-Pierre anime l'association avec enthousiasme et veille à son développement.",
    avatar: "JP",
    isBureau: true,
  },
  {
    id: "vice-presidente",
    name: "Fatima A.",
    role: "Vice-présidente",
    description: "Très impliquée dans les actions de solidarité et d'accès aux droits, Fatima représente la mixité et l'engagement du quartier.",
    avatar: "FA",
    isBureau: true,
  },
  {
    id: "tresorier",
    name: "Michel B.",
    role: "Trésorier",
    description: "Retraité passionné de gestion associative, Michel assure la rigueur financière qui permet à l'association de se développer.",
    avatar: "MB",
    isBureau: true,
  },
  {
    id: "secretaire",
    name: "Sylvie C.",
    role: "Secrétaire",
    description: "Pilier organisationnel de l'association, Sylvie coordonne la communication et le suivi administratif avec bonne humeur.",
    avatar: "SC",
    isBureau: true,
  },
  {
    id: "animateur-1",
    name: "Karim D.",
    role: "Animateur socio-culturel",
    description: "Karim anime les ateliers jeunesse et coordonne les événements sportifs, dont le Champion's d'Aix.",
    avatar: "KD",
    isBureau: false,
  },
  {
    id: "animatrice-2",
    name: "Nathalie F.",
    role: "Animatrice famille",
    description: "Spécialisée dans l'accompagnement à la parentalité, Nathalie crée des espaces d'échange bienveillants pour les familles.",
    avatar: "NF",
    isBureau: false,
  },
]

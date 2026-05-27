export type EventCategory =
  | "sport"
  | "culture"
  | "solidarite"
  | "festif"
  | "famille"

export interface Event {
  slug: string
  title: string
  shortTitle: string
  category: EventCategory
  date: string
  dateDisplay: string
  time: string
  location: string
  address: string
  description: string
  longDescription: string
  image: string
  emoji: string
  upcoming: boolean
  featured: boolean
  tags: string[]
}

export const events: Event[] = [
  {
    slug: "champions-d-aix-2025",
    title: "Champion's d'Aix 2025",
    shortTitle: "Champion's d'Aix",
    category: "sport",
    date: "2025-06-14",
    dateDisplay: "Samedi 14 juin 2025",
    time: "10h00",
    location: "Stade Garibaldi",
    address: "Stade Garibaldi, Aix-les-Bains",
    description:
      "Tournoi de football inter-quartier intergénérationnel. Venez jouer, encourager et partager un repas convivial au stade.",
    longDescription: `Le tournoi Champion's d'Aix est l'événement sportif phare de La Marlio'Zen. Chaque année, des équipes de tous les quartiers d'Aix-les-Bains se retrouvent au Stade Garibaldi pour disputer un tournoi de football convivial et intergénérationnel.

L'esprit de cet événement dépasse largement le sport : c'est avant tout une occasion de tisser des liens entre quartiers, de mélanger les générations et de célébrer la diversité de notre ville.

Au programme : matchs de football, animation jeunesse, buvette et repas partagé offert par l'association. Familles et supporters sont les bienvenus !`,
    image: "/images/champions-aix.jpg",
    emoji: "⚽",
    upcoming: true,
    featured: true,
    tags: [
      "football",
      "inter-quartier",
      "intergénérationnel",
      "sport",
      "convivialité",
    ],
  },
  {
    slug: "cinema-plein-air-2025",
    title: "Cinéma plein air & repas partagé",
    shortTitle: "Ciné plein air",
    category: "culture",
    date: "2025-07-18",
    dateDisplay: "Vendredi 18 juillet 2025",
    time: "19h30",
    location: "École primaire de Marlioz",
    address: "École primaire, Marlioz, Aix-les-Bains",
    description:
      "Soirée cinéma en plein air dans la cour de l'école de Marlioz. Chacun apporte un plat à partager. Ambiance garantie !",
    longDescription: `Une soirée magique sous les étoiles ! Chaque été, La Marlio'Zen transforme la cour de l'école primaire de Marlioz en salle de cinéma à ciel ouvert.

Le principe est simple et délicieux : chaque famille ou participant apporte un plat cuisiné à partager en guise de pique-nique collectif, puis tout le quartier se retrouve pour regarder un film ensemble.

Cette soirée est ouverte à tous, petits et grands. Apportez votre chaise pliante ou votre plaid, un plat à partager, et venez vivre un moment de convivialité unique au cœur du quartier.`,
    image: "/images/cinema-plein-air.jpg",
    emoji: "🎬",
    upcoming: true,
    featured: true,
    tags: ["cinéma", "famille", "plein air", "repas partagé", "culture"],
  },
  {
    slug: "fete-cuisines-du-monde-2025",
    title: "Fête des cuisines du monde",
    shortTitle: "Cuisines du monde",
    category: "festif",
    date: "2025-09-20",
    dateDisplay: "Samedi 20 septembre 2025",
    time: "12h00",
    location: "Quartier de Marlioz",
    address: "Place centrale de Marlioz, Aix-les-Bains",
    description:
      "Une fête haute en saveurs et en couleurs ! Les habitants du quartier partagent leurs spécialités culinaires d'ici et d'ailleurs.",
    longDescription: `La Fête des cuisines du monde est la célébration annuelle de la diversité culturelle du quartier de Marlioz. Cet événement réunit les habitants autour d'une table commune où chacun partage ses spécialités culinaires venues des quatre coins du monde.

Depuis des années, cette fête est l'occasion pour les familles du quartier de faire découvrir leurs traditions gastronomiques et de créer des ponts entre les cultures. On y retrouve des plats d'Afrique, du Maghreb, d'Europe, d'Asie et d'Amérique Latine, préparés avec amour par les habitants eux-mêmes.

Au-delà des saveurs, c'est un moment de partage, de rencontres et de mixité sociale que La Marlio'Zen chérit particulièrement. Venez les mains pleines et repartez le cœur plein !`,
    image: "/images/cuisines-monde.jpg",
    emoji: "🍽️",
    upcoming: true,
    featured: false,
    tags: ["gastronomie", "diversité", "culture", "fête", "partage"],
  },
  {
    slug: "atelier-acces-droits-juin",
    title: "Atelier Accès aux droits",
    shortTitle: "Accès aux droits",
    category: "solidarite",
    date: "2025-06-05",
    dateDisplay: "Jeudi 5 juin 2025",
    time: "14h00",
    location: "Local de l'association",
    address: "74 Bd de la Roche du Roi, 73100 Aix-les-Bains",
    description:
      "Permanence d'accompagnement aux démarches administratives. Bénévoles et partenaires à votre écoute pour toutes vos questions.",
    longDescription: `Chaque premier jeudi du mois, La Marlio'Zen organise une permanence d'accès aux droits. Bénévoles formés et partenaires institutionnels vous accueillent pour vous aider dans vos démarches administratives.

Au programme : aide à la rédaction de courriers, accompagnement CAF, aide aux démarches numériques, orientation vers les bons interlocuteurs. Toutes les situations sont les bienvenues, aucun jugement.

Accueil sans rendez-vous de 14h à 17h. Permanence gratuite et confidentielle.`,
    image: "/images/acces-droits.jpg",
    emoji: "📋",
    upcoming: true,
    featured: false,
    tags: ["droits", "accompagnement", "administratif", "solidarité"],
  },
  {
    slug: "sortie-randonnee-printemps",
    title: "Randonnée printanière en famille",
    shortTitle: "Randonnée famille",
    category: "famille",
    date: "2025-05-10",
    dateDisplay: "Samedi 10 mai 2025",
    time: "09h00",
    location: "Bords du Lac du Bourget",
    address: "Parking du Lac, Aix-les-Bains",
    description:
      "Balade en famille sur les bords du Lac du Bourget. 5km accessibles à tous, pique-nique collectif à l'arrivée.",
    longDescription: `Une belle sortie nature pour toute la famille ! La Marlio'Zen organise une randonnée printanière sur les bords du magnifique Lac du Bourget.

Parcours de 5 km accessible aux familles avec enfants, avec un arrêt pique-nique au bord du lac. Chacun apporte son repas et quelque chose à partager. Prévoir des chaussures confortables.

Départ depuis le parking du Lac à 9h précises. Retour prévu vers 13h30.`,
    image: "/images/randonnee.jpg",
    emoji: "🥾",
    upcoming: false,
    featured: false,
    tags: ["nature", "famille", "randonnée", "lac", "pique-nique"],
  },
  {
    slug: "tournoi-petanque-2025",
    title: "Tournoi de pétanque de Marlioz",
    shortTitle: "Pétanque Marlioz",
    category: "sport",
    date: "2025-08-22",
    dateDisplay: "Vendredi 22 août 2025",
    time: "15h00",
    location: "Boulodrome de Marlioz",
    address: "Boulodrome, Marlioz, Aix-les-Bains",
    description:
      "Grand tournoi de pétanque ouvert à tous. Par équipes de 2 ou 3. Buvette et animation musicale après les matchs.",
    longDescription: `La pétanque, c'est le sport qui rassemble toutes les générations. Pour cet été, La Marlio'Zen organise un grand tournoi de pétanque ouvert à tous les habitants du quartier et aux visiteurs.

Inscriptions individuelles ou en équipes (doublettes ou triplettes). Les matchs se déroulent dans la bonne humeur, avec buvette tenue par les bénévoles et animation musicale en soirée.

Inscriptions au local de l'association ou directement sur place le jour J.`,
    image: "/images/petanque.jpg",
    emoji: "🎳",
    upcoming: true,
    featured: false,
    tags: ["pétanque", "sport", "été", "convivialité", "quartier"],
  },
]

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => e.upcoming).sort((a, b) => a.date.localeCompare(b.date))
}

export function getPastEvents(): Event[] {
  return events.filter((e) => !e.upcoming).sort((a, b) => b.date.localeCompare(a.date))
}

export function getFeaturedEvents(): Event[] {
  return events.filter((e) => e.upcoming && e.featured).slice(0, 3)
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug)
}

export const categoryLabels: Record<EventCategory, string> = {
  sport: "Sport",
  culture: "Culture",
  solidarite: "Solidarité",
  festif: "Festif",
  famille: "Famille",
}

export const categoryColors: Record<EventCategory, { bg: string; text: string; border: string }> = {
  sport: { bg: "bg-[#FFECD8]", text: "text-[#C4622D]", border: "border-[#C4622D]" },
  culture: { bg: "bg-[#E8F4EA]", text: "text-[#4A7A56]", border: "border-[#4A7A56]" },
  solidarite: { bg: "bg-[#FFF4CC]", text: "text-[#8A6B00]", border: "border-[#8A6B00]" },
  festif: { bg: "bg-[#F3E8FF]", text: "text-[#6B35A8]", border: "border-[#6B35A8]" },
  famille: { bg: "bg-[#E8F0FF]", text: "text-[#2B5AE0]", border: "border-[#2B5AE0]" },
}

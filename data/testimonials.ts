export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  years?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie-Christine D.",
    role: "Habitante du quartier depuis 12 ans",
    quote:
      "Grâce à la Marlio'Zen, j'ai rencontré des voisins que je n'aurais jamais connus autrement. Le cinéma plein air de juillet, c'est devenu un rituel pour toute ma famille. Ce lien social, ça n'a pas de prix.",
    avatar: "MC",
    years: "Adhérente depuis 2020",
  },
  {
    id: "2",
    name: "Mamadou K.",
    role: "Bénévole et habitant",
    quote:
      "Quand je suis arrivé à Marlioz, l'association m'a aidé dans mes démarches et m'a présenté des gens du quartier. Aujourd'hui je suis bénévole pour rendre ce que j'ai reçu. C'est ça, le vivre-ensemble.",
    avatar: "MK",
    years: "Bénévole depuis 2021",
  },
  {
    id: "3",
    name: "Françoise et Roger L.",
    role: "Couple de retraités, adhérents",
    quote:
      "À notre âge, on craignait l'isolement. La Marlio'Zen nous a redonné une vie sociale. Les ateliers, les sorties, les repas partagés... on se sent vraiment chez nous dans ce quartier.",
    avatar: "FR",
    years: "Adhérents depuis 2019",
  },
  {
    id: "4",
    name: "Amina B.",
    role: "Maman de 3 enfants",
    quote:
      "Les ateliers parentalité m'ont beaucoup aidée. Les bénévoles sont à l'écoute, sans jugement. Et mes enfants adorent les événements sportifs. La Marlio'Zen, c'est vraiment une deuxième famille pour nous.",
    avatar: "AB",
    years: "Adhérente depuis 2022",
  },
]

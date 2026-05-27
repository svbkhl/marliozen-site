export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    id: "adherents",
    value: 190,
    suffix: "",
    label: "Adhérents & bénévoles",
    description: "Habitants du quartier engagés dans la vie associative",
  },
  {
    id: "evenements",
    value: 15,
    suffix: "+",
    label: "Événements par an",
    description: "Moments de partage organisés tout au long de l'année",
  },
  {
    id: "partenaires",
    value: 4,
    suffix: "",
    label: "Partenaires institutionnels",
    description: "CAF, OPAC, Ville d'Aix-les-Bains et Grand Lac",
  },
  {
    id: "annees",
    value: 7,
    suffix: " ans",
    label: "D'existence",
    description: "Au service du quartier de Marlioz depuis 2018",
  },
]

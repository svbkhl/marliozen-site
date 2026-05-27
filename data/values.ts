export interface Value {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export const values: Value[] = [
  {
    id: "vivre-ensemble",
    title: "Vivre-ensemble",
    description:
      "Créer des espaces de rencontre et de dialogue entre tous les habitants du quartier, quelles que soient leurs origines ou leur situation.",
    icon: "🤝",
    color: "#C4622D",
  },
  {
    id: "mixite-sociale",
    title: "Mixité sociale",
    description:
      "Favoriser les échanges entre personnes de milieux sociaux, culturels et générationnels différents pour enrichir notre communauté.",
    icon: "🌍",
    color: "#6B9E78",
  },
  {
    id: "solidarite",
    title: "Solidarité",
    description:
      "S'entraider, accompagner les plus vulnérables et construire un filet social de proximité au service de tous les habitants de Marlioz.",
    icon: "💛",
    color: "#D4A853",
  },
  {
    id: "intergenerationnel",
    title: "Intergénérationnel",
    description:
      "Tisser des liens entre seniors, adultes et jeunes pour que l'expérience des uns enrichisse la jeunesse des autres, et réciproquement.",
    icon: "👨‍👩‍👧‍👦",
    color: "#8B6F5E",
  },
]

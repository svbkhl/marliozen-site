export interface Partner {
  id: string
  name: string
  shortName: string
  logo: string
  description: string
  role: string
  url?: string
  color: string
}

export const partners: Partner[] = [
  {
    id: "caf-savoie",
    name: "CAF de la Savoie",
    shortName: "CAF",
    logo: "/logos/caf-savoie.svg",
    description:
      "La Caisse d'Allocations Familiales de la Savoie soutient La Marlio'Zen dans le cadre de l'agrément Espace de Vie Sociale (EVS). Ce partenariat garantit notre mission d'accompagnement des familles et de lien social.",
    role: "Financeur principal · Agrément EVS",
    url: "https://www.caf.fr",
    color: "#0066CC",
  },
  {
    id: "opac-savoie",
    name: "OPAC de la Savoie",
    shortName: "OPAC",
    logo: "/logos/opac-savoie.svg",
    description:
      "L'Office Public de l'Habitat de la Savoie, bailleur social du quartier de Marlioz, soutient notre association et met à disposition des espaces pour nos actions de proximité.",
    role: "Bailleur social · Partenaire de proximité",
    url: "https://www.opac-savoie.fr",
    color: "#E8400C",
  },
  {
    id: "ville-aix",
    name: "Ville d'Aix-les-Bains",
    shortName: "Ville d'Aix",
    logo: "/logos/ville-aix.svg",
    description:
      "La municipalité d'Aix-les-Bains soutient les initiatives de lien social dans ses quartiers. La Marlio'Zen bénéficie du soutien et de la mise à disposition d'équipements de la ville.",
    role: "Soutien municipal · Mise à disposition d'équipements",
    color: "#1B5E20",
  },
  {
    id: "grand-lac",
    name: "Grand Lac",
    shortName: "Grand Lac",
    logo: "/logos/grand-lac.svg",
    description:
      "Communauté d'agglomération du Lac du Bourget, Grand Lac accompagne les projets associatifs du territoire et soutient la cohésion sociale à l'échelle intercommunale.",
    role: "Partenaire intercommunal · Cohésion sociale",
    color: "#0097A7",
  },
]

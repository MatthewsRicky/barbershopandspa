export type ServiceCategory = "barbering" | "spa" | "beauty";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export const services: Service[] = [
  {
    id: "classic-haircut",
    name: "Classic Haircut",
    category: "barbering",
    description:
      "A tailored cut finished with precision styling and attention to every detail.",
    duration: "45 min",
    price: 1500,
    image: "/images/services/haircut.jpg",
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    category: "barbering",
    description:
      "A clean, graduated fade crafted to complement your face shape and personal style.",
    duration: "50 min",
    price: 1800,
    image: "/images/services/fade.jpg",
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt",
    category: "barbering",
    description:
      "Precision beard shaping, trimming and conditioning for a clean, defined finish.",
    duration: "30 min",
    price: 1000,
    image: "/images/services/beard-sculpt.jpg",
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    category: "barbering",
    description:
      "A traditional close shave enhanced with warm towels and nourishing products.",
    duration: "40 min",
    price: 1200,
    image: "/images/services/beard.jpg",
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard",
    category: "barbering",
    description:
      "Our complete grooming service combining a precision haircut with a tailored beard sculpt.",
    duration: "70 min",
    price: 2400,
    image: "/images/services/haircutandbeard.jpg",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    category: "spa",
    description:
      "Targeted therapeutic massage designed to release tension and restore mobility.",
    duration: "60 min",
    price: 3500,
    image: "/images/services/massage.jpg",
  },
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    category: "spa",
    description:
      "A calming full-body treatment using flowing techniques to promote deep relaxation.",
    duration: "60 min",
    price: 3000,
    image: "/images/services/swedish-massage.jpg",
  },
  {
    id: "signature-facial",
    name: "Signature Facial",
    category: "spa",
    description:
      "A restorative facial treatment focused on cleansing, hydration and healthy skin.",
    duration: "60 min",
    price: 2800,
    image: "/images/services/facial.jpg",
  },
  {
    id: "body-treatment",
    name: "Body Treatment",
    category: "spa",
    description:
      "A rejuvenating treatment combining exfoliation, hydration and restorative care.",
    duration: "75 min",
    price: 4000,
    image: "/images/services/body-treatment.jpg",
  },
  {
    id: "manicure",
    name: "Manicure",
    category: "beauty",
    description:
      "Detailed nail and hand care finished with your choice of polish.",
    duration: "45 min",
    price: 1500,
    image: "/images/services/manicure.jpg",
  },
  {
    id: "pedicure",
    name: "Pedicure",
    category: "beauty",
    description:
      "Complete foot and nail care designed to leave you feeling refreshed.",
    duration: "50 min",
    price: 1800,
    image: "/images/services/pedicure.jpg",
  },
];

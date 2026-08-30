import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "signature-cut",
    name: "Signature Haircut",
    description:
      "A precision haircut tailored to your style, finished with professional styling.",
    duration: "45 min",
    price: 1500,
    category: "barbering",
    image: "/images/services/haircut.jpg",
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    description: "A clean, detailed fade with precision finishing and styling.",
    duration: "50 min",
    price: 1800,
    category: "barbering",
    image: "/images/services/fade.jpg",
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt",
    description:
      "Professional beard shaping, detailing and finishing treatment.",
    duration: "30 min",
    price: 1000,
    category: "barbering",
    image: "/images/services/beard.jpg",
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    description:
      "A traditional close shave combined with a relaxing hot towel treatment.",
    duration: "40 min",
    price: 1300,
    category: "barbering",
    image: "/images/services/shave.jpg",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    description:
      "A therapeutic massage designed to relieve tension and restore the body.",
    duration: "60 min",
    price: 3500,
    category: "spa",
    image: "/images/services/massage.jpg",
  },
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    description:
      "A relaxing full-body massage using flowing techniques to promote relaxation.",
    duration: "60 min",
    price: 3000,
    category: "spa",
    image: "/images/services/swedish.jpg",
  },
  {
    id: "signature-facial",
    name: "Signature Facial",
    description:
      "A rejuvenating facial treatment designed to cleanse, hydrate and refresh.",
    duration: "60 min",
    price: 3000,
    category: "spa",
    image: "/images/services/facial.jpg",
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    description:
      "Complete hand and foot care with professional grooming and finishing.",
    duration: "75 min",
    price: 2500,
    category: "spa",
    image: "/images/services/manicure.jpg",
  },
];

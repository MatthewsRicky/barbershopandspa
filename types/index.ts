export type ServiceCategory = "barbering" | "spa";

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: ServiceCategory;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  service: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: "barbering" | "spa" | "interior";
  alt: string;
}

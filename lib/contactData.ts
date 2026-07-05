export interface ContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  website: string;
  company: string;
  title: string;
  bio: string;
  address: string;
  googleMapsUrl: string;
  resumeUrl: string;
  socials: {
    instagram: string;
    youtube: string;
    whatsapp: string;
  };
}

export const contactData: ContactInfo = {
  firstName: "Arshdeep",
  lastName: "Singh",
  phone: "+91 7347369983",
  email: "nexoratechnology9@gmail.com",
  website: "https://alphanityone.com", // Keeping company website
  company: "Nexora Technology",
  title: "Full-Stack Web Developer",
  bio: "Web developer, SEO optimisation, cybersecurity",
  address: "", // Removed office location
  googleMapsUrl: "", // Removed map URL
  resumeUrl: "/resume.pdf",
  socials: {
    instagram: "https://www.instagram.com/arrsh_02/",
    youtube: "https://www.youtube.com/@savvyhell4086",
    whatsapp: "https://wa.me/917347369983",
  },
};

import { ContactInfo } from "./contactData";

/**
 * Generates a standard vCard (v3.0) string matching user's exact specification.
 */
export function generateVCFString(contact: ContactInfo): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contact.firstName} ${contact.lastName}`,
    `TEL;TYPE=CELL:${contact.phone.replace(/\s+/g, "")}`,
    `URL:${contact.socials.instagram}`,
    `URL:${contact.socials.youtube}`,
    "END:VCARD",
  ].join("\r\n");
}

/**
 * Initiates the download/import of the VCF contact card.
 */
export function downloadVCF(contact: ContactInfo) {
  const vcardText = generateVCFString(contact);
  const blob = new Blob([vcardText], { type: "text/vcard;charset=utf-8;" });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${contact.firstName}_${contact.lastName}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}

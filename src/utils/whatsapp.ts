export const WHATSAPP_NUMBER = '917002696853';

export const buildWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getServiceBookingLink = (serviceName: string) => {
  return buildWhatsAppLink(`Hello, I want to book an appointment for ${serviceName} at Care Dental Clinic`);
};

export const getGeneralBookingLink = () => {
  return buildWhatsAppLink('Hello, I want to book an appointment at Care Dental Clinic');
};

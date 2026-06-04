import emailjs from "@emailjs/browser";

const SERVICE_ID         = "service_ysogeua";
const OWNER_TEMPLATE_ID  = "template_tl8cmva";  // ✅ just the ID, not the full URL
const CLIENT_TEMPLATE_ID = "template_e4ff7uj";  // ✅ just the ID, not the full URL
const PUBLIC_KEY         = "ZtL41oINldnjsubVa";
const OWNER_EMAIL        = "yayu.b3516@gmail.com";

export const sendAppointmentEmails = async (formData) => {

    await emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, {
        to_email:   OWNER_EMAIL,
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        date:       formData.date,
        specialty:  formData.specialty,
        notes:      formData.notes || "No additional notes.",
    }, PUBLIC_KEY);

    await emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, {
        to_email:   formData.email,
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        date:       formData.date,
        specialty:  formData.specialty,
        notes:      formData.notes || "No additional notes.",
    }, PUBLIC_KEY);
};
import emailjs from "@emailjs/browser";

const SERVICE_ID         = "service_ysogeua";
const OWNER_TEMPLATE_ID  = "template_v6m8v1d";
const CLIENT_TEMPLATE_ID = "template_vb4omp8";  // ✅ updated
const PUBLIC_KEY         = "ZtL41oINldnjsubVa";
const OWNER_EMAIL        = "berhanllc11@gmail.com";

export const sendAppointmentEmails = async (formData) => {

    const ownerPayload = {
        to_email:   OWNER_EMAIL,
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        date:       formData.date,
        specialty:  formData.specialty,
        notes:      formData.notes || "No additional notes.",
        name:       formData.name,
        email:      formData.email,
        message:    formData.notes || "No additional notes.",
    };

    const clientPayload = {
        to_email:   formData.email,  // ← sender gets the copy
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        date:       formData.date,
        specialty:  formData.specialty,
        notes:      formData.notes || "No additional notes.",
        name:       formData.name,
        email:      formData.email,
        message:    formData.notes || "No additional notes.",
    };

    await emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, ownerPayload, PUBLIC_KEY);
    await emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, clientPayload, PUBLIC_KEY);
};
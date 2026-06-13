import emailjs from "@emailjs/browser";

const SERVICE_ID         = "service_111222";
const OWNER_TEMPLATE_ID  = "template_taoicb4";
const CLIENT_TEMPLATE_ID = "template_zldze04";
const PUBLIC_KEY         = "1j33wZgxWn59k1sT_";
const OWNER_EMAIL        = "berhangirum@tinsayetax.com";

export const sendQuoteEmails = async (formData) => {
    const base = {
        from_name:      `${formData.firstName} ${formData.lastName}`,
        first_name:     formData.firstName,
        last_name:      formData.lastName,
        from_email:     formData.email,
        phone:          formData.phone,
        date_of_birth:  formData.dateOfBirth,
        street_address: formData.address,
        city:           formData.city,
        state:          formData.state,
        zip_code:       formData.zipCode,
        year:           formData.year,
        make:           formData.make,
        model:          formData.model,
        vin:            formData.vin,
        coverage:       formData.coverageType,
    };

    try {
        const ownerRes = await emailjs.send(
            SERVICE_ID,
            OWNER_TEMPLATE_ID,
            { ...base, to_email: OWNER_EMAIL },
            PUBLIC_KEY
        );
        console.log("Owner email result:", ownerRes);
    } catch (err) {
        console.error("Owner email FAILED:", err.text);
        throw err;
    }

    try {
        const clientRes = await emailjs.send(
            SERVICE_ID,
            CLIENT_TEMPLATE_ID,
            { ...base, to_email: formData.email },
            PUBLIC_KEY
        );
        console.log("Client email result:", clientRes);
    } catch (err) {
        console.error("Client email FAILED:", err.text);
        throw err;
    }
};
import * as Yup from "yup";

const appointmentSchema = Yup.object({
    name: Yup.string()
        .min(3, "Full name must be at least 3 letters.")
        .required("Full name is required."),

    email: Yup.string()
        .email("Please provide a valid email address.")
        .required("Email is required."),

    phone: Yup.string()
        .matches(
            /^\+?[1-9]\d{7,14}$/,
            "Please provide a valid phone number."
        )
        .required("Phone number is required."),

    date: Yup.string()
        .required("Please select your preferred review date."),

    specialty: Yup.string()
        .required("Please select a practice advisory area."),

    notes: Yup.string(),
});

export default appointmentSchema;
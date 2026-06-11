import * as Yup from "yup";

const quoteSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "At least 2 characters.")
        .required("First name is required."),

    lastName: Yup.string()
        .min(2, "At least 2 characters.")
        .required("Last name is required."),

    email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),

    phone: Yup.string()
        .matches(/^\+?[1-9]\d{7,14}$/, "Invalid phone number.")
        .required("Phone number is required."),

    dateOfBirth: Yup.string()
        .required("Date of birth is required."),

    address: Yup.string()
        .min(5, "Enter a valid address.")
        .required("Address is required."),

    city: Yup.string()
        .required("City is required."),

    state: Yup.string()
        .required("State is required."),

    zipCode: Yup.string()
        .matches(/^\d{5}(-\d{4})?$/, "Invalid ZIP code.")
        .required("ZIP code is required."),

    year: Yup.number()
        .min(1990, "Year must be 1990 or later.")
        .max(new Date().getFullYear() + 1, "Invalid year.")
        .required("Vehicle year is required."),

    make: Yup.string()
        .required("Vehicle make is required."),

    model: Yup.string()
        .required("Vehicle model is required."),

    vin: Yup.string()
        .length(17, "VIN must be exactly 17 characters.")
        .required("VIN is required."),

    coverageType: Yup.string()
        .required("Please select a coverage type."),
});

export default quoteSchema;
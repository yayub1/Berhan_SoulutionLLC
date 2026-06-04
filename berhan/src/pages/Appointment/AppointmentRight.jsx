import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import appointmentSchema from "../validations/appointmentSchema";
import { sendAppointmentEmails } from "../ServicesLogic/emailService";
import Button from "../../components/common/Button";

function AppointmentRight() {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        date: "",
        specialty: "",
        notes: "",
    };

    const handleSubmit = async (
        values,
        { setSubmitting, resetForm }
    ) => {
        try {
            await sendAppointmentEmails(values);

            await Swal.fire({
                icon: "success",
                title: "Appointment Request Sent!",
                text: "Your appointment request has been submitted successfully. We will contact you shortly.",
                confirmButtonColor: "#b8972a",
            });

            resetForm();
        } catch (error) {
            console.error("Submit error:", error);

            await Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: "Something went wrong while sending your request. Please try again.",
                confirmButtonColor: "#dc2626",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full lg:w-1/2 h-full">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg h-full">

                <Formik
                    initialValues={initialValues}
                    validationSchema={appointmentSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form noValidate>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide"
                                    >
                                        Your Name *
                                    </label>

                                    <Field
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="e.g. Samuel Vance"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />

                                    <ErrorMessage
                                        name="name"
                                        component="p"
                                        className="mt-1 text-sm text-red-500"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide"
                                    >
                                        Email Address *
                                    </label>

                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />

                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="mt-1 text-sm text-red-500"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide"
                                    >
                                        Phone Number *
                                    </label>

                                    <Field
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />

                                    <ErrorMessage
                                        name="phone"
                                        component="p"
                                        className="mt-1 text-sm text-red-500"
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label
                                        htmlFor="date"
                                        className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide"
                                    >
                                        Preferred Date *
                                    </label>

                                    <Field
                                        id="date"
                                        name="date"
                                        type="date"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />

                                    <ErrorMessage
                                        name="date"
                                        component="p"
                                        className="mt-1 text-sm text-red-500"
                                    />
                                </div>

                            </div>

                            {/* Specialty */}
                            <div className="mt-6">
                                <label
                                    htmlFor="specialty"
                                    className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide"
                                >
                                    Practice Advisory Specialty *
                                </label>

                                <Field
                                    as="select"
                                    id="specialty"
                                    name="specialty"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="">
                                        -- Choose a compliance area --
                                    </option>
                                    <option value="immigration">
                                        Immigration Services
                                    </option>
                                    <option value="tax">
                                        Tax & Accounting
                                    </option>
                                    <option value="insurance">
                                        Insurance Services
                                    </option>
                                    <option value="business">
                                        Business Formation
                                    </option>
                                    <option value="real-estate">
                                        Commercial Brokerage
                                    </option>
                                </Field>

                                <ErrorMessage
                                    name="specialty"
                                    component="p"
                                    className="mt-1 text-sm text-red-500"
                                />
                            </div>

                            {/* Notes */}
                            <div className="mt-6">
                                <label
                                    htmlFor="notes"
                                    className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide"
                                >
                                    General File Notes / Case Outline
                                </label>

                                <Field
                                    as="textarea"
                                    id="notes"
                                    name="notes"
                                    rows="5"
                                    placeholder="Tell us about your case or request..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-white transition"
                                    style={{
                                        backgroundColor: isSubmitting
                                            ? "#9ca3af"
                                            : "#b8972a",
                                    }}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Request Free Compliance Audit"}
                                </Button>
                            </div>

                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
}

export default AppointmentRight;
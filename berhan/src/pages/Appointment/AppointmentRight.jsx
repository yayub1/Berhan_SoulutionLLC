import { Formik, Form, Field, ErrorMessage } from "formik";
import appointmentSchema from "../validations/appointmentSchema.js";
import { sendAppointmentEmails } from "../ServicesLogic/emailService.js";
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

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            await sendAppointmentEmails(values);
            setStatus({ success: true });
            resetForm();
        } catch (error) {
            setStatus({ success: false });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="appointment-right w-full lg:w-1/2 h-full">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 h-full">

                <Formik
                    initialValues={initialValues}
                    validationSchema={appointmentSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, status }) => (
                        <Form noValidate>

                            {/* Success / Error Banner */}
                            {status?.success === true && (
                                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-300 text-green-700 text-sm font-medium">
                                    ✅ Your appointment request was sent! Check your email for confirmation.
                                </div>
                            )}
                            {status?.success === false && (
                                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-300 text-red-700 text-sm font-medium">
                                    ❌ Something went wrong. Please try again or contact us directly.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Full Name */}
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide">
                                        Your Name *
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </span>
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="e.g. Samuel Vance"
                                            className="w-full pl-9 pr-4 py-3 rounded-lg border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 placeholder-gray-400"
                                        />
                                    </div>
                                    <ErrorMessage name="name" component="p" className="mt-1 text-sm text-red-500" />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </span>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="vance@example.com"
                                            className="w-full pl-9 pr-4 py-3 rounded-lg border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 placeholder-gray-400"
                                        />
                                    </div>
                                    <ErrorMessage name="email" component="p" className="mt-1 text-sm text-red-500" />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </span>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            className="w-full pl-9 pr-4 py-3 rounded-lg border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700 placeholder-gray-400"
                                        />
                                    </div>
                                    <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-500" />
                                </div>

                                {/* Preferred Date */}
                                <div>
                                    <label htmlFor="date" className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide">
                                        Preferred Date *
                                    </label>
                                    <Field
                                        id="date"
                                        name="date"
                                        type="date"
                                        className="w-full px-4 py-3 rounded-lg border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-400"
                                    />
                                    <ErrorMessage name="date" component="p" className="mt-1 text-sm text-red-500" />
                                </div>

                            </div>

                            {/* Specialty */}
                            <div className="mt-6">
                                <label htmlFor="specialty" className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide">
                                    Practice Advisory Specialty *
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </span>
                                    <Field
                                        as="select"
                                        id="specialty"
                                        name="specialty"
                                        className="w-full pl-9 pr-4 py-3 rounded-lg border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-500 appearance-none bg-white"
                                    >
                                        <option value="">-- Choose a compliance area --</option>
                                        <option value="immigration">Immigration Services</option>
                                        <option value="tax">Tax & Accounting</option>
                                        <option value="insurance">Insurance Services</option>
                                        <option value="business">Business Formation</option>
                                        <option value="real-estate">Commercial Brokerage</option>
                                    </Field>
                                </div>
                                <ErrorMessage name="specialty" component="p" className="mt-1 text-sm text-red-500" />
                            </div>

                            {/* Notes */}
                            <div className="mt-6">
                                <label htmlFor="notes" className="block mb-2 text-sm font-bold text-gray-900 uppercase tracking-wide">
                                    General File Notes / Case Outline
                                </label>
                                <Field
                                    as="textarea"
                                    id="notes"
                                    name="notes"
                                    rows="4"
                                    placeholder="e.g. Navigating skilled immigration, seeking multi-state tax solutions or auto-fleet quotes..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-y focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-white"
                                    style={{ background: isSubmitting ? "#a0845a" : "#b8972a" }}
                                >
                                    {isSubmitting ? "Sending..." : "Request Free Compliance Audit"}
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
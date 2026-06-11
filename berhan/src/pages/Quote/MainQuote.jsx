import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import quoteSchema from "../validations/quoteSchema";
import { sendQuoteEmails } from "../ServicesLogic/quoteEmailService";

const fieldCls = "w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors";
const labelCls = "text-xs font-bold uppercase tracking-widest text-gray-900";

const ErrMsg = ({ name }) => (
    <ErrorMessage name={name} component="p" className="mt-1 text-sm text-red-500" />
);

function MainQuote() {
    const initialValues = {
        firstName:    "",
        lastName:     "",
        email:        "",
        phone:        "",
        dateOfBirth:  "",
        address:      "",
        city:         "",
        state:        "",
        zipCode:      "",
        year:         "",
        make:         "",
        model:        "",
        vin:          "",
        coverageType: "",
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await sendQuoteEmails(values);

            await Swal.fire({
                icon: "success",
                title: "Quote Request Sent!",
                text: "We received your request and will be in touch shortly.",
                confirmButtonColor: "#9a8130",
            });

            resetForm();
        } catch (error) {
            console.error("Submit error:", error);

            await Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: "Something went wrong. Please try again.",
                confirmButtonColor: "#dc2626",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">

            {/* Header */}
            <div className="max-w-2xl w-full text-center mb-10">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
                    Get Your Free Auto Quote Today!
                </h1>
                <p className="text-base text-gray-600">
                    Fill out the form below. All input fields are clearly marked to help you complete your request quickly.
                </p>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={quoteSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form noValidate className="w-full max-w-2xl space-y-6">

                        {/* Section 1: Personal Information */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2">
                                1. Personal Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="firstName" className={labelCls}>First Name *</label>
                                    <Field id="firstName" name="firstName" placeholder="e.g. John" className={fieldCls} />
                                    <ErrMsg name="firstName" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="lastName" className={labelCls}>Last Name *</label>
                                    <Field id="lastName" name="lastName" placeholder="e.g. Doe" className={fieldCls} />
                                    <ErrMsg name="lastName" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className={labelCls}>Email Address *</label>
                                    <Field id="email" name="email" type="email" placeholder="name@example.com" className={fieldCls} />
                                    <ErrMsg name="email" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="phone" className={labelCls}>Phone Number *</label>
                                    <Field id="phone" name="phone" type="tel" placeholder="(555) 555-5555" className={fieldCls} />
                                    <ErrMsg name="phone" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="dateOfBirth" className={labelCls}>Date of Birth *</label>
                                    <Field id="dateOfBirth" name="dateOfBirth" type="date" className={fieldCls} />
                                    <ErrMsg name="dateOfBirth" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="address" className={labelCls}>Street Address *</label>
                                    <Field id="address" name="address" placeholder="123 Main St, Apt 4" className={fieldCls} />
                                    <ErrMsg name="address" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="city" className={labelCls}>City *</label>
                                    <Field id="city" name="city" placeholder="e.g. Las Vegas" className={fieldCls} />
                                    <ErrMsg name="city" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="state" className={labelCls}>State *</label>
                                    <Field id="state" name="state" placeholder="e.g. Nevada" className={fieldCls} />
                                    <ErrMsg name="state" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="zipCode" className={labelCls}>ZIP Code *</label>
                                    <Field id="zipCode" name="zipCode" placeholder="e.g. 89101" className={fieldCls} />
                                    <ErrMsg name="zipCode" />
                                </div>

                            </div>
                        </div>

                        {/* Section 2: Vehicle Information */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2">
                                2. Vehicle Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="year" className={labelCls}>Year *</label>
                                    <Field id="year" name="year" type="number" placeholder="e.g. 2024" className={fieldCls} />
                                    <ErrMsg name="year" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="make" className={labelCls}>Make *</label>
                                    <Field id="make" name="make" placeholder="e.g. Toyota" className={fieldCls} />
                                    <ErrMsg name="make" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="model" className={labelCls}>Model *</label>
                                    <Field id="model" name="model" placeholder="e.g. Camry" className={fieldCls} />
                                    <ErrMsg name="model" />
                                </div>

                                <div className="flex flex-col gap-1.5 sm:col-span-2">
                                    <label htmlFor="vin" className={labelCls}>Vehicle Identification Number (VIN) *</label>
                                    <Field id="vin" name="vin" placeholder="17-character VIN" className={fieldCls} />
                                    <ErrMsg name="vin" />
                                </div>

                            </div>
                        </div>

                        {/* Section 3: Coverage Preferences */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2">
                                3. Coverage Preferences
                            </h2>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="coverageType" className={labelCls}>Coverage Type *</label>
                                <Field as="select" id="coverageType" name="coverageType" className={fieldCls}>
                                    <option value="">Select Coverage Type</option>
                                    <option value="Liability Only (State Minimum)">Liability Only (State Minimum)</option>
                                    <option value="Full Coverage (Comprehensive & Collision)">Full Coverage (Comprehensive & Collision)</option>
                                </Field>
                                <ErrMsg name="coverageType" />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 text-white font-bold uppercase tracking-widest rounded-md transition-colors text-sm cursor-pointer"
                                style={{ backgroundColor: isSubmitting ? "#9ca3af" : "#9a8130" }}
                            >
                                {isSubmitting ? "Sending..." : "Submit Quote Request"}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default MainQuote;
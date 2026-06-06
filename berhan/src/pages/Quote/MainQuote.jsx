import React from "react";
import InputField from "../../components/common/InputField";

function MainQuote() {
    const handleSubmit = (e) => {
        e.preventDefault();
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">

                {/* Section 1: Personal Information */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2">
                        1. Personal Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="First Name *" id="firstName" placeholder="e.g. John" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Last Name *" id="lastName" placeholder="e.g. Doe" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Email Address *" id="email" type="email" placeholder="name@example.com" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Phone Number *" id="phone" type="tel" placeholder="(555) 555-5555" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Date of Birth *" id="dateOfBirth" type="date" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Street Address *" id="address" placeholder="123 Main St, Apt 4" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                    </div>
                </div>

                {/* Section 2: Vehicle Information */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2">
                        2. Vehicle Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Year *" id="year" type="number" placeholder="e.g. 2024" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Make *" id="make" placeholder="e.g. Toyota" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Model *" id="model" placeholder="e.g. Camry" required
                            containerClassName="flex flex-col gap-1.5"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                        <InputField label="Vehicle Identification Number (VIN) *" id="vin" placeholder="17-character VIN" required
                            containerClassName="flex flex-col gap-1.5 sm:col-span-2"
                            className="w-full px-3 py-2.5 text-base text-gray-900 bg-white border-2 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-colors" />
                    </div>
                </div>

                {/* Section 3: Coverage Preferences */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2">
                        3. Coverage Preferences
                    </h2>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="coverageType" className="text-xs font-bold uppercase tracking-widest text-gray-900">
                            Coverage Type *
                        </label>
                        <select id="coverageType" className="w-full px-3 py-2.5 bg-white text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-700 text-base">
                            <option value="">Select Coverage Type</option>
                            <option value="liability">Liability Only (State Minimum)</option>
                            <option value="full">Full Coverage (Comprehensive & Collision)</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full py-4 bg-[#9a8130] hover:bg-[#7f6a25] text-white font-bold uppercase tracking-widest rounded-md transition-colors text-sm cursor-pointer"
                    >
                        Submit Quote Request
                    </button>
                </div>

            </form>
        </div>
    );
}

export default MainQuote;
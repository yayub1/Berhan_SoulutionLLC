function AppointmentLeft() {
    return (
        <div className=" sm:w-0  sm:h-auto lg:w-100   lg:h-1/2">
            <div className="rounded-3xl p-8  sm:h-180 lg:h-170" style={{ background: "#0f1c33" }}>

                <h2 className="text-3xl font-bold text-white">
                    What Happens Next?
                </h2>

                <div className="space-y-8 mt-6">

                    <div className="flex items-start gap-4">
                        <img
                            src="/assets/appointment/1.png"
                            alt="Step 1"
                            className="w-14 h-14 object-contain"
                        />

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Meticulous Review
                            </h3>

                            <p className="mt-2 leading-relaxed" style={{ color: "#8fa3bf" }}>
                                Your draft file details are routed to the appropriate
                                licensed experts for detailed assessment.
                            </p>
                        </div>
                    </div>

                    <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}></div>

                    <div className="flex items-start gap-4">
                        <img
                            src="/assets/appointment/2.png"
                            alt="Step 2"
                            className="w-14 h-14 object-contain"
                        />

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Expert Consultation
                            </h3>

                            <p className="mt-2 leading-relaxed" style={{ color: "#8fa3bf" }}>
                                Our specialists review your case and prepare tailored
                                recommendations.
                            </p>
                        </div>
                    </div>

                    <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}></div>

                    <div className="flex items-start gap-4">
                        <img
                            src="/assets/appointment/3.png"
                            alt="Step 3"
                            className="w-14 h-14 object-contain"
                        />

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Secure Follow-Up
                            </h3>

                            <p className="mt-2 leading-relaxed" style={{ color: "#8fa3bf" }}>
                                Receive a secure response and next-step guidance from
                                our professional team.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-10 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <p className="text-sm font-medium text-center tracking-wide" style={{ color: "#3b7de0" }}>
                        IMMEDIATE CASE SECURITY • SECURE AES CLIENT ENCRYPTION VAULTS REGISTERED
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AppointmentLeft;
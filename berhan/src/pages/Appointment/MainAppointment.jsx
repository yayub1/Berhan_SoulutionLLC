import React from "react";
import AppointmentLeft from "./AppointmentLeft";
import AppointmentTop from "./AppintmentTop";
import AppointmentRight from "./AppointmentRight";
import Footer from "../../components/layout/Footer";

function MainAppointment() {
    return (
        <div className="min-h-screen bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                <AppointmentTop />
            </div>

            <div className="max-w-7xl mx-auto -mt-20 lg:-mt-80 flex flex-col lg:flex-row justify-center items-stretch gap-8">
                <AppointmentRight />
                <AppointmentLeft />
            </div>

            <Footer />
        </div>
    );
}

export default MainAppointment;
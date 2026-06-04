import React from "react";
import AppointmentLeft from "./AppointmentLeft";
import AppointmentTop from "./AppintmentTop";
import AppointmentRight from "./AppointmentRight";
import Footer from "../../components/layout/Footer";
function MainAppointment() {
    return (
        <div className="min-h-[80vh] bg-gray-50 px-4">
            <div className=" mx-auto">
                <AppointmentTop />
            </div>

            <div className="max-w-6x2 mx-auto lg:ml-50 -mt-20 lg:-mt-80 flex flex-col lg:flex-row items-center" >
                <AppointmentRight />
                <AppointmentLeft />
            </div>
            <Footer />
        </div>
    );
}

export default MainAppointment;
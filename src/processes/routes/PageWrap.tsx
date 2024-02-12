import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import Navigation from "../../widgets/Navigation";
import { Outlet } from "react-router-dom";
import ScrollUp from "../../shared/ui/ScrollUp";

export default function PageWrap() {
    return(
        <>
            <Header />
            <Navigation />
            <main className="container text-white">
                <div className="row">
                    <div className="col my-4">
                        <Outlet />
                    </div>
                </div>
            </main>
            <ScrollUp />
            <Footer />
        </>
    )
}
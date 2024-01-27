import PortfolioCard from "../widgets/PortfolioCard";
import { portfolioList } from "../assets/data";

export default function Portfolio() {
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="text-center fw-bold display-6">Портфолио</h2>
                </div>
            </div>
            <div className="row justify-content-center py-4">
                {portfolioList.map(card => {
                    return PortfolioCard(card)
                })}
            </div>
        </>
    )
}
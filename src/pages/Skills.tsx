import SkillCard from "../widgets/SkillCard";
import { skillList } from "../assets/data";

export default function Skills() {
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center fw-bold display-6 mb-4">Ключевые навыки</h2>
                </div>
            </div>
            <div className="row justify-content-center border-secondary">
                {skillList.map(skill => SkillCard(skill))}
            </div>            
        </>
    )
}
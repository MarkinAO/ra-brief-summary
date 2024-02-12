import SkillCard from "../widgets/SkillCard";
import { softSkillList } from "../assets/data";
import { v4 as uuidv4 } from 'uuid';

export default function SoftSkillList() {
    const newClass = "col-xxl-6 col-lg-10 col-md-12 mb-2";

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center fw-bold display-6 mb-4">Soft skills</h2>
                </div>
            </div>
            <div className="row justify-content-center border-secondary">
                {softSkillList.map(skill => <SkillCard title={skill.title} skillList={skill.skillList} classString={newClass} key={uuidv4()} />)}
            </div>            
        </>
    )
}
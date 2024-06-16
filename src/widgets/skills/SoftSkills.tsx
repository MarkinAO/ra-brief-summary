import { SkillCard } from "./ui/SkillCard";
import { softSkillList } from "@shared/index";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef } from "react";
import { useStore } from "@shared/model";

export function SoftSkills() {
  const newClass = "col-xxl-6 col-lg-10 col-md-12 mb-2";
  const skillsSection = useRef<HTMLDivElement>(null);
  const { setRef } = useStore((state) => state);

  useEffect(() => {
    setRef(skillsSection);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center fw-bold display-6 mb-4">Soft skills</h2>
        </div>
      </div>
      <div ref={skillsSection}>
        {softSkillList.map((skill) => (
          <SkillCard
            title={skill.title}
            skillList={skill.skillList}
            classString={newClass}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
}

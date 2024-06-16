import { SkillCard } from "./ui/SkillCard";
import { skillList } from "@shared/assets/data";
import { useEffect, useRef } from "react";
import { useStore } from "@shared/model";

export function Skills() {
  const skillsSection = useRef<HTMLDivElement>(null);
  const { setRef } = useStore((state) => state);

  useEffect(() => {
    setRef(skillsSection);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center fw-bold display-6 mb-4">Hard skills</h2>
        </div>
      </div>
      <div ref={skillsSection} className="hidden">
        {skillList.map((skill) => SkillCard(skill))}
      </div>
    </>
  );
}

import { v4 as uuidv4 } from "uuid";

interface ISkill {
  title: string;
  skillList: string[];
  classString?: string;
}

export function SkillCard({ title, skillList, classString }: ISkill) {
  const newClass = classString
    ? classString
    : "col-xxl-3 col-lg-4 col-md-12 mb-2";
  return (
    <div className={newClass} key={uuidv4()}>
      <div className="card bg-dark border border-secondary m-a h-100">
        <div className="card-body">
          <h4 className="card-title c-2">{title}</h4>
          <div className="card-text lh-lg">
            <ul className="list-group list-group-flush">
              {skillList.map((skill) => {
                return (
                  <li
                    className="list-group-item bg-dark border-bottom border-secondary text-white"
                    key={uuidv4()}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

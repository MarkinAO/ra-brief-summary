import { Header, Portfolio } from "@widgets/index";
import { Footer } from "@widgets/index";
import { ScrollUp } from "@widgets/index";
import { Skills } from "@widgets/index";
import { SoftSkills } from "@widgets/index";
import { useEffect } from "react";
import { useStore } from "@shared/model";
import { slideUp } from "@shared/index";

export default function Home() {
  const { refs } = useStore((state) => state);

  useEffect(() => {
    window.onscroll = () => {
      refs.forEach((ref) => slideUp(ref));
    };
  }, [refs]);

  return (
    <>
      <Header />
      <main className="container text-white">
        <div className="row">
          <div className="col my-4">
            <div className="row justify-content-center text-white">
              <div className="col-12">
                <h2 className="text-center fw-bold display-6">Обо мне</h2>
              </div>
            </div>
            <div className="row justify-content-center py-4 text-white slide-up">
              <div className="col-xl-4 col-md-12">
                <p>Привет! Меня зовут Александр. Я из Томска)</p>
                <p>
                  На данный момент я работаю в управлении проектами ПИР.
                  Занимаюсь этим уже 8-й год. Прошел путь от
                  инженера-проектировщика до руководителя направления
                  проектирования.
                </p>
              </div>
              <div className="col-xl-4 col-md-12">
                <p>
                  Проходил стажировку в благотворительных проектах команды{" "}
                  {
                    <a href="https://guild-of-developers.ru/" className={"c-2"}>
                      GoD
                    </a>
                  }
                  . Стек Next, React, Redux-toolkit, RTK Query. Работаем по{" "}
                  {
                    <a
                      href="https://tropical-railway-c8b.notion.site/GIT-FLOW-8f6aa0f2e10c43cab89ccba9311dd713"
                      className={"c-2"}
                    >
                      git flow
                    </a>
                  }
                  . Task manager -{" "}
                  {
                    <a
                      href="https://rezervpr.kaiten.ru/login?redirectPath=%2F"
                      className={"c-2"}
                    >
                      Kaiten
                    </a>
                  }
                  .
                </p>
                <p>Выполнял несколько задач по верстке на фрилансе.</p>
              </div>
              <div className="col-xl-4 col-sm-12">
                <p>
                  Я прошел профпереориентацию в Нетологии. Курс
                  Frontend-разработчик с нуля до middle. Курс длился 22 месяца.
                  Я успел там побыть «аспирантом». Помогал другим студентам
                  разбираться в домашках, отвечал на их вопросы и т.п.
                </p>
              </div>
            </div>            
            <Portfolio />
            <Skills />
            <SoftSkills />
          </div>
        </div>
      </main>
      <ScrollUp />
      <Footer />
    </>
  );
}

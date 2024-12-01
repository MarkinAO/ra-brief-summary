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
                <p>Привет! Меня зовут Александр. Я из Томска (+4 часа по мск)</p>
                <p>
                  На данный момент (с августа 2024) я работаю в компании{" "}
                  { <a href="https://tltpro.org/" className={"c-2"}>TLT PRO</a> }{" "}Frontend-разработчиком. В мои задачи входит разработка отдельных компонентов, их увязка с backend, взаимодействие с тестировщиками.
                  Работаем в стеке TypeScript, NextJS, Zustand, React Hook Form и Zod.                  
                </p>
              </div>
              <div className="col-xl-4 col-md-12">
                <p>
                  Ранее работал на проектах команды{" "}
                  {
                    <a href="https://guild-of-developers.ru/" className={"c-2"}>
                      Guild of developers
                    </a>
                  }{" "}Frontend-разработчиком (с октября 2023 по июль 2024). Занимался разработкой компонентов в стеке Next, React, Redux-toolkit, RTK Query. Работали в команде frontend, backend и тестировщики.
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
            {/* <SoftSkills /> */}
          </div>
        </div>
      </main>
      <ScrollUp />
      <Footer />
    </>
  );
}

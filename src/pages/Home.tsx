export default function Home() {
    return(
        <>
            <div className="row justify-content-center text-white">
                <div className="col-12">
                    <h2 className="text-center fw-bold display-6">Обо мне</h2>
                </div>
            </div>
            <div className="row justify-content-center py-4 text-white">
                <div className="col-xl-4 col-md-12">
                    <p>Привет! Меня зовут Александр. Я из Томска)</p>
                    <p>
                        На данный момент я работаю в управлении проектами ПИР. Занимаюсь этим уже 8-й год. Прошел путь от инженера-проектировщика до руководителя направления проектирования. Так же являюсь аудитором по СМК.                        
                    </p>                    
                </div>
                <div className="col-xl-4 col-md-12">
                    <p>
                        Прохожу стажировку в благотворительных проектах команды {<a href="https://guild-of-developers.ru/" className={"c-2"}>GoD</a>}. Текущий проект <a href="https://www.figma.com/file/mgU4lZ4k4FnOFeLmuyTPfn/%D0%94%D0%B5%D1%81%D0%BD%D0%B8%D1%86%D0%B0?type=design&node-id=0-1&mode=design&t=AjV8DkwRauTp2V0S-0">Десница</a>. Здесь я выполняю роль frontend/frontend-teamlead. Стек Next, React, Redux-toolkit. Работаем по git flow. Задачи ставлю и отслеживаю в Kaiten. Провожу собеседования, созвоны, помогаю ребятам разобраться в сложных вопросах.
                    </p>
                </div>          
                <div className="col-xl-4 col-sm-12">                    
                    <p>
                        Я прошел профпереориентацию в Нетологии. Курс Frontend-разработчик с нуля до middle. Курс длился 22 месяца. Я успел там побыть «аспирантом». Помогал другим студентам разбираться в домашках, отвечал на их вопросы и т.п.
                    </p>
                </div>
            </div>
        </>
    )
}
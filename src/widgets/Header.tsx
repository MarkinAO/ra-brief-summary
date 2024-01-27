export default function Header() {
    return(
        <header className="header p-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-row-reverse bd-highlight">
                        <div className="bg-2 header-badge">Redux</div>
                        <div className="bg-2 header-badge">React</div>
                    </div>
                    <div className="col-12 d-flex flex-row-reverse bd-highlight">
                        <div className="bg-2 header-badge">TS</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md">                    
                        <h1 className="text-center display-1 text-white">
                            <strong className="title fw-bold">Резюме</strong>
                        </h1>
                        <div className="bg-2 header-badge">JS</div>
                        <br/>
                        <div className="bg-2 header-badge">HTML</div>
                        <div className="bg-2 header-badge">CSS</div>
                    </div>
                </div>
            </div>        
        </header>
    )
}
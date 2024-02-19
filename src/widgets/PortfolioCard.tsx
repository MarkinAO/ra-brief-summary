import { v4 as uuidv4 } from 'uuid';

interface IPortfolioCard {
    title: string
    img: string
    description: string
    link: string
    link2?: string
}

export default function PortfolioCard({title, img, description, link, link2}: IPortfolioCard) {
    return(
        <div className="col-auto mb-3 w-360" key={uuidv4()}>                    
            <div className="card bg-dark border border-secondary m-a h-100">
                <div className="card-img-wrap">
                    <img src={img} className="card-img-top card-img-custom" alt={title}/>
                </div>                
                <div className="card-body c-2">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-white">{description}
                        {link2 &&
                            <a href={link2}>Ссылка на git</a>
                        }
                    </p>                    
                    <a href={link} className="btn bg-2 text-dark">Перейти на страницу</a>
                </div>
            </div>
        </div>
    )
}
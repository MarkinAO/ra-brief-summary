export function Footer() {
  return (
    <footer className="pt-4 pt-md-5 border-top border-secondary">
      <div className="container text-white">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h3>Контакты</h3>
            <h6>Маркин Александр</h6>
            <h6>+7-952-809-1242</h6>
            <h6><a href="mailto:habar77@yandex.ru">habar77@yandex.ru</a></h6>
            <ul className="list-unstyled text-small d-flex justify-content-center">
              <li>
                <a
                  href="tel:+7-952-809-1242"
                  className="messenger messenger_tel mx-1"
                ></a>
              </li>
              <li>
                <a
                  href="https://wa.me/79528091242"
                  className="messenger messenger_wa mx-1"
                ></a>
              </li>
              <li>
                <a
                  href="https://t.me/a_o_markin"
                  className="messenger messenger_tg mx-1"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

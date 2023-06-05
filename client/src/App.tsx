import "./styles/app.scss";
import PerfilPhoto from "./assets/perfil.png";

export const App = () => {
  return (
    <div className="container">
      <div className="content">
        <header>
          <img src={PerfilPhoto} />
          <p>@yourname</p>
        </header>
        <main>
          <ul>
            <li>
              <a href="http://" className="dc">
                discord
              </a>
            </li>
            <li>
              <a href="http://" className="yt">
                youtube
              </a>
            </li>
            <li>
              <a href="http://" className="insta">
                instagram
              </a>
            </li>
            <li>
              <a href="http://" className="gth">
                github
              </a>
            </li>
            <li>
              <a href="http://" className="lkd">
                linkedin
              </a>
            </li>
          </ul>
        </main>
      </div>
      <footer>©2023</footer>
    </div>
  );
};

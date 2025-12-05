import "./banner.scss";

export default function Banner() {
  return (
    <section id="banner" className="banner">
      <div className="banner-left">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Vous souhaitez un site qui vous corresponde vraiment ?</p>
        <p>Une idée à développer mais sans rien n'y connaître en programmation ?</p>
        <h2>Vous êtes au bon endroit !</h2>
      </div>
      <div className="banner-right"></div>
    </section>
  );
}
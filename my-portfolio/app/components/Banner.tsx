import "./banner.scss";

export default function Banner() {
  return (
    <section id="banner" className="banner">
      <div className="banner-left text-center">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Vous souhaitez un site qui vous corresponde vraiment ?</p>
        <p>Une idée à développer en particulier ?</p>
        <h2>Vous êtes au bon endroit !</h2>
      </div>
      <div className="banner-right"></div>
    </section>
  );
}
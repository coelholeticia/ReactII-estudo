import images from './images/eu.jpeg'

function Apresenta() {
 

    return (
      <>
        <div className="apresentacao">
            <img className="Minha-foto" src={images}  alt="Leticia-coelho-foto"/>
            <p className="text-Intro"> Olá!✌️ Bem-vindos ao meu Portfólio da Reprograma
            com ele você pode acessar todos meus projetos feitos lá e ainda outros projetos. 
            Espero que gostem! </p>
        </div>
      </>
    )
  }
  
  export default Apresenta
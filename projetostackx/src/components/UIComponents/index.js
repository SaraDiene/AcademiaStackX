import React from "react";
import PlanAndPrices from "../planAndPrices";
import "./style.css";

function UIComponents() {
  return (
   
    <div>
      <Header/>
      <Body/>
      <PlanAndPrices/>
      <Footer/>
    </div>
  );
}


export default UIComponents;

const Header = () => {
  return (

    <header>
       <nav class="navbar">


<div class="logo">Academia StackX</div>


<div>
   
    <ul class="nav-links">
 
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776; </label>
       
        <div class="menu">
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Preços</a></li>
            <li><a href="#">Contato</a></li>
        </div>
    </ul>
</div>

</nav>
    </header>
  );
};

const Body = () => {
  return (
    <>
    <section id="home" class="hero">
      <p className="hero__subtitle">
        Academia StackX
        <br />
        Cursos online com certificados válidos em todo Brasil. Os professores de melhores práticas irão ensinar-lhe todos os SEGREDOS das profissões digitais
      
      </p>
    
    </section>
    </>
  );
};

const Footer = () => {
  return (

    <footer id="contact" class="footer text-center mt-5">
    
        <p class="footer__copyright">
          &copy; Todos os direitos reservados{" "}
        </p>
      
    </footer>
  );
};



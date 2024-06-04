import { useState } from "react";
import Button from "../button";
import Title from "../title";
import Subtitle from "../subtitle";
import ImagePlans from "../imagePlans";
import Modal from "../modal";
import Values from "../values";
import img1 from '../../img/1.svg'
import img2 from '../../img/2.svg';
import img3 from '../../img/3.svg';
import img4 from '../../img/4.svg';
import img5 from '../../img/5.svg';
import img6 from '../../img/6.svg';

import "./style.css";

const listItems = [
    {
      title: "Combo 1",
      subtitle: "Python",
      src: img1,
      alt: "Descrição de imagem",
      value: "999,99",
    },
    {
      title: "Combo 2",
      subtitle: "Java",
      src: img2,
      alt: "Descrição de imagem",
      value: "999,99",
    },
    {
      title: "Combo 3",
      subtitle: "C#",
      src: img3,
      alt: "Descrição de imagem",
      value: "999,99",
    },
    {
        title: "Combo 4",
        subtitle: "JavaScript",
        src: img4,
        alt: "Descrição de imagem",
        value: "999,99",
      },
      {
        title: "Combo 5",
        subtitle: "React",
        src: img5,
        alt: "Descrição de imagem",
        value: "999,99",
      },
      {
        title: "Combo 6",
        subtitle: "TypeScript",
        src: img6,
        alt: "Descrição de imagem",
        value: "999,99",
      },
  
  ];
function PlanAndPrices() {
    const [selectedCombo, setSelectedCombo] = useState(null);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      combo: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      
      const comboSelected = listItems[selectedCombo].title;
      const updatedFormData = { ...formData, combo: comboSelected };
  
      const response = await fetch(
        "https://api.sheetmonkey.io/form/uM1Q7XZyF85NbpeU6wSwFB",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );
  
      if (response.ok) {
 
        handlePurchase();
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed:", response.status);
      }
    };
  
    const handleOpenModal = (index) => {
      setSelectedCombo(index);
    };
  
    const handleCloseModal = () => {
      setSelectedCombo(null);
    };
  
    const handlePurchase = () => {
      alert(
        `Cadastro para o Combo ${
          selectedCombo + 1
        } realizado com sucesso, estaremos em contato em 24h`
      );
      handleCloseModal();
    };
  
    return (
      <div id="combos" className="plansAndPrices">
        {listItems.map(function (item, index) {
          return (
            <div key={index}>
              <div className="plansContainer">
                <Title className="title" title={item.title} />
                <Subtitle className="subtitle" subtitle={item.subtitle} />
                <ImagePlans src={item.src} alt={item.alt} />
                <Values className="values" value={item.value} />
                <Button
                  className="buttonBuy"
                  onClick={() => handleOpenModal(index)}
                  text="Comprar"
                />
              </div>
              <div className="modal">
                <Modal
                  onClose={handleCloseModal}
                  isOpen={selectedCombo === index}
                >
                  <div className="registerContainer">
                    <form onSubmit={handleSubmit}>
                      <input
                        className="registerInput"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required="required"
                        placeholder="Digite seu nome"
                      />
                      <input
                        className="registerInput"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Digite seu e-mail"
                      />
  
                      <input
                        className="registerInput"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Digite telefone (com DDD)"
                      />
  
                      <Button
                        className="buttonRegister"
                        type="submit"
                        handlePurchase={handlePurchase}
                        text="Cadastrar"
                      />
                    </form>
                  </div>
                </Modal>
              </div>
              <hr className="separator" />
            </div>
          );
        })}
      </div>
    );
  }
  
  export default PlanAndPrices;
  
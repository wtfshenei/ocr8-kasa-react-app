import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="error-container">
        <Header />
        <span className="error">404</span>
        <p className="error-p">Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"} className="error-link">
          <button>Retourner sur la page d'accueil</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;

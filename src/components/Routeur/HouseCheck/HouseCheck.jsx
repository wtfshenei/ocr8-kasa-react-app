import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../../assets/logements.json";
import Housing from "../../../pages/Housing/Housing";
import Error404 from "../../../pages/Error404/Error404";

/**
 * Vérifie si l'id de l'url correspond bien à un id de logement existant.
 * Si oui envoie vers la page du logement correspondant.
 * Si non envoie vers la page erreur 404.
 **/
const HouseCheck = () => {
  const { id } = useParams();
  const [properties] = useState(logements);

  const house = properties.find((house) => house.id === id);

  if (house) {
    return <Housing id={id} />;
  } else {
    return <Error404 />;
  }
};

export default HouseCheck;

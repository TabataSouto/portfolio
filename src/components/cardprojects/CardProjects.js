import PropTypes from "prop-types"
import React from 'react';

function CardProjects({ projects }) {
  return(
    <>
      <h1>Projetos realizados durante o curso</h1>
      <main>
        {
          projects.fundamentos.map(({
              id,
              project,
              image,
          }) => (
            <div key={ id }>
              <h5> { project } </h5>
              <img src={ image } alt="imagem do projeto desenvolvido" />
            </div>
          ))
        }
      </main>
    </>
  )
}

CardProjects.propTypes = {
  projects: PropTypes.objectOf(
    PropTypes.array,
  ).isRequired,
}

export default CardProjects;

const Technologies = () => {
  return (
    <div className="technologies">
      <h2>Technologies</h2>
      <hr />
      <div className="column">
        <ul>
          <li>
            <strong>Backend Languages: </strong> Java
          </li>
          <li>
            <strong>Web: </strong> Angular, JavaScript, React, TypeScript, HTML,
            CSS, Bootstrap{" "}
          </li>
          <li>
            <strong>Database: </strong> MySQL, JPQL <br />
          </li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>
            <strong>Development Methodologies: </strong> TDD, Agile, Scrum{" "}
            <br />
          </li>
          <li>
            <strong>Backend Frameworks: </strong> Springboot, JPA, JDBC <br />
          </li>
          <li>
            <strong>Version Control: </strong> Git <br />
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};
export default Technologies;

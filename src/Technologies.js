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
            <strong>Database: </strong> MySQL, JPQL
          </li>
        </ul>
      </div>
      <div className="column">
        <span id="col2">
        <ul>
          <li>
            <strong>Development Methodologies: </strong> TDD, Agile, Scrum{" "}
          </li>
          <li>
            <strong>Backend Frameworks: </strong> Springboot, JPA, JDBC
          </li>
          <li>
            <strong>Version Control: </strong> Git
          </li>
        </ul>
        </span>
      </div>
    </div>
  );
};
export default Technologies;

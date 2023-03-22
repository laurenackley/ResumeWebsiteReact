const Portfolio = () => {
  return (
<div className="Portfolio">

<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#Midterm">Midterm</a>
  <a class="list-group-item list-group-item-action" href="#Final">Final</a>
</div>

      <div id="Midterm">
        <h2>Web Application - Sip. </h2>
        &emsp; &emsp;<em>Java, MySQL, JDBC, SpringBoot, JPQL, JSP</em>
        
        <hr />
        <ul>
          <li>
            This was the first group project that I was able to work on. We
            created an application where you are able to keep a journal of
            drinks that you have had, such as liquor, wine, or beer that you
            have tried.
          </li>
          <li>
            You are able to take down what type of drink it was, the brand,
            where it is from, the ABV, and your rating and tasting notes.
          </li>
          <li>
            My favorite feature that I added to this project was being able to
            add friends. On the friends tab you are able to add others by their
            username and then view their posts. It was really interesting to do
            since it was a many to many relationship in the database.
          </li>
          <li>
            In this project I was the DBA. I got to create the structure of the
            database and the relationships between the tables using MySQL
            Workbench.
          </li>
          <li>
            The Application was made in SpringTooSuite using a Java backend and
            the webpages are JSPs.
          </li>
          <li>
            <a href="http://sip.laurenackley.dev" target={`_blank`}>
              Link to Sip.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/laurenackley/MidtermProjectLauren"
              target={`_blank`}
              >
              Link to GitHub
            </a>

          </li>
        </ul>
            <a href="https://i.imgur.com/yBwPzs5.png" target={`_blank`}> <img class="schema" src="https://i.imgur.com/yBwPzs5.png" alt="Database SchemaDesign" /></a>
            <br />
            <br />
            <a href="http://sip.laurenackley.dev" target={`_blank`}> <img class="schema" src="https://i.imgur.com/zjlSAao.png" alt="HomePageSip" /></a>
      <hr />

                  </div>

      <div id="Final">
        <h2>Progressive Web Application - SkillSwap</h2>
        &emsp;  &emsp;<em>Java, MySQL, JDBC, SpringBoot, JPQL, JavaScript, Angular</em>
        < hr/>
        <ul>
          <li>
            This was the final project that I did at Skill Distillery and it was
            a group project where I worked with 3 other people. It was my first
            time making an application using Angular and it was a fun learning
            experience.
          </li>
          <li>
            SkillSwap is an application where one can post about DIY projects
            that they are doing, or want to do, to get help from others. You are
            able to create a project, delete your own project, join a project,
            and comment on projects.
          </li>
          <li>
            On this project I was able to work a lot more on the backend to get
            a further understanding of the mapping that needs to be done for the
            application to work best.
          </li>
          <li>
            This project was really fun to work on the different CSS elements
            that we added. I really enjoyed working on the profile information
            page where you can edit your information.
          </li>
          <li>
            <a href="http://skillswap.laurenackley.dev" target={`_blank`}>
              Link to SkillSwap
            </a>
          </li>
          <li>
            <a
              href="https://github.com/laurenackley/FinalProjectLauren"
              target={`_blank`}
            >
              Link to GitHub
            </a>
          </li>
        </ul>
        <a href="http://skillswap.laurenackley.dev" target={`_blank`}> <img class="schema" src="https://i.imgur.com/7iMrm1G.png" alt="SkillSwapHomePage" /></a>
    </div>
    </div>
  );
};
export default Portfolio;

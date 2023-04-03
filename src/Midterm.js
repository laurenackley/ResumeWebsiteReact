const Midterm = () => {
    return (
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
        <a href="https://i.imgur.com/yBwPzs5.png" target={`_blank`}>
          {" "}
          <img
            class="schema"
            src="https://i.imgur.com/yBwPzs5.png"
            alt="Database SchemaDesign"
          />
        </a>
        <br />
        <br />
        <a href="http://sip.laurenackley.dev" target={`_blank`}>
          {" "}
          <img
            class="schema"
            src="https://i.imgur.com/zjlSAao.png"
            alt="HomePageSip"
          />
        </a>
      </div>
    )
}
export default Midterm;
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Lauren Ackley</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contact" >Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>

    );
}
export default Navbar;
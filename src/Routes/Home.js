
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <header className="page-header">
                <h1>VJohnson</h1>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
                <nav>

                </nav>
                <Link to="/portfolio">Portfolio</Link>

            </header>


            <main>
                <p>Hello, I'm Victoria</p>
                <aside>
                    <h3>THIS IS MY ASIDE</h3>
                </aside>
            </main>

            <footer>
                <h4>THIS IS MY FOOTER</h4>
            </footer>
        </>






    );
}

export default Home;
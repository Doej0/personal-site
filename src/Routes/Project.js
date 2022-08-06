
import { Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <main>
                <h2>What have I done?</h2>
                <p>
                    That's a great question?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Projects;
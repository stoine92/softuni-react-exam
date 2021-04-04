
import Header from "../commons/Header/Header"
import Footer from "../commons/Footer/Footer"
import {Link} from "react-router-dom";

const MainPage = () => {
   
    return (
        <section className="mainPage">
            <Header />
            <>
                <h2>Welcome </h2>
                
                <Link className="mainPageLinks" to="/mainPage/People">People</Link>
                <Link className="mainPageLinks" to="/mainPage/Planets">Planets</Link>
                <Link className="mainPageLinks" to="/mainPage/Films">Films</Link>
                <Link className="mainPageLinks" to="/mainPage/Starships">Starships</Link>
                <Link className="quizPath" to="/quizFolder/Quiz">Take Quiz</Link>
            </>
            <Footer />
            
        </section>
    
    )
}

export default MainPage;
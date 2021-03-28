
import Header from "../commons/Header/Header"
import Footer from "../commons/Footer/Footer"
import {Link} from "react-router-dom";

const MainPage = () => {
   
    return (
        <section className="mainPage">
            <Header />
            <>
                <h2>Welcome </h2>
                
                <Link to="/mainPage/People">People</Link>
                <Link to="/mainPage/Planets">Planets</Link>
                <Link to="/mainPage/Films">Films</Link>
                <Link to="/mainPage/Starships">Starships</Link>
                
            </>
            <Footer />
            
        </section>
    
    )
}

export default MainPage;
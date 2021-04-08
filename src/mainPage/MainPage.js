import {Link} from "react-router-dom";

const MainPage = () => {
   
    return (
        <section className="mainPage">
           
            <>
                <h2>Welcome </h2>
                
                <Link className="mainPageLinks" to="/mainPage/People">People</Link>
                <Link className="mainPageLinks" to="/mainPage/Planets">Planets</Link>
                <Link className="mainPageLinks" to="/mainPage/Films">Films</Link>
                <Link className="mainPageLinks" to="/mainPage/Starships">Starships</Link>
                <Link className="quizPath" to="/quizFolder/Quiz">Take Quiz</Link>
            </>
            
            
        </section>
    
    )
}

export default MainPage;
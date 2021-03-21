import './underAge.css'
import Footer from '../../commons/Footer/Footer'

function UnderAge() {
  return (
    <div className="denied">
      
      <h1 className="denied-h1">
        Access Denied! Sorry, you need to be 16 years of age or over to join.
      </h1>
      <Footer />
    </div>
  );
}

export default UnderAge;

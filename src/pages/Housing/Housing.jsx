import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import logements from "../../assets/logements.json"
// import { useParams } from 'react-router-dom';


const Housing = ({ id }) => {
    // const id = useParams()
    const house = logements.find((house) => house.id === id)

    return (
        <div>
            <Header />
            {console.log(house)}
            <Footer />
        </div>
    );
};

export default Housing;
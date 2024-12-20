import BeersList from "../components/BeersList";
import BtnToHome from "../components/BtnToHome";

const Beers = () => {
    return (
        <section className="beers">
            <BeersList />
            <BtnToHome />
        </section>
    );
}

export default Beers;
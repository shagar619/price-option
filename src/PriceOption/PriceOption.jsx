import PropTypes from "prop-types";
import Feature from "../Components/Feature/Feature";

const PriceOption = ({option}) => {

    const {name, price, features} = option;

    return (
        <div className="bg-[#2f3e46] text-slate-300 rounded-lg p-12 shadow-xl">
            <h2 className="text-center mb-4">
                <span className="text-7xl font-bold">{price}$</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>

            <div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <br />
            <button className="bg-[#212529] text-white font-semibold px-4 py-3 rounded-lg hover:bg-slate-500 hover:text-black cursor-pointer">Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
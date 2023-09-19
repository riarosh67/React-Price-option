import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const Prices = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-sky-500 rounded-md p-4  flex flex-col text-white text-center'>
            <h2 className='text-center'>
                <span className='text-6xl font-semibold'> {price} </span>
                <span className='text-2xl'> /mon </span>
            </h2>
            <h4 className='text-3xl'> {name} </h4>
        <div className='pl-6 pt-4 flex-grow'>
            {
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
        </div>
        <button className='mt-12 w-full rounded-lg bg-lime-500 py-3 font-bold hover:bg-green-900'>Buy Now </button>
        </div>
    );
};
Prices.propTypes ={
    option: PropTypes.object
}
export default Prices;
import Prices from "../Price/Prices";
const PriceOption = () => {
    const priceOption =[
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio equipment",
                "Use of weightlifting area",
                "Locker room access",
                "Free towel service"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to all gym equipment",
                "Unlimited fitness classes",
                "Personal trainer sessions (2 per month)",
                "Sauna and steam room access",
                "Discounts on supplements"
            ]
        },
        {
            "id": 3,
            "name": "Corporate Membership",
            "price": 39.99,
            "features": [
                "Access to cardio equipment",
                "Use of weightlifting area",
                "Locker room access",
                "Dedicated corporate fitness classes",
                "Discounts for company employees"
            ]
        }
    ]
    
    return (
        <div className="m-12 ">
            <h2 className="text-5xl mb-10">Best Prices in the town: {priceOption.length}</h2>
        <div className="grid md:grid-cols-3 gap-6 ">
        {
                priceOption.map( option => <Prices key={option.id} option = {option}></Prices>)
            }
        </div>
        </div>
    );
};

export default PriceOption;
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


       const gymPricingOptions =[
          {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "billingCycle": "Monthly",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "1 free personal training session per month"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "billingCycle": "Monthly",
            "features": [
              "Access to gym equipment",
              "Locker room and shower access",
              "Access to group fitness classes",
              "2 free personal training sessions per month",
              "Unlimited guest passes on weekends"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": 79.99,
            "billingCycle": "Monthly",
            "features": [
              "24/7 access to gym facilities",
              "Priority locker room and shower access",
              "Access to all group and specialty fitness classes",
              "5 free personal training sessions per month",
              "Unlimited guest passes",
              "Free nutritional assessment and planning"
            ]
          },
          {
            "id": 4,
            "name": "VIP",
            "price": 99.99,
            "billingCycle": "Monthly",
            "features": [
              "24/7 access to exclusive VIP area",
              "Personal locker with secure access",
              "Access to private training rooms",
              "All-inclusive group and personal fitness classes",
              "Unlimited personal training sessions",
              "Personalized fitness and wellness consultation",
              "Complimentary massage therapy once a month",
              "Free smoothie and coffee bar access"
            ]
          },

          {
            "id": 5,
            "name": "Day Pass",
            "price": 15.00,
            "billingCycle": "One-time",
            "features": [
              "Full gym access for a single day",
              "Locker room access",
              "Access to standard gym equipment",
              "Access to one group fitness class (if available)"
            ]
          },

          {
            "id": 6,
            "name": "Annual Elite",
            "price": 899.99,
            "billingCycle": "Yearly",
            "features": [
              "24/7 access to gym facilities",
              "Priority locker room and shower access",
              "Unlimited access to all fitness classes",
              "Unlimited personal training sessions",
              "One-on-one coaching and wellness check-ins",
              "Personalized fitness and nutrition program",
              "Free quarterly wellness assessments",
              "Complimentary monthly massage therapy",
              "Free smoothie bar and VIP lounge access"
            ]
          }
        ]

      


    return (
        <div>
            <h2 className="text-5xl text-center mb-12">Best Prices in the Town</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
                gymPricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>


        </div>
    );
};

export default PriceOptions;
import React,{useState}  from 'react'
import StripeCheck from 'react-stripe-checkout'

function StripeCheckout() {
    const [payment, setProduct] = useState({
        name:"react from FB",
        price:"10",
        productby:"FB"
    })

    const makePayment = token =>{
        const body = {
            token,
            payment
        }
        console.log(body)
        const header = {
            "COntent-Type" : "application/json"
        }

        return fetch(`http://localhost:5000/api/Payment`,{
            method:"POST",
            headers: header,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response)
        })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <StripeCheck stripeKey="pk_test_51IrxfTFhAO44cnt8nAExPGNMnBw0OmdQdAPkYcYgGJ6afQBOqazAAA7suuye8KOBDcFWvynVEJ9jhWHMrggupvrY00Wt23rhk7" token={makePayment} name="Buy react"/>
        </div>
    )
}

export default StripeCheckout

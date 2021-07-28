import React, { useState } from 'react'
import { questions } from "./QuestionList";
import MyAccordian from './MyAccordian';
import './Accordian.css';

const Accordian = () => {
    const [data] = useState(questions);
    return (
        <>
            <section className="main-div">

                {
                    data.map((curElem) => {
                        return <MyAccordian key={curElem.id} {...curElem} />
                        //here the spread operator is use to pass the the properties of the questions api
                    })
                }




                {/* {
                data.filter(category => category.category === "Shipping-Detail").map(curElem => (
                            return <MyAccordian key={curElem.id} {...curElem} />
                        ))
                        } */}



            </section>
        </>
    )
}

export default Accordian
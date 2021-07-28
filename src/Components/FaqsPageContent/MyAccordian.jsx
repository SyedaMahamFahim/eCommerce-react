import React, {useState} from 'react'

const MyAccordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
                
                
                <div onClick={() => setShow(!show)} className="faqs-float-left">
                <h3  >{question}</h3>
                </div>
                <div  className="faqs-float-right">
                </div>
                
            </div>
            { show &&  <p className="answers"> {answer} </p> }
         
        </>
    )
}

export default MyAccordian
import React from 'react'
import { BiSolidCategoryAlt } from "react-icons/bi";
import './index.scss'
const Managed = () => {
    return (
        <>
            <section id='Managed'>
                <div className="ManagedArea">
                    <div className="ManagedText">
                        <p>INDUSTRY WE OFFER</p>
                        <h1>Managed IT services customized for your industry</h1>
                        <p>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,</p>

                    </div>
                    <div className="ManagedAreaBox">
                        <div className="ManagedBox">
                            <div className="TextCont">
                                <BiSolidCategoryAlt className='BiSolid' /><br />

                                <h3>Industries &</h3>
                                <h3>Manufacturing</h3>
                            </div>
                        </div>
                        <div className="ManagedBox">
                            <div className="TextCont">
                                <BiSolidCategoryAlt className='BiSolid' /><br />
                                <h3>Industries &</h3>
                                <h3>Manufacturing</h3>
                            </div>

                        </div>
                        <div className="ManagedBox">
                            <div className="TextCont">
                                <BiSolidCategoryAlt className='BiSolid' /><br />
                                <h3>Industries &</h3>
                                <h3>Manufacturing</h3>
                            </div>

                        </div>
                        <div className="ManagedBox">
                            <div className="TextCont">
                                <BiSolidCategoryAlt className='BiSolid' /><br />
                                <h3>Industries &</h3>
                                <h3>Manufacturing</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Managed
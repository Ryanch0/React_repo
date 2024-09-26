import React, { useState } from 'react'

export default props => {
    const{onChange, userInput} = props
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Invenstment</label>
                    <input type='number' value={userInput.initialInvestment} requireds onChange={(e)=>onChange('initialInvestment', e.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' value={userInput.annualInvestment} required onChange={(e)=>onChange('annualInvestment', e.target.value)}/>
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type='number' value={userInput.expectedReturn} required onChange={(e)=>onChange('expectedReturn', e.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' value={userInput.duration} required onChange={(e)=>onChange('duration', e.target.value)}/>
                </p>
            </div>
        </section>
    )
}
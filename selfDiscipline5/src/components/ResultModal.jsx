import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'


export default forwardRef((props,ref) => {
    const {remainingTime, targetTime, onReset} = props

    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })



    return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset}>
            {userLost && <h2>You Lost</h2> }
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method='dialog' onSubmit={onReset}>
                <button>닫기</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})
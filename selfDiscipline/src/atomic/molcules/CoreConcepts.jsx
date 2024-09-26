import React from 'react'
import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../../data'

export default props => {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map(item =>
                    <CoreConcept
                        key={item.title}
                        {...item} // item의 모든 key value값을 가져옴 =>  props로 이용
                    />
                )}
            </ul>
        </section>
    )
}
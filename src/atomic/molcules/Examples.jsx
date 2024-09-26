import React, { useState } from 'react'
import { EXAMPLES } from '../../data'
import TabButton from './TabButton'
import Section from '../atoms/Section'
import Tabs from '../atoms/Tabs'
export default props => {
    const [tabContent, setTabContent] = useState('')

    const handleClick = (selectedButton) => {
        // selectedButon => "Components", 'jsx', 'props', 'state'
        setTabContent(selectedButton)
        console.log(tabContent)
    }

    return (
        <Section id="examples" title='examples'>

            <Tabs
                buttonsContainer='menu'
                buttons={
                    Object.keys(EXAMPLES).map(item => {
                        return (
                            <TabButton
                                key={item}
                                isSelected={tabContent === item}
                                onClick={() => handleClick(item)}
                            >{item}</TabButton>
                        )
                    })
                }>
                {!tabContent && <p>please select a topic</p>}
                {tabContent && (
                    <div id="tab-content">
                        <h3>{EXAMPLES[tabContent]?.title}</h3>
                        <p>{EXAMPLES[tabContent]?.description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[tabContent]?.code}
                            </code>
                        </pre>
                    </div>
                )}
            </Tabs>
        </Section>)
}
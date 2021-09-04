import React, {useState} from "react";

type UncontrolledAccordionAccordion = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordionAccordion(props: UncontrolledAccordionAccordion) {


    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ ()=> {setCollapsed(!collapsed)}}/>
             {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ ()=> {props.onClick()}}>{props.title}</h3>
    )
}


function AccordionBody(props: any) {
    return (
        <ul >
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordionAccordion;
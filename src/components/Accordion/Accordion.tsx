import React from "react";
import {StateType} from "../../reducer";


type itemsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    state: StateType
    onClickTitle: () => void
        items: itemsType[]
    onClickBody:(value:any) => void
}



const Accordion = React.memo((props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.onClickTitle}
                collapsed={props.state.collapsed}/>
            {!props.state.collapsed && <AccordionBody
                items={props.items}
                onClickBody={props.onClickBody}
            />}
        </div>
    )
})


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    collapsed: boolean
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
})

type AccordionBodyePropsType = {
    items:itemsType[]
    onClickBody:(value:any) => void
}

const AccordionBody = React.memo((props: AccordionBodyePropsType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li
                key={index}
                onClick={() => {props.onClickBody(i.value)}}>{i.title}
            </li>)}
        </ul>
    )
})

export default Accordion;
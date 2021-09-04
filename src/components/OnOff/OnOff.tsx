import React, {useState} from "react";


type OnOffPropsType = {
    lite: boolean
    onClick: (on: boolean) => void
}

export const OnOff = React.memo((props: OnOffPropsType) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.lite ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.lite ? "white" : "red",
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.lite ? "green" : "red",
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onClick(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
})



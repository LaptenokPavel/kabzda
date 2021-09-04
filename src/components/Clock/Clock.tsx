import React, {useEffect, useState} from "react";

export const Clock = () => {
    let data = new Date()
    let hours = data.getHours()
    let minits = data.getMinutes()
    let seconds = data.getSeconds()

    const multiplay = (value:number) => value < 10 ? '0' + value : value

    const [counter, setCounter] = useState(new Date())

    const clockStyle = {
        width: '80px',
        border: '1px solid green',
        backgroundColor: 'aquamarine',
        marginTop: '20px'
    }

    useEffect(()=>{
const intervalId = setInterval(() => {
    setCounter(new Date())},1000)
        return () => {
    clearInterval(intervalId)
        }
     }, [])


    return (
        <div style={clockStyle}>
            <span>{multiplay(hours)}:</span>
            <span>{multiplay(minits)}:</span>
            <span>{multiplay(seconds)}</span>
        </div>
    )

}
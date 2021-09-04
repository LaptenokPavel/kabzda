import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css';

type townsType = {
    titleTown: string
    value: any
}

type SelectHandMadeType = {
    selectValue: string
    towns: townsType[]
    onClickSelect: (value: any) => void
}

export function SelectHandMade(props: SelectHandMadeType) {

    let [selectColapsed, setSelectColapsed] = useState<boolean>(false);
    let [hoveredElementValue, setHoveredElementValue] = useState(props.selectValue);

    const town = props.towns.find(t => t.value === props.selectValue)
    const hoveredTown = props.towns.find(t => t.value === hoveredElementValue)

    const select = () => setSelectColapsed(!selectColapsed)

    const onTownClick = (value: any) => {
        props.onClickSelect(value);
        select()
    }

    useEffect( ()=>{
        setHoveredElementValue(props.selectValue)
    }, [props.selectValue])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.towns.length; i++) {
                if (props.towns[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.towns[i + 1]
                        : props.towns[i - 1]
                    if (pretendentElement) {
                        props.onClickSelect(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectColapsed) {
                props.onClickSelect(props.towns[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setSelectColapsed(false)
        }
    }


    return (
        <div onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.select} onClick={select}>
                {town && town.titleTown}</span>
            {
                selectColapsed &&
                (<div className={s.span}>
                    {props.towns.map((t, index) => <div
                        onMouseEnter={() => {
                            setHoveredElementValue(t.value)
                        }}
                        className={s.item + ' ' + (hoveredTown === t ? s.selected : ' ')}
                        key={index}
                        onClick={() => {
                            onTownClick(t.value)
                        }}>
                        {t.titleTown}</div>)}
                </div>)}
        </div>
    )
}

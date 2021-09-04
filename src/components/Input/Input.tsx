import {ChangeEvent, useState} from "react";


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('hello')

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={changeInput}/>

    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type={'checkbox'}
               checked={parentValue}
               onChange={changeCheckbox}
        />
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue}
                onChange={changeSelect}
        >
            <option>None</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moskow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}
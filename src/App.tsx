import React, {useReducer, useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/Input/Input";
import {SelectHandMade} from "./components/Select/Select";
import {reducer} from "./reducer";
import { Clock } from './components/Clock/Clock';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [state, dispatch] = useReducer(reducer, {collapsed:false});
    let [on, setOn] = useState<boolean>(false);
    let [selectValue, setselectValue] = useState<string>('3');

     const onClickBody = (value: any) => {
        alert(value)
    }
    const onClickSelect = (value: string) => {
        setselectValue(value)
    }

    const collapsed = () => {
         dispatch({type:'TOGGLE-COLLAPSED'})
    }

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Users"}
                       state={state}
                       onClickTitle={collapsed}
                       items={[{title: 'Pasha', value: '1'},
                           {title: 'Dimych', value: '2'},
                           {title: 'Valera', value: '3'},
                           {title: 'Gleb', value: '4'}]}
                       onClickBody={onClickBody}
            />
            <OnOff
                lite={on}
                onClick={setOn}/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <SelectHandMade
                selectValue={selectValue}
                towns={[{titleTown: 'Minsk', value: '1'},
                    {titleTown: 'Moskow', value: '2'},
                    {titleTown: 'Kiev', value: '3'}]}
                onClickSelect={onClickSelect}
                            />
            <Clock/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = React.memo((props: PageTitlePropsType)=> {
    return (
        <div>{props.title}</div>
    )
})


export default App;

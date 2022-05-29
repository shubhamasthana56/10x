import "./button.css";
import { useState } from "react";
///syntethic events(wrapper over html events)
//state re-render or refresh our dom(document object model);
//hooks are nothing but function created by react community
const Button = ()=> {
    //{value, function(change your value)}
    const [isDanger, setDanger] = useState(false);
    const handleClick = ()=> {
        setDanger(!isDanger);
        console.log(isDanger);
    }
    return (
        <div>
            <h1 className={isDanger ? "heading-danger": "heading-normal"}>Color Changing heading</h1>
            <button onClick={handleClick}>Change color</button>
        </div>
    )
}
// const Heading = ()=> {
//     return (
//         <Button></Button>
//     )
// }
export default Button;

// function useState(initialState) {
//     const state= {
//         initialState
//     };
//     const update = (updatedState)=> {
//         state = {
//             updatedState
//         }
//     }
// }
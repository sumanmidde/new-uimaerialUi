import React, { useState } from 'react';

function FormUser() {
    // const [count, setCount] = useState(0);
    // const onIncrese = () => {
    //     setCount(count + 1);

    // }
    // const onDecrese = () => {
    //     setCount(count - 1);

    // }

    const [name, setName] = useState({
        name: ""
    });
    const onNameChange = () => {
        setName((name) => {
            return name = "suman"
        })
    }



    return (
        <div className="form">
            <input type="text" value={name} />
            <button onChange={onNameChange}>change name {name}</button>

            {/* <div>

                title is:{title}
                data is :{data}

            </div> */}
            {/* <div>
                <button onClick={onIncrese}>animal count</button>
            </div>
            <button onClick={onDecrese}>-</button><span>animal count {count}</span> <button onClick={onIncrese}>+</button>
            <div></div> */}

        </div>
    );
}

export default FormUser;
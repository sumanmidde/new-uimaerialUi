import React, { useState } from 'react';

function Search() {
    const [name, setName] = useState("");
    const onHandle = (e) => {
        setName(e.target.value);
        console.log(setName);
    };
    return (<div>
        <input value={name} onChange={onHandle} />

    </div>);
}

export default Search;
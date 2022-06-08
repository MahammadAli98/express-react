import React, { useState } from 'react'

const Section1 = () => {
    const [result, setResult] = useState({ input1: 0, input2: 0 })
    

    const onChangeText = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setResult({ ...result, [e.target.name]: e.target.value })

    }

    const calc = () => {
        let num = +result.input1 + (+result.input2)
        return isNaN(num) ? 'Hoqqa verme ay ograss' : num
    }

    return (
        <div style={{ color: 'white' }}>
            <h1>{calc()}</h1>
            <input type="text" name="input1" onChange={(e) => onChangeText(e)} />
            <input type="text" name="input2" onChange={(e) => onChangeText(e)} />
        </div>
    )
}

export default Section1




// const [state, setState] = useState({ title: 500, num: 2 })

// /* <button onClick={() => { setState({ ...state, title: state.title + 100 }) }} >toggle</button> */ 

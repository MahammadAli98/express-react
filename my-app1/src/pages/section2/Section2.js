import { useState } from "react"

const Section2 = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const inputChange = (e) => {
        if (e.target.name === "email") setEmail(e.target.value)
        if (e.target.name === "password") setPassword(e.target.value)
        console.log(password)
    }

    const validate = () => {
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? setEmailError(false) : setEmailError(true);
        (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) ? setPasswordError(false) : setPasswordError(true)
    }

    const submit = () => {
        validate()
        if (!emailError && !passwordError) {
            console.log(password)
            fetch("http://localhost:5000/products",
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: email, price: password })
                }
            ).then(res => res.json()).then(data => console.log(data))
        }
    }

    return (
        <div>
            <h1>login</h1>
            <input type="text" name="email" onChange={(e) => inputChange(e)} />
            <input type="password" name="password" onChange={(e) => inputChange(e)} />
            <button onClick={submit}>Submit</button>
        </div>
    )

}

export default Section2
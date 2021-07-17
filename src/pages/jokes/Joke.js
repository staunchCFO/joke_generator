import { useState, useRef, useEffect } from "react"
import useRandomJoke from '../../hooks/useRandomJoke'

import { FormContainer, MainContainer }  from "./style.js"


const Joke = () => {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const [ firstName , setFirstName] = useState("")
    const [ lastName , setLastName] = useState("")
    const [ reset , setReset] = useState(false)

    const joke = useRandomJoke(firstName , lastName);

    useEffect(() => {
        if(reset){
            setFirstName("")
            setLastName("")
            setReset(false)
        }
    }, [reset])

    const generateJoke = (e) => {
        e.preventDefault();

        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
        setReset(true)
    }

    const sampleText = () => {
        if(joke){
            return joke
        }else {
           return "Hello pls enter your first name and last name to generate amazing jokes !!!"
        }
    }


    return (
        <MainContainer>
            <div className="welcome">
                <h1>{sampleText()}</h1>
            </div>

            <FormContainer>
                <form>
                    <input 
                        placeholder="First Name" 
                        ref={firstNameRef} 
                    />
                    <input 
                        placeholder="Last Name" 
                        ref={lastNameRef} 
                    />
                    <button onClick={generateJoke}>Generate Jokes</button>
                    {/* <button onClick={handleReset}>Reset</button> */}
                </form>
            </FormContainer>
        </MainContainer>
    )
}

export default Joke
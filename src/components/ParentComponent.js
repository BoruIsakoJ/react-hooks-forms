import React, {use, useState} from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

function ParentComponent() {
    const [firstName, setFirstName] = useState("Boru")
    const [lastName,setLastName] = useState("Isako")
    const [newsletter, setNewsLetter] = useState(false)
    const [number, setNumber] = useState(0)
    const [isInvalidNumber, setIsInvalidNumber] = useState(null)

    function handleSubmit(e){
        e.preventDefault()
        console.log("Form submitted")
    }

    function handleFirstNameChange(e){
        setFirstName(e.target.value)
        console.log(e.target.value)
    }
    function handleLastNameChange(e){
        setLastName(e.target.value)
        console.log(e.target.value)
    }
    function handleNewsletterChange(e){
        setNewsLetter(e.target.checked)
        console.log(e.target.checked)
    }
    function handleNumberChange(e){
        const newNumber = Number(e.target.value)
        console.log(e.target.value)
        if(newNumber>=0 && newNumber <= 5){
            setNumber(newNumber)
            setIsInvalidNumber(null)
        } else{
            setIsInvalidNumber(`${newNumber} is not a valid number`)
        }
    }
  return (
    <>    
    <Form
        handleSubmit ={handleSubmit}
        firstName ={firstName}
        lastName ={lastName}
        newsletter ={newsletter}
        number={number}
        isInvalidNumber={isInvalidNumber}
        handleFirstNameChange = {handleFirstNameChange}
        handleLastNameChange ={handleLastNameChange}
        handleNewsletterChange ={handleNewsletterChange} 
        handleNumberChange={handleNumberChange} 
        
    />
    <DisplayData firstName={firstName} lastName={lastName}/>
    </>

  )
}

export default ParentComponent
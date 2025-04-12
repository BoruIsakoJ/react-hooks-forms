import React from "react";

function Form({firstName, lastName, newsletter,number,isInvalidNumber, handleFirstNameChange, handleLastNameChange, handleNewsletterChange,handleNumberChange,handleSubmit}) {
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        // {/* checked instead of value */}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
      <input type="number" value={number} onChange={handleNumberChange}/>
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
    </form>
  );
}

export default Form;

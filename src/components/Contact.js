import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//creating alert function for when the form has been submitted
function showAlert() {
   return alert('This form does absolutely nothing');

}


export default function Contact() {
  // creating states to help check for validation
  const [validate, setValidated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
 // creating staties to hold all values from form
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  // creating a state to hold all the error info
  const [formErrors, setFormErrors] = useState({});

// function that deals with submitting the form
  const handleSubmit = (event) => {
      event.preventDefualt();
      console.log('the form has been submitted')
      alert('This form does absolutely nothing');
      return 
    
  };

  // function to manage what changes or what happens when things change in the form
  const handlechange = (event) => {
     
    let errors ={};
    if (!event.target.value) {
      errors.name = `This field is required`;
    }
    //validating email field
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid Email Address"
    }
    //validating if there is something in the input
    if (!event.target.value.length) {
      errors.name =`This field is required`;      
      console.log('fill something out!')
    } else {
      errors.message = '';
      console.log('good to go!')
    }

    //adds all error messages to error array (from usestate)
    setFormErrors(errors);

    
    // will save the values for each input as user enters in info
    setValues({...values, [event.target.name]: event.target.value})
  }; 


  return (
    <div>
    <Form onSubmit={handleSubmit}>
      {/* Input for user name */}
      <Form.Group className="mb-3" controlId="contactForm.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter name"
          name="name"
          value={values.name}
          onChange={handlechange}
          onBlur={handlechange} 
        />
        {formErrors.name && (
                    <p className="text-warning">{formErrors.name}</p>
                  )}
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      {/* Input for user email */}
      <Form.Group className="mb-3" controlId="contactForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          required 
          type="email" 
          name="email"
          placeholder="Enter email" 
          value ={values.email}
          onChange={handlechange}
          onBlur={handlechange} 
          />
        <Form.Text className="text-muted">
        </Form.Text>
        {formErrors.name && (
                    <p className="text-warning">{formErrors.name}</p>
                  )}
      </Form.Group>

      {/* Input for user message */}
      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          name="message"
          placeholder="Write your message here"
          value={values.message}
          onChange={handlechange}
          onBlur={handlechange} 
          />
        {formErrors.name && (
                    <p className="text-warning">{formErrors.name}</p>
                  )}
      </Form.Group>

      <Button type="submit" variant='primary' >Submit form</Button>
      
    </Form>
    
    
    
    </div>
  )
}
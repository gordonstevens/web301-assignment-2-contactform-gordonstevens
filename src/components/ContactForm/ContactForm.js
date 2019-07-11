// Import React
import React, { useState } from 'react';

// Import Components
import Form from "./Form/Form";
import Modal from "./Modal/Modal";
import Card from '../Card/Card';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import Button from '../Button/Button';

// Import CSS
import styles from './ContactForm.module.css';

const ContactForm = () => {

   // Contact Form state managed here so value isn't sent from child to parent.
   const [contactName, setContactName] = useState();
   const [contactEmail, setContactEmail] = useState();
   const [contactTopic, setContactTopic] = useState();
   const [contactMessage, setContactMessage] = useState();

   // Select "Topics" options
   const contactTopicsList = ["Greetings", "Business Deal", "Catnip", "Other"];

   // Control modal state
   const [showModal, setShowModal] = useState(false);

   return (
      <React.Fragment>
         { /* Show Modal */}
         { showModal && (
            <Modal>
               <h3>Your Message</h3>
               <p>Name: {contactName}</p>
               <p>E-mail: {contactEmail}</p>
               <p>Topic: {contactTopic}</p>
               <p>Content: {contactMessage}</p>
               <Button handleClick={() => setShowModal(false)}>
                  Close this window
               </Button>
            </Modal>
         )}
         { /* Show JSX */}
         <Form>
            <Card>
               <h2>Contact Form</h2>
               {  /*
                  REF: Short-formed what is in the document https://reactjs.org/docs/forms.html to use an arrow function for berevity.
                  I also thought this was good https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b.
                  The React forms document also has information on Select/Option, but ultimately went with my own thing.
                  */  }
               <Input
                  name="contactName"
                  label="Name: "
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
               />
               <Input
                  name="contactEmail"
                  label="E-mail: "
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
               />
               <Select
                  name="contactTopic"
                  label="Topic: "
                  options={contactTopicsList}
                  value={contactTopic}
                  onChange={(e) => setContactTopic(e.target.value)}
               />
               <Textarea
                  name="contactMessage"
                  label="Content: "
                  cols="38"
                  rows="12"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
               />
               <Button handleClick={() => setShowModal(true)}>
                  Submit
               </Button>
            </Card>
         </Form>
      </React.Fragment>
   );
};

export default ContactForm;

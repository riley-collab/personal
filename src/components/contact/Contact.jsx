import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const form = useRef()

  const handleButtonClick = () => {
    setIsAlertVisible(true);
    console.log("test")

    setTimeout(() => {
      setIsAlertVisible(false)
    }, 3000)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9597wer', 'template_998l242', form.current, 'ctvZIdviF_YtQQj83')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        handleButtonClick()

      }, function (error) {
        console.log('FAILED...', error);

      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>riley.morris@mail.utoronto.ca</h5>
            <a href="mailto:riley.morris@mail.utoronto.ca" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Riley Morris</h5>
            <a href="https://m.me/riley.morris.92/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Riley Morris</h5>
            <a href="https://api.whatsapp.com/send?phone=6474690777" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message

          </button>
          {isAlertVisible && <div className='alert-container'>
            <div className='btn btn-primary'>Message Sent!</div>
          </div>}
        </form>

      </div>
    </section>
  )
}

export default Contact

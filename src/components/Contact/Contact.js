import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_PUBLIC_API)
      .then((result) => {
        alert("The form has been sent successfully")
      }, (error) => {
        alert(error.text);
      });
      
  }

  return (
    <div class="contact">
      <div class="contact__header">
        <h3 class="contact__header__text">Get in touch</h3>
      </div>
      <hr class="contact__divider" />
      <div class="contact__main">
        <div class="contact__main__form">
          <h3 class="contact__form__title"><i class="fa-solid fa-users"></i> Fill our contact form</h3>
          <hr class="contact__form__divider" />
          <form ref={form} class="contact__form__form" onSubmit={sendEmail} >
            <label class="contact__form__form__element"><i class="fa-solid fa-user"></i>Name: <input type="text" name="name" id="name" className='contact__input' required/></label>
            <label class="contact__form__form__element"><i class="fa-solid fa-at"></i>Email: <input type="email" name="mail" id="mail" className='contact__input' required/></label>
            <label class="contact__form__form__element"><i class="fa-solid fa-phone"></i>Phone: <input type="tel" name="phone" id="phone" className='contact__input' required/></label>
            <label class="contact__form__form__element"><i class="fa-solid fa-futbol"></i>Position:
              <select name="position" id="position" className='contact__input' required>
                <option value="" disabled selected>Pick a position</option>
                <option value="Goalie">Goalie</option>
                <option value="Defender">Defender</option>
                <option value="Midfield">Midfield</option>
                <option value="Fordward/Winger">Fordward/Winger</option>
              </select>
            </label>
            <label class="contact__form__form__element"><i class="fa-solid fa-person"></i>Age: <input min={14} type="number" name="age" id="age" className='contact__input' required/></label>

            <label class="contact__form__form__element"><i class="fa-solid fa-school"></i>Degree, gap year or Semester abroad?<select name="select__input" id="select__input" className='contact__input' required>
              <option value="" disabled selected>Choose an option</option>
              <option value="Undergraduate degree">Undergraduate degree</option>
              <option value="Masters degree">Masters degree</option>
              <option value="Gap year">Gap year</option>
              <option value="Semester abroad">Semester abroad</option>
              <option value="Undecided">Undecided</option>
            </select></label>
            <label class="contact__form__form__element"><i class="fa-solid fa-people-group"></i>Previous Club<input type="text" name="prev_club" id="prev_club" className='contact__input' /></label>
            <div class="contact__form__form__--submit"><input id="submit" class="contact__submit" type="submit" value="Submit"/></div>
          </form>
        </div>
        <div class="contact__main__image"></div>
      </div>

    </div>

  );
}

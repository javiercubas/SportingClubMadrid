import './Contact.css'

export default function Contact() {
    return (
      <div class="contact">
        <div class="contact__header">
          <h3 class="contact__header__text">Get in touch</h3>
        </div>
        <hr class="contact__divider"/>
          <div class="contact__main">
            <div class="contact__main__form">
              <h3 class="contact__form__title">Fill our contact form</h3>
              <hr class="contact__form__divider"/>
              <form action="" class="contact__form__form" >
                <label class="contact__form__form__element">Name: <input type="text" name="name" id="name"/></label>
                <label class="contact__form__form__element">Email: <input type="email" name="mail" id="mail"/></label>
                <label class="contact__form__form__element">Phone: <input type="number" name="name" id="name"/></label>
                <label class="contact__form__form__element">Position: 
                <select name="" id="">
                  <option value="">Pick a position</option>
                  <option value="1">Goalie</option>
                  <option value="2">Defender</option>
                  <option value="3">Midfield</option>
                  <option value="4">Fordward/Winger</option>
                </select>
                </label>
                <label class="contact__form__form__element">Age: <input min={14} type="number" name="age" id="age"/></label>
                
                <label class="contact__form__form__element">Degree, gap year or Semester abroad?</label>
                <label class="contact__form__form__element"><select name="" id="">
                  <option value="">Choose an option</option>
                  <option value="1">Undergraduate degree</option>
                  <option value="2">Masters degree</option>
                  <option value="3">Gap year</option>
                  <option value="4">Semester abroad</option>
                  <option value="5">Undecided</option>
                </select></label>
                <label class="contact__form__form__element">Previous Club<input type="text" name="prev_club" id="prev_club"/></label>
                <input class="contact__form__form__element" type="submit" value="Submit"/>
              </form>
            </div>
            <div class="contact__main__image"></div>
          </div>
          
      </div>
      
    );
  }
  
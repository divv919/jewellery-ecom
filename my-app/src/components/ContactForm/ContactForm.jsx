import "./contactform.css"

function ContactForm({closeFunc,isPopped}){
  
  function handleSubmit(e){
    e.preventDefault();
    closeFunc();
    alert("form submitted successfully");
  }

        return( 
          <div>
          <div className="black-bg"
          style={{visibility:isPopped?"visible":"hidden",
            opacity:isPopped?"1":"0",
           transition: "all 0.3s ease"}}> 
          
              <div className="popup">
          
              <div className="closeButton" 
              onClick={closeFunc}>
              X
              </div>
              <h1>Contact Us</h1>
              <form id="contactPopupForm" onSubmit={handleSubmit}>
                  <label htmlFor="name">Enter Name</label>
                  <input type="text" id="name" name="name" placeholder="Divyansh S."></input>
                  <label htmlFor="phoneNumber">Enter Phone-number</label>
                  <input type="text" id="phoneNumber" name="phoneNumber"></input>
                  <label htmlFor="message">Enter your message</label>
                  <textarea rows="5" cols="5"></textarea>
                  <input className="submitButton" type="submit" value="Submit"></input>
              </form>
              </div>
              </div>
            </div> 
        )
}

export default ContactForm;

 
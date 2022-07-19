import React,{useState} from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import '../assets/css/Contact.css';

function Contact() {

  const [formdata, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleOnChange = (e)=>{
    setFormData({...formdata, [e.target.name]:e.target.value});
  }

  const SERVICE_ID = 'service_0p1evmj';
  const TEMPLATE_ID = 'template_odgf7mv';
  const USER_ID = 'o34VixIkgwPV9PawP';

  // handle the form
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formdata, USER_ID).then(
      (response)=>{
        console.log("success",response.status, response.text);
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully.'
        });
      },
      (error)=>{
        console.log("error", error);
        Swal.fire({
          icon: 'error',
          title: 'Ooops. something went wrong',
          text: error
        });
      }
    )
  }

  return (
    <div className='kss-contact-wrapper container'>
      <form className='container' onSubmit={(e)=>handleOnSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name :</label>
          <input type="text" className="form-control" id="name" name='from_name' required onChange={(e)=>handleOnChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email"  name='from_email' required onChange={(e)=>handleOnChange(e)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message :</label>
          <textarea className="form-control" id="message" rows='5'  name='message' required onChange={(e)=>handleOnChange(e)}>
          </textarea>
        </div>
        <div className="mb-3">
          <button className='btn btn-success'>
            <i className='fas fa-paper-plane'></i> Send
          </button>
        </div>

      </form>
    </div>
  )
}


export default Contact;
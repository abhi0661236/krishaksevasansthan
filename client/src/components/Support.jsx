import React from 'react';
import '../assets/css/Support.css';

const Support = () => {
  return (
    <section className='kss-support-wrapper'>
      <div className='container'>
        <form>
          <h5 className='text-center my-4'>DONATE FOR POOR FARMERS</h5>
          <div className="form-group mb-3">
            <label htmlFor="name">Full Name:</label>
            <input className='form-control' type="text" id="name" name='donater_name' />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address:</label>
            <input className='form-control' type="email" id="email" name='donater_email' />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Mobile Number:</label>
            <input className='form-control' type="tel" id="phone" name='donater_mobile' />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">Address:</label>
            <input className='form-control' type="text" id="address" name='donater_address' />
          </div>
          <div className="form-radio mb-3">
            <label htmlFor="payment-options">Visibility:</label>
            <div>
              <input className='mx-3' type="radio" name="payment-options" id="payment-options" value='public' />Public
              <input className='mx-3' type="radio" name="payment-options" id="payment-options" value='private' />Private (Gupt Daan)
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="amount">Donation-amount:</label>
            <input className='form-control' type="number" id="amount" name='donation-amount' placeholder='10' />
          </div>
          <hr />
          <div className="form-footer mb-3">
            <label htmlFor="reciept">
              <input type="checkbox" name="reciept" id="reciept" />
              &nbsp;&nbsp;I want a donation reciept
            </label>
            <button className='btn btn-primary'>PROCEED FOR PAYMENT</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Support
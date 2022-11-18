
import React from "react";
import emailjs from "@emailjs/browser";

import { useEffect, useState } from "react"
import InputField from "./inputField"
import SelectField from "./selectField";
import TextareaField from "./textAreaField";
import { ChevronRightIcon } from '@heroicons/react/solid'

const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_1', 'template_1', values, '_gAiHI_GXsD7z3hSC')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.6741053601!2d-79.5428662469946!3d43.718122802995616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1668112332998!5m2!1sen!2sca"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Toronto, Ontario, Canada
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                stefan.davis@mail.utoronto.ca
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">647-268-7958</p>
            </div>
          </div>
        </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Interested in scheduling a chat? Kindly send me an email! 
            I will respond within 24 hours!
          </p>
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold"></h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <SelectField handleChange={handleChange} name="role" label="Role" />
        <TextareaField value={values.message} handleChange={handleChange} label="Your message here" name="message" />
        <button type="submit"
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
        >Send <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
    </div>
    </div>
  </section>
  )
}
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Success!</p>
  </div>
)

export default Contact

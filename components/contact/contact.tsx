'use client';
import bgImage from '@public/assets/images/zimindo_plaza.jpeg';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import React, { useState, ChangeEvent, FormEvent } from 'react'; // Import useState hook and types
import { useDebouncedCallback } from 'use-debounce';
import { postFormData } from '@app/utils/utils';
import ErrorBoundary from '@app/utils/error';


interface FormData {
  name: string;
  whatsapp_number: string;
  email: string;
  message: string;
}


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp_number: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false); // State to manage success notification
   // Function to update form data on input change
   const handleInputChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    //console.log('name of input:', id ,'value:', value)
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  },400)

 
   // Function to handle form submission
   const contactUS = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform actions such as sending form data to a server
    try {
      // Post form data to the API endpoint
      await postFormData(formData);

    // Reset form after submission if needed
    setFormData({
      name: '',
      whatsapp_number: '',
      email: '',
      message: ''
    });
    // Show success notification
    setShowSuccess(true);

    // Hide success notification after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  } catch (error) {
    // Handle errors
    console.error('Failed to submit form:', error);
    // Optionally, display an error message to the user
  }
  };
  return (
    <ErrorBoundary>
    {/* <div className="grid-cols-4 sm:grid md:grid-cols-2 "> */}
    <div className="grid-cols-4 sm:grid-cols-2 2xl:grid-cols-3 grid-rows-auto gap-4 py-[10px] w-[60%] mx-auto">
    {showSuccess && (
          <div className="bg-green-500 text-white p-3 rounded-md">
            Your message has been submitted successfully!
          </div>
        )}
      <div className="mx-3 mt-2 flex flex-col self-start rounded-lg bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <div className="p-6">
          <section className="mb-4">
            <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat ">
              <Image 
                alt='background-contact' 
                src='/public/assets/images/zimindo_plaza.jpeg' 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority 
              />
            </div>
            <div className="px-6 md:px-12">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                <div className="mb-10 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="mx-auto mb-12 text-center lg:mb-0 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <h6 className="font-medium">Zambia</h6>
                  </div>
                  <div className="mx-auto mb-12 text-center lg:mb-0 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h6 className="font-medium">Lusaka</h6>
                  </div>
                  <div className="mx-auto mb-6 text-center md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <h6 className="font-medium">(+260)979997008</h6>
                  </div>
                  <div className="mx-auto mb-6 text-center md:mb-0">
                    <FaWhatsapp size={45} className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"/>
                    <h6 className="font-medium">(+260)974220000</h6>
                  </div>
                </div>
                <div className="mx-auto max-w-[700px]">
                  <form  onSubmit={contactUS}>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input 
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="name" 
                        defaultValue={formData.name} 
                        onChange={handleInputChange}
                        placeholder="Name" />
                      <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                        formData.name ? 'hidden' : '' // Hide placeholder if input has value
                      }`}
                        // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Name
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input 
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="whatsapp_number"
                        defaultValue={formData.whatsapp_number}
                        onChange={handleInputChange} 
                        placeholder="WhatsApp Number" />
                      <label
                        className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                          formData.whatsapp_number ? 'hidden' : '' // Hide placeholder if input has value
                        }`}
                        // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >WhatsApp Number
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input 
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="email"
                        defaultValue={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="Email address" />
                      <label
                        className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                          formData.email ? 'hidden' : '' // Hide placeholder if input has value
                        }`}
                        //className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Email address
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="message"
                        defaultValue={formData.message}
                        onChange={handleInputChange} 
                        placeholder="Your message"></textarea>
                      <label 
                        className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                          formData.message ? 'hidden' : '' // Hide placeholder if input has value
                        }`}
                       //className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                       >Message</label>
                    </div>                    
                    <button className="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded" type='submit' >Button</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default ContactForm;

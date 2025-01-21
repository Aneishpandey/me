'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

const InquirySection = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="inquiry-container">
      <form onSubmit={handleSubmit(onSubmit)} className="inquiry-form-box">
        {/* Header */}
        <h2 className="inquiry-header">Medicorp Treatment Form</h2>

        {/* Patient Details */}
        <div className="inquiry-section">
          <h3 className="inquiry-section-header">Patient Details</h3>
          <div className="inquiry-row">
            {/* Full Name */}
            <div className="inquiry-field">
              <label>Full Name</label>
              <input {...register('fullName')} className="inquiry-textarea w-full" placeholder="Enter full name" />
            </div>
            {/* Age */}
            <div className="inquiry-field">
              <label>Age</label>
              <input {...register('age')} className="inquiry-textarea" placeholder="Enter age" />
            </div>
            {/* Gender */}
            <div className="inquiry-field">
              <label>Gender</label>
              <div className="inquiry-checkboxes">
                <label>
                  <input {...register('gender')} type="radio" value="male" /> Male
                </label>
                <label>
                  <input {...register('gender')} type="radio" value="female" /> Female
                </label>
                <label>
                  <input {...register('gender')} type="radio" value="other" /> Other
                </label>
              </div>
            </div>
          </div>
          {/* Email, Phone, Address */}



          <div className="inquiry-row">
          <div className="inquiry-field">
            <label>Email Address</label>
            <input {...register('email')} className="inquiry-textarea w-full" placeholder="Enter email address" />
          </div>
          <div className="inquiry-field">
            <label>Phone Number</label>
            <input {...register('phone')} className="inquiry-textarea w-full" placeholder="Enter phone number" />
          </div>
          <div className="inquiry-field">
            <label>Address</label>
            <input {...register('address')} className="inquiry-textarea w-full" placeholder="Enter address" />
          </div>
        </div>
        </div>

        {/* Referral Information */}
        <div className="inquiry-section">
          <h3 className="inquiry-section-header">Referral Information</h3>
          <div className="inquiry-field">
            <label>How did you hear about us?</label>
            <div className="inquiry-checkboxes">
              <label>
                <input {...register('referral')} type="checkbox" value="website" /> Website
              </label>
              <label>
                <input {...register('referral')} type="checkbox" value="socialmedia" /> Social Media
              </label>
              <label>
                <input {...register('referral')} type="checkbox" value="friends/family" /> Friends/Family
              </label>
              <label>
                <input {...register('referral')} type="checkbox" value="doctorreferral" /> Doctor Referral
              </label>
              <label>
                <input {...register('referral')} type="checkbox" value="others" /> Others
              </label>
            </div >
            <textarea {...register('otherReferral')} className="inquiry-textarea w-1/2" placeholder="Please specify (if others)" />
          </div>
        </div>

        {/* Medical History */}
        <div className="inquiry-section">
          <h3 className="inquiry-section-header">Medical History</h3>
          <div className="inquiry-field">
            <label>Description</label>
            <textarea {...register('medicalHistory')} className="inquiry-textarea w-full" placeholder="Enter description" />
          </div>
        </div>

        {/* Primary Reasons for Inquiry */}
        <div className="inquiry-section">
          <h3 className="inquiry-section-header">Primary Reasons for Inquiry : (Please describe your symptoms or conditions) </h3>
          
          <div className="inquiry-field inquiry-row">
            <label>Do you have any existing medical conditions?</label>
            <div className="inquiry-checkboxes w-full">
              <label>
                <input {...register('existingCondition')} type="radio" value="yes" /> Yes
              </label>
              <label>
                <input {...register('existingCondition')} type="radio" value="no" /> No
              </label>
            </div>
          </div>
          <div className="inquiry-field inquiry-row w-full">
            <label>if yes please specify</label>
            <textarea {...register('primaryReason')} className="inquiry-textarea w-full" placeholder="Enter symptoms or conditions" />
          </div>
        





        <div className="inquiry-field inquiry-row">
            <label>have you had any surgeries or major injuries?</label>
            <div className="inquiry-checkboxes">
              <label>
                <input {...register('existingCondition')} type="radio" value="yes"  /> Yes
              </label>
              <label>
                <input {...register('existingCondition')} type="radio" value="no"  /> No
              </label>
            </div>
          </div>
          <div className="inquiry-field inquiry-row">
            <label>if yes please specify</label>
            <textarea {...register('primaryReason')} className=" w-full inquiry-textarea w-1/3" placeholder="Enter about surgery or injury" />
          </div>
        



        <div className="inquiry-field inquiry-row">
            <label>Are you currently taking any medications?</label>
            <div className="inquiry-checkboxes">
              <label>
                <input {...register('existingCondition')} type="radio" value="yes" /> Yes
              </label>
              <label>
                <input {...register('existingCondition')} type="radio" value="no" /> No
              </label>
            </div>
          </div>
          <div className="inquiry-field inquiry-row">
            <label>if yes please specify</label>
            <textarea {...register('primaryReason')} className="inquiry-textarea w-full" placeholder="Enter about Medications" />
          </div>




          <div className="inquiry-section ">
          <h3 className="inquiry-section-header mt-8 mb-20">Previous Treatment</h3>
           
           <div className="inquiry-field">
            <label >Have you tried any of the following treatments before</label>


            <div className="inquiry-checkboxes inquiry-row">


            <label>
                <input {...register('treatment')} type="checkbox" value="Phsiotherapy" /> Phsiotherapy
              </label>
              <label>
                <input {...register('treatment')} type="checkbox" value="Chiropractic" /> Chiropractic
              </label>
              <label>
                <input {...register('treatment')} type="checkbox" value="Acupunture" /> Acupunture
              </label>
              <label>
                <input {...register('treatment')} type="checkbox" value="Message Therapy" /> Massage therapy
              </label>
              <label>
                <input {...register('treatment')} type="checkbox" value="Osteopathy" /> Osteopathy
              </label>
              <label>
                <input {...register('treatment')} type="checkbox" value="Other" /> Other (please specify)
              </label>

            </div>

            
           </div>
          
        </div>



        <div className="inquiry-field ">
            <label>if yes what were the results</label>
            <textarea {...register('primaryReason')} className="inquiry-textarea w-full" placeholder="Enter what previous treatment you have done" />
          </div>



          <div className="inquiry-section">
            <h3 className="inquiry-section-header mt-8 mb-20">Pain and discomfort</h3>

            <div className="inquiry-field">
                <label >where do you experience pain and discomfort ? (Mark all that apply) </label>

                <div className="inquiry-checkboxes inquiry-row">

                <label>
                <input {...register('pain')} type="checkbox" value="Neck" /> Neck
              </label>
              <label>
                <input {...register('pain')} type="checkbox" value="shoulder" /> Shoulder
              </label>
              <label>
                <input {...register('pain')} type="checkbox" value="Back" /> Back
              </label>
              <label>
                <input {...register('pain')} type="checkbox" value="hip" /> Hip
              </label>
              <label>
                <input {...register('pain')} type="checkbox" value="knees" /> Knees
              </label>
              <label>
                 Other (please specify)
                <textarea {...register('pain')} className="inquiry-textarea w-full" placeholder="pain" />
              </label>

                </div>


                <label>Rate your pain level(0=No pain , 10=worst pain)</label>

                <div className="inquiry-checkboxes inquiry-row">


                <label>
                <input {...register('rate')} type="radio" value="" />0 
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />1
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />2 
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />3
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />4
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />5
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />6
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />7
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />8
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />9
              </label>
              <label>
                <input {...register('rate')} type="radio" value="" />10
              </label>
              

                </div>

            </div>
          </div>


          <div className="inquiry-section">
            <h3 className="inquiry-section-header mt-8 mb-20">LifeStyles and Preferences</h3>

            <div className="inquiry-field">
                <div className="check-boxes inquiry-row">
                    <label>do you exercise regularly</label>
                    <label>
                <input {...register('lifestyles')} type="radio" value="yes" /> Yes
              </label>
              <label>
                <input {...register('lifestyles')} type="radio" value="no" /> No
              </label>
                </div>
                <p className=''>what is your occupation
                <input {...register('occupation')} className="inquiry-textarea ml-20" placeholder="occupation" />
                </p>

                <p className=''>Preffered time for appointment
                <input {...register('time')} className="inquiry-textarea ml-10 mt-4" placeholder="appointment time" />
                </p>


            </div>
          </div>

        </div>




    


        

        {/* Submit Button */}
        <button type="submit" className="inquiry-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default InquirySection;
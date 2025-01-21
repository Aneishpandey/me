'use client';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar } from 'lucide-react';

interface AvailabilityDay {
  day: string;
  slots: number;
}

const MeetDoctorPage = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [availabilityData, setAvailabilityData] = useState<AvailabilityDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock API call to simulate availability data
  useEffect(() => {
    const fetchMockAvailability = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data
        const mockData: AvailabilityDay[] = [
          { day: 'Today', slots: 3 },
          { day: 'Tomorrow', slots: 0 },
        ];

        setAvailabilityData(mockData);
        setError(null);
      } catch {
        setError('Failed to load availability data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMockAvailability();
  }, []);

  return (
   
    <div className="doctor-page-container">
      {/* Left Section */}
    
      <div className="doctor-profile-left ">
        <div className="profile-card-container">
          <div className="profile-banner"></div>

          {/* Doctor Logo */}
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              <div className="avatar-image"></div>
            </div>
          </div>

          {/* Horizontal Boxes */}
          <div className="horizontal-boxes">
            <div className="horizontal-box">
              <Phone className="box-icon" />
              <span>Call for Appointment</span>
            </div>
            <div className="horizontal-box">
              <Calendar className="box-icon" />
              <span>Send an Inquiry</span>
            </div>
          </div>

          {/* Book Appointment Button */}
          <Link href="/inquiryform"> {/* Add Link to navigate to the booking page */}
            <button className="hero-button text-center w-1/2 justify-center m-4 p-1">Book an Appointment</button>
          </Link>

          {/* Availability Section */}
          <div className="availability-container">
            {isLoading ? (
              <div className="availability-loading">Loading availability...</div>
            ) : (
              <div className="availability-content">
                {availabilityData.map((day, idx) => (
                  <div key={idx} className="availability-slot-horizontal">
                    <span className="slot-day">{day.day}</span>
                    <span className="slot-count">
                      {day.slots === 0 ? 'No slots' : `${day.slots} slots`}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="additional-info ">
            
            <img className="info-image flex flex-col" src="/placeholder-image.jpg" alt="No slots" />
            
            <p>No slots available for today.</p>
           
            <button className="secondary-button">Kindly check other dates for availability</button>
            <button className="secondary-button">Call Now</button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="doctor-profile-right">
        <div className="profile-content">
          <h1 className="doctor-name">Dr. John Smith</h1>
          <div className="profile-section">
            <p className="section-content">
              Dr. John Smith is a highly experienced physician with over 15 years of practice
              in internal medicine. His dedication to patient care and comprehensive approach
              to healthcare has earned him recognition among peers and patients alike.
            </p>

            <h2 className="section-title">Education & Training</h2>
            <p className="section-content">
              After completing his medical degree from Harvard Medical School, Dr. Smith
              pursued his residency at Mayo Clinic, where he specialized in internal medicine.
              His continued commitment to medical education keeps him at the forefront of
              modern healthcare practices.
            </p>
          </div>
    
      </div>

      </div>


      </div>

      

      
      
    
          );
};

export default MeetDoctorPage;

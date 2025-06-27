import React, { useState } from "react";
import Arnikologo from "./assets/Arniko.jpeg";

const Admission = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    studentClass: "",
    country: "Nepal",
    province: "",
    district: "",
    fatherName: "",
    motherName: "",
    parentContact: "",
  });

  // Handle input/select changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // add validation here before sending data

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Form submitted successfully! ID: " + data.id);
        // Clear form if needed
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
          phone: "",
          studentClass: "",
          country: "Nepal",
          province: "",
          district: "",
          fatherName: "",
          motherName: "",
          parentContact: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-6xl mx-auto bg-slate-100 rounded shadow-xl">
      {/* Header */}
      <div className="bg-slate-50 p-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <img src={Arnikologo} alt="Arniko logo" className="h-28 w-28 lg:h-36 lg:w-36 rounded-full object-cover" />
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-black">Araniko Aawasiya Higher Secondary School</h2>
            <p className="text-sm text-gray-700">Tintaliya, Biratnagar, Nepal</p>
            <p className="text-sm text-gray-700">021-470149 | arniko@arnikofoundation.edu.np</p>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <h2 className="text-lg pl-6 mt-6 font-semibold">Personal Details*</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div>
          <label className="block mb-1 font-medium">First Name*</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last Name*</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Date of Birth*</label>
          <input
            name="dob"
            type="text"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="MM/DD/YYYY"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Gender*</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone No.*</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Phone number"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Class*</label>
          <select
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            required
          >
            <option value="">Select</option>
            <option value="Nursery">Nursery</option>
            <option value="KG">KG</option>
            <option value="1-10">1-10</option>
            <option value="+2">+2</option>
          </select>
        </div>
      </div>

      {/* Permanent Address */}
      <h2 className="text-lg pl-6 mt-6 font-semibold">Permanent Address*</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {/* Country */}
        <div>
          <label className="block mb-1 font-medium">Country*</label>
          <input
            name="country"
            list="country-list"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Type or select a country"
            required
          />
          <datalist id="country-list">
            <option value="Nepal" />
            <option value="India" />
            <option value="Other" />
          </datalist>
        </div>

        {/* Province */}
        <div>
          <label className="block mb-1 font-medium">Province*</label>
          <input
            name="province"
            list="province-list"
            value={formData.province}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Type or select a province"
            required
          />
          <datalist id="province-list">
            <option value="Koshi" />
            <option value="Bagmati" />
            <option value="Gandaki" />
            <option value="Lumbini" />
            <option value="Karnali" />
            <option value="Sudurpashchim" />
          </datalist>
        </div>

        {/* District */}
        <div>
          <label className="block mb-1 font-medium">District*</label>
          <input
            name="district"
            list="district-list"
            value={formData.district}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Type or select a district"
            required
          />
          <datalist id="district-list">
            <option value="Morang" />
            <option value="Jhapa" />
            <option value="Kathmandu" />
          </datalist>
        </div>
      </div>

      {/* Parent Details */}
      <h2 className="text-lg pl-6 mt-6 font-semibold">Parent Names*</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div>
          <label className="block mb-1 font-medium">Father's Full Name*</label>
          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Father's full name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mother's Full Name*</label>
          <input
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Mother's full name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contact Number*</label>
          <input
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-md"
            placeholder="Contact number"
            required
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 p-6 pt-0">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-700"
          onClick={() =>
            setFormData({
              firstName: "",
              lastName: "",
              dob: "",
              gender: "",
              phone: "",
              studentClass: "",
              country: "Nepal",
              province: "",
              district: "",
              fatherName: "",
              motherName: "",
              parentContact: "",
            })
          }
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Admission;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import organizationData from "./data/organizations.json"; // ✅ Update path if needed
import addressData from "./data/address.json"; // ✅ Update path if needed
import Select from "react-select";

const Admission = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const rawQuery = location.search.replace("?", "");
    const appName = decodeURIComponent(rawQuery || "");

    const org = organizationData.find(
        (o) => o.AppName.toLowerCase() === appName.toLowerCase()
    );


    const [formData, setFormData] = useState({
        "studentId": 0,
        "saveDate": "",
        "formNo": "",
        "symbolNo": "",
        "classId": 0, //need to asing
        "firstName": "",  //need to asing
        "lastName": "",  //need to asing
        "fFirstName": "",  //need to asing
        "fLastName": "",   //need to asing
        "dob": "", // //need to asing
        "gender": 0,   //need to asing 1-male 2 female 3 other
        "contactNo": "",  //need to asing
        "zoneId": 0,  //need to asing
        "districtId": 0,  //need to asing
        "vdcId": 0,  //need to asing
        "address": "",   //passed school 
        "institutionId": 0,
        "totalMarks": 0.0,
        "percentage": 0.0,
        "gpa": 0.0,  //need to asing
        "amount": 0,
        "intimationId": 0,
        "invoiceId": 0,
        "isAdmitted": false,
        "aStudentId": 0,
        "admDate": null,
        "aYearId": 0, //need to asing. value
        "institution": {
            "iId": 0,
            "name": null,
            "address": null,
            "principalName": null,
            "pBoxNo": null,
            "pPhoneNo": null,
            "pPhone1": null,
            "email": null,
            "tenantId": null,//on form initialize 
            "yearId": 0,
            "officeId": 0,
            "countryId": 0,
            "createdDateTime": "0001-01-01T00:00:00",
            "lastUpdatedDateTime": "0001-01-01T00:00:00",
            "createdBy": 0,
            "lastUpdatedBy": 0,
            "createdByDisplayName": null,
            "lastUpdatedByDisplayName": null
        },
        "docUrl": null,
        "photo": null,
        "className": "",
        "year": 0,
        "zoneName": "",
        "districtName": "",
        "vdcName": "",
        "institutionName": null,
        "duesFromPreviousInstitution": null,
        "tenantId": "",
        "yearId": 0,  //need to asing
        "officeId": 1,
        "countryId": 0,
        "createdDateTime": "0001-01-01T00:00:00",
        "lastUpdatedDateTime": "0001-01-01T00:00:00",
        "createdBy": 0,
        "lastUpdatedBy": 0,
        "createdByDisplayName": null,
        "lastUpdatedByDisplayName": null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            tenantId: org?.OrgnID || null, // ✅ Send Org ID
        };

        try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                const response = await fetch("https://apineapes.com/scomsinfo/api/1/Entrance/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            console.log(response);
            if (response.ok) {
                const data = await response.json();

                // Navigate to Thank You page
                navigate("/thank-you", {
                    state: {
                        studentName: formData.firstName + " " + formData.lastName,
                        submissionNo: data.id, // or data.submissionNo if that’s your real field
                    },
                });




                
                // Reset form data after successful submission
                setFormData({
                    studentId: 0,
                    saveDate: "",
                    formNo: "",
                    symbolNo: "",
                    classId: 0,
                    firstName: "",
                    lastName: "",
                    fFirstName: "",
                    fLastName: "",
                    dob: "",
                    gender: 0,
                    contactNo: "",
                    zoneId: 0,
                    districtId: 0,
                    vdcId: 0,
                    address: "",
                    institutionId: 0,
                    totalMarks: 0.0,
                    percentage: 0.0,
                    gpa: 0.0,
                    amount: 0,
                    intimationId: 0,
                    invoiceId: 0,
                    isAdmitted: false,
                    aStudentId: 0,
                    admDate: null,
                    aYearId: 0,
                    institution: {
                        iId: 0,
                        name: null,
                        address: null,
                        principalName: null,
                        pBoxNo: null,
                        pPhoneNo: null,
                        pPhone1: null,
                        email: null,
                        tenantId: null,
                        yearId: 0,
                        officeId: 0,
                        countryId: 0,
                        createdDateTime: "0001-01-01T00:00:00",
                        lastUpdatedDateTime: "0001-01-01T00:00:00",
                        createdBy: 0,
                        lastUpdatedBy: 0,
                        createdByDisplayName: null,
                        lastUpdatedByDisplayName: null
                    },
                    docUrl: null,
                    photo: null,
                    className: "",
                    year: 0,
                    zoneName: "",
                    districtName: "",
                    vdcName: "",
                    institutionName: null,
                    duesFromPreviousInstitution: null,
                    tenantId: "",
                    yearId: 0,
                    officeId: 1,
                    countryId: 0,
                    createdDateTime: "0001-01-01T00:00:00",
                    lastUpdatedDateTime: "0001-01-01T00:00:00",
                    createdBy: 0,
                    lastUpdatedBy: 0,
                    createdByDisplayName: null,
                    lastUpdatedByDisplayName: null
                });

            } else {
                alert("Failed to submit form.");
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    if (!org) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-8 py-6 rounded shadow-lg text-center font-bold text-lg max-w-xl w-full">
                    ❌ Invalid or unauthorized access. Please use a valid admission link.
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-6xl mx-auto bg-slate-100 rounded shadow-xl">

            {/* Header */}
            <div className="bg-slate-50 p-4">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <img
                        src={org?.LogoUrl}
                        alt="School Logo"
                        className="h-28 w-28 lg:h-36 lg:w-36 rounded-full object-cover"
                    />
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-semibold text-black">
                            {org?.OrgnName || "Organization Name"}
                        </h2>
                        <p className="text-sm text-gray-700">Address: Tintaliya, Biratnagar, Nepal</p>
                        <p className="text-sm text-gray-700">Contact: 021-470149</p>
                        <p className="text-sm text-gray-700">Email: info@example.com</p>
                    </div>
                </div>
            </div>

            {/* Form Sections */}
            <h2 className="text-lg pl-6 mt-6 font-semibold">Personal Details*</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {[
                    { label: "First Name*", name: "firstName" },
                    { label: "Last Name*", name: "lastName" },
                    { label: "Date of Birth(BSDate)*", name: "dob", placeholder: "YYYY/MM/DD" },
                    { label: "Phone No.*", name: "phone" },
                ].map(({ label, name, placeholder }) => (
                    <div key={name}>
                        <label className="block mb-1 font-medium">{label}</label>
                        <input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full border p-2 rounded shadow-md"
                            placeholder={placeholder}
                            required
                        />
                    </div>
                ))}

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
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Class*</label>
                    <select
                        name="classId"
                        value={formData.classId}
                        onChange={handleChange}
                        className="w-full border p-2 rounded shadow-md"
                        required
                    >
                        <option value="15">ELEVEN</option>

                    </select>
                </div>
            </div>

            {/* Address */}


           <h2 className="text-lg pl-6 mt-6 font-semibold">Permanent Address*</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
  {/* Address */}
  <div>
    <label className="block mb-1 font-medium">Address*</label>
    <input
      name="address"
      list="address-list"               // datalist id must match here
      value={formData.address}          // use formData state, not addressData
      onChange={handleChange}
      className="w-full border p-2 rounded shadow-md"
      placeholder="Type or select an address"
      required
    />
    <datalist id="address-list">       {/* id must match input's list */}
      {addressData.map((item) => (
        <option key={item.FullLocationName} value={item.FullLocationName} />
      ))}
    </datalist>
  </div>
</div>




            {/* Parent Info */}
            <h2 className="text-lg pl-6 mt-6 font-semibold">Parent Names*</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {[
                    { label: "Father's Full Name*", name: "fatherName" },
                    { label: "Mother's Full Name*", name: "motherName" },
                    { label: "Contact Number*", name: "parentContact" },
                ].map(({ label, name }) => (
                    <div key={name}>
                        <label className="block mb-1 font-medium">{label}</label>
                        <input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="w-full border p-2 rounded shadow-md"
                            placeholder={label}
                            required
                        />
                    </div>
                ))}
            </div>
            {/* Actions */}
            <div className="flex justify-end gap-4 p-6 pt-0">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            "studentId": 0,
                            "saveDate": "",
                            "formNo": "",
                            "symbolNo": "",
                            "classId": 0, //need to asing
                            "firstName": "",  //need to asing
                            "lastName": "",  //need to asing
                            "fFirstName": "",  //need to asing
                            "fLastName": "",   //need to asing
                            "dob": "", // //need to asing
                            "gender": 0,   //need to asing 1-male 2 female 3 other
                            "contactNo": "",  //need to asing
                            "zoneId": 0,  //need to asing
                            "districtId": 0,  //need to asing
                            "vdcId": 0,  //need to asing
                            "address": "",   //passed school 
                            "institutionId": 0,
                            "totalMarks": 0.0,
                            "percentage": 0.0,
                            "gpa": 0.0,  //need to asing
                            "amount": 0,
                            "intimationId": 0,
                            "invoiceId": 0,
                            "isAdmitted": false,
                            "aStudentId": 0,
                            "admDate": null,
                            "aYearId": 0, //need to asing. value
                            "institution": {
                                "iId": 0,
                                "name": null,
                                "address": null,
                                "principalName": null,
                                "pBoxNo": null,
                                "pPhoneNo": null,
                                "pPhone1": null,
                                "email": null,
                                "tenantId": null,//on form initialize 
                                "yearId": 0,
                                "officeId": 0,
                                "countryId": 0,
                                "createdDateTime": "0001-01-01T00:00:00",
                                "lastUpdatedDateTime": "0001-01-01T00:00:00",
                                "createdBy": 0,
                                "lastUpdatedBy": 0,
                                "createdByDisplayName": null,
                                "lastUpdatedByDisplayName": null
                            },
                            "docUrl": null,
                            "photo": null,
                            "className": "",
                            "year": 0,
                            "zoneName": "",
                            "districtName": "",
                            "vdcName": "",
                            "institutionName": null,
                            "duesFromPreviousInstitution": null,
                            "tenantId": "",
                            "yearId": 0,  //need to asing
                            "officeId": 1,
                            "countryId": 0,
                            "createdDateTime": "0001-01-01T00:00:00",
                            "lastUpdatedDateTime": "0001-01-01T00:00:00",
                            "createdBy": 0,
                            "lastUpdatedBy": 0,
                            "createdByDisplayName": null,
                            "lastUpdatedByDisplayName": null
                        })
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-700"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default Admission;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { studentName, submissionNo } = location.state || {};

    if (!studentName) {
        navigate("/");
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-800 mb-2">
                Dear {studentName},
            </p>
            <p className="text-lg text-gray-600">
                Your application has been submitted successfully.
            </p>
            {submissionNo && (
                <p className="text-md text-gray-500 mt-2">Submission No: {submissionNo}</p>
            )}
            <button
                onClick={() => navigate("/")}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Back to Home
            </button>
        </div>
    );
};

export default ThankYou;

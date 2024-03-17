import React, { useState } from "react";
import { motion } from "framer-motion";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { db } from "../config.js";
import { collection, addDoc } from "firebase/firestore";
import { Resend } from "resend";
import { doc, updateDoc } from "firebase/firestore";
// this is from you export an initialize the app
import { getDocs } from "firebase/firestore";
const resend = new Resend("re_U8HFo8Cu_EEra5QNgzefncMDcmWBuv9XB");

export default function TypeformUI({ onSubmit, rid, setRid }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false); // New state variable
  const totalSteps = 5;

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  const incrementRid = () => {
    const prefix = rid.slice(0, rid.length - 1);
    const lastChar = rid[rid.length - 1];
    let nextRid;

    if (lastChar === "9") {
      const secondLastChar = prefix[prefix.length - 1];
      if (secondLastChar === "Z") {
        const newPrefix = prefix.slice(0, prefix.length - 1) + "A";
        nextRid = newPrefix + "0";
      } else {
        const newSecondLastChar = String.fromCharCode(secondLastChar.charCodeAt(0) + 1);
        nextRid = prefix.slice(0, prefix.length - 1) + newSecondLastChar + "0";
      }
    } else {
      nextRid = prefix + String.fromCharCode(lastChar.charCodeAt(0) + 1);
    }
    rid = nextRid;

    setRid(nextRid);
  };
  const updateReferralDocument = async (rid) => {
    try {
      const referralDocRef = doc(db, "referral", "1");

      await updateDoc(referralDocRef, { rid: rid });
    } catch (error) {
      //console.error("Error updating referral document:", error);
    }
  };
  const handleSubmit = async () => {
    if (validateCurrentStep()) {
      //console.log(JSON.stringify(formData, null, 2));
      try {
        incrementRid();
        const formDataWithRid = { ...formData, rid };
        //console.log(formDataWithRid);
        const docRef = await addDoc(collection(db, "users"), formDataWithRid);
        // console.log("Document written with ID: ", docRef.id);
        // console.log("this is ",rid);
        updateReferralDocument(rid);
        // Send email
        // const { email } = formData.email;
        // try {
        //     await resend.emails.send({
        //         from: "dilshandileep6@gmail.com",
        //         to: 'revandsunil5467@gmail.com',
        //         subject: "Test Mail",
        //         html: "Test mail <strong>content</strong>",
        //     });
        //     setSubmitted(true); // Update state to indicate form submission success
        // } catch (error) {
        //     console.error("Error sending email: ", error);
        // }

        setSubmitted(true);
        onSubmit();
      } catch (e) {
        //console.error("Error adding document: ", e);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.fullName.trim().length > 0;
      case 2:
        return /^\d{10}$/.test(formData.phoneNumber);
      case 3:
        return formData.college && formData.college.trim().length > 0;
      case 4:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 5:
        return formData.address && formData.address.trim().length > 0;
      default:
        return false;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && currentStep < totalSteps) {
      handleNext();
    }
  };

  const renderQuestion = () => {
    return (
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: currentStep > 1 ? 50 : -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {getCurrentQuestion()}
      </motion.div>
    );
  };

  const getCurrentQuestion = () => {
    switch (currentStep) {
      case 1:
        return (
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleInputChange}
            className="w-full p-5 text-black"
            onKeyDown={handleKeyDown}
          />
        );
      case 2:
        return (
          <input
            type="tel"
            placeholder="Enter your phone number (10 digits)"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            className="w-full p-5 text-black"
            onKeyDown={handleKeyDown}
          />
        );
      case 3:
        return (
          <input
            type="text"
            placeholder="Enter college name"
            name="college"
            value={formData.college || ""}
            onChange={handleInputChange}
            className="w-full p-5 text-black"
            onKeyDown={handleKeyDown}
          />
        );
      case 4:
        return (
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            className="w-full p-5 text-black"
            onKeyDown={handleKeyDown}
          />
        );
      case 5:
        return (
          <input
            type="text"
            placeholder="Enter your district"
            name="address"
            value={formData.address || ""}
            onChange={handleInputChange}
            className="w-full p-5 text-black"
            onKeyDown={currentStep < totalSteps ? handleKeyDown : null}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="-mt-20 flex h-screen items-center justify-center">
      <div className="flex h-[35%] max-h-[70%] w-full max-w-[60%] flex-col rounded-md bg-white p-4 shadow-md sm:h-[28%] md:h-[20%] lg:h-[26%]">
        <div className="mb-4">
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="h-2 rounded-full bg-blue-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="mb-4 text-center">
          <span className="text-black ">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        {submitted ? ( // Render "Congrats" if form submitted successfully
          <div className="text-green-500 mb-4 text-center font-bold">Congrats!</div>
        ) : (
          renderQuestion()
        )}
        <div className="mt-4 flex justify-between">
          <button
            type="button"
            className={`rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white ${
              currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            type="button"
            className={`rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white ${
              !validateCurrentStep() ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={currentStep === totalSteps ? handleSubmit : handleNext}
            disabled={!validateCurrentStep()}
          >
            {currentStep === totalSteps ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

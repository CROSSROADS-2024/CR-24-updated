'use client'

import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
// Assuming you have a separate file for Firebase configuration

import Form from './Form';
import { db } from '../config.js';

//commit
const Page = () => {
  const [rid, setRid] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmission = () => {
    setFormSubmitted(true);
  };
  useEffect(() => {
    const fetchRid = async () => {
      try {
        const referralDocRef = doc(db, 'referral', '1');
        const docSnapshot = await getDoc(referralDocRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setRid(data.rid);
         // console.log("Referral ID:", data.rid); // Console log the rid here
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
       // console.error("Error getting document:", error);
      }
    };

    fetchRid();
  }, []);

  return (
    <div className="mt-20  text-white">
      <h1 className="text-3xl font-bold text-center">Campus Ambassador</h1>
      {formSubmitted ? (
        <div>
           <h1 className="text-center text-2xl font-bold mt-5"> Your Referral ID is : {rid} !! </h1>
           <h1 className="text-center text-2xl font-bold mt-5"> Don&apos;t blink! Screenshot your referral before it disappears!</h1>
    
           {/* Don't blink! Screenshot your referral before it disappears! */}
        </div>
       
      ) : (
        <Form onSubmit={handleFormSubmission} rid={rid} setRid={setRid}/>
      )}
      
    </div>
  );
};

export default Page;
//;ljkjkl;
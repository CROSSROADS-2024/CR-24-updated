import { db } from "../config"; // this is from you export an initialize the app
import { collection, getDocs } from "firebase/firestore";



export const useGetDocuments = () => {

  const getDoc = async (path: string) => {

    const collectionRef = collection(db, "referral")
    const querySnapshot = await getDocs(collectionRef)
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  }

  return { getDoc }
}
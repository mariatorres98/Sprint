import { collection, getDocs } from "firebase/firestore"
import { dataBase } from "../../firebase/firebaseConfig"
import { localesTypes } from "../types/userTypes"

export const getLocalesAsync = () =>{
    return async(dispatch) =>{
        try {
            const response = await getDocs(collection(dataBase, "restaurantes"));
            const temporalLocales = []
            response.forEach(Element => {
                temporalLocales.push({id:Element.id,data:Element.data()})
            });
        
            dispatch(getLocalesSync(temporalLocales));
        } catch (error) {
            console.log(error);
        }
       
    }
}

const getLocalesSync = (restaurantes) =>{
    return{
        type:localesTypes.LOCALES_GET,
        payload:restaurantes
    }
}
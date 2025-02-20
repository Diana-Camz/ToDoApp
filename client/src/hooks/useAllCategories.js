import { useEffect, useState } from "react"
import { fetchCategories } from "../api/requests";

export const useAllCategories = () => {
    const [loadingAllCategories, setLoadingAllCategories] = useState(true);
    const [allCategories, setAllCategories] = useState([]);

    const getAllCategories = async () => {

        try {
            const data = await fetchCategories();
           if(data && data.length > 0){
               setAllCategories(data)
           }else{
            console.error('Categories not found')
           }
        } catch (error) {
            console.error("Error in getCategories function:");
        } finally {
            setLoadingAllCategories(false)
        }
    }

    useEffect(() => {
            getAllCategories();
    }, []);

    return {allCategories, loadingAllCategories}

}
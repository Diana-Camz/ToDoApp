import { useEffect, useState} from "react"
import { useAllCategories } from "./useAllCategories";


export const useCategoryForUser = (tasks) => {
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [categoriesForUser, setCategoriesForUser] = useState([]);
    const {allCategories} = useAllCategories();

    const getCategoriesForUser = () => {
        let categoryCount = {};
        setLoadingCategories(true)
        try {
            tasks.forEach((task) => {
                if(task.categories){ 
                    const categoriesArray = task.categories.split(" | ");
                    categoriesArray.forEach((cat) => {
                        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
                    })
                }
            });
           const categoryWithCountImage = Object.keys(categoryCount).map((catName) => {
            const categoryData = allCategories.find((category) => category.name === catName);
            return {
                category: catName,
                count: categoryCount[catName],
                image_url: categoryData ? categoryData.image_url : "default.png",
            };
           });
           setCategoriesForUser(categoryWithCountImage)
        } catch (error) {
            console.error("Error in getCategories function:", error);
        } finally {
            setLoadingCategories(false)
        }
    };

    useEffect(() => {
            getCategoriesForUser();
    }, [tasks]);

    return {categoriesForUser, loadingCategories}
}
import { useEffect, useState } from "react"
import { useTasks } from "./useTasks";
import { useAllCategories } from "./useAllCategories";


export const useCategoryForUser = (userId) => {
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [categoriesForUser, setCategoriesForUser] = useState([]);
    const {tasks, loadingTasks} = useTasks(userId);
    const {allCategories, loadingAllCategories} = useAllCategories();

    const getCategoriesForUser = () => {
        if(!tasks || tasks.length === 0){
            console.error("Tasks not found for user");
            return
        }
        let categoryCount = {};
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
    }

    useEffect(() => {
        if(!loadingTasks){
            getCategoriesForUser();
        }
    }, [tasks, loadingTasks, allCategories, loadingAllCategories]);

    return {categoriesForUser, loadingCategories}
}
import { useEffect, useState } from "react"
import { useTasks } from "./useTasks";


export const useCategory = () => {
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [categories, setCategories] = useState(null);
    const {tasks, loadingTasks} = useTasks(5);

    const getCategories = () => {
        if(!tasks || tasks.length === 0){
            console.error("Tasks not found")
            return
        }
        let categoryCount = {};
        try {
            tasks.forEach((task) => {
                if(Array.isArray(task.category)){ 
                    task.category.forEach((cat) => {
                        if(categoryCount[cat]){
                            categoryCount[cat] += 1;
                        }else{
                            categoryCount[cat] = 1;
                        }
                    })
                }
            });
           const categoryWithCount = Object.keys(categoryCount).map((cat) => ({
            category: cat,
            count: categoryCount[cat]
           }));
           setCategories(categoryWithCount)
        } catch (error) {
            console.error("Error in getCategories function:", error);
        } finally {
            setLoadingCategories(false)
        }
    }

    useEffect(() => {
        if(!loadingTasks && tasks.length > 0){
            getCategories();
        }
    }, [tasks, loadingTasks]);

    return {categories, loadingCategories}
}
import { View, Modal, FlatList, } from 'react-native'
import React, {useEffect} from 'react'
import CustomTitle from './CustomTitle';
import { colorsTheme } from '../styles/colorsTheme';
import { categoryModal } from '../styles/components/categoryModal';
import CustomButton from './CustomButton';
import { customButton } from '../styles/components/customButton';
import CustomIcon from './CustomIcon';
import SelectCategory from './SelectCategory';
import { selCategory } from '../styles/components/selCategory';
import { useAllCategories } from '../hooks/useAllCategories';


const CategoryModal = ({ modalVisible, setModalVisible, setCategoryText, selectedCategories, setSelectedCategories }) => {
    const {allCategories} = useAllCategories();

    useEffect(() => {
        if (modalVisible && selectedCategories.length > 0) {
          const selectedCategoryNames = allCategories
            .filter((category) => selectedCategories.includes(category.id))
            .map((category) => category.name);
    
          setCategoryText(selectedCategoryNames.join(' | '));
        }
      }, [modalVisible, allCategories, selectedCategories, setCategoryText]);
   
    const toggleCategory = (categoryId) => {
        setSelectedCategories(prevCategories =>
           prevCategories.includes(categoryId)
          ? prevCategories.filter(id => id !== categoryId)
          : [...prevCategories, categoryId]
        )
    }

    const handleDone = () => {
        const selectedCategoryNames = allCategories
            .filter((category) => selectedCategories.includes(category.id))
            .map((category) => category.name);
        setCategoryText(selectedCategoryNames.join(' | '));
        setModalVisible(false);
    }




  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={categoryModal.modalBackground}>
            <View style={categoryModal.modalContainer}>
                <View style={categoryModal.closeContainer}>
                    <CustomIcon
                        onPress={() => setModalVisible(false)} 
                        iconName={'close-circle-outline'} 
                        color={colorsTheme.white} 
                        size={35}/>
                </View>
                <CustomTitle title={'Select Categories'} type='large'/> 
                    <View style={categoryModal.itemsContainer}>
                            <FlatList
                                data={allCategories}
                                keyExtractor={(item) => item.id.toString()}
                                horizontal={true}
                                renderItem={({item}) => 
                                <SelectCategory   
                                    title={item.name}
                                    image_url={item.image_url}
                                    onPress={() => toggleCategory(item.id)}
                                    style={[selCategory.container, selectedCategories.includes(item.id) && selCategory.containerSelected]}
                                />
                                }
                            />
                    </View>
                <CustomButton 
                    title={'Done'} 
                    onPress={() => handleDone()}
                    container={customButton.blueContainer}
                />
            </View>
        </View>
    </Modal>
  )
}

export default CategoryModal
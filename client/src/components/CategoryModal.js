import { View, Modal, FlatList, } from 'react-native'
import React from 'react'
import imagesCategory from '../data/imagesCategory'
import CustomTitle from './CustomTitle';
import { colorsTheme } from '../styles/colorsTheme';
import { categoryModal } from '../styles/components/categoryModal';
import CustomButton from './CustomButton';
import { customButton } from '../styles/components/customButton';
import CustomIcon from './CustomIcon';
import SelectCategory from './SelectCategory';
import { selCategory } from '../styles/components/selCategory';


const CategoryModal = ({ modalVisible, setModalVisible, setCategoryText, selectedCategories, setSelectedCategories }) => {

    const toggleCategory = (category) => {
        setSelectedCategories((prevCategories) =>
          prevCategories.includes(category)
          ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category])
    }

    const handleDone = () => {
        if(selectedCategories.length > 0) {
            setCategoryText(selectedCategories.map(cat => cat.title).join(' | '));
        }else{
            setCategoryText('');
        }
        setModalVisible(null)
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
                                data={imagesCategory}
                                keyExtractor={(item) => item.title}
                                horizontal={true}
                                renderItem={({item}) => 
                                <SelectCategory   
                                    title={item.title}
                                    onPress={() => toggleCategory(item)}
                                    style={[selCategory.container, selectedCategories.includes(item) && selCategory.containerSelected]}
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
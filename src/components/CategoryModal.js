import { View, Text, Modal, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import CustomTitle from './CustomTitle';
import { colorsTheme } from '../styles/colorsTheme';
import { modalCategory } from '../styles/components/modalCategory';
import CustomButton from './CustomButton';
import { customButton } from '../styles/components/customButton';
import CustomIcon from './CustomIcon';
import { useCategory } from '../hooks/useCategory';


const CategoryModal = ({ modalVisible, setModalVisible, selectedCategories, setSelectedCategories }) => {
    const {categories, loadingCategories} = useCategory();

    useEffect(() => {
        if(modalVisible){
            <ActivityIndicator/>
        }
    }, [modalVisible, categories])
    const toggleCategory = (category) => {
        setSelectedCategories((prevCategories) =>
          prevCategories.includes(category)
          ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category])
      }

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={modalCategory.modalBackground}>
            <View style={modalCategory.modalContainer}>
                <View style={modalCategory.closeContainer}>
                    <CustomIcon
                        onPress={() => setModalVisible(false)} 
                        iconName={'close-circle-outline'} 
                        color={colorsTheme.white} 
                        size={35}/>
                </View>
                <CustomTitle title={'Select Categories'} type='large'/>
                <View style={modalCategory.itemsContainer}>
                    {loadingCategories 
                        ? ( <CustomTitle title="Loading Categories..." type='regular'/> )
                        :
                        <FlatList
                        data={categories}
                        keyExtractor={(item) => item.category}
                        renderItem={({item}) => (
                            <Pressable
                                style={[modalCategory.categoryItem, selectedCategories.includes(item) && modalCategory.categoryItemSelected]}
                                onPress={()=> toggleCategory(item)}>
                                <CustomTitle title={item.category} type='regular'/>
                            </Pressable>
                        )}
                        showsVerticalScrollIndicator={false}
                    /> }
                </View>
                <CustomButton 
                title={'Done'} 
                onPress={() => setModalVisible(false)}
                container={customButton.blueContainer}/>
            </View>
        </View>
    </Modal>
  )
}

export default CategoryModal
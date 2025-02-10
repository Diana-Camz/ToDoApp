import { View, ScrollView, Pressable,  } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from 'date-fns';
import { containers } from '../styles/containers'
import TaskInput from '../components/TaskInput'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import CustomIcon from '../components/CustomIcon'
import CustomUserName from '../components/CustomUserName'
import Loader from '../components/Loader'
import { useUser } from '../hooks/useUser'
import CategoryModal from '../components/CategoryModal'

const CreateTask = ({navigation}) => {
  const {user, loadingUser} = useUser(3);
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(new Date());

  if(loadingUser) {
    return (
    <Loader/>
    )
  }; 

  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName {...user}/>
      </View>
      <View>
        <CustomTitle title={"Let's do something else !!"} type='msgScreen' numberOfLines={0}/>
      </View>
      <View style={containers.createOrEdit}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TaskInput 
            title={'Name'}
            placeholder={'Read for 20 minutes'}  
            iconName='pencil-sharp'
            maxLength={30}
            isFocused={focusedInput === 'Name'}
            onFocus={() => setFocusedInput('Name')}
            onBlur={() => setFocusedInput(null)}
            />
          <Pressable onPress={() => {setModalVisible('Date'); setFocusedInput('Date');}}>
            <TaskInput 
              title={'Date'} 
              placeholder={'July 25, 2025'}
              value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''} 
              iconName='calendar-sharp'
              pointerEvents="none"
              editable={false}
              isFocused={focusedInput === 'Date'}
              onFocus={() => setFocusedInput('Date')}
              onBlur={() => setFocusedInput(null)}
            />
          </Pressable>
          <TaskInput 
            title={'Time'}
            placeholder={'8:30 am'}  
            iconName='time'
            isFocused={focusedInput === 'Time'}
            onFocus={() => setFocusedInput('Time')}
            onBlur={() => setFocusedInput(null)}
            />
          <Pressable onPress={() => {setModalVisible('Category'); setFocusedInput('Category');}}>
            <TaskInput 
              title={'Category'} 
              placeholder={'Personal'} 
              iconName='folder-open'
              pointerEvents="none"
              editable={false}
              isFocused={focusedInput === 'Category'}
              onFocus={() => {
                setFocusedInput('Category')
                setModalVisible(true)}}
              onBlur={() => setFocusedInput(null)}
              />
          </Pressable>
          <TaskInput 
            title={'Priority'}  
            iconName='podium'
            isFocused={focusedInput === 'Priority'}
            onFocus={() => setFocusedInput('Priority')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Description'} 
            placeholder={'Read more was a new year purpouse'} 
            iconName='clipboard'
            isFocused={focusedInput === 'Description'}
            onFocus={() => setFocusedInput('Description')}
            onBlur={() => setFocusedInput(null)}
            />
        </ScrollView>
      </View>
        <CategoryModal
          modalVisible={modalVisible === 'Category'}
          setModalVisible={setModalVisible}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        {modalVisible === 'Date' && (
          <DateTimePicker
            mode="date"
            value={date}
            display="calendar"
            onChange={(event, selected) => {
              if(selected){
                setSelectedDate(selected);
                setDate(selected)
              }
              setModalVisible(null)
            }}
          />
        )}
    </View>
  )
}

export default CreateTask
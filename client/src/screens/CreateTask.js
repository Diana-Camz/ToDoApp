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
import EmojiModal from '../components/EmojiModal';
import { taskInput } from '../styles/components/taskInput';
import { useUserContext } from '../context/userContext';

const CreateTask = ({navigation}) => {
  const { user } = useUserContext();
  const {userData, loadingUser} = useUser(user);
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryText, setCategoryText] = useState('');
  const [modalVisible, setModalVisible] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedEmoji, setSelectedEmoji] = useState('😊')

  if(loadingUser) {
    return (
    <Loader/>
    )
  }; 

  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName {...userData}/>
      </View>
      <View>
        <CustomTitle title={"Let's do something else !!"} type='msgScreen' numberOfLines={0}/>
      </View>
      <View style={containers.createOrEdit}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={containers.nameContainer}>
            <TaskInput 
              title={'Name'}
              placeholder={'Read for 20 minutes'}  
              iconName='pencil-sharp'
              maxLength={30}
              isFocused={focusedInput === 'Name'}
              onFocus={() => setFocusedInput('Name')}
              onBlur={() => setFocusedInput(null)}
              />
            <Pressable 
              onPress={() => setModalVisible('Emoji')}
              style={taskInput.emojiContainer}>
                <CustomTitle title={'Emoji'} type='input'/>
                <CustomTitle title={selectedEmoji} type='xlarge'/>
            </Pressable>
          </View>
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
          <Pressable onPress={() => {setModalVisible('Time'); setFocusedInput('Time');}}>
            <TaskInput 
              title={'Time'}
              placeholder={'8:30 am'}
              value={selectedTime ? format(selectedTime, 'hh:mm a') : ''}
              iconName='time'
              pointerEvents="none"
              editable={false}
              isFocused={focusedInput === 'Time'}
              onFocus={() => setFocusedInput('Time')}
              onBlur={() => setFocusedInput(null)}
              />
          </Pressable>
          <Pressable onPress={() => {setModalVisible('Category'); setFocusedInput('Category');}}>
            <TaskInput 
              title={'Category'} 
              placeholder={'Personal'}
              value={categoryText} 
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
          setCategoryText={setCategoryText}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <EmojiModal 
          modalVisible={modalVisible === 'Emoji'} 
          setModalVisible={setModalVisible} 
          setSelectedEmoji={setSelectedEmoji}
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
        {modalVisible === 'Time' && (
          <DateTimePicker
            mode="time"
            value={date}
            display="default"
            onChange={(event, selected) => {
              if(selected){
                setSelectedTime(selected);
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
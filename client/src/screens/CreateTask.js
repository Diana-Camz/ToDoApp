import { Alert, View, ScrollView, Pressable,  } from 'react-native'
import React, {useEffect, useState} from 'react'
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
import CustomButton from '../components/CustomButton';
import { customButton } from '../styles/components/customButton';
import { createTaskRequest } from '../api/requests';

const CreateTask = ({navigation}) => {
  const { user } = useUserContext();
  const {userData, loadingUser} = useUser(user);
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryText, setCategoryText] = useState('');
  const [priority, setPriority] = useState("low")
  const [modalVisible, setModalVisible] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const [formattedTime, setFormattedTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [newTask, setNewTask] = useState({
    title: '',
    status: false,
    date: null,
    time: null,
    priority: priority,
    description: '',
    emoji: selectedEmoji,
    user_id: user,
    categories: [],
  })

  const handleCreateTask = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      saveTask()
    }
  }

  const saveTask =  async() => {
    setLoading(true)
    try {
      const response = await createTaskRequest(newTask);
      if(response.ok){
        Alert.alert('Task Created', 'Your task has been created correctly', [
          {text: 'Ok', onPress: () => navigation.navigate('Home')}
        ])
      } else {
        Alert.alert('Error', 'There has been an error creating your task, please try again.', [
          {text: 'Try Again', onPress: () => navigation.navigate('Home')}
        ])
      }
    } catch (error) {
      console.error('Error creating tasks', error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=> {
    setNewTask((prev) => ({
      ...prev,
      date: formattedDate,  
      time: formattedTime,
      priority: priority,
      categories: selectedCategories, 
      emoji: selectedEmoji,
    }));
  }, [formattedDate, formattedTime, priority, selectedCategories, selectedEmoji]);

  function formatDate(dateString) {
    const formatDate = new Date(dateString).toISOString().split('T')[0];
    setFormattedDate(formatDate)
  }
  function formatTime(dateString) {
    const formatTime = new Date(dateString).toISOString().split('T')[1].split('.')[0];
    setFormattedTime(formatTime)
  }

  const validateForm = () => {
    const newErrors = {};
    if (!newTask.title.trim()) newErrors.title = 'Task must contain a title.';
    if (!newTask.date) newErrors.date = 'Please select a date.';
    if (!newTask.time) newErrors.time = 'Please select a time.';
    if (newTask.categories.length === 0) newErrors.categories = 'Select at least one category.';
    return newErrors;
  };

  if(loadingUser || loading) {
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
              onChangeText={(val) => setNewTask((prev) => ({...prev, title:val}))}
              value={newTask.title} 
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
          <View style={taskInput.validationContainer}>
            {errors.title && <CustomTitle title={errors.title} type='validation' />}  
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
          <View style={taskInput.validationContainer}>
            {errors.date && <CustomTitle title={errors.date} type='validation' />}  
          </View>

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
          <View style={taskInput.validationContainer}>
            {errors.time && <CustomTitle title={errors.time} type='validation' />}  
          </View>

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
          <View style={taskInput.validationContainer}>
            {errors.categories && <CustomTitle title={errors.categories} type='validation' />}  
          </View>

          <TaskInput 
            title={'Priority'}  
            iconName='podium'
            isFocused={focusedInput === 'Priority'}
            onFocus={() => setFocusedInput('Priority')}
            onBlur={() => setFocusedInput(null)}
            priority={priority}
            setPriority={setPriority}
            />
          <TaskInput 
            title={'Description'}
            onChangeText={(val) => setNewTask((prev) => ({...prev, description:val}))}
            value={newTask.description} 
            placeholder={'Read more was a new year purpouse'} 
            iconName='clipboard'
            multiline={true}
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
          selectedEmoji={selectedEmoji}
          screen={'createScreen'}
        />
        {modalVisible === 'Date' && (
          <DateTimePicker
            mode="date"
            value={date}
            display="calendar"
            onChange={(event, selected) => {
              if(selected){
                formatDate(selected);
                setSelectedDate(selected)
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
                formatTime(selected);
                setSelectedTime(selected)
                setDate(selected)
              }
              setModalVisible(null)
            }}
          />
        )}
        <View style={customButton.container}>
          <CustomButton onPress={()=> handleCreateTask()} title={'Create Task'} container={customButton.blueContainer}/>
        </View>
    </View>
  )
}

export default CreateTask
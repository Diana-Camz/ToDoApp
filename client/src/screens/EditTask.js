import { View, ScrollView, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";
import { parse, format } from 'date-fns';
import { containers } from '../styles/containers'
import TaskInput from '../components/TaskInput'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import CustomIcon from '../components/CustomIcon'
import CustomUserName from '../components/CustomUserName'
import Loader from '../components/Loader'
import CategoryModal from '../components/CategoryModal'
import EmojiModal from '../components/EmojiModal';
import { useUser } from '../hooks/useUser'
import { useTask } from '../hooks/useTask'
import { taskInput } from '../styles/components/taskInput';
import CustomButton from '../components/CustomButton';
import { customButton } from '../styles/components/customButton';
import { useAllCategories } from '../hooks/useAllCategories';

const EditTask = ({navigation, route}) => {
  const {user_id, task_id} = route.params;
  const {userData, loadingUser} = useUser(user_id);
  const {task, loadingTask} = useTask(user_id, task_id);
  const {loadingAllCategories} = useAllCategories()
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryText, setCategoryText] = useState('');
  const [modalVisible, setModalVisible] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedEmoji, setSelectedEmoji] = useState('😊')

  useEffect(() => {
    if (task?.categories) {
      const categoriesArray = task.categories.split(' | ').map((cat) => cat.trim());
      setSelectedCategories(categoriesArray);
      setCategoryText(categoriesArray.join(' | '));
    }
  }, [task?.categories]);

  useEffect(() => {
    setCategoryText(selectedCategories.join(' | '));
  }, [selectedCategories]);

  if(loadingUser || loadingTask || loadingAllCategories) {
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
        <CustomTitle title={"We can always improve our activities !!"} type='msgScreen' numberOfLines={0}/>
      </View>
      <View style={containers.createOrEdit}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={containers.nameContainer}>
            <TaskInput 
              title={'Name'}
              placeholder={'Read for 20 minutes'}  
              iconName='pencil-sharp'
              value={task.title}
              maxLength={30}
              isFocused={focusedInput === 'Name'}
              onFocus={() => setFocusedInput('Name')}
              onBlur={() => setFocusedInput(null)}
              />
              <Pressable 
              onPress={() => setModalVisible('Emoji')}
              style={taskInput.emojiContainer}>
                <CustomTitle title={'Emoji'} type='input'/>
                <CustomTitle title={task.emoji} type='xlarge'/>
            </Pressable>
          </View>
          <Pressable onPress={() => {setModalVisible('Date'); setFocusedInput('Date');}}>
            <TaskInput 
              title={'Date'} 
              placeholder={'17 july, 2020'} 
              iconName='calendar-sharp'
              editable={false}
              value={task.date ? format(task.date, 'MMMM d, yyyy') : ''}
              isFocused={focusedInput === 'Date'}
              onFocus={() => setFocusedInput('Date')}
              onBlur={() => setFocusedInput(null)}
            />
          </Pressable>
          <Pressable onPress={() => {setModalVisible('Time'); setFocusedInput('Time');}}>
            <TaskInput 
              title={'Time'}
              placeholder={'8:30 am'}  
              iconName='time'
              editable={false}
              value={task.time ? format(parse(task.time, 'HH:mm:ss', new Date()), 'hh:mm a') : ''}
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
            initial={task.priority}
            isFocused={focusedInput === 'Priority'}
            onFocus={() => setFocusedInput('Priority')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Description'} 
            placeholder={'Read more was a new year purpouse'} 
            iconName='clipboard'
            multiline={true}
            maxLength={80}
            value={task.description}
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
          user_id={user_id}
          task_id={task_id}
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
        <View style={customButton.container}>
          <CustomButton onPress={()=>{}} title={'Edit Task'} container={customButton.blueContainer}/>
        </View>
    </View>
  )
}

export default EditTask;
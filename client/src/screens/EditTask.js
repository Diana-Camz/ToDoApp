import { Alert, View, ScrollView, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from 'date-fns';
import { containers } from '../styles/containers'
import TaskInput from '../components/TaskInput'
import CustomTitle from '../components/CustomTitle'
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
import { editTaskRequest } from '../api/requests';

const EditTask = ({navigation, route}) => {
  const {user_id, task_id} = route.params;
  const {userData, loadingUser} = useUser(user_id);
  const {task, loadingTask} = useTask(user_id, task_id);
  const {allCategories, loadingAllCategories} = useAllCategories()
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priority, setPriority] = useState("low")
  const [categoryText, setCategoryText] = useState('');
  const [modalVisible, setModalVisible] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [newValues, setNewValues] = useState({
    title: '',
    date: null,
    time: null,
    priority: priority,
    description: '',
    emoji: selectedEmoji,
    user_id: user_id,
    categories: [],
  });
  const parseTimeToDate = (timeString) => {
    const today = new Date();
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, seconds || 0);
  };
  const parseDate = (dateString) => new Date(dateString);

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
  
      if (task) {
        // Configurar valores de la tarea
        setNewValues({
          title: task.title || '',
          date: task.date ? parseDate(task.date) : null,
          time: task.time ? parseTimeToDate(task.time) : null,
          categories: task.categories ? task.categories.split(' | ') : [],
          description: task.description || '',
          emoji: task.emoji || '',
          priority: task.priority || "low",
          user_id: user_id
        });
  
        // Fecha y hora seleccionadas
        if (task.date) setSelectedDate(parseDate(task.date));
        if (task.time) setSelectedTime(parseTimeToDate(task.time));
  
        // Categorías
        if (task.categories && allCategories.length > 0) {
          const categoryNames = task.categories.split(' | ').map((name) => name.trim());
          const categoryIds = allCategories
            .filter((cat) => categoryNames.includes(cat.name))
            .map((cat) => cat.id);
  
          setSelectedCategories(categoryIds);
          setCategoryText(categoryNames.join(' | '));
        }
  
        // Prioridad
        if (task.priority) {
          setPriority(task.priority);
        }
      }
      setLoading(false);
    };
  
    initializeData();
  }, [task, allCategories]);

  const handleEditTask = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      editTask()
    }
  }


  const editTask =  async() => {
    setLoading(true)
    try {
      

        const formattedData = {
          ...newValues,
          date: formatDateForDB(newValues.date),
          time: formatTimeForDB(newValues.time),
          categories: selectedCategories,
          priority: priority,
        }

      const response = await editTaskRequest(task_id, formattedData);
      if(response.ok){
        Alert.alert('Task Updated', 'Your task has been edited correctly', [
          {text: 'Ok', onPress: () => navigation.navigate('DetailTask', {user_id: user_id, task_id: task_id})}
        ])
      } else {
        Alert.alert('Error', 'There has been an error updating your task, please try again.', [
          {text: 'Try Again', onPress: () => navigation.navigate('Home')}
        ])
      }
    } catch (error) {
      console.error('Error updating task', error)
    }finally{
      setLoading(false)
    }
  }




  function formatDateForDB(date) {
    return date instanceof Date ? date.toISOString().split('T')[0] : null;
  }
  function formatTimeForDB(time) {
    return time instanceof Date ? time.toISOString().split('T')[1].split('.')[0] : null; 
  }

  const validateForm = () => {
    const newErrors = {};
    if (!newValues.title.trim()) newErrors.title = 'Task must contain a title.';
    if (!newValues.date) newErrors.date = 'Please select a date.';
    if (!newValues.time) newErrors.time = 'Please select a time.';
    if (newValues.categories.length === 0) newErrors.categories = 'Select at least one category.';
    return newErrors;
  };

  if(loadingUser || loadingTask || loading || loadingAllCategories ) {
    return (
    <Loader/>
    )
  };

  return (
    <View style={containers.main}>
      <View style={[containers.header, {justifyContent: 'flex-end'}]}>
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
              onChangeText={(val) => setNewValues((prev) => ({...prev, title:val}))}
              iconName='pencil-sharp'
              value={newValues.title}
              maxLength={30}
              isFocused={focusedInput === 'Name'}
              onFocus={() => setFocusedInput('Name')}
              onBlur={() => setFocusedInput(null)}
              />
              <Pressable 
              onPress={() => setModalVisible('Emoji')}
              style={taskInput.emojiContainer}>
                <CustomTitle title={'Emoji'} type='input'/>
                <CustomTitle title={newValues.emoji} type='xlarge'/>
            </Pressable>
          </View>
          <View style={taskInput.validationContainer}>
            {errors.title && <CustomTitle title={errors.title} type='validation' />}  
          </View>

          <Pressable onPress={() => {setModalVisible('Date'); setFocusedInput('Date');}}>
            <TaskInput 
              title={'Date'} 
              placeholder={'17 july, 2020'} 
              iconName='calendar-sharp'
              editable={false}
              pointerEvents="none"
              value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
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
              iconName='time'
              editable={false}
              pointerEvents="none"
              value={selectedTime ? format(selectedTime, 'hh:mm a'): ''}
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
            initial={priority}
            setPriority={setPriority}
            isFocused={focusedInput === 'Priority'}
            onFocus={() => setFocusedInput('Priority')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Description'} 
            placeholder={'Read more was a new year purpouse'} 
            onChangeText={(val) => setNewValues((prev) => ({...prev, description:val}))}
            iconName='clipboard'
            multiline={true}
            maxLength={80}
            value={newValues.description}
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
          setNewValues={setNewValues}
          screen={'editScreen'}
        />
        {modalVisible === 'Date' && (
          <DateTimePicker
            mode="date"
            value={date}
            display="calendar"
            onChange={(event, selected) => {
              if(selected){
                setSelectedDate(selected);
                setNewValues(prev => ({ ...prev, date: selected }));
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
                setNewValues(prev => ({ ...prev, time: selected }));
                setDate(selected)
              }
              setModalVisible(null)
            }}
          />
        )}
        <View style={customButton.container}>
          <CustomButton onPress={()=> handleEditTask()} title={'Edit Task'} container={[customButton.blueContainer, {width: '50%'}]}/>
          <CustomButton onPress={()=> navigation.navigate('Home')} title={'Cancel'} container={customButton.darkContainer}/>
        </View>
    </View>
  )
}

export default EditTask;
import { View, Modal } from 'react-native'
import React from 'react'
import { emojiModal } from '../styles/components/emojiModal'
import { colorsTheme } from '../styles/colorsTheme'
import CustomIcon from './CustomIcon'
import EmojiSelector from 'react-native-emoji-selector'
import CustomTitle from './CustomTitle'

const EmojiModal = ({modalVisible, setModalVisible, setSelectedEmoji}) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={emojiModal.modalBackground}>
            <View style={emojiModal.modalContainer}>
                <View style={emojiModal.closeContainer}>
                    <View>
                        <CustomTitle title="Select an Emoji" type="large"/>
                    </View>
                    <View style={emojiModal.closeIcon}>
                        <CustomIcon
                            onPress={() => setModalVisible(false)} 
                            iconName={'close-circle-outline'} 
                            color={colorsTheme.white} 
                            size={35}/>
                    </View>
                </View>
                <View style={emojiModal.emojiContainer}>
                <EmojiSelector
                    onEmojiSelected={emoji => 
                        {setSelectedEmoji(emoji);
                        setModalVisible(null)}
                    }
                    showSearchBar={false}
                    showTabs={false}

            />
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default EmojiModal
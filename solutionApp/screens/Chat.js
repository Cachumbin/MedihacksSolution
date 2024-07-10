import { KeyboardAvoidingView, Pressable, Text, TextInput, View, Platform, TouchableWithoutFeedback, Keyboard, StyleSheet, Button } from "react-native"
import Layout from '../layout.js'
const Chat = () => {
    return (
        <Layout>
            <KeyboardAvoidingView style={{ height: '100%' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{height: '100%'}}>
                        <View style={{flexGrow: 1, backgroundColor: '#1E3340'}}></View>
                        <View style={{flexDirection: 'row', padding: 15, backgroundColor: '#1E3340', height: 70}} >
                            <TextInput style={{backgroundColor: '#8195A6', borderRadius: '100%', flexGrow: 1}} />
                            <Pressable style={{height: 40, width: 60, alignItems:'center', marginLeft: 15, backgroundColor: '#BF9B6F', justifyContent: 'center', borderRadius: '100%'}}><Text style={{color:'#000', fontWeight: 700}}>Send</Text></Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback >
            </KeyboardAvoidingView>
        </Layout>


    )
}
export default Chat

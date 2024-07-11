import { KeyboardAvoidingView, Pressable, Text, TextInput, View, Platform, TouchableWithoutFeedback, Keyboard, StyleSheet, Button } from "react-native"
import Layout from '../layout.js'
import { useState } from "react"
const Chat = () => {
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    return (

        <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? '50' : '0'} style={{ flex: 1, backgroundColor: '#1E3340' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >

            <View style={{ alignSelf: 'stretch', alignItems: 'stretch', flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flexGrow: 1, backgroundColor: '#1E3340' }}></View>
                </TouchableWithoutFeedback>
                <View style={{ flexDirection: 'row', padding: 15, backgroundColor: '#1E3340', height: 70 }} >
                    <TextInput onChangeText={setMsg} onC placeholder="Message to the IA" style={{ backgroundColor: '#8195A6', borderRadius: '100%', flexGrow: 1, padding: 10 }} />
                    <Pressable onPress={() => console.log(msg)} disabled={loading || msg === ''} style={{ height: 40, alignItems: 'center', marginLeft: 15, backgroundColor: '#BF9B6F', justifyContent: 'center', borderRadius: '100%', paddingHorizontal: 10, opacity: loading || msg === '' ? 0.5 : 1 }}><Text style={{ color: '#000', fontWeight: 700 }}>{loading ? 'loading...' : "Send"}</Text></Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>



    )
}
export default Chat

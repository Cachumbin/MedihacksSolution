import { KeyboardAvoidingView, Pressable, Text, TextInput, View, Platform, TouchableWithoutFeedback, Keyboard, StyleSheet, Button, FlatList } from "react-native"
import { useState } from "react"
import { OpenAI } from "openai/index.mjs"

const system_message = `You are going to provide the service of a health assistant for the user that will be in a case of emergency, /
you have to guide the user and tell him what to do in order to save the patient's life. /
The user is a person that does not have any idea of medicine so you have to be very clear with the technical terms, /
also consider that the user or someone close to the user is suffering from a medical urgency, so please do not exceed the 500 words and try to be very pithy. `

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const Chat = () => {
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([])

    const responseGenerate = async (inputText) => {
        setLoading(true)
        setMessages([...messages, {by: 'user', msg, id: "id" + Math.random().toString(16).slice(2) }])
        setMsg('')
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [
                { "role": "system", "content": system_message },
                { "role": "user", "content": `${inputText}` }
            ]
        });
        const res = await completion.choices[0].message.content
        setMessages([...messages, {by: 'user', msg, id: "id" + Math.random().toString(16).slice(2) }, {by: 'machine', msg: res, id: "id" + Math.random().toString(16).slice(2) }])
        setLoading(false)

    }
    return (

        <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? '50' : '0'} style={{ flex: 1, backgroundColor: '#1E3340' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >

            <View style={{ alignSelf: 'stretch', alignItems: 'stretch', flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{ flexGrow: 1, backgroundColor: '#1E3340' }}>
                        <FlatList
                            style={{maxHeight: '100%'}}
                            data={messages}
                            renderItem={({ item }) => <Text style={{color:'#fff'}}>{item.msg}</Text>}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ flexDirection: 'row', padding: 15, backgroundColor: '#1E3340', height: 70 }} >
                    <TextInput value={msg} onChangeText={setMsg} onC placeholder="Message to the IA" style={{ backgroundColor: '#8195A6', borderRadius: '100%', flexGrow: 1, padding: 10 }} />
                    <Pressable onPress={() => responseGenerate()} disabled={loading || msg === ''} style={{ height: 40, alignItems: 'center', marginLeft: 15, backgroundColor: '#BF9B6F', justifyContent: 'center', borderRadius: '100%', paddingHorizontal: 10, opacity: loading || msg === '' ? 0.5 : 1 }}><Text style={{ color: '#000', fontWeight: 700 }}>{loading ? 'loading...' : "Send"}</Text></Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>



    )
}
export default Chat

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUp = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#D506C0' barStyle="light-content" />

            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>

                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#D506C0" size={20} />
                    <TextInput
                        placeholderTextColor="#FB599B"
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <Animatable.View animation="bounceIn" >
                        <Feather
                            name="check-circle"
                            color="#D506C0"
                            size={20} />
                    </Animatable.View>
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#D506C0" size={20} />

                    <TextInput
                        placeholderTextColor="#FB599B"
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize="none" />

                    <TouchableOpacity>
                        <Feather name="eye-off" color="#D506C0" size={20} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>

                <View style={styles.action}>
                    <Feather name="lock" color="#D506C0" size={20} />

                    <TextInput
                        placeholderTextColor="#FB599B"
                        placeholder="Confirm Your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity>
                        <Feather name="eye-off" color="#D506C0" size={20} />
                    </TouchableOpacity>

                </View>

                <View style={styles.button}>

                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { }}>
                        <LinearGradient
                            colors={['#FF839D', '#F50B9A']}
                            style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={[styles.signIn, {
                            borderColor: '#D506C0',
                            borderWidth: 1,
                            marginTop: 15
                        }]} >
                        <Text style={[styles.textSign, { color: '#D506C0' }]}>Sign In</Text>
                    </TouchableOpacity>



                </View>
            </Animatable.View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D506C0'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#D506C0',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D506C0',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#FB599B',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: '#D506C0'
    }
});
export default SignUp;
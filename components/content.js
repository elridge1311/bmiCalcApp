import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';

export default function Content()
{

    const [gender, setGender] = useState('');

    const [height, setHeight] = useState(0);

    const [weight, setWeight] = useState(0);

    const [age, setAge] = useState(0);

    const [bmi, setBmi] = useState(0);

    const [bmiText, setbmiText] = useState('');


    const calculate = () =>
    {
        const age1 = age;
        const weight1 = weight;
        const height1 = height / 100;
        const bmi1 = weight1 / (height1 * height1);
        setBmi(bmi1.toFixed(2));
        if (bmi1 > 18.5 && bmi1 < 25)
        {
            setbmiText('Healthy');
        }
        else
        {
            setbmiText('Un Healthy');
        }


    }

    return (
        <View >

            <View style={styles.genderContainer}>
                <View style={styles.genderItem}>
                    <TouchableOpacity onPress={() => { setGender('male') }}>
                        <Foundation name="male-symbol" size={45} color="yellow" />
                        <Text style={styles.genderText} >MALE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.genderItem}>
                    <TouchableOpacity onPress={() => { setGender('female') }}>
                        <Foundation name="female-symbol" size={45} color="yellow" />
                        <Text style={styles.genderText} >female</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.displayText}>GENDER : {gender}</Text>

            <View style={styles.sliderContent}>
                <Slider
                    style={{ width: 330, height: 50 }}
                    minimumValue={0}
                    maximumValue={250}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FFFFFF"
                    onValueChange={value => setHeight(parseInt(value))}
                />
                <Text style={styles.displayText}>HEIGHT : {height} cm</Text>
            </View>

            <View style={styles.weightContainer}>
                <TouchableOpacity onPress={() => { setWeight(weight + 1) }}>
                    <AntDesign name="pluscircle" size={45} color="yellow" />
                </TouchableOpacity>
                <Text style={styles.displayText}> Weight : {weight} Kg</Text>
                <TouchableOpacity onPress={() => { setWeight(weight - 1) }}>
                    <AntDesign name="minuscircle" size={45} color="yellow" />
                </TouchableOpacity>
            </View>

            <View style={styles.weightContainer}>
                <TouchableOpacity onPress={() => { setAge(age + 1) }}>
                    <AntDesign name="pluscircle" size={45} color="yellow" />
                </TouchableOpacity>
                <Text style={[styles.displayText, styles.extra]}> Years : {age}</Text>
                <TouchableOpacity onPress={() => { setAge(age - 1) }}>
                    <AntDesign name="minuscircle" size={45} color="yellow" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.genderText}>CALCULATE BMI</Text>
            </TouchableOpacity>

            <Text style={styles.finalText}>Your bmi is : {bmi}</Text>
            <Text style={styles.finalText1}>{bmiText}</Text>

        </View >
    );
}

const styles = StyleSheet.create({
    genderContainer: {
        flexDirection: 'row', //by default its column 
    },
    genderItem: {
        flex: 1,
        backgroundColor: '#88BDBC',
        padding: 20,
        marginBottom: 10,
        borderRadius: 15,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    genderText: {
        fontFamily: 'SigmarOne-Regular',
        color: '#4F4A41',
    },
    displayText: {
        fontFamily: 'SigmarOne-Regular',
        fontSize: 20,
        textAlign: 'center',
        color: '#88BDBC',
        marginBottom: 15,
    },
    sliderContent: {
        marginTop: 40,
        flexDirection: 'column',
    },
    weightContainer: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    extra: {
        marginHorizontal: 35,
    },
    finalText: {
        fontFamily: 'SigmarOne-Regular',
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#88BDBC',
    },
    finalText1: {
        fontFamily: 'SigmarOne-Regular',
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
    }

});

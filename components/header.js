import { StyleSheet, Text, View } from 'react-native';

export default function Header()
{
    return (
        <View style={styles.header}>
            <Text style={styles.text}>BMI CALCULATOR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#254E58',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'SigmarOne-Regular',
    },
});

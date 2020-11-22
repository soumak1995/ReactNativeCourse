import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

function Contact(){

    const style = StyleSheet.create({
        text:{
            fontSize:20,
            padding:10
        }
    });

    return (
        <Card>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider/>
            <Text style={style.text } >121, Clear Water Bay Road</Text>
            <Text style={style.text } >Clear Water Bay, Kowloon</Text>
            <Text style={style.text } >HONG KONG</Text>
            <Text style={style.text } >Tel: +852 1234 5678</Text>
            <Text style={style.text } >Fax: +852 8765 4321</Text>
            <Text style={style.text } >Email:confusion@food.net</Text>
        </Card>
    )
}

export default Contact;
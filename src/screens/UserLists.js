import React from 'react';

import { TouchableOpacity, ActivityIndicator, Image, FlatList, StyleSheet, View, Text } from 'react-native';

import UserService from '../services/UserService'

export default class UserList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: null,
            isLoading: true
        }
    }

    componentDidMount() {
        UserService.getUsers().then((results) => {
            if (results && results.data && results.data.results) {
                this.setState({
                    users: results.data.results,
                    isLoading: false
                });
            }
        }).catch((error) => {
            console.log('Error' + error);
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            );
        }
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('UserDetails', {
                                        user: item
                                    });
                                }}
                                style={[styles.itemContainer, item.gender == 'male' ? styles.male : styles.female]}>
                                <Image
                                    source={{ uri: item.picture.medium }}
                                    style={styles.itemImage}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.itemTitle}>{item.name.first + ' ' + item.name.last}</Text>
                                    <Text style={[styles.itemTitle, { fontSize: 13 }]}>Detalles</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    }
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 1
    },
    itemTitle: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10,
        color: 'white'
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    male: {
        backgroundColor: '#ADD8E6'
    },
    female: {
        backgroundColor: '#ffb6c1'
    }

})
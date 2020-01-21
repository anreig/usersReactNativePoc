import React from 'react';
import { Image, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.setState({
            user: this.props.navigation.state.params.user
        });
    }

    render() {
        if (this.state.user === null) {
            return (
                <ActivityIndicator />
            );
        }
        return (
            <View style={styles.container}>
                <Image
                    style={styles.itemImage}
                    source={{ uri: this.state.user.picture.large }}
                />
                <Text style={styles.itemTitle}>Name: {this.state.user.name.first + ' ' + this.state.user.name.last}</Text>
                <Text style={styles.itemTitle}>Email: {this.state.user.email}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginVertical: 10
    },
    itemTitle: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 5
    }
})
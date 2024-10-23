import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-web';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from the API
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                console.log(data.products)
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <View style={{padding:6}}>
            <FlatList
                data={products}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.item}>Hello</Text>
                        <Text style={styles.item}>Hello</Text>
                        <Text style={styles.item}>Hello</Text>
                        <Text style={styles.item}>Hello</Text>
                        <Text style={styles.item}>Hello</Text>
                        <Text style={styles.item}>Hello</Text>
                    </View>
                }
            />



        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 5,
        height: 100,
        width: 110,
        backgroundColor: 'red'
    }

});

export default Products;

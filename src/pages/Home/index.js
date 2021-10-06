import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';


import Products from '../../products'
import { useCart } from '../../context/CartContext';
import ProductList from '../../components/ProductList'
import Header from '../../components/Header';
import { styles } from './styles'


export default function Home() {
    const [product, setProduct] = useState(Products)

    const { add } = useCart()

    //função que ordena em ordem alfabetica
    const handleOrderClickAlf = () => {
        let newlist = [...Products]

        newlist.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            } else {
                if (b.name > a.name) {
                    return -1
                } else {
                    return 0
                }
            }
        })


        setProduct(newlist)
    }

    //Função que ordena em score mais altos
    const handleOrderClickScore = () => {
        let newlist = [...Products]

        newlist.sort((a, b) => {
            if (a.score < b.score) {
                return 1
            } else {
                if (b.score < a.score) {
                    return -1
                } else {
                    return 0
                }
            }
        })


        setProduct(newlist)
    }

    //Função que ordena pelo preço minimo 
    const handleOrderClickPriceMin = () => {
        let newlist = [...Products]

        newlist.sort((a, b) => {
            if (a.price > b.price) {
                return 1
            } else {
                if (b.price > a.price) {
                    return -1
                } else {
                    return 0
                }
            }
        })


        setProduct(newlist)
    }

    //Função que ordena pelo preço maximo
    const handleOrderClickPriceMax = () => {
        let newlist = [...Products]

        newlist.sort((a, b) => {
            if (a.price < b.price) {
                return 1
            } else {
                if (b.price < a.price) {
                    return -1
                } else {
                    return 0
                }
            }
        })


        setProduct(newlist)
    }



    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Header />
                <TouchableOpacity
                    style={styles.buttonCart}
                    onPress={() => { openCart() }}
                >

                </TouchableOpacity>

            </View>

            <View>

                <View style={styles.orderContainer}>
                    <TouchableOpacity
                        style={styles.order}
                        onPress={handleOrderClickAlf}
                    >
                        <Text style={styles.orderText}>A-Z</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.order}
                        onPress={handleOrderClickScore}
                    >
                        <Text style={styles.orderText}>Max-Score</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.order}
                        onPress={handleOrderClickPriceMin}
                    >
                        <Text style={styles.orderText}>Preço-min </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.order}
                        onPress={handleOrderClickPriceMax}
                    >
                        <Text style={styles.orderText}>Preço-max</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.areaLista}>
                <FlatList
                    style={styles.list}
                    data={product}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <ProductList data={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>



        </View>
    );
}


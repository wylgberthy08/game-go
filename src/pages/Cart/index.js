import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { useCart } from '../../context/CartContext';
import { FontAwesome } from '@expo/vector-icons';

import ProductList from '../../components/ProductList';
import { styles } from './styles';


export default function Cart() {
  const { cart, remove, totalValue } = useCart()
  var frete = 10
  return (

    <View style={{ flex: 1, }}>

      <View style={styles.header}>
        <View style={styles.containerCart}>
          <Image
            style={styles.imgCart}
            source={require('../../assets/cart-icon.png')}
          />
          <Text style={styles.cartTitle}>Seu Carrinho</Text>

        </View>

      </View>

      <View style={styles.areaLista}>
        <FlatList
          style={styles.list}
          data={cart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <>

              <ProductList data={item.item} />

              <TouchableOpacity style={styles.button} onPress={() => remove(index)}>
                <FontAwesome name="remove" size={24} color="red" />
                <Text style={styles.buttonText}>Remover do Carrinho</Text>
              </TouchableOpacity>
            </>
          )

          }
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.totalArea}>
        {totalValue > 0 &&
          <View>
            <Text style={styles.frete}>{totalValue > 250 ? <Text>Frete Gratis</Text> : <Text>Frete: R${frete.toFixed(2)}</Text>}</Text>
            <Text style={styles.subtotal}>Subtotal: R${totalValue.toFixed(2)}</Text>
          </View>

        }

        {totalValue > 0 && totalValue < 250.00 ? <Text style={styles.total}>Total: R${totalValue + 10}</Text> : <Text style={styles.total}>Total: R${totalValue.toFixed(2)}</Text>}
      </View>

    </View>
  );
}


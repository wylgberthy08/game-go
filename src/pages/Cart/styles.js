import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ed0758',
    borderBottomWidth: 2
  },

  containerCart: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartTitle: {
    color: '#fff',
    fontSize: 27
  },
  imgCart: {
    width: 70,
    height: 56,
    tintColor: '#daff05',
  },

  button: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#272b28',
    width: '50%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 4
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  totalArea: {
    width: '100%',
    alignItems: 'center',
  },

  frete: {
    alignItems: 'center',
    color: '#000',
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtotal: {
    color: '#000',
    margin: 2,
    fontSize: 20,
    fontWeight: 'bold'
  },
  total: {
    width: '100%',
    color: '#fff',
    margin: 2,
    fontSize: 18,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    borderBottomColor: '#ed0758',
    borderBottomWidth: 2
  },

  text: {
    color: '#fff'
  },
  areaLista: {
    flex: 1,

  },

  list: {
    paddingLeft: 5,
    paddingRight: 5,
  },

  cardContainer: {
    width: '48%',
    marginTop: 15,
    marginRight: 5,
    marginLeft: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    justifyContent: 'space-between'

  },


})


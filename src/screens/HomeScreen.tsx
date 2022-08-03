import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useCallback } from 'react'
import CountryListItem from './components/CountryListItem'
import { Colors } from '../theme/colors'
import { countries, ICountries } from './countries'

const HomeScreen = () => {
  const renderItem = useCallback(({ item }) => {
    return <CountryListItem item={item} />
  }, [])
  const keyExtractor = (item: ICountries) => `${item.name}`

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.header}>
            Find universities per country. Press the item to check the list.
          </Text>
        }
        keyExtractor={keyExtractor}
        data={countries}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.shark,
    flex: 1,
  },
  header: {
    marginVertical: 30,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.geyser,
    textAlign: 'center',
  },
})

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppStackRoutes } from '../../navigation/routes'
import { Colors } from '../../theme/colors'
import { ICountries } from '../countries'
import NextIcon from '../../icons/NextIcon'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppStackParamList } from '../../navigation/AppNavigator'

type CountryListItemProps = {
  item: ICountries
}

const CountryListItem = ({ item }: CountryListItemProps) => {
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamList>>()

  const handleOnPress = useCallback(
    () => navigate(AppStackRoutes.DetailsScreen, { country: item.name }),
    [],
  )
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.itemWrapper}>
      <Image source={{ uri: item.img }} style={styles.flagImg} />
      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{item.name}</Text>
        <NextIcon color={Colors.eucalyptus} size={25} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    height: 130,
    backgroundColor: Colors.ebonyClay,
    borderRadius: 8,
    marginBottom: 25,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.oxfordBlue,
  },
  flagImg: {
    width: '65%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  nameWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    color: Colors.geyser,
    textAlign: 'center',
    marginRight: 5,
  },
})

export default CountryListItem

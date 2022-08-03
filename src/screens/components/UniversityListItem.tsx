import { View, Text, TouchableOpacity, Linking, Alert, StyleSheet } from 'react-native'
import React from 'react'

import NextIcon from '../../icons/NextIcon'
import { Colors } from '../../theme/colors'
import { IUseCountry } from '../../api/useCountry'

type UniversityListItemType = {
  item: IUseCountry
}

const UniversityListItem = ({ item }: UniversityListItemType) => {
  const handleOnPress = async (url: string) => {
    const isSupported = await Linking.canOpenURL(url)
    if (isSupported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Invalid url`)
    }
  }

  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={() => handleOnPress(item.web_pages[0])}>
      <View style={styles.itemBullet}></View>
      <Text style={styles.nameText}>{item.name}</Text>
      <View style={styles.pressIconWrapper}>
        <NextIcon size={25} color={Colors.eucalyptus} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: Colors.ebonyClay,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 4,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemBullet: {
    backgroundColor: Colors.geyser,
    borderRadius: 100,
    padding: 3,
    marginRight: 5,
  },
  nameText: {
    color: Colors.geyser,
    fontSize: 15,
    width: '80%',
  },
  pressIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.oxfordBlue,
    borderRadius: 100,
    padding: 2,
  },
})

export default UniversityListItem

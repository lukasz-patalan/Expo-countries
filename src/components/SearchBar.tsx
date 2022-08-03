import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/colors'
import SearchIcon from '../icons/SearchIcon'

type SearchBarProps = {
  searchValue: string
  handleSearchValue: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar = ({ handleSearchValue, searchValue }: SearchBarProps) => {
  return (
    <>
      <TextInput
        autoCorrect={false}
        style={styles.wrapper}
        value={searchValue}
        onChangeText={handleSearchValue}
      />
      <View style={styles.icon}>
        <SearchIcon color={Colors.white} size={20} />
      </View>
    </>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.oxfordBlue,
    marginHorizontal: 20,
    borderRadius: 8,
    height: 35,
    paddingLeft: 35,
    color: Colors.white,
    paddingVertical: 2,
  },
  icon: {
    left: 30,
    bottom: 28,
    zIndex: 1,
    width: 20,
  },
})

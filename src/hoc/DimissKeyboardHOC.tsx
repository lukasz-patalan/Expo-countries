import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View, StyleSheet } from 'react-native'

type DismissKeyboardProps = {
  children: JSX.Element | JSX.Element[]
}

const DismissKeyboardHOC = (Component: typeof View) => {
  const handleDismiss = () => Keyboard.dismiss()

  return ({ children, ...props }: DismissKeyboardProps) => (
    <TouchableWithoutFeedback onPress={handleDismiss} accessible={false}>
      <Component style={styles.page} {...props}>
        {children}
      </Component>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
})
export const DismissKeyboardView = DismissKeyboardHOC(View)

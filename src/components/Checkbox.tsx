import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../theme/colors";

type SortListCheckBoxProps = {
  isSortEnabled: boolean;
  onHandleSortEnabled: () => void;
  text: string;
};

const Checkbox = ({
  isSortEnabled,
  onHandleSortEnabled: handleSortEnabled,
  text,
}: SortListCheckBoxProps) => {
  return (
    <TouchableWithoutFeedback onPress={handleSortEnabled}>
      <View style={styles.sortWrapper}>
        <View
          style={[
            styles.sortCheckbox,
            {
              backgroundColor: isSortEnabled ? Colors.eucalyptus : Colors.shark,
            },
          ]}
        />
        <Text
          style={[
            styles.sortText,
            { color: isSortEnabled ? Colors.eucalyptus : Colors.geyser },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sortWrapper: {
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 16,
    paddingVertical: 3,
    width: "50%",
  },
  sortCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.oxfordBlue,
  },
  sortText: {
    marginLeft: 10,
  },
});

export default Checkbox;

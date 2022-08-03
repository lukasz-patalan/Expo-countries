import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import { IUseCountry, useCountry } from "../api/useCountry";
import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { Colors } from "../theme/colors";
import SearchBar from "../components/SearchBar";
import LocationIcon from "../icons/LocationIcon";
import Fuse from "fuse.js";
import UniversityListItem from "./components/UniversityListItem";
import { AppStackParamList } from "../navigation/AppNavigator";
import { AppStackRoutes } from "../navigation/routes";
import Checkbox from "../components/Checkbox";
import { DismissKeyboardView } from "../hoc/DimissKeyboardHOC";
import { getSortedArray } from "../helpers/sortArray";

type RenderItemProps = {
  item: IUseCountry;
};

type DetailsScreenRouteProps = RouteProp<
  AppStackParamList,
  AppStackRoutes.DetailsScreen
>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProps>();

  const country = route?.params?.country;
  const {
    data: universities,
    isLoading,
    isFetching,
    isError,
    isFetched,
  } = useCountry(country);

  const [searchValue, setSearchValue] = useState("");
  const [isSortEnabled, setIsSortEnabled] = useState(false);

  const handleSortEnabled = useCallback(() => {
    setIsSortEnabled((prev) => !prev);
  }, []);

  const searchFuse = !!universities?.length
    ? new Fuse(universities as readonly IUseCountry[], {
        keys: ["name"],
        threshold: 0.3,
      })
    : undefined;

  const universitiesInSearch = searchFuse
    ?.search(searchValue)
    .map((el) => el.item);

  const getUniversities = useCallback(() => {
    if (!searchValue) {
      return isSortEnabled ? getSortedArray(universities) : universities;
    } else {
      return isSortEnabled
        ? getSortedArray(universitiesInSearch)
        : universitiesInSearch;
    }
  }, [isSortEnabled, searchValue, universities]);

  const renderItem = useCallback(({ item }: RenderItemProps) => {
    return <UniversityListItem item={item} />;
  }, []);

  const keyExtractor = (item: IUseCountry) => `${item.name}`;

  return (
    <DismissKeyboardView>
      <SafeAreaView style={styles.page}>
        <View style={styles.headerWrapper}>
          <View style={styles.titleWrapper}>
            <LocationIcon size={20} color={Colors.eucalyptus} />
            <Text style={styles.headerText}>
              List of universities for {country}
            </Text>
          </View>
          <SearchBar
            searchValue={searchValue}
            handleSearchValue={setSearchValue}
          />
          {isError && (
            <Text style={styles.errorText}>
              We run into an error, try again later
            </Text>
          )}
        </View>
        {isLoading || isFetching ? (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator color={Colors.white} size="large" />
          </View>
        ) : (
          <FlatList
            keyExtractor={keyExtractor}
            data={getUniversities()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            windowSize={5}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={30}
            ListEmptyComponent={
              isFetched && !isError ? (
                <View style={styles.nothingFoundWrapper}>
                  <Text style={styles.nothingText}>Nothing found :(</Text>
                </View>
              ) : null
            }
            ListHeaderComponent={
              !!getUniversities()?.length ? (
                <Checkbox
                  isSortEnabled={isSortEnabled}
                  onHandleSortEnabled={handleSortEnabled}
                  text="sort the list by name"
                />
              ) : null
            }
          />
        )}
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.shark,
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: Colors.shark,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    alignSelf: "center",
    marginVertical: 20,
    color: Colors.geyser,
    marginLeft: 10,
  },
  loaderWrapper: {
    alignSelf: "center",
    backgroundColor: Colors.ebonyClay,
    padding: 30,
    borderRadius: 8,
    marginTop: "50%",
  },
  errorText: {
    marginTop: 20,
    alignSelf: "center",
    color: Colors.burntSienna,
    fontWeight: "bold",
  },
  nothingFoundWrapper: {
    flex: 1,
  },
  nothingText: {
    color: Colors.geyser,
    alignSelf: "center",
    fontSize: 16,
  },
});

export default DetailsScreen;

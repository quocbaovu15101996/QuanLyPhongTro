/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native";
import { DataBase } from "../../libs/sqlite";
import { textNormalBold } from "../../styles/text.styles";

const Home: FunctionComponent = () => {
  const rooms = useRef<any>([]);

  const [state, updateState] = useState<boolean>(false);

  const updateData = async () => {
    await DataBase.transaction((tx) => {
      tx.executeSql("SELECT * FROM Rooms", [], (tx, result) => {
        const len = result.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            const item = result.rows.item(i);
            rooms.current.push(item);
          }
          updateState((prevState) => !prevState);
        }
      });
    });
  };
  useEffect(() => {
    rooms.current = [];
    updateData();
  }, []);

  async function sayHiFromJava() {
    // HelloWorld.sayHi(
    //   (err: any) => {
    //     console.log('sayHiFromJava', err);
    //   },
    //   (msg: any) => {
    //     console.log('sayHiFromJava', msg);
    //   },
    // );
    // CalendarModule.createCalendarEvent('testName', 'testLocation');
  }

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={{ justifyContent: "center" }}>
        <Text>{item.ID}</Text>
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        <Text style={textNormalBold}>{item.RoomName}</Text>
        <Text>{item.Roomer}</Text>
      </View>
    </View>
  );

  const keyExtractor = (_item: any, index: number): string => index.toString();

  const addNewRoom = async () => {
    try {
      await DataBase.transaction(async (tx) => {
        await tx.executeSql(
          "Insert INTO Rooms (RoomName, Roomer) VALUES (?,?)",
          ["Phòng 102", "Chị Nhung"]
        );
        updateData();
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rooms.current}
        extraData={state}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        bounces={false}
      />
      <Pressable onPress={addNewRoom}>
        <Text>Thêm phòng trọ</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEBF1",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 16,
    marginBottom: 0,
    padding: 12,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#EBEAED",
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

import SQLite from "react-native-sqlite-storage";

export const DataBase = SQLite.openDatabase(
    { name: "DataBase", location: "default" },
    () => console.log('open DataBase success'),
    () => console.log('open DataBase error')
  );
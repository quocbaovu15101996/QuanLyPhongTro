import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { LIST_IC_LOGIN } from "../../utils/enum";
import { scale } from "../../utils/Scale";

type Props = {
  onPressFacebook: () => void;
};

const LoginOptions: FC<Props> = ({ onPressFacebook }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={onPressFacebook}>
        <FastImage
          style={styles.imageFacebook}
          source={LIST_IC_LOGIN.iconFacebook}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 30,
        }}
      >
        <FastImage
          style={styles.imageFacebook}
          source={LIST_IC_LOGIN.iconGoogle}
        />
      </TouchableOpacity>
    </View>
  );
};

export { LoginOptions };

const styles = StyleSheet.create({
  imageFacebook: {
    height: scale(56),
    width: scale(56),
  },
  imageGoogle: {
    height: scale(14),
    width: scale(22),
  },
});

import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_3_5} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f1/2d7c/90f9083aa7800dbdee06dc16fe99f84a"
        }}
        style={styles.ImageBackground_3_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f1/2d7c/90f9083aa7800dbdee06dc16fe99f84a"
        }}
        style={styles.ImageBackground_3_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f1/2d7c/90f9083aa7800dbdee06dc16fe99f84a"
        }}
        style={styles.ImageBackground_3_8}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_5: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3_6: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("41.80327868852459%")
  },
  ImageBackground_3_7: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("66.80327868852459%")
  },
  ImageBackground_3_8: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("88.25136612021858%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

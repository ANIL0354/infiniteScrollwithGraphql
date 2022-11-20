import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    item: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    header: {
        fontWeight: 'bold',
    },
    subheader: {
        paddingTop: 10,
        },
    safeAreaView: {
        flex: 1
    },
      chatList: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 22,
    paddingHorizontal: 20,
  },
  chatImage: { width: 78, height: 78, borderRadius: 78 / 2, marginRight: 14 },
  textArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#C8C7CC",
    paddingVertical: 20,
    width: "70%",
  },
  unreadContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#13988E",
    justifyContent: "center",
    alignItems: "center",
  },
  unreadNumber: {
    fontFamily: "bold",
    color: "#fff",
  },
  chatName: {
    fontFamily: "regular",
    fontSize: 22,
    lineHeight: 25,
    color: "#474747",
  },
  chatLastMsg: {
    fontSize: 14,
    lineHeight: 17,
    marginTop: 2,
    color: "#7C7C7C",
  },
});

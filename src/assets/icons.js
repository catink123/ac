let GUIContext = require.context('./gui', false, /\.png$/);

export default {
  inventoryIcon: GUIContext("./inventoryIcon.png")
}
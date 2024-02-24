import "@aws-amplify/ui-react/styles.css";
// import { withAuthenticator, Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { withAuthenticator, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import AppBarComp from "./components/AppBarComp";

// function App({ signOut }) {
function App() {
  return (
    <View className="App">
      <AppBarComp />
    </View>
  );
}

export default withAuthenticator(App);

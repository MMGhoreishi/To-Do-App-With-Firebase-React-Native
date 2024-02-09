import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./app/screens/List";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";

library.add(fab, faTrash, faCircle);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My Todos" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

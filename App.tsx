import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoApp from "./app/screens/TodoApp";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { Provider } from "react-redux";
import store from "./app/data/store";

library.add(fab, faTrash, faCircle);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="My Todos" component={TodoApp} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;

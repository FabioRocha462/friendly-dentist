import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screens/Home";
import { Videos } from "@screens/Videos";
import { Games } from "@screens/Games";
import { Guide } from "@screens/Guide";
import { Simulations } from "@screens/Simulations";
import { Quiz } from "@components/organics/Quiz";
import { FinishedQuiz } from "@components/organics/FinishedQuiz";
import { Dog } from "@components/organics/Dog";
export default function AppRoutes() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="video" component={Videos} />
      <HomeStack.Screen name="game" component={Games} />
      <HomeStack.Screen name="guide" component={Guide} />
      <HomeStack.Screen name="simulation" component={Simulations} />
      <HomeStack.Screen name="quiz" component={Quiz} />
      <HomeStack.Screen name="finishedQuiz" component={FinishedQuiz} />
      <HomeStack.Screen name="dog" component={Dog} />
    </HomeStack.Navigator>
  );
}

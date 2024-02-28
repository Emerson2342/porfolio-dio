import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "../screens/Main";
import { Skill } from "../screens/Skill";

import { Entypo, Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabs() {
    return (
        <Navigator>
            <Screen
                name='home'
                component={Main}

                options={{
                    headerShown: false,
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            color={'#0e3987'}
                            size={30}
                        />
                    ),
                }}
            />

            <Screen
                name='skills'
                component={Skill}
                options={{
                    headerShown: false,
                    title: "Habilidades",
                    tabBarIcon: ({ focused }) => (

                        <Ionicons
                            name={focused ? 'star' : 'star-outline'}
                            color='#0e3987'
                            size={30}
                        />
                    )
                }}

            />
        </Navigator>

    )
}
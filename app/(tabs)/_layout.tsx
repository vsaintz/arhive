import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { styles } from '@/styles/CustomTabStyles';
import CustomTabBarButton from '@/components/CustomTabBarButton';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#111827',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'index':
              return (
                <MaterialCommunityIcons
                  name="home-roof"
                  size={24}
                  color={color}
                />
              );
            case 'camera':
              return (
                <Octicons
                  name="dot-fill"
                  size={30}
                  color={color}
                />
              );
            case 'profile':
              return (
                <Ionicons
                  name="person"
                  size={22}
                  color={color}
                />
              );
            default:
              return (
                <Ionicons
                  name="ellipse-outline"
                  size={24}
                  color={color} />
              );
          }
        },
      })}
    />
  );
}
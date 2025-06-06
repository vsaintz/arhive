import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
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
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'index':
              iconName = 'home-outline';
              break;
            case 'camera':
              iconName = 'camera-outline';
              break;
            case 'profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
              break;
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    />
  );
}
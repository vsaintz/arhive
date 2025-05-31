import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const CustomTabBarButton = React.forwardRef<any, BottomTabBarButtonProps>(
  ({ children, onPress }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        android_ripple={{ color: 'transparent' }}
        style={({ pressed }) => [
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: pressed ? 0.6 : 1,
          } as ViewStyle,
        ]}
      >
        {children}
      </Pressable>
    );
  }
);

export default CustomTabBarButton;

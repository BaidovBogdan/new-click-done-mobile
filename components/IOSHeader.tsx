import { useColorScheme } from '@/hooks/useColorScheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ClickDoneIcon = () => (
  <Svg width={21} height={24} viewBox='0 0 21 30' fill='none'>
    <Path
      d='M14.7113 14.6239L18.5514 11.4246C19.1618 10.8615 19.805 9.3952 18.8714 8.38526C17.8883 7.32176 16.2616 7.95528 15.6171 8.53808L7.27098 14.9427C8.18152 8.50864 3.78095 7.42437 2.51003 8.05543C1.75706 8.42931 1.73186 9.25377 1.93164 9.7862C2.47035 11.222 4.04266 12.4233 3.36182 14.9427C2.95085 16.4635 2.12165 17.3434 1.86506 18.6378C1.38121 21.0787 1.9107 22.7499 2.15082 23.4221C2.55083 24.5418 4.07087 27.3462 7.19097 28.0611C11.0311 28.9409 13.7145 27.0746 14.7113 26.2215C16.7071 24.5133 17.2917 22.8113 17.6714 21.7424C18.051 20.6736 18.3914 18.3032 16.2918 17.7084M14.7113 14.6239C14.7113 14.6239 17.2475 15.6429 16.2918 17.7084M14.7113 14.6239C12.7912 14.144 7.35099 17.2634 7.27098 20.0628C7.25754 20.5332 7.3931 22.4488 9.19105 22.3823M16.2918 17.7084C12.9512 17.8233 9.10263 20.7026 9.19105 22.3823M9.19105 22.3823C9.27106 23.902 10.5576 24.2848 11.4311 23.902C12.5764 23.4 13.3512 21.7424 15.0313 21.3425M6.19401 3.79034L7.73602 6.46544M10.4345 1.66669V4.75563M14.5787 3.79034L13.0367 6.46544'
      stroke='#fff'
      strokeWidth={1.53591}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export const IOSHeader = () => {
  const colorScheme = useColorScheme();

  // Only show on iOS
  if (Platform.OS !== 'ios') {
    return null;
  }

  const isDark = colorScheme === 'dark';
  const textColor = '#FFFFFF';
  const gradientColors = isDark
    ? ['#E63E37', '#FF564F']
    : ['#FF564F', '#FF7A6B'];

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: 'transparent',
      }}
    >
      <LinearGradient
        colors={gradientColors as [string, string]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 4,
          paddingVertical: 0,
          gap: 0,
          marginHorizontal: 20,
          marginTop: 7.5,
          borderRadius: 25,
        }}
      >
        <ClickDoneIcon />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: textColor,
            fontFamily: 'System',
          }}
        >
          Click&Done
        </Text>
      </LinearGradient>
    </View>
  );
};

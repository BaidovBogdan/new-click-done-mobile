import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Main',
          tabBarIcon: ({ color, focused }) => (
            <MotiView
              animate={{
                scale: focused ? 1.1 : 1,
              }}
              transition={{
                type: 'timing',
                duration: 200,
              }}
            >
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={28}
                color={color}
              />
            </MotiView>
          ),
        }}
      />
      <Tabs.Screen
        name='blog'
        options={{
          title: 'Blog',
          tabBarIcon: ({ color, focused }) => (
            <MotiView
              animate={{
                scale: focused ? 1.1 : 1,
              }}
              transition={{
                type: 'timing',
                duration: 200,
              }}
            >
              <Ionicons
                name={focused ? 'newspaper' : 'newspaper-outline'}
                size={28}
                color={color}
              />
            </MotiView>
          ),
        }}
      />
      <Tabs.Screen
        name='auth'
        options={{
          title: 'Authorization',
          tabBarIcon: ({ color, focused }) => (
            <MotiView
              animate={{
                scale: focused ? 1.1 : 1,
              }}
              transition={{
                type: 'timing',
                duration: 200,
              }}
            >
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={28}
                color={color}
              />
            </MotiView>
          ),
        }}
      />
    </Tabs>
  );
}

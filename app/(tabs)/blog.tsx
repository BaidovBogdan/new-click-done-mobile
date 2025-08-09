import { PullToRefresh } from '@/components/PullToRefresh';
import { MotiView } from 'moti';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function BlogScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [focusKey, setFocusKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setFocusKey(key => key + 1);
    }, [])
  );

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} refreshing={refreshing}>
      <View className='flex-1 justify-center items-center bg-white dark:bg-gray-900'>
        <MotiView
          key={focusKey}
          from={{
            opacity: 0,
            translateY: 50,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            type: 'timing',
            duration: 800,
          }}
        >
          <Text className='text-3xl font-bold text-center text-gray-800 dark:text-white'>
            Blog Page
          </Text>
        </MotiView>
      </View>
    </PullToRefresh>
  );
}

import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PullToRefreshProps {
  children: React.ReactNode;
  onRefresh?: () => Promise<void> | void;
  refreshing?: boolean;
  style?: any;
  contentContainerStyle?: any;
  showsVerticalScrollIndicator?: boolean;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({
  children,
  onRefresh,
  refreshing = false,
  style,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    if (onRefresh) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
  }, [onRefresh]);

  const isRefreshingState = refreshing || isRefreshing;

  return (
    <SafeAreaView style={[styles.safeArea, styles.horizontal]}>
      <ScrollView
        style={[styles.container, style]}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshingState}
            onRefresh={handleRefresh}
            tintColor='#FF564F'
            colors={['#FF564F']}
            progressBackgroundColor='transparent'
          />
        }
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        bounces={true}
        alwaysBounceVertical={true}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  horizontal: {
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

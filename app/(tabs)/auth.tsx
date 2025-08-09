import { useFocusEffect } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { MotiView } from 'moti';
import { useCallback, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from 'react-native';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';

export default function AuthScreen() {
  const [focusKey, setFocusKey] = useState(0);
  const [selectedTab, setSelectedTab] = useState<'login' | 'register'>('login');

  useFocusEffect(
    useCallback(() => {
      setFocusKey(key => key + 1);
    }, [])
  );

  const handleTabPress = (tab: 'login' | 'register') => {
    // Haptic feedback identical to `HapticTab`
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } else {
      Vibration.vibrate(50);
    }
    setSelectedTab(tab);
    setFocusKey(key => key + 1);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View className='flex-1 bg-white dark:bg-gray-900'>
          <View className='pt-14 px-6'>
            {/* Segmented control */}
            <View className='flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1'>
              <TouchableOpacity
                accessibilityRole='button'
                onPress={() => handleTabPress('login')}
                className={`flex-1 py-2 rounded-lg ${
                  selectedTab === 'login' ? 'bg-white dark:bg-gray-700' : ''
                }`}
              >
                <Text
                  className={`text-center font-semibold ${
                    selectedTab === 'login'
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-300'
                  }`}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityRole='button'
                onPress={() => handleTabPress('register')}
                className={`flex-1 py-2 rounded-lg ${
                  selectedTab === 'register' ? 'bg-white dark:bg-gray-700' : ''
                }`}
              >
                <Text
                  className={`text-center font-semibold ${
                    selectedTab === 'register'
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-300'
                  }`}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            {/* Header texts */}
            <View className='mt-6 flex flex-col items-center'>
              <Text className='text-4xl font-bold text-[#1D1D1FE5] dark:text-white'>
                Sign in to <Text className='text-[#FF564F]'>ClickDone</Text>
              </Text>
              <Text className='mt-2 text-xl text-[#1D1D1F73] dark:text-gray-300'>
                Here all people will help you
              </Text>
            </View>
          </View>

          {/* Form container centered */}
          <View className='flex-1 justify-center items-center px-6'>
            <MotiView
              key={focusKey + (selectedTab === 'login' ? 0 : 100)}
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
              className='w-full max-w-md'
            >
              {selectedTab === 'login' ? <LoginForm /> : <RegisterForm />}
            </MotiView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

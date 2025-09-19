import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const GoogleIcon = () => (
  <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <Path
      d='M18.1716 8.368H17.5003V8.33342H10.0003V11.6667H14.7099C14.0228 13.6072 12.1766 15.0001 10.0003 15.0001C7.23908 15.0001 5.00033 12.7613 5.00033 10.0001C5.00033 7.23883 7.23908 5.00008 10.0003 5.00008C11.2749 5.00008 12.4345 5.48091 13.3174 6.26633L15.6745 3.90925C14.1862 2.52216 12.1953 1.66675 10.0003 1.66675C5.39824 1.66675 1.66699 5.398 1.66699 10.0001C1.66699 14.6022 5.39824 18.3334 10.0003 18.3334C14.6024 18.3334 18.3337 14.6022 18.3337 10.0001C18.3337 9.44133 18.2762 8.89592 18.1716 8.368Z'
      fill='#FFC107'
    />
    <Path
      d='M2.62793 6.12133L5.36585 8.12925C6.10668 6.29508 7.90085 5.00008 10.0004 5.00008C11.275 5.00008 12.4346 5.48091 13.3175 6.26633L15.6746 3.90925C14.1863 2.52216 12.1954 1.66675 10.0004 1.66675C6.7996 1.66675 4.02376 3.47383 2.62793 6.12133Z'
      fill='#FF3D00'
    />
    <Path
      d='M9.9998 18.3334C12.1523 18.3334 14.1081 17.5096 15.5869 16.17L13.0077 13.9875C12.1431 14.6455 11.0863 15.0012 9.9998 15C7.8323 15 5.99189 13.618 5.29855 11.6892L2.58105 13.783C3.96022 16.4817 6.76105 18.3334 9.9998 18.3334Z'
      fill='#4CAF50'
    />
    <Path
      d='M18.1713 8.36784H17.5V8.33325H10V11.6666H14.7096C14.3809 12.5901 13.7889 13.3971 13.0067 13.9878L13.0079 13.987L15.5871 16.1695C15.4046 16.3353 18.3333 14.1666 18.3333 9.99992C18.3333 9.44117 18.2758 8.89575 18.1713 8.36784Z'
      fill='#1976D2'
    />
  </Svg>
);

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleContinuePress = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      if (Platform.OS === 'ios') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } else {
        Vibration.vibrate(50);
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
      // TODO: replace with real submission logic
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className='w-full'>
      {/* Email */}
      <View className='mb-4'>
        <Text className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='you@example.com'
          placeholderTextColor='#9CA3AF'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          className='h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
        />
      </View>

      {/* Password */}
      <View className='mb-2'>
        <Text className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder='••••••••'
          placeholderTextColor='#9CA3AF'
          secureTextEntry
          className='h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
        />
      </View>

      {/* Continue button */}
      <TouchableOpacity
        accessibilityRole='button'
        onPress={handleContinuePress}
        disabled={isLoading || !email || !password}
        className={`mt-4 h-12 rounded-xl bg-[#FF564F] dark:bg-[#FF564F] items-center justify-center ${
          isLoading || !email || !password ? 'opacity-70' : ''
        }`}
      >
        {isLoading ? (
          <ActivityIndicator color={'#FFFFFF'} />
        ) : (
          <Text className='text-white dark:text-gray-900 font-semibold'>
            Continue
          </Text>
        )}
      </TouchableOpacity>

      {/* Forgot password */}
      <TouchableOpacity accessibilityRole='button' className='mt-3 self-center'>
        <Text className='text-sm text-gray-600 dark:text-gray-300'>
          Forgot password?
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className='my-6 flex-row items-center'>
        <View className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
        <Text className='mx-3 text-gray-500 dark:text-gray-400'>or</Text>
        <View className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
      </View>

      {/* Google button */}
      <TouchableOpacity
        accessibilityRole='button'
        className='h-12 rounded-xl border border-gray-300 dark:border-gray-600 flex-row items-center justify-center bg-white dark:bg-gray-800'
      >
        <View className='w-5 h-5 rounded-full bg-white border border-gray-300 items-center justify-center mr-2'>
          <GoogleIcon />
        </View>
        <Text className='text-[#1D1D1FE5] dark:text-white font-semibold'>
          Sign up with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}

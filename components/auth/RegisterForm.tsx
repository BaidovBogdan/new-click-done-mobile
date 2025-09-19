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

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [location, setLocation] = useState('');
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
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 3) {
      // Focus next input logic would go here
    }
  };

  const renderStep1 = () => (
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

      {/* Continue button */}
      <TouchableOpacity
        accessibilityRole='button'
        onPress={handleContinuePress}
        disabled={isLoading || !email}
        className={`mt-4 h-12 rounded-xl bg-[#FF564F] dark:bg-[#FF564F] items-center justify-center ${
          isLoading || !email ? 'opacity-70' : ''
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

  const renderStep2 = () => (
    <View className='w-full'>
      <Text className='mb-6 text-lg font-semibold text-center text-gray-900 dark:text-white'>
        Verify your email
      </Text>
      <Text className='mb-6 text-sm text-center text-gray-600 dark:text-gray-400'>
        We&apos;ve sent a 4-digit code to {email}
      </Text>

      {/* OTP Inputs */}
      <View className='flex-row justify-between mb-6'>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={text => handleOtpChange(text, index)}
            placeholder='•'
            placeholderTextColor='#9CA3AF'
            keyboardType='numeric'
            maxLength={1}
            className='w-16 h-16 text-center text-2xl font-bold rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
          />
        ))}
      </View>

      {/* Auto-advance when OTP is complete */}
      {otp.every(digit => digit !== '') && (
        <TouchableOpacity
          accessibilityRole='button'
          onPress={handleContinuePress}
          disabled={isLoading}
          className={`h-12 rounded-xl bg-[#FF564F] dark:bg-[#FF564F] items-center justify-center ${
            isLoading ? 'opacity-70' : ''
          }`}
        >
          {isLoading ? (
            <ActivityIndicator color={'#FFFFFF'} />
          ) : (
            <Text className='text-white dark:text-gray-900 font-semibold'>
              Verify
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );

  const renderStep3 = () => (
    <View className='w-full'>
      <Text className='mb-6 text-lg font-semibold text-center text-gray-900 dark:text-white'>
        Personal Information
      </Text>

      {/* Full Name */}
      <View className='mb-4'>
        <Text className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          Full Name
        </Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder='Enter your full name'
          placeholderTextColor='#9CA3AF'
          className='h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
        />
      </View>

      {/* Phone Number */}
      <View className='mb-4'>
        <Text className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          Phone Number
        </Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder='+1 (555) 123-4567'
          placeholderTextColor='#9CA3AF'
          keyboardType='phone-pad'
          className='h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
        />
      </View>

      {/* Password */}
      <View className='mb-6'>
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
        disabled={isLoading || !fullName || !phone || !password}
        className={`h-12 rounded-xl bg-[#FF564F] dark:bg-[#FF564F] items-center justify-center ${
          isLoading || !fullName || !phone || !password ? 'opacity-70' : ''
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
    </View>
  );

  const renderStep4 = () => (
    <View className='w-full'>
      <Text className='mb-6 text-lg font-semibold text-center text-gray-900 dark:text-white'>
        Additional Details
      </Text>

      {/* Birth Date */}
      <View className='mb-4'>
        <Text className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          Date of Birth
        </Text>
        <TextInput
          value={birthDate}
          onChangeText={setBirthDate}
          placeholder='MM/DD/YYYY'
          placeholderTextColor='#9CA3AF'
          className='h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
        />
      </View>

      {/* Location */}
      <View className='mb-6'>
        <Text className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          Location
        </Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder='City, Country'
          placeholderTextColor='#9CA3AF'
          className='h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white bg-white dark:bg-gray-800'
        />
      </View>

      {/* Continue button */}
      <TouchableOpacity
        accessibilityRole='button'
        onPress={handleContinuePress}
        disabled={isLoading || !birthDate || !location}
        className={`h-12 rounded-xl bg-[#FF564F] dark:bg-[#FF564F] items-center justify-center ${
          isLoading || !birthDate || !location ? 'opacity-70' : ''
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
    </View>
  );

  const renderStep5 = () => (
    <View className='w-full items-center justify-center py-12'>
      <Text className='text-2xl font-bold text-center text-gray-900 dark:text-white'>
        5
      </Text>
    </View>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return renderStep1();
    }
  };

  return (
    <View className='w-full'>
      <View className='mb-4'>{renderCurrentStep()}</View>
    </View>
  );
}

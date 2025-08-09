import { Redirect } from 'expo-router';

export default function Blog() {
  return <Redirect href={'/(tabs)/blog' as any} />;
}

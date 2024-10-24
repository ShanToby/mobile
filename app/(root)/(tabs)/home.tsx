import { useUser } from '@clerk/clerk-expo';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '@/components/Header'; 
import Section1 from '@/components/Section1'; 
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Section1 /> 
        <Section2 />
        <Section3 />
        <Section4 />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

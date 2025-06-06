import {
  View, Text, TextInput, TouchableOpacity,
  Linking, SafeAreaView, StatusBar, Platform
} from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "@/styles/SignupStyles";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase-config';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    setShowPassword(isValidEmail(email));
  }, [email]);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = async () => {
    setFormError('');

    if (!username.trim() || !email.trim() || !password.trim()) {
      setFormError("Please fill out all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setFormError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await updateProfile(userCredential.user, { displayName: username.trim() });
      router.replace("/(tabs)");
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setFormError("This email is already in use.");
      } else {
        setFormError("Signup failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: '#000', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/(auth)/signin')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Enter your email below to create your account</Text>

        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize='none'
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          placeholder="name@example.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        {showPassword && (
          <TextInput
            style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            placeholderTextColor='#aaa'
            secureTextEntry
            autoCapitalize='none'
          />
        )}

        {formError !== '' && (
          <Text style={styles.errorText}>{formError}</Text>
        )}

        <TouchableOpacity
          style={[styles.emailButton, loading && { opacity: 0.6 }]}
          onPress={handleSignup}
          disabled={loading}
        >
          <Text style={styles.emailButtonText}>
            {loading ? 'Signing up...' : 'Sign up with Email'}
          </Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR CONTINUE WITH</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <AntDesign name="google" size={18} color="white" />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By clicking continue, you agree to our{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>Terms of Service</Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}

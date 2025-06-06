import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  View, Text, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '@/styles/SigninStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase-config';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSignin = async () => {
    setFormError('');

    if (!email.trim() || !password.trim()) {
      setFormError("Please enter both email and password.");
      return;
    }
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace('/(tabs)');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setFormError('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setFormError('Incorrect password.');
      } else if (error.code === 'auth/invalid-email') {
        setFormError('Invalid email format.');
      } else {
        setFormError('Signin failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Login to your account</Text>
      <Text style={styles.subtitle}>Enter your email below to login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="m@example.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.passwordHeader}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </View>

      {formError !== '' && (
        <Text style={styles.errorText}>{formError}</Text>
      )}

      <TouchableOpacity
        style={[styles.signinButton, loading && { opacity: 0.6 }]}
        onPress={handleSignin}
        disabled={loading}>
        <Text style={styles.signinButtonText}>
          {loading ? 'Signing in...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={18} color="white" />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <Text style={styles.signupText} onPress={() => router.push('/(auth)/signup')}>
        {"Don't have an account? "}
        <Text style={styles.signupLink}>Sign up</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

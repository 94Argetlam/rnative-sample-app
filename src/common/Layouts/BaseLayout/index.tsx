import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Text } from 'native-base';

interface BaseLayoutProps {
  children: ReactNode;
  scrollEnabled?: boolean;
}

export function BaseLayout({
  children,
  scrollEnabled = false,
}: BaseLayoutProps) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.container}>
        <Container>
          <Content scrollEnabled={scrollEnabled}>{children}</Content>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%' },
});

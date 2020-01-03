import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Container, Content, View } from 'native-base';

interface BaseLayoutProps {
  children: ReactNode;
  scrollEnabled?: boolean;
  header?: ReactNode;
}

export function BaseLayout({
  children,
  header,
  scrollEnabled = false,
}: BaseLayoutProps) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.container}>
        <Container>
          {header && <View style={styles.header}>{header}</View>}
          <Content
            contentContainerStyle={styles.content}
            scrollEnabled={scrollEnabled}>
            {children}
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%' },
  header: { alignItems: 'center', justifyContent: 'center' },
  content: { alignItems: 'center', flex: 1 },
});

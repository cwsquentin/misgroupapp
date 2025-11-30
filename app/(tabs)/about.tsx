import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        A propos
      </ThemedText>
      <ThemedText style={styles.body}>
        Cette application a été réalisée par Quentin Petiteville pour MIS Groupe dans le cadre d&apos;un test
        technique. Elle permet d&apos;ajouter rapidement des prénoms, de les garder sous la main et de les relire
        facilement.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    marginBottom: 4,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});

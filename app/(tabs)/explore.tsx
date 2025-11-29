import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <IconSymbol name="info.circle.fill" size={72} color="#2458e8" />
      <ThemedText type="title" style={styles.title}>
        À propos
      </ThemedText>
      <ThemedText style={styles.body}>
        Cette application a été réalisée par Quentin Petiteville pour MIS Groupe dans le cadre d&apos;un
        test technique. Elle permet d&apos;ajouter rapidement des prénoms, de les garder sous la main et de
        les relire facilement.
      </ThemedText>
      <ThemedText style={styles.body}>
        Démonstration simple : un champ texte, un bouton d&apos;ajout, et une liste claire pour revoir les
        entrées enregistrées pendant la session.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});

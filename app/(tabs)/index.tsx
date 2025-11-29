import { useMemo, useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const ACCENT = '#2f6df2';
const CARD = '#ffffff';
const BORDER = '#d8dde6';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState<string[]>([]);

  const reversedNames = useMemo(() => names, [names]);

  const handleAdd = () => {
    const nextName = inputValue.trim();
    if (!nextName) return;
    setNames((prev) => [nextName, ...prev]);
    setInputValue('');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.hero}>
        <ThemedText type="title" style={styles.title}>
          Carnet de prenoms
        </ThemedText>
        <ThemedText style={styles.subtitle}>Ajoute, garde, reconsulte sans effort.</ThemedText>
      </ThemedView>

      <View style={styles.form}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Entrez un prenom"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={handleAdd}
          autoCapitalize="words"
        />
        <Button title="Ajouter" onPress={handleAdd} color={ACCENT} />
      </View>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          Prenoms ajoutes
        </ThemedText>
        <FlatList
          data={reversedNames}
          keyExtractor={(item, index) => `${item}-${index}`}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={names.length === 0 ? styles.emptyList : styles.listContent}
          renderItem={({ item, index }) => (
            <View style={styles.listItem}>
              <View style={styles.indexBadge}>
                <ThemedText type="defaultSemiBold" style={styles.indexText}>
                  {index + 1}
                </ThemedText>
              </View>
              <ThemedText style={styles.nameText}>{item}</ThemedText>
            </View>
          )}
          ListEmptyComponent={
            <ThemedText type="defaultSemiBold" style={styles.emptyText}>
              Aucun prenom ajoute pour le moment.
            </ThemedText>
          }
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 18,
  },
  hero: {
    gap: 4,
  },
  title: {
    letterSpacing: 0.5,
  },
  subtitle: {
    color: '#6b7280',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: CARD,
    fontSize: 16,
  },
  card: {
    flex: 1,
    backgroundColor: CARD,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    shadowColor: '#111827',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 3,
  },
  cardTitle: {
    marginBottom: 8,
  },
  listContent: {
    gap: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
  },
  indexBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e7ecf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexText: {
    color: ACCENT,
  },
  nameText: {
    fontSize: 16,
  },
  emptyList: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    color: '#6b7280',
  },
});

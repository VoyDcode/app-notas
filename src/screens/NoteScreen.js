import React, { useState, useContext, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Alert,
  ActivityIndicator
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';

export default function NoteScreen({ route, navigation }) {
  const { user } = useContext(AuthContext);

  const existingNote = route.params?.note || null;

  const [title, setTitle] = useState(existingNote ? existingNote.title : '');
  const [description, setDescription] = useState(existingNote ? existingNote.description : '');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: existingNote ? 'Editar Nota' : 'Nova Nota'
    });
  }, [existingNote, navigation]);

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('Aviso', 'O título da nota não pode estar vazio.');
      return;
    }

    setSaving(true);

    try {
      if (existingNote) {
        const noteRef = doc(db, 'notes', existingNote.id);

        await updateDoc(noteRef, {
          title: title.trim(),
          description: description.trim(),
          updatedAt: serverTimestamp()
        });
      } else {
        await addDoc(collection(db, 'notes'), {
          title: title.trim(),
          description: description.trim(),
          userId: user.uid,
          createdAt: Timestamp.now(),
          updatedAt: serverTimestamp()
        });
      }

      navigation.goBack();
    } catch (error) {
      console.error('ERRO AO SALVAR NOTA:', error);
      Alert.alert('Erro', 'Falha ao salvar a nota. Tente novamente.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Título da Nota"
        value={title}
        onChangeText={setTitle}
        maxLength={100}
      />

      <TextInput
        style={styles.descriptionInput}
        placeholder="Digite o conteúdo da sua nota..."
        value={description}
        onChangeText={setDescription}
        multiline
        textAlignVertical="top"
      />

      <TouchableOpacity 
        style={[styles.saveButton, saving && styles.saveButtonDisabled]} 
        onPress={handleSave}
        disabled={saving}
      >
        {saving ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.saveButtonText}>
            {existingNote ? 'Atualizar Nota' : 'Salvar Nota'}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleInput: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    flex: 1,
    fontSize: 16,
    color: '#444',
  },
  saveButton: {
    backgroundColor: '#2e64e5',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonDisabled: {
    opacity: 0.7,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
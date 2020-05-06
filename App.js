import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const initialTodoList = [
  {
    task: '買い物',
    memo: '夕方17時まで'
  },
  {
    task: '美容院',
    memo: '土曜日13時'
  }
];


export default function App() {
  const [task, setTask] = useState('');
  const [memo, setMemo] = useState('');
  const [todoList, setTodoList] = useState(initialTodoList);

  const AddList = newList => {
    setTask('');
    setMemo('');
    setTodoList(newList)
  };

  const renderList = () => {
    return todoList.map(item => {
      return (
          <View style={styles.listItem}>
            <Text>{item.task}</Text>
            <Text>{item.memo}</Text>
          </View>
      )
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>タスク</Text>
        <TextInput
          style={styles.formControl}
          value={ task }
          placeholder='タスク'
          onChangeText={v => setTask(v)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>メモ</Text>
        <TextInput
            style={styles.formControl}
            value={ memo }
            placeholder='メモ'
            onChangeText={v => setMemo(v)}
        />
      </View>
      <View style={styles.formGroup}>
        <Button
            title="登録"
            onPress={() => {
              const newList = todoList.concat({ task: task, memo: memo });
              AddList(newList);
            }}
        />
      </View>
      <View>
        { renderList() }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 20
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  },
  listItem: {
    height: 64,
    width: 200,
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

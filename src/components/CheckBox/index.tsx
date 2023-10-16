import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CheckBox() {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={{
          width: 24,
          height: 24,
          borderWidth: 2,
          borderColor: '#EDEDED',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EDEDED',
        }}
      >
        {isChecked && (
          <Text style={{ color: 'white' }}><Icon name="check" size={18} color="#73CAC2" /></Text>
        )}
      </View>
    </TouchableOpacity>
  );
    }
    
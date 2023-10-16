import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface BotaoVerSenhaProps {
    onToggle: (visible: boolean) => void;
}

const BotaoVerSenha: React.FC<BotaoVerSenhaProps> = ({ onToggle }) => {
    const [visible, setVisible] = useState(false);
  
    const handleToggle = () => {
      setVisible(!visible);
      onToggle(!visible);
    };
  
    return (
      <TouchableOpacity style={{width: '15%', height: 50, justifyContent: 'center', alignItems: 'center'}} onPress={handleToggle}>
        <Icon name={visible ? 'eye-slash' : 'eye'} size={20} color="#000000" />
      </TouchableOpacity>
    );
};

export default BotaoVerSenha;
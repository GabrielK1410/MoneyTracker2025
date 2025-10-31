import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import NullPhoto from '../../assets/profile_icon.svg';
import BackArrow from '../../assets/back_arrow.svg';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <BackArrow width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>

      <Gap height={30} />

      <View style={styles.contentWrapper}>
        <View style={styles.profileWrapper}>
          <TouchableOpacity style={styles.avatarContainer}>
            <NullPhoto width={120} height={120} />
          </TouchableOpacity>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
        />
        <Gap height={30} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 45,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 16,
    color: '#000000',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  profileWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

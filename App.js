import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Sidebar from '../linkedin/src/components/Sidebar'
import './src/styles/App.css';
import Feed from './src/components/Feed'
import Authentication from './src/screens/Authentication';

export default function App() {
  
  return (
    <div className='app'>
      <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

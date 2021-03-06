import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import api from '../../services/api';

const Detail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');
  useEffect(() => {
    requestTxt();
  }, [requestTxt]);

  const requestTxt = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get();
      setData(response.data);
    } catch (error) {
      console.log('Error');
    }
    setIsLoading(false);
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView horizontal={true}>
          <Text style={{ letterSpacing: 1 }}>{data}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default Detail;

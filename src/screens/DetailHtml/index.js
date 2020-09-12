import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import api from '../../services/api';
import HTML from 'react-native-render-html';
import { tagsStyles } from './tagHtmlStyles';
import styles from './styles';
import Spacer from '../../../styles';

const DetailHtml = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    requestTxt();
  }, [requestTxt]);

  useEffect(() => {
    setHtmlContent(`<pre>${data}</pre>`);
  }, [data]);

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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Relatório De Vendas</Text>
          <Spacer height={32} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerScroll}>
            <ScrollView contentContainerStyle={styles.containerScrollChild} horizontal={true}>
              <HTML tagsStyles={tagsStyles} html={htmlContent} />
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DetailHtml;

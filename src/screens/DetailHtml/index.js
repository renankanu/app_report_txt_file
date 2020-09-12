import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import api from '../../services/api';
import HTML from 'react-native-render-html';
import { tagsStyles } from './tagHtmlStyles';

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
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView horizontal={true}>
          <HTML tagsStyles={tagsStyles} html={htmlContent} />
        </ScrollView>
      )}
    </View>
  );
};

export default DetailHtml;

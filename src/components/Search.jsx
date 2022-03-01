import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions as tabActions } from '../slices/tabs';

const Search = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = formData.get('url');
    const crossOriginUrl = `https://cors-anywhere.herokuapp.com/${url}`;
    const response = await axios.get(crossOriginUrl, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
    const content = response.data;
    dispatch(tabActions.loadTabContent({ content }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control name="url" type="text" placeholder={t('search.placeholder')} />
    </Form>
  );
};

export default Search;

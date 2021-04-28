import React from 'react';
import styles from './styles';

export default ({ title, description }) => (
  <div style={ styles.card }>
    <h4 style={{ margin: '0 0 5px'}}>{ title }</h4>
    <p style={{ margin: '0'}}>{ description }</p>
  </div>
);

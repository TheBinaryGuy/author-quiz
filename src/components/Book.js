import React from 'react';

export function Book({ title, onClick }) {
  return (<div onClick={() => { onClick(title); }}>{title}</div>);
}
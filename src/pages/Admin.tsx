import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Admin: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <h1 style={{ marginBottom: '2rem' }}>{t('nav.admin')}</h1>
      <div className="glass" style={{ padding: '2rem', borderRadius: '8px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Recent Leads</h2>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Download CSV</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
              <th style={{ padding: '1rem' }}>Name</th>
              <th style={{ padding: '1rem' }}>Phone</th>
              <th style={{ padding: '1rem' }}>Type</th>
              <th style={{ padding: '1rem' }}>Date</th>
              <th style={{ padding: '1rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem', fontWeight: 500 }}>Jón Jónsson</td>
              <td style={{ padding: '1rem' }}>+354 588 2030</td>
              <td style={{ padding: '1rem' }}>Apartment</td>
              <td style={{ padding: '1rem' }}>Today</td>
              <td style={{ padding: '1rem' }}><span style={{ background: '#e3f2fd', color: '#1565c0', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>New</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '1rem', fontWeight: 500 }}>Sarah Smith</td>
              <td style={{ padding: '1rem' }}>+44 7700 900077</td>
              <td style={{ padding: '1rem' }}>Commercial</td>
              <td style={{ padding: '1rem' }}>Yesterday</td>
              <td style={{ padding: '1rem' }}><span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>Contacted</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;

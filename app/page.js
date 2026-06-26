'use client';

import React, { useState } from 'react';

export default function DevTypeStudio() {

  const [previewText, setPreviewText] = useState('Build clean layout code blocks.');
  const [fontSize, setFontSize] = useState(24);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [fontWeight, setFontWeight] = useState('400');
  const [selectedFamily, setSelectedFamily] = useState('Inter');
  const [filterCategory, setFilterCategory] = useState('ALL');

 
  const fontDatabase = [
    { name: 'Inter', category: 'SANS-SERIF', fallback: 'sans-serif', url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap' },
    { name: 'Playfair Display', category: 'SERIF', fallback: 'serif', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap' },
    { name: 'Fira Code', category: 'MONOSPACE', fallback: 'monospace', url: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap' },
    { name: 'Roboto Mono', category: 'MONOSPACE', fallback: 'monospace', url: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap' },
    { name: 'Merriweather', category: 'SERIF', fallback: 'serif', url: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap' }
  ];


  const filteredFonts = fontDatabase.filter(font => filterCategory === 'ALL' || font.category === filterCategory);
  const currentFont = fontDatabase.find(f => f.name === selectedFamily) || fontDatabase[0];

 
  const generatedCssSnippet = `font-family: '${currentFont.name}', ${currentFont.fallback};\nfont-size: ${fontSize}px;\nline-height: ${lineHeight};\nfont-weight: ${fontWeight};`;
  const generatedHtmlSnippet = `<link rel="stylesheet" href="${currentFont.url}">`;


  const [copyState, setCopyState] = useState('📋 Copy CSS variables');
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCssSnippet);
    setCopyState('Copied code block! ⚡');
    setTimeout(() => setCopyState('📋 Copy CSS variables'), 2000);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 24px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#090d16', color: '#f8fafc', minHeight: '90vh' }}>
      
      {/*  */}
      <link rel="stylesheet" href={currentFont.url} />

      {/*  */}
      <header style={{ borderBottom: '2px solid #1e293b', paddingBottom: '20px', marginBottom: '35px' }}>
        <h1 style={{ margin: '0', fontSize: '26px', color: '#38bdf8' }}> DevType Typography Studio</h1>
        <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '13px' }}>An interactive design playground to preview, audit, and extract production-ready CSS font rules.</p>
      </header>

      {/*  */}
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
        
        {/*  */}
        <section style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '25px', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '12px', color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 20px 0' }}>Workbench Settings</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>Studio Preview Input</label>
            <input 
              type="text" 
              value={previewText} 
              onChange={(e) => setPreviewText(e.target.value)} 
              style={{ width: '100%', padding: '10px 14px', backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          {/*  */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>
              <span>Font Scale</span><span>{fontSize}px</span>
            </label>
            <input type="range" min="14" max="72" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>
              <span>Line Height Scale</span><span>{lineHeight}</span>
            </label>
            <input type="range" min="1.1" max="2.0" step="0.1" value={lineHeight} onChange={(e) => setLineHeight(Number(e.target.value))} style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }} />
          </div>

          {/*  */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <div style={{ flex: '1' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>Weight Matrix</label>
              <select value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} style={{ width: '100%', padding: '8px', backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '6px', color: '#fff' }}>
                <option value="300">300 - Light</option>
                <option value="400">400 - Regular</option>
                <option value="700">700 - Bold</option>
              </select>
            </div>
            <div style={{ flex: '1' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '8px' }}>Family Select</label>
              <select value={selectedFamily} onChange={(e) => setSelectedFamily(e.target.value)} style={{ width: '100%', padding: '8px', backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '6px', color: '#fff' }}>
                {filteredFonts.map(font => (
                  <option key={font.name} value={font.name}>{font.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/*  */}
          <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', padding: '15px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>EXPORT EMBED COMPONENT CODE</span>
              <button onClick={handleCopy} style={{ background: 'none', border: '1px solid #38bdf8', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>{copyState}</button>
            </div>
            <pre style={{ margin: '0 0 10px 0', fontFamily: 'monospace', fontSize: '11px', color: '#64748b', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>{generatedHtmlSnippet}</pre>
            <pre style={{ margin: '0', fontFamily: 'monospace', fontSize: '13px', color: '#34d399', overflowX: 'auto' }}>{generatedCssSnippet}</pre>
          </div>
        </section>

        {/*  */}
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', margin: '0' }}>Interactive Type Rendering Canvas</h3>
            {/* Structural filter toggle cluster buttons */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {['ALL', 'SANS-SERIF', 'SERIF', 'MONOSPACE'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => { setFilterCategory(cat); setSelectedFamily(fontDatabase.find(f => cat === 'ALL' || f.category === cat).name); }} 
                  style={{ border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: filterCategory === cat ? '#38bdf8' : '#1e293b', color: filterCategory === cat ? '#090d16' : '#94a3b8' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/*  */}
          <div style={{ flexGrow: '1', backgroundColor: '#0f172a', border: '1px dashed #334155', borderRadius: '16px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <p style={{
              margin: '0',
              fontFamily: `'${currentFont.name}', ${currentFont.fallback}`,
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
              fontWeight: fontWeight,
              transition: 'all 0.05s linear',
              textAlign: 'center',
              wordBreak: 'break-word',
              width: '100%'
            }}>
              {previewText || 'Enter text string sample...'}
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
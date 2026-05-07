'use client';

import { useState } from 'react';

const signatureHtml = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #1a1a1a;">
  <tr>
    <td style="padding-right: 18px; border-right: 3px solid #00D9FF; vertical-align: top;">
      <img src="https://shreyasgupta.co.in/profile.jpg" width="80" height="80" alt="Shreyas Gupta" style="border-radius: 50%; display: block; object-fit: cover;" />
    </td>
    <td style="padding-left: 18px; vertical-align: top;">
      <div style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 2px; letter-spacing: -0.3px;">Shreyas Gupta</div>
      <div style="font-size: 11.5px; color: #0891b2; font-weight: 600; margin-bottom: 10px;">Agile Delivery Professional &nbsp;|&nbsp; Scrum Master &nbsp;|&nbsp; Salesforce GTM Systems</div>
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size: 12px; color: #4b5563; padding-bottom: 4px;">
            ✉&nbsp;<a href="mailto:work@shreyasgupta.co.in" style="color: #4b5563; text-decoration: none;">work@shreyasgupta.co.in</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            ✆&nbsp;<a href="tel:+919560483058" style="color: #4b5563; text-decoration: none;">+91 95604 83058</a>
          </td>
        </tr>
        <tr>
          <td style="font-size: 12px; color: #4b5563; padding-bottom: 10px;">
            🌐&nbsp;<a href="https://shreyasgupta.co.in" style="color: #4b5563; text-decoration: none;">shreyasgupta.co.in</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            📍&nbsp;Delhi, India
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.linkedin.com/in/shreyasgupta99/" style="display: inline-block; font-size: 11px; color: #ffffff; background-color: #0077B5; padding: 4px 12px; border-radius: 3px; text-decoration: none; font-weight: 600; margin-right: 6px;">LinkedIn</a>
            <a href="https://www.salesforce.com/trailblazer/shreyasgupta" style="display: inline-block; font-size: 11px; color: #ffffff; background-color: #00A1E0; padding: 4px 12px; border-radius: 3px; text-decoration: none; font-weight: 600;">Trailblazer</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

export default function EmailSignature() {
  const [copied, setCopied] = useState(false);

  const copyHtml = () => {
    navigator.clipboard.writeText(signatureHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f1f5f9', minHeight: '100vh', padding: '40px 20px' }}>

      {/* Header */}
      <div style={{ maxWidth: '700px', margin: '0 auto 32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>Email Signature</h1>
        <p style={{ color: '#64748b', fontSize: '14px' }}>Preview your signature below, then copy the HTML and paste it into your email client.</p>
      </div>

      {/* Preview */}
      <div style={{ maxWidth: '700px', margin: '0 auto 24px', background: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        <p style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: '20px' }}>Preview</p>
        <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
      </div>

      {/* Copy Button */}
      <div style={{ maxWidth: '700px', margin: '0 auto 32px', textAlign: 'center' }}>
        <button
          onClick={copyHtml}
          style={{
            padding: '12px 32px',
            background: copied ? '#059669' : '#0f172a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Signature HTML'}
        </button>
      </div>

      {/* Setup Instructions */}
      <div style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>

        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <p style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>Gmail</p>
          <ol style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.8', paddingLeft: '18px', margin: 0 }}>
            <li>Open Gmail → Settings (⚙️) → <strong>See all settings</strong></li>
            <li>Go to the <strong>General</strong> tab</li>
            <li>Scroll to <strong>Signature</strong> → Create new</li>
            <li>Click the <strong>&lt;&gt;</strong> (HTML) icon in the toolbar</li>
            <li>Paste the copied HTML → Save</li>
          </ol>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <p style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>Outlook</p>
          <ol style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.8', paddingLeft: '18px', margin: 0 }}>
            <li>Open Outlook → <strong>File → Options</strong></li>
            <li>Go to <strong>Mail → Signatures</strong></li>
            <li>Click <strong>New</strong> and name your signature</li>
            <li>Open Notepad, paste the HTML, save as <strong>.htm</strong></li>
            <li>In the signature editor click <strong>Insert → File</strong> and select the .htm file</li>
          </ol>
        </div>

      </div>

      <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '12px', color: '#94a3b8' }}>
        Note: The profile photo loads from shreyasgupta.co.in. Make sure the site is live for it to appear in emails.
      </p>
    </div>
  );
}

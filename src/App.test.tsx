export default function App() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #000, #07070a)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px', color: '#ff2a2a' }}>✓ React is Working!</h1>
        <p style={{ fontSize: '1.2rem', margin: '20px 0', color: 'rgba(255,255,255,0.7)' }}>
          The app's React rendering is functioning properly.
        </p>
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          maxWidth: '500px',
          textAlign: 'left'
        }}>
          <h2 style={{ color: '#ff2a2a', marginTop: 0 }}>Next Steps:</h2>
          <ol style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <li>Check browser console (F12) for any JavaScript errors</li>
            <li>Verify all assets (CSS, images) are loading (Network tab)</li>
            <li>Check if there are any 404 errors</li>
            <li>Look for CORS or module loading errors</li>
          </ol>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: 'rgba(255,42,42,0.1)',
          border: '1px solid rgba(255,42,42,0.3)',
          borderRadius: '8px',
          maxWidth: '500px'
        }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>
            <strong>If you see this message:</strong> React is working. The white screen issue is likely in a specific component or CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

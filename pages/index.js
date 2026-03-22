export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>ATM Tracking System</h1>

      <p>Welcome. System is starting...</p>

      <br />

      <button onClick={() => window.location.href='/tracking'}>
        Tracking Page
      </button>

      <br /><br />

      <button onClick={() => window.location.href='/summary'}>
        Summary Page
      </button>

      <br /><br />

      <button onClick={() => window.location.href='/admin'}>
        Admin Panel
      </button>
    </div>
  );
}

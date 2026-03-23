import { useState } from 'react';

export default function Summary() {
  const [atm, setAtm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [reporter, setReporter] = useState('');
  const [phone, setPhone] = useState('');
  const [engineer, setEngineer] = useState('');
  const [output, setOutput] = useState('');

  const generateSummary = () => {
    const formatted = `
*SECONDLINE MAINTENANCE ${date} ${time}hrs*

*${category}*

(01) ATM ${atm} ${location} *${error}* @${time} ${date} ${reporter} *${phone}* ${engineer ? `*Engineer assigned ${engineer}*` : ''}
    `;

    setOutput(formatted);
  };

  const sendToWhatsApp = () => {
    const encoded = encodeURIComponent(output);
    window.open(`https://wa.me/?text=${encoded}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Summary Generator</h2>

      <input placeholder="ATM ID (e.g 85)" onChange={e => setAtm(e.target.value)} /><br /><br />
      <input placeholder="Location (e.g Mansa branch)" onChange={e => setLocation(e.target.value)} /><br /><br />

      <select onChange={e => setCategory(e.target.value)}>
        <option>Select Category</option>
        <option>PHYSICAL SECURITY</option>
        <option>CRES ISSUES</option>
        <option>IT ISSUES</option>
      </select><br /><br />

      <input placeholder="Error (e.g Screen off)" onChange={e => setError(e.target.value)} /><br /><br />

      <input placeholder="Time (e.g 08:53)" onChange={e => setTime(e.target.value)} /><br /><br />
      <input placeholder="Date (e.g 22-03-26)" onChange={e => setDate(e.target.value)} /><br /><br />

      <input placeholder="Reporter Name" onChange={e => setReporter(e.target.value)} /><br /><br />
      <input placeholder="Phone Number" onChange={e => setPhone(e.target.value)} /><br /><br />

      <input placeholder="Engineer (optional)" onChange={e => setEngineer(e.target.value)} /><br /><br />

      <button onClick={generateSummary}>Generate Summary</button>

      <br /><br />

      <textarea value={output} rows={10} cols={50} readOnly />

      <br /><br />

      <button onClick={sendToWhatsApp}>Send to WhatsApp</button>
    </div>
  );
}

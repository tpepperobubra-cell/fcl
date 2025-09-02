export default function Hero() {
  return (
    <section style={{ padding: '3.5rem 0', background: '#fff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 24, alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: 34, margin: 0 }}>Your Fire Claim, Fought & Paid — Fast.</h1>
          <p style={{ marginTop: 12, color: '#555' }}>
            Insurance will try to underpay. We make sure you recover every dollar.
          </p>
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <a href="/contact" className="cta">Get Free Claim Help</a>
            <a href="/resources">Free Guides</a>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }}>🏨 Hotel Money</div>
            <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }}>📦 Contents Paid</div>
            <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 8 }}>🔨 Repairs Covered</div>
          </div>
          <div className="trust">
            FL License # A161638 • No Recovery, No Fee • 1900+ homes built
          </div>
        </div>
        <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
          <div style={{ width: '100%', height: 260, background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Emotional Photo Banner
          </div>
        </div>
      </div>
    </section>
  );
              }

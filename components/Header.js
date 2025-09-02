import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: '#fff' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, background: '#c00000', borderRadius: 8, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
            FC
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>FireClaimsFL.com</div>
            <div style={{ fontSize: 12, color: '#666' }}>FL License A161638</div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Link href="/how-we-help">How We Help</Link>
          <Link href="/homeowners">Homeowners</Link>
          <Link href="/renters">Renters</Link>
          <Link href="/landlords">Landlords</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/why-us">Why Us</Link>
          <a className="cta" href="/contact">Call Now – Free Claim Review</a>
        </nav>
      </div>
    </header>
  );
              }

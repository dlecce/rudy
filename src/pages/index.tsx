import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import CiboSection from '../components/sections/Cibo';
import AcquaSection from '../components/sections/Acqua';
import LettieraSection from '../components/sections/Lettiera';
import PeloSection from '../components/sections/Pelo';
import AriaCaldoSection from '../components/sections/AriaCaldo';
import GiochiSection from '../components/sections/Giochi';
import CalendarioSection from '../components/sections/Calendario';
import WiFiSection from '../components/sections/Wifi';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Cura di Rudy"
    >
      <main className="container">
        <CalendarioSection />
        <hr />
        <CiboSection />
        <hr />
        <AcquaSection />
        <hr />
        <LettieraSection />
        <hr />
        <PeloSection />
        <hr />
        <AriaCaldoSection />
        <hr />
        <GiochiSection />
        <hr />
        <WiFiSection />
      </main>
    </Layout>
  );
}

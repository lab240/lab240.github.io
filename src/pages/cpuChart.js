import React from 'react';
import Layout from '@theme/Layout';
import CpuChart from '../components/CpuChart/index'; // Путь к вашему компоненту

function Home() {
  return (
    <Layout>
      <main>
        <CpuChart />
      </main>
    </Layout>
  );
}

export default Home;

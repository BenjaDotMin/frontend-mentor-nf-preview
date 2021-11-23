import Head from 'next/head';
import Link from "next/link";
import Card from '../components/Card';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (

    //use class from css module
    <div className={styles.container}>
      <Head>
        <title>NF preview</title>
        <meta name="description" content="NF preview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* use component, pass in data */}
      <Card name="Some data"></Card>

    </div>
  )
};

import '../styles/global.scss';

import React, { useState } from 'react';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContexProvider, PlayerContext } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContexProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContexProvider>
  )
}

export default MyApp

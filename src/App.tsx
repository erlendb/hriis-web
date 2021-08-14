import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cabins from "./components/Cabins/Cabins";
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div>
      <Grid container justifyContent='center'>
        <Grid item container xs={12} sm={8} md={6}>
          <div className={styles.container}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={12}>
                <About />
              </Grid>
              <Grid item xs={12}>
                <Contact />
              </Grid>
              <Grid item xs={12}>
                <Cabins />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

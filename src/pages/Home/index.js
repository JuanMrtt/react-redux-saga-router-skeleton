import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import styles from './style';
import { MovieIcon } from '../../icons';

export default ({ history }) => {
    console.log(history)
    const [searchText, setSearchText] = useState('')
    const classes = styles();
    const handleSearchTextChange = e => {
        setSearchText(e.target.value);
    }
    const handleCleanTextClick = e => {
        setSearchText('');
    }
    const handleSearchTextClick = e => {
        history.push(`/results?movieName=${searchText}`)
    }



    return (
        (<Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido!</Typography>
                    </Grid>
                    <Grid>
                        <label><MovieIcon className={classes.MovieIcon}></MovieIcon></label>
                    </Grid>
                </Grid>

                <TextField
                    value={searchText}
                    placeholder='Buscar...'
                    onChange={handleSearchTextChange}
                    className={classes.textFieldSearch} />
                <Grid className={classes.buttonContainer}>
                    <Button variant='contained' onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant='contained' className={classes.searchButton} color='primary' size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>

            </Card>
        </Container>)
    )
}
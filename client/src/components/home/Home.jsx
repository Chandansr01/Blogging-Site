import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
// import Posts from './post/Posts';

const Home = () => {

    return (
        <div>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    POSTS
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
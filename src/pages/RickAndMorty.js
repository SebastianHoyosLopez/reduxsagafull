import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StarButton from '../components/StarButton';
import { setFavorite } from '../redux/modules/rickAndMorty/actions';
import { getCharacters } from '../redux/modules/rickAndMorty/selectors'

const RickAndMorty = () => {
  const dispatch = useDispatch()

  const handleOnFavorite = (id) => {
    dispatch(setFavorite( id ));
  };


  const characters = useSelector(getCharacters);
  console.log(characters)
  return (
    <>
      {characters.map((character, index) => (
       <Card sx={{ maxWidth: 345 }} key={index}> 
        <CardMedia
          component="img"
          height="140"
          image={character.image}
          alt="green iguana"
        />  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${character.gender} -- ${character.species} -- ${character.status}`}
        </Typography>
      </CardContent>
      <CardActions>
        <StarButton favorite={character.favorite} onClick={() => handleOnFavorite(character.id)} />
      </CardActions>
    </Card>
      ))}
    </>
  )
}

export default RickAndMorty
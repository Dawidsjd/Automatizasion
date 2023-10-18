import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const fetchData = async () => {
    if (!searchClicked) return;

    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes${query && `&q=${query}`}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c1fa8c4c47mshc735e397e60a5dfp16d672jsn213805a23649',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setSearchClicked(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const handleSearch = () => {
    setSearchClicked(true);
    fetchData();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Tasty Recipes</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..." 
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {recipes.map(recipe => (
          <Card key={recipe.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              {recipe.thumbnail_url && <CardMedia
                component="img"
                height="140"
                image={recipe.thumbnail_url}
              />}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.2em', lineHeight: '1.4', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {recipe.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxHeight: '2.4em' }}>
                  {recipe.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;

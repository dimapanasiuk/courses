/* eslint-disable*/

import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Card  } from 'antd';
import { useSelector } from "react-redux";

import NavBar from '../../components/NavBar';
import DataServices from '../../API/index'
import {getLastStrItem} from '../../utils';

import './Characters.styles.css'

const { Meta } = Card;

const Characters = () => {
    const episodeId = useSelector((state) => state.menuItem);
    const [characters, setCharacters] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    
    useEffect(() => {

        DataServices.getEpisodesById(episodeId)
            .then(data => {
                const ids = data.characters.map(item => getLastStrItem(item, '/'));
                DataServices.getCharacterById(ids)
                    .then(res => setCharacters(res))
            })

        if(!episodes.length) {
            DataServices.getAllEpisodes()
            .then(res => setEpisodes(res.results))
        }

    },[episodeId])

    const ourCharacters = characters && characters.map(character => 
        <Link className="card-link" key={character.id} to={`/characters/${character.id}`}>
            <Card className="card-info"
                hoverable
                cover={<img alt="example" src={character.image} />}
            >
                <Meta title={character.name} description={`status: ${character.status}`} />
            </Card>
        </Link>); 

    return (
        <div className="characters-container">
            <div>
                <NavBar episodes={episodes}/>
            </div>
            <div> 
                {characters ? 
                    <div className="cards-container">{ourCharacters}</div> :
                    <h1>Loading</h1>
                }
            </div>
        </div>
    );
}

export default Characters;
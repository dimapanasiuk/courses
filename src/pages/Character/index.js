import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Image, Alert } from 'antd';

import DataServices from '../../API/index'

import './Character.styles.css';

const Character = () => {
    let params = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        DataServices.getCharacterById(params.characterId)
        .then(data => setCharacter(data));
    }, [params])
    

    return (<>
        <Image src={character.image}/>
        <h1>Character {params.characterId}</h1>

        <div className="status-container">
            <h1>Status</h1>
            <Alert message={character.status} type="warning" />
        </div>

    </>);
}

export default Character;
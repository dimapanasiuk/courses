/* eslint-disable*/

import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Card  } from 'antd';

import DataServices from '../../API/index'

import '../Characters'


const { Meta } = Card;

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [characters, setCharacters] = useState(null)
    
    
    useEffect(() => {
        DataServices.getCharacters(currentPage)
            .then(res => {
                const {results, info} = res;
                setCharacters(results)
                setPages(info.pages)
            });  
    }, [currentPage])

    const onPageChange = (page) => setCurrentPage(page);

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
                <div className="pagination">
                    <Pagination defaultCurrent={currentPage} total={pages} defaultPageSize={1} onChange={onPageChange}/>
                </div>
            
                {characters ? 
                    <div className="cards-container">{ourCharacters}</div> :
                    <h1>Loading</h1>
                }
            </div>
        </div>
    );
}

export default Home;

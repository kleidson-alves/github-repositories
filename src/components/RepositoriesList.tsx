import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import '../styles/RepositoriesList.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

const RepositoriesList = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/kleidson-alves/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <div>
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => <ListItem key={repository.name} repository={repository} />)}
            </ul>
        </div>
    );
}

export default RepositoriesList;

interface ListItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

const ListItem = (props: ListItemProps) => {
    return (
        <a href={props.repository.html_url} target='_blank'>
            <li>
                <h2>{props.repository.name}</h2>
                <p>{props.repository.description}</p>
            </li>
        </a>
    );
}

export default ListItem;
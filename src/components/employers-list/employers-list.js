import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({ data, onDelete, onToggleProp }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                const { id, ...itemProps } = item;
                return (
                    <EmployersListItem
                        key={id}
                        onDelete={() => onDelete(id)}
                        {...itemProps}
                        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    />
                )
            })}
        </ul>
    )
}

export default EmployersList;
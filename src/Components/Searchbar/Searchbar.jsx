import PropTypes from 'prop-types';
import { Header, Bar, BtnSubmit, InptField } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {

    return (
        <Header>
            <Bar onSubmit={e => {
                e.preventDefault();
                onSubmit(e.target.elements.searchInput.value);
            }}>

            <BtnSubmit type="submit">
            </BtnSubmit>

            <InptField
                name="searchInput"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            </Bar>
        </Header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
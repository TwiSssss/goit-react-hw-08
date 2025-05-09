import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.filter);
    const changeFilters = (event) => {
        const filterValue = event.target.value.trim();
        dispatch(changeFilter(filterValue));
    };
    return (
        <div className={style.searchBox}>
            <p>Find contacts by name </p>
            <input className={style.searchBoxInput} type="text" value={filter} name="filter" onChange={changeFilters} />
        </div>
    );

};

export default SearchBox;

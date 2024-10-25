
import {BLACK, WHITE} from "../../constants/apiConfig.ts";
import {changeTheme} from "../../features/weather/weatherSlice.ts";
import {AppDispatch} from "../../store/store.ts";
import {useDispatch} from "react-redux";
import {HeaderProps} from "../../types/weatherTypes.ts";

const ThemeButton = ({theme}:HeaderProps) => {

    const dispatch: AppDispatch = useDispatch()

    const handleChangeTheme = ()=>{
        dispatch(changeTheme(theme === WHITE ? BLACK : WHITE));
    }
    return (
        <div>
            <button onClick={handleChangeTheme}
                    className={'px-4 py-2 rounded-md transition-colors duration-300 bg-gray-800 text-gray-400'}> {theme === WHITE ? `${BLACK}` : `${WHITE}`} </button>
        </div>
    );
};

export default ThemeButton;
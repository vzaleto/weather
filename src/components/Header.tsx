
import ThemeButton from "./Buttons/ThemeButton.tsx";
import {HeaderProps} from "../types/weatherTypes.ts";
import Title from "./Layout/Title.tsx";


const Header = ({theme}:HeaderProps) => {
    return (
        <div className={'flex justify-between flex-row py-2'}>
           <Title theme={theme} />
            <ThemeButton theme={theme} />
        </div>
    );
};

export default Header;
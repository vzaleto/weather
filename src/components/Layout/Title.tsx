import {HeaderProps} from "../../types/weatherTypes.ts";
import {WHITE} from "../../constants/apiConfig.ts";

const Title = ({theme}:HeaderProps) => {
    return (
            <h1 className={` text-3xl font-semibold ${theme === WHITE ?  'color-text-black' : 'color-text-white'} `}> Weather </h1>
    );
};

export default Title;
import {CardProps} from "../tools/types";
import imgScr from "../assets/img/card-img.png";

export const Card = ({title, description, id}: CardProps) => {
    return (
        <div className="container-card">
            <div className="container-card-img">
                <img src={imgScr} alt="img" width={178} height={145}/>
                <p>{id}</p>
            </div>
            <h4 className="container-card__title">{title}</h4>
            <p className="container-card__description">{description}</p>
        </div>
    );
};

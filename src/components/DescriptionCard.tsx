import {DescriptionsCardProps} from "../tools/types";

export const DescriptionCard = ({description, id}: DescriptionsCardProps) => {
    return (
        <div className="container-description-card">
            <p className="container-description-card__item">{description}</p>
        </div>
    );
};

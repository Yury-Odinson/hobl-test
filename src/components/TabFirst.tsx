import icon from "../assets/img/tab-icon.png";
import buttonIcon from "../assets/img/tab-button.png";
import buttonOpen from "../assets/img/tab-open.png";

export const TabFirst = () => {
    return (
        <div className="tab">
            <img src={icon} alt="icon" width={80} height={80}/>
            <div className="tab-answer">
                <p>
                    ХОБЛ болеют <span>преимущественно мужчины?</span>
                </p>
                <img src={buttonIcon} alt="icon"/>
            </div>

            <div className="tab-description">
                <p className="tab-description__item">В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
                    (COPDGene) среди пациентов с ХОБЛ,
                    диагностированной до 55 лет, было выявлено преобладание...</p>
                <div className="tab-description__blur"/>
            </div>

            <img src={buttonOpen} className="tab-open" alt="open tab" width={48} height={48}/>

        </div>
    );
};

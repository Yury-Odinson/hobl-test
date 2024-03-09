import icon from "../assets/img/tab-icon-2.png";
import buttonIcon from "../assets/img/tab-button.png";
import buttonOpen from "../assets/img/tab-open-2.png";

export const TabSecond = () => {
    return (
        <div>
            <div className="tab">
                <img src={icon} alt="icon" width={80} height={80}/>
                <div className="tab-answer">
                    <p>
                        <span>Опасно </span>
                        не наличие заболевания, а обострения?
                    </p>
                    <img src={buttonIcon} alt="icon"/>
                </div>

                <div className="tab-description">
                    <p className="tab-description__item">Большинство пациентов с ХОБЛ столкнется с обострениями: как
                        минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
                    <div className="tab-description__blur"/>
                </div>

                <img src={buttonOpen} className="tab-open" alt="open tab" width={48} height={48}/>

            </div>
        </div>
    );
};

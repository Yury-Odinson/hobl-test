import {cards, descriptionsCards} from "../tools/utils";
import {Card} from "./Card";
import {CardProps, DescriptionsCardProps} from "../tools/types";
import {DescriptionCard} from "./DescriptionCard";
import arrow from "../assets/img/arrow.png";
import {useState} from "react";
import icon from "../assets/img/tab-icon.png";
import buttonIcon from "../assets/img/tab-button.png";
import buttonOpen from "../assets/img/tab-open.png";
import buttonOpen2 from "../assets/img/tab-open-2.png";
import {Modal} from "./Modal";

export const Main = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [typeModal, setTypeModal] = useState<string>("");

    const toggleModal = (type: string) => {
        setIsModalVisible(!isModalVisible);
        setTypeModal(type);
    };

    return (
        <div className="container">
            <div className="container-title">
                <h1 className="container-title__item">ХОБЛ: мифы и реальность</h1>
            </div>

            <div className="container-tabs">

                <div className="tab" onClick={() => toggleModal("first")}>
                    <img src={icon} alt="icon" width={80} height={80}/>
                    <div className="tab-answer">
                        <p>
                            ХОБЛ болеют <span>преимущественно мужчины?</span>
                        </p>
                        <img src={buttonIcon} alt="icon"/>
                    </div>
                    <div className="tab-description">
                        <p className="tab-description__item">В десятилетнем исследовании «Генетическая эпидемиология
                            ХОБЛ»
                            (COPDGene) среди пациентов с ХОБЛ,
                            диагностированной до 55 лет, было выявлено преобладание...</p>
                        <div className="tab-description__blur"/>
                    </div>
                    <img src={buttonOpen} className="tab-open" alt="open tab" width={48} height={48}/>
                </div>

                <div className="tab" onClick={() => toggleModal("second")}>
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
                    <img src={buttonOpen2} className="tab-open" alt="open tab" width={48} height={48}/>
                </div>
            </div>

            <div className="container-title">
                <h1 className="container-title__item">Терапия ХОБЛ: что в фокусе?</h1>
            </div>

            <div className="container-separator">
                <h2>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h2>
            </div>

            <h3>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ&sup1;:</h3>

            <div className="container-cards">
                {cards.map((element: CardProps) => {
                    return (
                        <Card title={element.title} description={element.description} id={element.id} key={element.id}/>
                    )
                })}

                <div className="container-arrows">
                    <img className="container-arrows__item" src={arrow} alt="arrow" width={425} height={54}/>
                    <img className="container-arrows__item" src={arrow} alt="arrow" width={425} height={54}/>
                </div>

                {descriptionsCards.map((element: DescriptionsCardProps) => {
                    return (
                        <DescriptionCard description={element.description} id={element.id} key={element.id}/>
                    )
                })}
            </div>

            {isModalVisible && <Modal toggle={toggleModal} type={typeModal}/>}

        </div>
    );
};

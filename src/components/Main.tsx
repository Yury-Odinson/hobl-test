import {TabFirst} from "./TabFirst";
import {TabSecond} from "./TabSecond";
import {cards, descriptionsCards} from "../tools/utils";
import {Card} from "./Card";
import {CardProps, DescriptionsCardProps} from "../tools/types";
import {DescriptionCard} from "./DescriptionCard";
import arrow from "../assets/img/arrow.png";

export const Main = () => {


    return (
        <div className="container">
            <div className="container-title">
                <h1 className="container-title__item">ХОБЛ: мифы и реальность</h1>
            </div>

            <div className="container-tabs">
                <TabFirst/>
                <TabSecond/>
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
                    <img className="container-arrows__item" src={arrow} alt="arrow" width={425} height={54} />
                    <img className="container-arrows__item" src={arrow} alt="arrow" width={425} height={54} />
                </div>


                {descriptionsCards.map((element: DescriptionsCardProps) => {
                    return (
                        <DescriptionCard description={element.description} id={element.id} key={element.id}/>
                    )
                })}
            </div>

        </div>
    );
};

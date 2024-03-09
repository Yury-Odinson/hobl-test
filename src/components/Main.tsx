import {TabFirst} from "./TabFirst";
import {TabSecond} from "./TabSecond";

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

        </div>
    );
};

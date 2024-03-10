import {ModalProps} from "../tools/types";
import {useState} from "react";
import diagram from "../assets/img/diagram.png";
import slide1 from "../assets/img/slide-1.png";
import slide2 from "../assets/img/slide-2.png";
import slide3 from "../assets/img/slide-3.png";

export const Modal = ({toggle, type}: ModalProps) => {

    const [typeModal, setTypeModal] = useState<string>(type);

    const handlerCloseModal = () => toggle(false);

    const choseModal = () => {
        if (typeModal === "first") {
            return (
                <div className="modal">
                    <p>
                        В десятилетнем исследовании <strong>«Генетическая эпидемиология ХОБЛ» (COPDGene)</strong> среди
                        пациентов с ХОБЛ,
                        диагностированной до 55 лет, было выявлено <strong>преобладание женщин (66%),</strong> а в
                        возрасте
                        60-64 лет
                        количество женщин и мужчин.
                    </p>
                    <p>
                        Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что
                        дыхательные
                        пути курящих женщин имеют более <strong>высокий процент площади стенок,</strong> но меньшую
                        площадь
                        просвета,
                        внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
                    </p>

                    <img src={diagram} alt="diagram"/>

                </div>
            );
        } else {
            return (
                <div className="modal">
                    <p>
                        <strong>
                            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или
                            тяжелое обострение случится в течение 3 лет у 77% пациентов1.
                        </strong>
                    </p>
                    <p>
                        В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.2
                        Прогноз
                        после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и
                        некоторых
                        злокачественных опухолях.
                    </p>
                    <h3>Пятилетняя выживаемость пациентов</h3>
                    <div className="modal-images">
                        <img src={slide1} alt="slide 1"/>
                        <img src={slide2} alt="slide 2"/>
                        <img src={slide3} alt="slide 3"/>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <div className="modal-background" onClick={handlerCloseModal}/>
            {choseModal()}
        </>
    );
};

import {CardProps, DescriptionsCardProps} from "./types";

export const cards: CardProps[] = [
    {
        title: "Ингаляционный антихолинергик",
        description: `Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов¹`,
        id: 1
    },
    {
        title: "Ингаляционный β2-агонист",
        description: `Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции`,
        id: 2
    },
    {
        title: "Ингаляционный глюкокортикостероид (ИГКС)",
        description: `Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей`,
        id: 3
    }
];

export const descriptionsCards: DescriptionsCardProps[] = [
    {
        description: "Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;\n" +
            "Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга¹.",
        id: 1
    },
    {
        description: "Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;\n" +
            "Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)¹.",
        id: 2
    }
];

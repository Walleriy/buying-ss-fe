import './about.css'

export const About = () => {
    return (
        <div className="about">
            <h1>Система підтримки придбання комп'ютерних комплектуючих</h1>
            <h2>Support system for buying computer components</h2>
            <footer>
                <div className="about__author">
                    Виконав: <span className="about__person">
                        Степаненко Валерій Вікторович
                    </span>
                </div>
                <div className="about__head">
                    Науковий керівник: доцент кафедри АСУ <span className="about__person">
                        Батюк Анатолій Євгенович
                    </span>
                </div>
                <div className="about__year">Львів 2021</div>
            </footer>
        </div>
    )
}
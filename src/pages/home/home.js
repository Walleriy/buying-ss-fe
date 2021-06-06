import {NavLink} from "react-router-dom";
import './home.css'
import processorPhoto from './processor.png'

export const Home = () => {
    return (
        <div className="home">
            <NavLink to="/processors" className="home__category">
                <h4>Процесори</h4>
                <img src={processorPhoto} alt="processor"/>
            </NavLink>
            <NavLink to="/videocards" className="home__category">
                <h4>Відеокарти</h4>
                <img src="https://itechua.com/wp-content/uploads/2020/08/%D0%92%D1%96%D0%B4%D0%B5%D0%BE%D0%BA%D0%B0%D1%80%D1%82%D0%B0-Intel-1280x720.jpg" alt="Video_card"/>
            </NavLink>
        </div>
    )
}
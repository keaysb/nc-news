import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter"
import { useContext } from "react";
import { TopicContext } from "./TopicContext"
import navbarStyles from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function TopicItem({topic, isDropdownHidden}){
    const {setCurrentArticlesTopic} = useContext(TopicContext);
    
    const handleOnClick = () => {
        setCurrentArticlesTopic(`?topic=${topic.slug}`)
    }

    return (
    <Link className={`navbar-item ${navbarStyles.p} ${isDropdownHidden}`} onClick={handleOnClick} to="/">
        {capitaliseFirstLetter(topic.slug)}
    </Link>
    )
}
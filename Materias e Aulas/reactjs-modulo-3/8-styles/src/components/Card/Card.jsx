import CardStyle from './Card.module.css';

export function Card({title, children}) {
    return (
        <div className={CardStyle.root}>
            <h2 className={CardStyle.title}>{title}</h2>
            <div>{children}</div>
        </div>
    )
}
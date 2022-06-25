import style from '../Container/Container.module.css'

export const Container = ({ children }) => {
    return <div className={style.Container}>{children}</div>;
  };
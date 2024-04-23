import styles from './Beer.module.css';

const Beer = ({ beer }) => {
  return (
    <ul className={styles.beerlist}>
      <li className={styles.beeritem}>
        <h3 className={styles.beertitle}>{beer.title}</h3>
        <div>{beer.description}</div>
        <div>{beer.alchool}</div>
      </li>
    </ul>
  );
};

export default Beer;

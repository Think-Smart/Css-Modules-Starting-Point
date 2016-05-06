import styles from './style.css'
const ComponentB = (name) => {
  return `<p class="${styles.myClass}">${name}, It's working! you are using now Css-Modules.</p>`;
}

export default ComponentB;

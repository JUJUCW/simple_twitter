import styles from './Button.module.scss'
import clsx from "clsx";
export default function Button ({ title, size, isAction }) {
  const buttonClassName = clsx(
    styles.button,
    {
      [styles.circle]: size === 'circle',
      [styles.small]: size === 'small',
      [styles.middle]: size === 'middle',
      [styles.navTweet]: size === 'navTweet',
      [styles.large]: size === 'large',
      [styles.action]: isAction,
    }
  );
  return (
    <button className={buttonClassName}>{title}</button>
  )
}
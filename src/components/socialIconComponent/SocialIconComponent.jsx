export default function SocialIcon(props) {
  return (
    <li className={props.styleClass}>
      <a href={props.url} className={props.className}>
        <p>{props.icon}</p>
      </a>
    </li>
  );
}

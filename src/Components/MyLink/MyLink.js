const MyLink = (props) => {
  return (
    <a
      href={props.to}
      id={props.id}
      title={props.title}
      target={!props.target ? `${props.target}` : "_blank"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};
export default MyLink;

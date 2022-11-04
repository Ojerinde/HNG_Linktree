import slack from "../../assets/slack.png";
import github from "../../assets/github.png";

const Logos = () => {
  return (
    <div className="logo__box">
      <img src={slack} alt="Slack" className="logo__img" />
      <img src={github} alt="GitHub" className="logo__img" />
    </div>
  );
};
export default Logos;

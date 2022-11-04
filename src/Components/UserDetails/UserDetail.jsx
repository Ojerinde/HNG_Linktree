import myImg from "../../assets/img1.jpg";

const UserDetails = () => {
  // This is to hide the slack name
  const hidden = true;
  return (
    <>
      <figure className="profile__img--box">
        <img id="profile__img" src={myImg} alt="OjerindeJoel" />
      </figure>
      <p id="twitter">@Joel_Ojerinde</p>
      <p id="slack">{hidden ? "" : "JoelOjerinde"}</p>
    </>
  );
};
export default UserDetails;

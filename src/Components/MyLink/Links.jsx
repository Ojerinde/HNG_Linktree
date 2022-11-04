import MyLink from "../MyLink/MyLink";

const Links = () => {
  return (
    <div className="profile__links">
      <MyLink id="twitter__link" to="https://twitter.com/Joel_Ojerinde">
        Twitter
      </MyLink>
      <MyLink id="btn__zuri" to="https://training.zuri.team/">
        Get in touch with Zuri Team
      </MyLink>
      <MyLink
        id="books"
        to="http://books.zuri.team"
        title="Get detailed and self explanatory design and coding books here"
      >
        View Zuri Books
      </MyLink>
      <MyLink
        id="book__python"
        to="https://books.zuri.team/python-for-beginners?ref_id=victorojerinde"
        title="Get Python book for beginner"
      >
        View Python Books
      </MyLink>
      <MyLink
        id="pitch"
        to="https://background.zuri.team"
        title="Hire us to do the background check on coders"
      >
        Background Check for Coders
      </MyLink>
      <MyLink
        id="book__design"
        to="https://books.zuri.team/design-rules"
        title="Get a design book for free before it is too late"
      >
        Get free Design Books
      </MyLink>
      <MyLink id="contact" to="/contact">
        Contact me
      </MyLink>
    </div>
  );
};
export default Links;

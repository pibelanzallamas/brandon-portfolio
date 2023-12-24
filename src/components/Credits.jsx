function Credits() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p className="star top center">✨</p>
      <p className="credits top center">
        All Rights Reserved. Page designed by Brandon Castillo. 2023.
      </p>
      <div className="button-top top center">
        <button onClick={scrollToTop}>Top</button>
      </div>
    </div>
  );
}

export default Credits;

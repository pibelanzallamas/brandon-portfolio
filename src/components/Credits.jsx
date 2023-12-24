function Credits() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="credits-all">
      <p className="star">✨</p>
      <p className="credits">
        All Rights Reserved. Page designed by Brandon Castillo. 2023.
      </p>
      <div className="button-top">
        <button onClick={scrollToTop}>Top</button>
      </div>
    </div>
  );
}

export default Credits;

function Credits() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="star">✨</div>
      <div className="credits project-description">
        <p>All Rights Reserved. Page designed by Brandon Castillo. 2023.</p>
      </div>
      <div className="button-inicio">
        <a onClick={scrollToTop}>Top</a>
      </div>
    </div>
  );
}

export default Credits;

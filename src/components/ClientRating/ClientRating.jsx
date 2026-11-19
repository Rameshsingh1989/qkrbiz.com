export const ClientRating = ({ rating, maxStars = 5, size = "1rem" }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      const starValue = i;
      let starType;

      if (rating >= starValue) {
        starType = "full";
      } else if (rating >= starValue - 0.5) {
        starType = "half";
      } else {
        starType = "empty";
      }

      const starPath =
        "M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.857 1.402-8.168L.132 9.21l8.2-1.192z";

      stars.push(
        <span
          key={i}
          className="position-relative d-inline-block"
          style={{ width: size, height: size, lineHeight: 0 }}
        >
          {starType === "full" && (
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              className="text-warning-star position-absolute top-0 start-0"
              fill="currentColor"
            >
              <path d={starPath} />
            </svg>
          )}

          {starType === "half" && (
            <>
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                className="text-muted opacity-75 position-absolute top-0 start-0"
                fill="currentColor"
              >
                <path d={starPath} />
              </svg>
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                className="text-warning-star position-absolute top-0 start-0"
                fill="currentColor"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                <path d={starPath} />
              </svg>
            </>
          )}

          {starType === "empty" && (
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              className="text-muted opacity-75 position-absolute top-0 start-0"
              fill="currentColor"
            >
              <path d={starPath} />
            </svg>
          )}
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="d-flex" style={{ gap: "2px" }}>
      {renderStars()}
        {/* <ClientRating rating={4.5} size="1.75rem" />
        <ClientRating rating={4.5} size="2.5rem" />  */}
    </div>
  );
};


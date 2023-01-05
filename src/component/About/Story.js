import React from "react";

const Story = () => {
  return (
    <div class="row featurette mb-5">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Our Story</h2>
        <p>
          Information and technology have become an important part of our daily
          lives, but education still remains traditional. Js Mentor feels now is
          the right time to revolutionize technology in Bangladesh's education
          sector especially in IT and automation sector.
        </p>
        <p>
          Our course is designed to be user-friendly, easy-to-understand and
          enjoyable, with the idea of ​​doing something new. By combining
          experienced teachers and state-of-the-art technology, we have
          developed an experience that will play an important role in improving
          the quality of education.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          src="https://i.ibb.co/mqQ7ccP/team.jpg"
          width={400}
          height={400}
          alt="team holding flag"
        />
      </div>
    </div>
  );
};

export default Story;

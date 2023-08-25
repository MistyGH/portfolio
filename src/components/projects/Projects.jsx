import React from 'react'
import {useState} from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Gesture Recognition",
    description: [
      "Designed and implemented a high-performance Convolutional Neural Network (CNN) architecture utilizing convolutional, pooling, and fully connected layers.",
      "Utilized backpropagation with a cross-entropy loss function and SGD with momentum optimizer to train the CNN model effectively.",
      "Conducted extensive hyperparameter tuning, optimizing batch size, learning rate, and number of epochs to achieve superior accuracy during extrapolation.",
      "Incorporated transfer learning by leveraging pre-trained parameters from the torchvision AlexNet model, enhancing the testing and validation accuracy of the custom-designed CNN to surpass 97%."
    ],
    demo: "https://colab.research.google.com/drive/1nGeab14c8j5SPlHpS0tjoD0pcf09Hvkz?usp=sharing"
  },
  {
    id: 2,
    image: IMG2,
    title: "Ship Game - Unity2D",
    description: [
      "Created an enjoyable 2D video game in Unity using C#, delivering a mechanically challenging and engaging experience.",
      "Implemented enemy AI with intelligent obstacle avoidance and dynamic responses to enhance gameplay.",
      "Worked closely with a teammate, actively sharing ideas and contributing to all aspects of the game development process in a collaborative manner.",
      "Designed and implemented visually appealing game mechanics and animations, optimizing the player experience."
    ],
    demo: "https://github.com/MistyGH/ShipGame"
  },
  {
    id: 3,
    image: IMG3,
    title: "BioBlender",
    description: [
      "Co-developed an Android app that utilizes algorithms involving the OpenAI API to process the traits and characteristics of two input animals, generating a unique animal.",
      "Integrated the Serp API to produce an output image corresponding to the generated animal.",
      "Efficiently distributed tasks among the team members within the 36-hour time constraint to ensure timely completion.",
      "Employed Git for effective progress synchronization and collaboration throughout the development process."
    ],
    demo: "https://devpost.com/software/bioblender"
  },
  {
    id: 4,
    image: IMG4,
    title: "Rubik's Cube",
    description: [
      "Developed a program that allows users to interact with a virtual Rubik's cube in a 3D environment.",
      "Utilized various 2D Java libraries and advanced mathematical & programming algorithms to create an immersive 3D space.",
      "Created a user-friendly interface with intuitive controls for manipulating the Rubik's cube in real-time.",
      "Published the project on https://artinmolaeiforouhar.itch.io, along with another game I made."
    ],
    demo: "https://artinmolaeiforouhar.itch.io/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Bridge 3D Model",
    description: [
    "Led and coordinated ESP I project, ensuring successful completion of necessary deliverables.", 
    "Utilized Fusion 360 to model a 3D prototype of a redesign for Sidney Smith building's east facade.",
    "Collaborated with the engineering manager to incorporate architectural and design changes based on project requirements."],
    demo: "https://a360.co/3O2qOz2"
  },
  {
    id: 6,
    image: IMG6,
    title: "Sidney Smith Redesign",
    description: [
      "Led and coordinated ESP II project, ensuring successful completion of necessary deliverables.",
      "Designed a precise 3D model for a wooden bridge using Fusion 360 for implementation at Bruce's Mill Conservation Park.",
      "Constantly integrated feedback from the client to refine the 3D model and ensure it met their requirements."
    ],
    demo: "https://a360.co/3r6nyJJ"
  }
];

const Portfolio = () => {
  const [descriptionVisibility, setDescriptionVisibility] = useState({});
  
  const toggleDescriptionVisibility = (id) => {
    setDescriptionVisibility(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <h5 className={`description ${descriptionVisibility[id] ? '' : 'hidden'}`}>
              {description.map((point, index) => (
                <div key={index}>
                  <p className='point'>{`> ${point}`}</p>
                </div>
              ))}
            </h5>
            <div className="portfolio__item-cta">
              <h5
                className="description-toggle"
                onClick={() => toggleDescriptionVisibility(id)}
              >
                {descriptionVisibility[id] ? 'Hide Description' : 'Show Description'}
              </h5>
              <a href={demo} className="btn btn-primary" target="_blank">
                Check it Out!
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
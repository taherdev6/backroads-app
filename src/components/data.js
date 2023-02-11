import img1 from '../images/tour-1.jpeg';
import img2 from '../images/tour-2.jpeg';
import img3 from '../images/tour-3.jpeg';
import img4 from '../images/tour-4.jpeg';

const pages = ['home', 'about', 'services', 'tours', 'featured'];
const socials = ['facebook', 'twitter', 'squarespace'];

export const navPages = pages.map((page, i) => {
  if (page !== 'featured') {
    return (
      <li key={i + 1}>
        <a href={'#' + page} className="nav-link">
          {' '}
          {page}{' '}
        </a>
      </li>
    );
  }
});

export const footerPages = pages.map((page, i) => {
  if (page !== 'tours') {
    return (
      <li key={i + 1}>
        <a href={'#' + page} className="footer-link">
          {' '}
          {page}{' '}
        </a>
      </li>
    );
  }
});

export const socialLinks = socials.map((social, i) => {
  const link = `https://www.${social}.com`;
  const classStr = `fab fa-${social}`;
  return (
    <li key={i + 1}>
      <a href={link} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={classStr}></i>
      </a>
    </li>
  );
});

export const Title = (props) => {
  const { firstPart, secondPart } = props;
  return (
    <div className="section-title">
      <h2>
        {firstPart} <span>{secondPart}</span>
      </h2>
    </div>
  );
};

const serviceIcons = [
  {
    icon: 'wallet',
    title: 'Saving Money',
    id: '1',
  },
  {
    icon: 'tree',
    title: 'Endless Hiking',
    id: '2',
  },
  {
    icon: 'socks',
    title: 'Amazing Comfort',
    id: '3',
  },
];

export const services = serviceIcons.map((service, i) => {
  const icon = `fas fa-${service.icon} fa-fw`;
  return (
    <article className="service" key={service.id}>
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{service.title}</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          officia.
        </p>
      </div>
    </article>
  );
});

const toursData = [
  {
    img: img1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    location: 'china',
    length: '6',
    price: '$2100',
    id: '1',
  },
  {
    img: img2,
    date: 'october 1th, 2020',
    title: 'Best Of Java',
    location: 'Indonesia',
    length: '11',
    price: '$1400',
    id: '2',
  },
  {
    img: img3,
    date: 'september 15th, 2020',
    title: 'Explore Hong Kong',
    location: 'hong kong',
    length: '8',
    price: '$5000',
    id: '3',
  },
  {
    img: img4,
    date: 'december 5th, 2019',
    title: 'Kenya Highlights',
    location: 'kenya',
    length: '20',
    price: '$3300',
    id: '4',
  },
];

export const tours = toursData.map((tour) => {
  return (
    <article className="tour-card" key={tour.id}>
      <div className="tour-img-container">
        <img src={tour.img} className="tour-img" alt="" />
        <p className="tour-date">{tour.date}</p>
      </div>
      <div className="tour-info">
        <h4>{tour.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {tour.location}
          </p>
          <p>{tour.length} days</p>
          <p>from {tour.price}</p>
        </div>
      </div>
    </article>
  );
});

const PageLinks = (props) => {
  const { element, children } = props;
  return (
    <ul className={`${element}-links`} id={`${element}-links`}>
      {children}
    </ul>
  );
};

export const NavLinks = () => {
  return <PageLinks element="nav" children={navPages} />;
};

export const FooterLinks = () => {
  return <PageLinks element="footer" children={footerPages} />;
};

const SocialLinks = (props) => {
  const { element, children } = props;
  return <ul className={`${element}-icons`}>{children}</ul>;
};

export const NavSocialLinks = () => {
  return <SocialLinks element="nav" children={socialLinks} />;
};

export const FooterSocialLinks = () => {
  return <SocialLinks element="footer" children={socialLinks} />;
};

const ServicesAndTours = (props) => {
  const { sectionType, children } = props;
  return (
    <div className={`section-center ${sectionType}-center`}>{children}</div>
  );
};

export const ServiceList = () => {
  return <ServicesAndTours sectionType="service" children={services} />;
};

export const TourList = () => {
  return <ServicesAndTours sectionType="featured" children={tours} />;
};

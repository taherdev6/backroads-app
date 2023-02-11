import { Title } from './data';
import { ServiceList } from './data';
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstPart="our" secondPart="services" />
      <ServiceList />
    </section>
  );
};
export default Services;

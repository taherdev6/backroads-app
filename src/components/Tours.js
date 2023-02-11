import { Title } from './data';
import { TourList } from './data';
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstPart="featured" secondPart="tours" />

      <TourList />
    </section>
  );
};
export default Tours;

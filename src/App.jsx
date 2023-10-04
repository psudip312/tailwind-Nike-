import "./App.css";

function App() {
  // In essence, this code is defining padding styles for HTML elements with the class .padding. On screens larger than or equal to "sm" size, these elements will have a horizontal padding of px-16 and a vertical padding of py-24. On screens smaller than "sm," they will have a horizontal padding of px-8 and a vertical padding of py-12.
  return (
    <>
      Nav
      <section className="xl:padding-1 wide:padding-r padding-b">
        hellll
      </section>
      <section className="padding">Popular Products</section>
      <section className="padding">SuperQuality</section>
      <section className="padding-x py-10">Serives</section>
      <section className="padding">Special Offers</section>
      <section className="padding">customer Revier</section>
      <section className="padding">Subscribe</section>
      <section className="padding">Footer</section>
    </>
  );
}

export default App;

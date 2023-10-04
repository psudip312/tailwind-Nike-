import "./App.css";

function App() {
  // In essence, this code is defining padding styles for HTML elements with the class .padding. On screens larger than or equal to "sm" size, these elements will have a horizontal padding of px-16 and a vertical padding of py-24. On screens smaller than "sm," they will have a horizontal padding of px-8 and a vertical padding of py-12.
  return (
    <>
      <main className="relative">
        Nav
        <section className="xl:padding-1 wide:padding-r padding-b">
          hellll
        </section>
        <section className="padding">Popular Products</section>
        <section className="padding">SuperQuality</section>
        <section className="padding-x py-10">Serives</section>
        <section className="padding">Special Offers</section>
        <section className=" bg-pale-blue padding">customer Revier</section>
        <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
        <section className="bg-black padding-x padding-t pb-8 padding text-white">
          Footer
        </section>
      </main>
    </>
  );
}

export default App;

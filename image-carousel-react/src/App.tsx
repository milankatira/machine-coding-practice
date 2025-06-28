import Carousel from "./components/Carousel";

const images = [
  'https://picsum.photos/id/1018/1000/600/',
  'https://picsum.photos/id/1015/1000/600/',
  'https://picsum.photos/id/1019/1000/600/'
];

function App() {
  return (
    <div className="App">
      <Carousel images={images} autoplay={true} />
    </div>
  );
}

export default App;

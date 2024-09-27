import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Add this line
  
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <section id="productsSect">
      <div className="cardleft">
        <h3>Crafted with excellent material.</h3>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button>Explore</button>
      </div>

      <div className="addProduct">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="cards" key={item.id}>
              <img src={item.image} alt={item.title} />
              <span className="productTitle">{item.title}</span>
              <span className="price">${item.price}</span>
              <div className="afterCard"></div>
              <button onClick={() => navigate(`/detail/${item.id}`)} className="plus">+</button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

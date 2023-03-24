import banner from '../../assets/images/banner.png';
import CatItem from '../../components/ListItem';
import { useQuery } from 'react-query';
import { fetchCats } from '../../utils/fetcher';
import Header from '../../components/Header';


const Home = () => {
  const { data, isLoading } = useQuery('cats', fetchCats);

  return (
    <>
      <section className="presentation">
        <div className="container">
          <div>
            <h2>
              Adoção responsável de amigos felinos é aqui na UFSCat
            </h2>
            <p>
              Mais de 500 gatos já foram retirados das ruas e ganharam um novo lar e uma nova família.
              Nesse exato momento, existem milhares de gatinhos esperando um humano para chamar de seu. Você pode mudar o
              destino de um animal de rua.
              Não compre. Adote!
            </p>
            <a href="/adote" className="button">Quero Adotar!!!</a>
          </div>
          <img src={banner} alt="Banner Cats" />
        </div>
      </section>

      <main>
        <section className="cat-cards">
          {isLoading ? "Aguarde, os felinos estão chegando..." : data.map((cat) =>
            cat['reference_image_id'] !== undefined && <CatItem cat={cat} key={cat.id}/>
          )}
        </section>
      </main>
    </>
  )

}

export default Home;

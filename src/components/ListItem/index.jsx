import React, { useEffect, useState } from "react";
import loading from "../../assets/images/loading.gif";

const CatItem = ({ cat }) => {
  const { name, origin, temperament, reference_image_id } = cat;
  const [isLoading, setIsLoading] = useState(true);
  const [catImage, setCatImage] = useState({});

  const fetchImageCat = (catImageId) => {
    fetch(`https://api.thecatapi.com/v1/images/${catImageId}`)
      .then((res) => res.json())
      .then((data) => {
        setCatImage(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchImageCat(reference_image_id);
  }, []);

  return (
    <a href="#">
      <div className="cat-card">
        <div className="image">
          <img src={isLoading ? loading : catImage['url']} alt={`image of ${name} cat`} />
        </div>
        <div className="content">
          <p className="title text-md">
            {name} • {origin} • {temperament}
          </p>
          <div className="details">
            <p className="text-md">Femea</p>
            <p className="cat-card-action text-md">Adotar</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CatItem;

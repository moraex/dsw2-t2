import React from "react";
import default_cat from "../../assets/images/gato1.webp";

const ListItem = (cat) => {
    const {cat_name, cat_age, } = cat;
    return (
    <a href="#">
        <div className="cat-card">
            <div className="image">
            <img src={default_cat} />
            </div>
            <div className="content">
            <p className="title text-md">
                {"Default"} • 3 meses • abandonado na porta da Ong
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

export default ListItem;
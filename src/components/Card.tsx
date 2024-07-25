import React from "react";
import "@/assets/styles/scss/components/_cards.scss"; // Import the SCSS file

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, children }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        {children && <div className="card-children">{children}</div>}
      </div>
    </div>
  );
};

export default Card;

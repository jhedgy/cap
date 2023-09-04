import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const handleNavigation = () => navigate(route);

    return (
      <DirectoryItemContainer onClick={handleNavigation}>
        <BackgroundImage imageurl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </Body>
      </DirectoryItemContainer>
    );
}

export default DirectoryItem;
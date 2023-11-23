import { useNavigate } from "react-router-dom"
import { CategoryCardWrapper } from "./Category.styles"
import { BundleType } from "../../utils/types/types";


type CategoryCardProps = {
  data:BundleType
}
const CategoryCard:React.FC<CategoryCardProps> = ({data}) => {

const navigate =useNavigate()
  const handleGoToGroup=()=>{
    navigate(`bundle/${data._id}`)
  }

  return (
    <CategoryCardWrapper onClick={handleGoToGroup}>
        <img src={data.image} alt="category image" />
        <div className="nameBox">
        <p className="catName">{data.name}</p>
        </div>
    </CategoryCardWrapper>
  )
}

export default CategoryCard
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";


interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {

    const [likeVisible, setLikeVisible] = useState(false);
    const toggle = () => {
        setLikeVisible(prev => !prev)
        onClick();
    }

      return likeVisible === true ? <FcLike color='#ff6b81' size={40} onClick={toggle}/>
      : <FcLikePlaceholder color='#ff6b81' size={40} onClick={toggle}/>
 
};

export default Like;

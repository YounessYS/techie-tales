import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog38.jpg";

const PostInfo = () => {
  return (
    <section className="post-info">
      <div className="container post-info__container">
        <div className="post-info__header">
          <PostAuthor />
          <div className="post-info__buttons">
            <Link to={"/posts/fdsfds/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/fdsfds/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-info__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe
          dolore commodi, itaque sed consectetur et culpa excepturi omnis quae
          earum dolorum possimus accusantium soluta alias provident voluptatum.
          Asperiores natus neque perspiciatis nulla accusantium aspernatur
          pariatur ea inventore iste ex!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum autem
          incidunt recusandae quisquam itaque sit veritatis cum, commodi fuga
          suscipit harum atque ab eum quia et impedit dolores enim. Porro culpa,
          minima pariatur facere quibusdam voluptatibus, aut dolores id
          laboriosam excepturi adipisci. Nulla soluta, quaerat voluptas, iste
          impedit adipisci deleniti molestias veniam dicta at tempora.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque porro
          rem suscipit, cupiditate dolor nam at molestias, assumenda ab dolore
          non sit ut nihil recusandae minima natus aliquam officiis facere,
          quisquam rerum odit deserunt ipsum corrupti tenetur. Natus animi
          architecto quam non consequatur temporibus eum sit culpa nihil
          similique harum sunt quae magnam doloribus fugiat iure, veniam
          quisquam. Aspernatur minus nihil ex placeat, officia blanditiis. Odit
          minima deserunt dolorem fugit, quod consectetur unde aperiam voluptas
          tempora nulla facilis. Laudantium natus libero dolore. Delectus
          exercitationem officiis repudiandae fuga doloribus dolor porro commodi
          dolorem, eos consequatur nulla obcaecati enim provident harum, nemo
          nisi iure eum nam voluptatem sed, excepturi autem quam! Autem,
          aliquid!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          error, itaque libero ullam laboriosam rem? Possimus libero explicabo
          eveniet recusandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          delectus, quaerat aspernatur eius dicta eligendi molestiae fugit omnis
          error corporis nostrum quidem cum quibusdam officiis quos consequatur
          totam enim atque et minus amet fugiat doloribus ullam. Excepturi modi,
          ex magnam, cumque saepe harum suscipit est sequi quidem asperiores
          tempore eum provident, earum vel accusamus laboriosam necessitatibus
          odio? Veniam adipisci quos odio et odit distinctio tempore, nemo, quas
          illo facilis est molestiae alias minima. Aperiam necessitatibus
          placeat, molestiae delectus suscipit excepturi aliquid ipsa, pariatur
          vero porro velit. Ex debitis modi eligendi. Odit sapiente dicta nemo,
          laborum, fuga perferendis amet illo ducimus consectetur quisquam
          distinctio veniam accusantium temporibus non! In dolores nesciunt
          incidunt facilis at rerum illum sit? Voluptate ullam, quis, doloremque
          quibusdam eligendi debitis enim alias esse nulla molestiae error fugit
          perspiciatis ut atque. Iusto expedita possimus molestiae. Asperiores,
          molestiae molestias repellat repudiandae quam fugiat! Repellendus
          praesentium, cupiditate officia cum nisi laboriosam nihil quia
          repellat debitis sed a accusantium voluptate deleniti recusandae
          assumenda eveniet ratione tempore consequuntur fugit, enim aspernatur
          veniam dolor est magni! Esse hic nulla odio incidunt modi nam
          recusandae sed ducimus consectetur iusto, et, laudantium repudiandae
          sequi ab voluptates accusamus odit rerum impedit a animi eaque, eum
          dolorum.
        </p>
      </div>
    </section>
  );
};

export default PostInfo;

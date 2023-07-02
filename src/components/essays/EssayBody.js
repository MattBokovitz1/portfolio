import essays from "../../data/essays";
import {
  EssaySection2,
  EssaySubtitle,
  EssayBody,
} from "../../styles/StyledComponents";

const EssayTitleAndBody = () => {
  return (
    <div>
      {essays.map((essay) => {
        return (
          <EssaySection2 key={essay.id}>
            <EssaySubtitle>{essay.title}</EssaySubtitle>
            <EssayBody>{essay.body}</EssayBody>
            {essay.image && <img src={essay.image} alt={essay.title} />}
          </EssaySection2>
        );
      })}
    </div>
  );
};

export default EssayTitleAndBody;

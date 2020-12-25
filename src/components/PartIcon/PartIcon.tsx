import { resourceImage } from "../../images/resources";

interface PartIconProps {
  part: keyof typeof resourceImage;
}

export const PartIcon: React.FC<PartIconProps> = ({ part }) => {
  return (
    <img
      draggable={false}
      height="100%"
      width="100%"
      src={resourceImage[part]}
      alt={`${part} icon`}
    />
  );
};
